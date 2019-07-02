$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});


$(window).scroll(function(){
  var increment = window.scrollY*0.1;
  $("#cover").css("background-position-y",50-increment+"%");
});
