$(function () {
  $('body').addClass('loaded');

  $('.hero__scroll').click(function () {
    $('html, body').animate({
      scrollTop: $('#content').offset().top
    }, 500);
  });
});
