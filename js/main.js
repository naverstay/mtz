var body_var,
  browserWindow,
  global_window_Height,
  baseM = 0.0714286666666667,
  baseWindowWidth = 1920,
  baseRate = .47,
  baseFZ = 1.4,
  minFZ = 1.2,
  maxFZ = 1.4,
  resizeTimer;

$(function ($) {
  browserWindow = $(window);
  body_var = $('body');

  initPlaceholder();

  all_dialog_close();

});

$(window).on('resize', function () {

  windowRisize();

}).on('load', function () {

  windowRisize();

});

function initPlaceholder() {

  var inp = $('.inpPlaceholder');

  var e = 'blur'.split(',');
  for (var i in e) inp.on(e[i], function () {
    checkPlaceholder(this);
  });

}

function checkPlaceholder(inp) {
  var target = $(inp);

  target.toggleClass('is_empty', target.val().length > 0);
}

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

    body_var.css('font-size', Math.max(minFZ, Math.min(maxFZ, newFontSize * baseFZ)) + 'em');
  } else {
    body_var.css('font-size', baseFZ + 'em');
  }

  $('.slick-initialized').each(function (ind) {
    $(this).slick('setPosition');
  });

  $('.swiper-container').each(function (ind) {
    //this.swiper.update();
    //$(this).slick('setPosition');
  });

  body_var.css('opacity', 1);

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

function initValidation() {
  $('.validateMe').each(function (ind) {
    var f = $(this);

    f.validationEngine({
      //binded: false,
      scroll: false,
      showPrompts: true,
      showArrow: false,
      addSuccessCssClassToField: 'success',
      addFailureCssClassToField: 'error',
      parentFieldClass: '.formCell',
      // parentFormClass: '.order_block',
      promptPosition: "centerRight",
      //doNotShowAllErrosOnSubmit: true,
      //focusFirstField          : false,
      autoHidePrompt: false,
      autoHideDelay: 3000,
      autoPositionUpdate: false,
      prettySelect: true,
      //useSuffix                : "_VE_field",
      addPromptClass: 'relative_mode one_msg',
      showOneMessage: false
    });
  });
}
