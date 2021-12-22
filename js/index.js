$(document).ready(function () {
    $('.slider-1').slick({
        infinite:false,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        autoplaySpeed: 3000,
     // dots: false,
     // fade: false,
     // adaptiveHeight: true,
     
    //respomsive slider
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]  ,
// respomdive ends here........

        prevArrow: '<div class="slick-prev slick-arrow"><img class="rightarr" src="pictures/section2-leftarr.png" alt="arrow"></div>',
        nextArrow: '<div class="slick-next slick-arrow"><img class="rightarr" src="pictures/section2-rightarr.png" alt="arrow"></div>'
    });
});

$(document).ready(function () {
    $('.slider-2').slick({
        infinite:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 3000,
     // dots: false,
     // fade: false,
     // adaptiveHeight: true,

      //respomsive slider
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]  ,
// respomdive ends here........


        prevArrow: '<div class="slick-prev slick-arrow" style="display:none"><img class="rightarr" src="pictures/section></div>',
        nextArrow: '<div class="slick-next slick-arrow"><img class="rightarr" src="pictures/section2-rightarr.png" alt="arrow"></div>'
 });
});

$(document).ready(function () {
    $('.slider-3').slick({
        infinite:true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 3000,
     // dots: false,
     // fade: false,
     // adaptiveHeight: true,

 //respomsive slider
 responsive: [
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]  ,
// respomdive ends here........


     prevArrow: '<div class="slick-prev slick-arrow"><img class="rightarr" src="pictures/section2-leftarr.png" alt="arrow"></div>',
     nextArrow: '<div class="slick-next slick-arrow"><img class="rightarr" src="pictures/section2-rightarr.png" alt="arrow"></div>'
 });
});

// for navbar icon in small screens
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-right") {
      x.className += " responsive";
    } else {
      x.className = "navbar-right";
    }
  }