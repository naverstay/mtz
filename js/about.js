$(function ($) {

  $(window).stellar();

  initHistory();

});

function initHistory() {

  body_var.on('touchmove', function (e) {
    goDotA();
  });

  $(window).on('scroll', function () {

    goDotA();

  });

}

function goDotA() {
  var historyBlock = $('.historyBlock'),
    historyDot = $('.historyDot'),
    historyYearDot = $('.historyYearDot'),
    targetPos = browserWindow.height() / 3 + body_var.scrollTop();

  historyYearDot.each(function () {
    var dot = $(this);

    if (!dot.hasClass('_start')) {
      var is_passed = targetPos > dot.offset().top;

      if (is_passed) {
        dot.addClass('_hover').parent().addClass('_prev_full').removeClass('_light');
      } else {
        dot.removeClass('_hover').parent().removeClass('_prev_full').addClass('_light');
      }
    }

  });

  historyDot.css('height', Math.min(historyBlock.outerHeight(), targetPos - historyDot.offset().top));

}
