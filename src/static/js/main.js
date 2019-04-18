//main.js 
$(document).ready(function(){

    ////////////////////////////////////////////////////

//     function randomInteger(min, max) {
//         var rand = min + Math.random() * (max - min)
//         rand = Math.round(rand);
//         return rand;
//     }
// //////////////////////////////////////////////////////
//     function makeCounter(num){
//         var count = 0;
//         return function(){
//            while ( count < num ){
//                return count++
//            }
//            count = 0
//            return 1
//         };    
//     }
//     var counter = makeCounter(3);
// /////////////////////////////////////////////////////////////

//     function changeWallpapers() {
//         var walls = [
//             "background1.png",
//             "background2.png",
//             "background3.png"
//         ];

//         $(".features")
//         .css({"background":"url('http://localhost:3000/static/img/" + walls[counter()] + "')no-repeat"})
//         .animate({ 'background-size':'120%' }, 0)
//         .animate({ 'background-size':'130%' }, 12000, function(){})
//     }
//      changeWallpapers();
//     var intervalCsaHead = setInterval(changeWallpapers, 12000);



    ///////////////////////////////////////////////////////////

    $('.multiple-items').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 1000,
        infinite: true,
        dots: false,
        //slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        fade: true
    });
    
});