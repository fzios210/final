// Empty JS for your own code to be here

/*!
 ************************************************************
 * 回應再回應
 ************************************************************
 * JavaScript
 * 2015
 */

var topic_re_li = document.getElementById("comment-list").getElementsByClassName("comment-reply-btn");
for (i = 0; i <= topic_re_li.length - 1; i++) {
    topic_re_li[i].addEventListener("click", function () {
        TopicRe(this);
    }, false);
}

function TopicRe(e) {
    //如果一直修改不成功 清除電腦所有瀏覽紀錄
    var topic_re_li_id = e.parentElement.parentElement.dataset.reid;
    var id = document.getElementById("decide").value;
    e.parentElement.getElementsByClassName("topic-comments-formbox")[0].innerHTML =
        '<form method="post" action="" > ' +
        '<input type="hidden" name="decide" value="' + id + '">' +
        '<div class="topic-respond-info">' +
        '<span>' +
        '<input type="text" name="std_id" class="form-control" placeholder="單位名稱" maxlength="9" required/>' +
        '</span>' +
        '<span>' +
        '<input type="text" name="name" class="form-control" placeholder="姓名" required/>' +
        '</span>' +
        '</div>' +
        '<textarea class="form-control" name="text" rows="4" placeholder="請輸入回應文字，按Enter或Shift+Enter，可增加高度。" required></textarea>' +
        '<input class="btn" type="submit" value="回應">' +
        '<input type="text" hidden name="comment_id"  value="' + topic_re_li_id + '">' +
        '</form>';

    //套用 autosize 函式 高度
    //autosize(e.parentElement.getElementsByClassName("topic-comments-formbox")[0].querySelector('textarea'));
}