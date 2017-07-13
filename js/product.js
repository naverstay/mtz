var tabSlider, activeTabSlider, productOptionSlider, restoring = false;

$(function ($) {

  body_var
    .delegate('.tabLinkClone', 'click', function () {
      var tab_target = $(this).attr('href');

      var link = $('#product_switcher a').filter(function () {
        return $(this).attr('href') == tab_target;
      }).first();

      if (tab_target.length && link.length) {
        link.click();
        tabSlider.slick('slickGoTo', 1 * $(this).parent().attr('data-slick-index'));
      } else {
        if (/clone_/ig.test(tab_target)) {
          tab_target = tab_target.replace(/clone_/, 'product_tab_');

          link = $('#product_switcher a').filter(function () {
            return $(this).attr('href') == tab_target;
          }).first();

          link.click();

          tabSlider.slick('slickGoTo', 1 * $(this).parent().attr('data-slick-index'));
        }
      }

      return false;
    })
    .delegate('.openQuantityBtn', 'click', function () {

      if ($('.quantityBlock').hasClass('_opened')) {
        var count = $('.optionCounter');

        count.text(parseInt(count.text()) + 1 || 1);

        $('.optionsPanel').toggleClass('_opened');

        $('.quantityBlock').removeClass('_opened');
      } else {
        $('.quantityBlock').addClass('_opened');
      }

      return false;
    })
    .delegate('.removeOrder', 'click', function () {

      $(this).closest('li').remove();

      return false;
    })
    .delegate('.toggleOptionsPanel', 'click', function () {

      $('.optionsPanel').toggleClass('_opened');

      return false;
    })
    .delegate('.orderCollapseBtn', 'click', function () {
      var firedEl = $(this);

      firedEl.closest('.productOrderUnit').find('.orderInfo').slideToggle(500);

      firedEl.closest('.productOrderUnit').find('.product_order_collapse').toggle();

      return false;
    })
    .delegate('.valPlus', 'click', function () {
      var valCell = $(this).closest('.valCell'),
        inp = valCell.find('input'),
        val = parseInt(inp.val().replace(/\D/g, '')),
        min_val = 1 * inp.attr('data-min'),
        max_val = 1 * inp.attr('data-max'),
        new_val = val + (1 * inp.attr('data-step'));

      inp.val(new_val <= max_val ? (new_val >= min_val ? new_val : min_val) : max_val).focus();

      return false;
    })
    .delegate('.valMinus', 'click', function () {
      var valCell = $(this).closest('.valCell'),
        inp = valCell.find('input'),
        val = parseInt(inp.val().replace(/\D/g, '')),
        min_val = 1 * inp.attr('data-min'),
        max_val = 1 * inp.attr('data-max'),
        new_val = val - (1 * inp.attr('data-step'));

      inp.val(new_val >= min_val ? (new_val <= max_val ? new_val : max_val) : min_val).focus();

      return false;
    })
    .click(function (e) {
      if ($(e.target).parents().filter('.quantityBlockHolder').length != 1 && !$(e.target).hasClass('.quantityBlockHolder')) {
        $('.quantityBlock').removeClass('_opened');
      }
    });

});

$(window).on('load', function () {

  initTabs();

  initMask();

  initValidation();

  initScroll();

  $('.productSection').addClass('_loaded');
});

function initMask(el) {

  if (el == void 0) {
    el = $("input");
  }

  el.each(function (i, el) {
    var inp = $(el), param = {};

    if (inp.attr('data-inputmask') != void 0) {
      inp.inputmask();
    }

    if (inp.attr('data-inputmask-email') != void 0) {
      param.regex = inp.attr('data-inputmask-email');
      param.placeholder = '_';

      inp.inputmask('Regex', param);
    }

    if (inp.attr('data-inputmask-regex') != void 0) {
      inp.inputmask('Regex', param);
    }

    if (inp.attr('data-inputmask-custom') != void 0) {
      inp.inputmask(JSON.parse('{' + inp.attr('data-inputmask-custom').replace(/'/g, '"') + '}'));
    }

  });
}

function initScroll() {
  $('.mCSB').each(function (ind) {
    $(this).mCustomScrollbar({
      documentTouchScroll: true,
      theme: "dark",
      scrollEasing: "linear",
      mouseWheel: {preventDefault: true}
    });
  });
}

function prepareSlides(cb) {
  var optSlider = $('.productOptionSlider'), tabSlider = $('.tabSlider'), activeTabSlider = $('.activeTabSlider');

  optSlider.find('.tab_slide').each(function (ind) {
    optSlider.append($(this).clone().attr('data-clone', (ind)));
  });

  activeTabSlider.find('.tab_item').each(function (ind) {
    activeTabSlider.append($(this).clone().attr('data-clone', (ind)));
  });

  tabSlider.find('.tab_item').each(function (ind) {
    var clone = $(this).clone().attr('data-clone', (ind ));

    clone.find('a').attr('href', '#clone_' + (ind + 1));

    tabSlider.append(clone);
  });

  cb();
}

function initTabs() {
  var start_tab = 0;

  prepareSlides(function () {

    productOptionSlider = $('.productOptionSlider')
      .on('init', function (event, slick, currentSlide, nextSlide) {

      })
      .slick({
        dots: false,
        mobileFirst: true,
        infinite: true,
        arrows: false,
        swipe: false,
        accessibility: false,
        autoplay: false,
        autoplaySpeed: 3000,
        //centerMode: true,
        //variableWidth: true,
        speed: 600,
        zIndex: 1,
        initialSlide: start_tab,
        slide: '.productOptionSlider .tab_slide',
        //prevArrow: '.manufactureSlider .slide_prev',
        //nextArrow: '.manufactureSlider .slide_next',

        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 10
      });

    activeTabSlider = $('.activeTabSlider')
      .on('init', function (event, slick, currentSlide, nextSlide) {
        var slides = $(slick.$slides);

        slides.removeClass('_active').eq(start_tab).addClass('_active');

      })
      .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var slides = $(slick.$slides);

        if (!restoring) {
          setTimeout(function () {
            var next_slide = slides.removeClass('_active').eq(nextSlide).addClass('_active');

            slides.filter(function () {
              return $(this).attr('data-slick-index') == next_slide.attr('data-clone');
            }).addClass('_active');

          }, 30);
        }
      })
      .slick({
        dots: false,
        mobileFirst: true,
        infinite: true,
        arrows: false,
        swipe: false,
        accessibility: false,
        autoplay: false,
        autoplaySpeed: 3000,
        //centerMode: true,
        //variableWidth: true,
        speed: 600,
        zIndex: 1,
        initialSlide: start_tab,
        slide: '.activeTabSlider .tab_item',

        //prevArrow: '.manufactureSlider .slide_prev',
        //nextArrow: '.manufactureSlider .slide_next',

        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 10
      });

    tabSlider = $('.tabSlider')
      .on('init', function (event, slick, currentSlide, nextSlide) {

        var tabBlock = $('.tabBlock'), tabs = tabBlock.tabs({
          active: 0,
          tabContext: tabBlock.data('tab-context'),
          activate: function (e, u) {

            tab_animation(u.newPanel);
          },
          create: function (e, u) {

            tab_animation(u.panel);
          }
        });

        hideActiveSlide(slick, start_tab);

      })
      .on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        if (restoring) {

        } else {
          activeTabSlider.slick('slickGoTo', nextSlide);
          productOptionSlider.slick('slickGoTo', nextSlide);
        }

        hideActiveSlide(slick, nextSlide);

      })
      .on('afterChange', function (event, slick, currentSlide, nextSlide) {

        var cur_slide = $(slick.$slides[currentSlide]), clone_slide = cur_slide.attr('data-clone');

        if (clone_slide) {

          setTimeout(function () {
            restoring = true;

            activeTabSlider.slick('slickGoTo', clone_slide * 1, true);
            productOptionSlider.slick('slickGoTo', clone_slide * 1, true);

            tabSlider.find('.slick-slide').each(function (ind) {
              if ($(this).attr('data-clone') == '0') {
                $(this).addClass('_temp_hidden');
              }
            });

            tabSlider.slick('slickGoTo', clone_slide * 1, true);
          }, 0);
        }

      })
      .slick({
        variableWidth: true,
        dots: false,
        mobileFirst: true,
        infinite: true,
        arrows: false,
        swipe: false,
        accessibility: false,
        autoplay: false,
        autoplaySpeed: 3000,
        //centerMode: true,
        //variableWidth: true,
        speed: 600,
        zIndex: 1,
        initialSlide: start_tab,
        //asNavFor: '.activeTabSlider, .productOptionSlider',
        //centerPadding: '0',
        slide: '.tabSlider .tab_item',
        //prevArrow: '.manufactureSlider .slide_prev',
        //nextArrow: '.manufactureSlider .slide_next',

        //slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 10
      });

  });

}

function hideActiveSlide(sld, ind) {

  setTimeout(function () {

    $('.tabSlider .slick-current').nextAll('.slick-slide').each(function (ind) {
      $(this).css('opacity', ind > 2 ? 0 : 1);
    });

    $(sld.$slider).css('margin-left', (-$(sld.$slides).filter(function () {
        return $(this).attr('data-slick-index') == ind;
      }).outerWidth()) + 'px');

    restoring = false;

    $('._temp_hidden').removeClass('_temp_hidden');
  }, 0);
}

function tab_animation(panel) {
  var p = $(panel), target = p.index(), offset = 0, slider = $('.tabSlider');

  $('.fadeMeIn').removeClass('fadeIn animated');
  $('.fadeMeUp').removeClass('fadeInUp animated');


  //slider.find('.tab_item').each(function (ind) {
  //  if (target > ind) {
  //    offset += $(this).outerWidth();
  //  }
  //});
  //
  //slider.css('transform', 'translate3d(-' + offset + 'px, 0px, 0px)');

  p.find('.fadeMeIn').each(function (ind) {
    var el = $(this), delay = el.attr('data-fade-delay') || 100;

    setTimeout(function () {
      el.addClass('fadeIn animated');
    }, delay);
  });

  p.find('.fadeMeUp').each(function (ind) {
    var el = $(this), delay = el.attr('data-fade-delay') || 100;

    setTimeout(function () {
      el.addClass('fadeInUp animated');
    }, delay);
  });
}
