var body_var,
  browserWindow,
  global_window_Height,
  baseM = 0.0714286666666667,
  baseWindowWidth = 1920,
  baseRate = .47,
  baseFZ = 1.4,
  maxFZ = 1.5,
  resizeTimer;

$(function ($) {
  browserWindow = $(window);
  body_var = $('body');


  all_dialog_close();

});

$(window).on('resize', function () {

  windowRisize();

}).on('load', function () {

  windowRisize();

});

function windowRisize() {

  setTimeout(function () {
    resizeMe(browserWindow.height(), browserWindow.width());

    //var newFZ = browserWindow.width() / baseWindowWidth * baseFZ;

    //body_var.css('font-size', (newFZ > maxFZ ? maxFZ : newFZ) + 'em');
  }, 0);

}

function resizeMe(displayHeight, displayWidth) {
  //Standard dimensions, for which the body font size is correct
  var preferredHeight = 910;
  var preferredWidth = 1920;

  if (displayHeight < preferredHeight || displayWidth < preferredWidth) {
    var heightPercentage = displayHeight / preferredHeight;
    var widthPercentage = displayWidth / preferredWidth;
    var percentage = Math.min(heightPercentage, widthPercentage);
    var newFontSize = percentage.toFixed(2);

    body_var.css('font-size', (newFontSize * baseFZ) + 'em');
  } else {
    body_var.css('font-size', baseFZ + 'em');
  }
}

function all_dialog_close() {
  body_var.on('click', '.ui-widget-overlay', all_dialog_close_gl);
}

function all_dialog_close_gl() {
  $(".ui-dialog-content").each(function () {
    var $this = $(this);
    if (!$this.parent().hasClass('always_open')) {
      $this.dialog("close");
    }
  });
}
