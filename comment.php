<?php

header("Content-Type:text/html;charset=utf-8");
date_default_timezone_set('Asia/Taipei');

session_start();

$name = "root";

$pwd = "";

$db_name = "forum_db";

$conn = new mysqli('localhost', $name, $pwd, $db_name);
$conn->set_charset("utf8");

// 檢測連接
if ($conn->connect_error) {
    die('連接失敗' . $conn->connect_error);
}


$guest_ip = $_SERVER['REMOTE_ADDR'];
// echo $guest_ip;
// echo "今天是 " . date("YmdHis") . "<br>";

// $sql ="SELECT COUNT(*) FROM user";

// $result = $conn->query($sql);
// if($result->num_rows > 0){
//     while($row = $result->fetch_assoc()){
//         echo "count:" . $row["COUNT(*)"] ."<br>";
//     }
// }else{
//     echo "0 結果";
// }

//判斷有無SESSION值，若沒有就設定一個SESSION並給予預設值
if (!isset($_SESSION['decide'])) {
    $_SESSION['decide'] = 0;
}

//判斷有無SESSION值，若沒有就設定一個SESSION並給予預設值
if (isset($_POST['decide'])) {
    //若尚未處理過，在送出表單時，SESSION值會為0，因此在判斷時(0=0)會成立，並繼續處理表單資料
    if ($_SESSION['decide'] == $_POST['decide']) {
        //正常透過表單按鈕送出資料，則將SESSION的值+1，並處理表單資料
        $_SESSION['decide'] += 1;

        if (!isset($_REQUEST['comment_id'])) {
            // 回復文章
            $stmt = $conn->prepare("INSERT INTO comment (stu_id,std_name,comment_id,content,ip) VALUES (?,?,?,?,?)");
            $stmt->bind_param("sssss", $stu_id, $std_name, $comment_id, $content, $ip);

            //設置參數並執行
            $stu_id = $_REQUEST["std_id"];
            $std_name = $_REQUEST["name"];
            $comment_id = "CT" . date("YmdHis"); 
            $content = $_REQUEST["text"];
            $ip = $guest_ip;
            $stmt->execute();
            $stmt->close();

        } else {
            // 回復再回復
            // echo "回復再回復";

            $stmt = $conn->prepare("INSERT INTO comment (stu_id,std_name,comment_id,comment2_id,content,ip) VALUES (?,?,?,?,?,?)");
            $stmt->bind_param("ssssss", $stu_id,  $std_name, $comment_id, $comment2_id, $content, $ip);
            //設置參數並執行
            $stu_id = $_REQUEST["std_id"];
            $std_name = $_REQUEST["name"];
            $comment_id = $_REQUEST["comment_id"];
            $comment2_id = "CTS" . date("YmdHis");
            $content = $_REQUEST["text"];
            $ip = $guest_ip;
            $stmt->execute();
            $stmt->close();
        }
    } 
    else {
         //echo '???????';
        // $link = @mysql_connect("localhost","root","mypassword")
        //     or die("9876".mysql_connect_error());
        // echo "1234";
        // mysql_close($link);
    }
}
// 資料庫&關閉
// $stmt -> close();
// $conn -> close();

// echo "連接成功";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>討論區</title>
    <link rel="stylesheet" href="css/bootstrap-4.3.1.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <form id="paper" method="post" action="">
        <input type="hidden" id="decide" name="decide" value="<?php echo $_SESSION['decide']; ?>">


        <div class="tw-respond-info">

            <div class="input-group">
                <span class="input-group-text">單位名稱：</span>
                <input type="text" class="form-control" placeholder="例：亞東科技大學" maxlength="10" required="" name="std_id">
            </div>
                
            <div class="input-group">
                <span class="input-group-text">姓名：</span>
                <input type="text" class="form-control" placeholder="請輸入姓名" required="" name="name" maxlength="5">
            </div>

            <div class="textbox-group">
                <textarea class="form-control textbox" name="text" rows="4" placeholder="請輸入留言" required=""></textarea>
                <input class="btn" type="submit" value="送出" id="topic-post" name="click">
            </div>

        </div>
    </form>

                <h2 style="padding: 0 15px; text-align:center;">
                    <?php
                    $sql = "SELECT COUNT(*) FROM comment";
                    $result = $conn->query($sql);
                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo $row["COUNT(*)"];
                        }
                    } else {
                        echo "0 結果";
                    }
                    ?>
                    則回應</h2>

    <?php
            echo "<ul id='comment-list' class='comment-list'>";
            $sql = "SELECT * FROM comment WHERE comment2_id ='' ";
            $result = $conn->query($sql);
            // echo "共有：".$result->num_rows."行；共有：".$result->field_count."列。";

            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $stu_id = $row["stu_id"];
                    $name = $row["std_name"];
                    $comment_id = $row["comment_id"];
                    $time = $row["create_at"];
                    $content = $row["content"];
                    $ip = $row["ip"];
                    $ft_name = mb_substr($name, 0, 1, "utf8");  /* 姓名第一個字 */
                    echo "
                    <li data-reid='$comment_id' data-stdid='$stu_id'>
                        <div class='comment-avatar'><span>$ft_name</span></div>
                        <div class='comment-right'>
                            <div class='comment-r-info'>                                
                                <span class='comment-reply-id'>$stu_id</span>
                                <span class='comment-reply-author'>$name</span>
                                <span class='comment-reply-time'>$time</span>
                            </div>
                            <div class='comment-r-content'>
                                <p>
                                    $content    
                                </p>
                            </div>
                            <a href='javascript: void(0)' class='comment-reply-btn'>回覆</a>
                            <span class='comment-reply-ip' >IP
                                Address：$ip</span>
                                <div class='topic-comments-formbox'>
                                </div>
                                ";

                    $sql = "SELECT * FROM comment WHERE comment_id = '$comment_id' and comment2_id !='' ";
                    $result2 = $conn->query($sql);
                    if ($result2->num_rows > 0) {
                        while ($row = $result2->fetch_assoc()) {
                            $stu_id = $row["stu_id"];
                            $name = $row["std_name"];
                            $create_at = $row["create_at"];
                            $content = $row["content"];
                            $ft_name = mb_substr($name, 0, 1, "utf8"); /* 姓名第一個字 */
                            echo " <div class='tw-comments-2' data-stdid='$stu_id'>
                                            <ul class='comment-list'>
                                                <li data-level='4' >
                                                    <div class='comment-avatar'><span>$ft_name</span></div>
                                                    <div class='comment-right'>
                                                        <div class='comment-r-info'>
                                                            <span class='comment-reply-id'>$stu_id</span>
                                                            <span class='comment-reply-author'>$name</span>
                                                            <span class='comment-reply-time'>$create_at</span>
                                                        </div>
                                                        <div class='comment-r-content'>
                                                            <p>$content
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>";
                        }
                    } else {
                        // echo "0 結果";
                    }
                }
                echo " </div></li></ul>";
            } else {
                 //echo "0 結果";
            }
            ?>
    
    <script src="js/jquery-3.5.1.min.js"></script>
    <script src="js/bootstrap-4.3.1.js"></script>
    <script src="js/scripts.js"></script>
</body>
</html>