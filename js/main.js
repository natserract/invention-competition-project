$(document).ready(function() {
  //navigation
  var nav = $("#nav");
  $(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
      nav.addClass("nav-shrink");
    } else {
      nav.removeClass("nav-shrink");
    }
  });

  var navToggle = $("#navToggle");
  $(navToggle).click(function(e) {
    e.preventDefault();
    $('.nav-collapse').toggleClass("nav-responsive");
  });

  //Smooth scroll
  var trigger = $('a.scroll-trigger[href^="#"]');
  trigger.on("click", function(e) {
    var target = $(this).attr('href');
    if (target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: ($(target).offset().top - 70)
      }, 800);
    }
  });

  //Slider
  $('.destination-slider').flexslider({
    animation: "slide",
    slideshow: true,
    pauseOnHover: true
  });

  $('.whatson-slide').flexslider({
    animation: "slide",
    slideshow: true,
    pauseOnHover: true
  });

  /* Modal */
  var showModal = $('.show-modal');
  var closeModal = $('.modal-close');
  //Show modal video
  $('.play-video').on('click', function(){
    $('#modalVideo').css('display', 'block');
  });

  //Show modal explore
  $('.btn-explore').on('click', function(){
    $('#modalExplore').css('display', 'block');
  });

  //whatson
  $(showModal).on('click', function(){
    $('#modalExplore').css('display', 'block');
  });

  $(closeModal).on('click',function(e){
    e.preventDefault();
    $('.modal').css('display', 'none');
  });


});
