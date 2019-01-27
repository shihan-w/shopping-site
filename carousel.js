$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true,
            startPosition:0,
        }
    );
    $("#menu").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});
