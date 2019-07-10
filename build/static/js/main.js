//main.js 
$(document).ready(function(){

    $('.multiple-items').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        infinite: true,
        dots: false,
        //slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        fade: true
    });

    $('.multiple-items2').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        infinite: true,
        dots: false,
        //slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        cssEase: 'linear',
        fade: true,
        appendArrows: ('.arrows')
    });


    $('.modalCallback').click(function(){
        console.log( $('#modal')[0].style.display = '' )
    })
    $('#closeModal').click(function(){
        console.log( $('#modal')[0].style.display = 'none' )
    })
});