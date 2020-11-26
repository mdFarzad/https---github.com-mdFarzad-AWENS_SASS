'use strict'
$(document).ready(function () {
    $(document).ready(function () {
        $('.slider').slider({
            interval: 15000
        });
    });

});

$(document).ready(function () {
    $('.slick-slider').slick({
        dots: false,
        infinite: false,
        pauseOnHover: false,
        adaptiveHeight: false,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000

    });



    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        arrows: true,
        focusOnSelect: true
    });

    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });


    $('.single-item').slick({
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false
    });
    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.single-item').slick('slickGoTo', slideno - 1);
        $('.active').removeClass('active');

        $(this).addClass('active');
    });

});

function modalDisplay() {
    let modal = document.getElementById("myModal");
    const imageProperty = document.querySelectorAll(".slidingImage");
    let modalImg = document.getElementById("img01");
    let span = document.getElementsByClassName("close");

    let openModal = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        //captionText.innerHTML = this.alt;
    };
    const closeModal = function () {
        modal.style.display = "none";
    };


    for (let i = 0; i < imageProperty.length; i++)
        imageProperty[i].addEventListener('click', openModal);


    // When the user clicks on <span> (x), close the modal
    //span.addEventListener('click', closeModal);
    modal.addEventListener('click', closeModal);
    span.onclick = closeModal;
    //modal.onclick = closeModal;
}
