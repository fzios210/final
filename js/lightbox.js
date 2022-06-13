/*---------0--------------*/
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

/*---------1--------------*/

var slideIndex = 1;
showSlides1(slideIndex);

function plusSlides1(n) {
    showSlides1(slideIndex += n);
}

function currentSlide1(n) {
    showSlides1(slideIndex = n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
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

/*----------2------------*/

var slideIndex = 1;
showSlides2(slideIndex);

function plusSlides2(n) {
    showSlides2(slideIndex += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex = n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("demo2");
    /*var captionText = document.getElementById("caption1");*/
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
/*----------3------------*/

var slideIndex = 1;
showSlides3(slideIndex);

function plusSlides3(n) {
    showSlides3(slideIndex += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex = n);
}

function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("demo3");
    /*var captionText = document.getElementById("caption1");*/
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
/*------------4----------*/

var slideIndex = 1;
showSlides4(slideIndex);

function plusSlides4(n) {
    showSlides4(slideIndex += n);
}

function currentSlide4(n) {
    showSlides4(slideIndex = n);
}

function showSlides4(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides4");
    var dots = document.getElementsByClassName("demo4");
    /*var captionText = document.getElementById("caption1");*/
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
/*----------5------------*/

var slideIndex = 1;
showSlides5(slideIndex);

function plusSlides5(n) {
    showSlides5(slideIndex += n);
}

function currentSlide5(n) {
    showSlides5(slideIndex = n);
}

function showSlides5(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides5");
    var dots = document.getElementsByClassName("demo5");
    /*var captionText = document.getElementById("caption1");*/
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
/*---------6-------------*/

var slideIndex = 1;
showSlides6(slideIndex);

function plusSlides6(n) {
    showSlides6(slideIndex += n);
}

function currentSlide6(n) {
    showSlides6(slideIndex = n);
}

function showSlides6(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides6");
    var dots = document.getElementsByClassName("demo6");
    /*var captionText = document.getElementById("caption1");*/
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