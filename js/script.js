
$(document).ready(function(){
    function mobileNav() {
      var x = document.getElementById("mobileNavMenus");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
    var owl = $("#testimonials-slider");
    owl.owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('.prev-button').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.next-button').click(function() {
        owl.trigger('prev.owl.carousel');
    });
});
