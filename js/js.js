

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
//window.onscroll = function() {scrollFunction()};

$(document).ready(function ()
{
  if ( $(window).width() <992) {
    $("#head").addClass('d-none');
    $("#logo").removeClass('d-none');
    $("header").addClass("header-h");
  }
  $(window).scroll(function(){
    if ($(window).width()>992) {
      if (document.documentElement.scrollTop > 100 || document.documentElement.scrollTop > 100   ) {
        $("#head").addClass('d-none');
        $("#logo").removeClass('d-none');
        $("#icons").removeClass('d-none');
        $("header").addClass("header-h");
        
      } else
      {
        $("#head").removeClass('d-none');
        $("#logo").addClass('d-none');
        $("#icons").addClass('d-none');
        $("header").removeClass("header-h");
  
      }
    }
    else
    {
      $("#logo").removeClass('d-none');
      $("#head").addClass('d-none');
      $("#icons").addClass('d-none');
      $("header").addClass("header-h");
    }
  });
});






$(".landing-page .slideshow").slick({
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: true,
    autoplaySpeed: 4000
});
let showBL = 5
let showNC = 3
 if (window.innerWidth>1600) {
   showBL = 5
   showNC = 2
}
else if (window.innerWidth>1400) {
   showBL = 4
   showNC = 2
   
}
else if (window.innerWidth>992) {
   showBL = 3
   showNC = 2
   
   
}
else if (window.innerWidth>600) {
   showBL = 3
   showNC = 1
}
 else if (window.innerWidth>200)
 {
   showBL = 1
   showNC = 1
     
}


let dot = true;
if (window.innerWidth<992) {
  dot=false
}
$('.best-seller .slick-carousel').slick({
    infinite: true,
    slidesToShow: showBL, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: false // Adds the dots on the bottom
});
$('.nos-conseils .slick-carousel').slick({
    infinite: true,
    slidesToShow: showNC, // Shows a three slides at a time
    slidesToScroll: showNC, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: dot // Adds the dots on the bottom
});
   

