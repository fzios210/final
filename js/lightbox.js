
function open1(dir) {
    var myModal = document.getElementById("mymodal");
    myModal.style.display = "block";
    myModal.innerHTML =
        '<span class="close-light cursor" onclick="closeModal(\'mymodal\')">&times;</span>' +
        '<div class="modal-content1">' +
        '<img src="./img/course06/' + dir + '/01.jpg" class="windows-mySlides mySlides" style="display: block;">' +
        '<img src="./img/course06/' + dir + '/02.jpg" class="windows-mySlides mySlides">' +
        '<img src="./img/course06/' + dir + '/03.jpg" class="windows-mySlides mySlides">' +
        '<img src="./img/course06/' + dir + '/04.jpg" class="windows-mySlides mySlides">' +
        '<img src="./img/course06/' + dir + '/05.jpg" class="windows-mySlides mySlides">' +
        '<img src="./img/course06/' + dir + '/06.jpg" class="windows-mySlides mySlides">' +
        '<embed src="./img/course06/' + dir + '/' + dir + '.pdf" class="windows-mySlides mySlides" style="height: 600px;">' +
        '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>' +
        '<a class="next" onclick="plusSlides(1)">&#10095;</a>' +
        '<div class="column">' +
        '<img class="demo demo1 cursor" src="./img/course06/' + dir + '/01.jpg" style="width:100px"onclick="currentSlide(1)">' +
        '<img class="demo demo1 cursor" src="./img/course06/' + dir + '/02.jpg" style="width:100px"onclick="currentSlide(2)">' +
        '<img class="demo demo1 cursor" src="./img/course06/' + dir + '/03.jpg" style="width:100px"onclick="currentSlide(3)">' +
        '<img class="demo demo1 cursor" src="./img/course06/' + dir + '/04.jpg" style="width:100px"onclick="currentSlide(4)">' +
        '<img class="demo demo1 cursor" src="./img/course06/' + dir + '/05.jpg" style="width:100px"onclick="currentSlide(5)">' +
        '<img class="demo demo1 cursor" src="./img/course06/' + dir + '/06.jpg" style="width:100px"onclick="currentSlide(6)">' +
        '<img class="demo demo1 cursor" src="./img/course06/' + dir + '/07.jpg" style="width:100px"onclick="currentSlide(7)">' +
        '</div></div>';
}

function open2(dir) {
    var myModal = document.getElementById("mymodal");
    myModal.style.display = "block";
    myModal.innerHTML =
        '<span class="close-light cursor" onclick="closeModal(\'mymodal\')">&times;</span>' +
        '<div class="modal-content1">' +
        '<embed src="./img/course01/' + dir + '/' + dir + '.pdf" class="windows-mySlides mySlides" style="display: block;height: 600px;">' +
        '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>' +
        '<a class="next" onclick="plusSlides(1)">&#10095;</a>' +
        '<div class="column">' +
        '<img class="demo demo1 cursor" src="./img/course01/' + dir + '/01.jpg" style="width:100px"onclick="currentSlide(1)">' +
        '</div></div>';
}


/*---------0--------------*/
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo1");
    /*var captionText = document.getElementById("caption");*/
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    /*captionText.innerHTML = dots[slideIndex - 1].alt;*/
}
