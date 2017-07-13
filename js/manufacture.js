$(function ($) {

  initManufactureSlider();

  body_var.delegate('.openGalleryBtn', 'click', function () {
    var manufactureGallery = $('.manufactureGallery');

    manufactureGallery.toggleClass('_opened');

    manufactureGallery.find('video').each(function (ind) {
      this.pause();
    });

    manufactureGallery.find('iframe').each(function (ind) {
      this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
  });

});

function initManufactureSlider() {


  /*  var manufactureGallery = new Swiper('.manufactureGallery', {
      speed: 400,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: 'cube',
      nextButton: '.galNext',
      prevButton: '.galPrev',
      onSlideChangeStart: function (swiper) {
  
        $(swiper.slides).find('video').each(function (ind) {
          this.pause();
        });
  
        $(swiper.slides).find('iframe').each(function (ind) {
          this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        });
  
      },
      onSlideChangeEnd: function (swiper) {
  
        $(swiper.slides).filter('.swiper-slide-active').find('video').each(function (ind) {
          this.play();
        });
  
        updatePreviews(swiper);
  
      }, onInit: function (swiper, current, total) {
  
        updatePreviews(swiper);
  
      },
      initialSlide: 0
    });*/

  /*  var manufactureSlider = new Swiper('.manufactureSlider', {
      speed: 400,
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 0,
      pagination: '.swiperPagination',
      bulletClass: 'slide_bullet',
      bulletActiveClass: '_active',
      //loop: true,
      //freeMode: true,
      initialSlide: 0,
      paginationClickable: true,
      onSlideChangeEnd: function (swiper) {
  
        updateBullets(swiper);
  
      },
      onInit: function (swiper, current, total) {
  
        setTimeout(function () {
          $('.swiperPagination').animate({'opacity': 1}, 500);
  
          $('.manufactureSlider').animate({'opacity': 1}, 500);
        }, 10);
  
        body_var.delegate('.slideBullet', 'click', function () {
          Swiper('.manufactureSlider').slideTo($(this).index(), 400);
        });
      },
      paginationBulletRender: function (swiper, index, className) {
        return '<span class="' + className + '">' + (index == swiper.activeIndex ? '<span class="slide_counter">' +
          '<span class="fz_56">' + (Math.floor(swiper.activeIndex / swiper.params.slidesPerGroup) + 1) + '</span>' +
          '<span class="fz_30">/' + Math.floor(swiper.slides.length / swiper.params.slidesPerGroup) + '</span></span>' : '') + '</span>';
      }
    });*/


  var manufactureGallery = $('.manufactureGallery .swiper-wrapper')
    .on('init', function (event, slick, currentSlide, nextSlide) {
      slick.$slides.removeClass('swiper-slide-prev').removeClass('swiper-slide-next');

      // find current slide
      for (var i = 0; i < slick.$slides.length; i++) {
        var $slide = $(slick.$slides[i]);
        if ($slide.hasClass('slick-current')) {
          // update DOM siblings
          $slide.prev().addClass('swiper-slide-prev');
          $slide.next().addClass('swiper-slide-next');
          break;
        }
      }
    })
    .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      slick.$slides.removeClass('swiper-slide-prev').removeClass('swiper-slide-next');

      $(slick.$slides).find('video').each(function (ind) {
        this.pause();
      });

      $(slick.$slides).find('iframe').each(function (ind) {
        this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
      });
    })
    .on('afterChange', function (event, slick, currentSlide, nextSlide) {

      // remove all prev/next
      slick.$slides.removeClass('swiper-slide-prev').removeClass('swiper-slide-next');

      // find current slide
      for (var i = 0; i < slick.$slides.length; i++) {
        var $slide = $(slick.$slides[i]);
        if ($slide.hasClass('slick-current')) {
          // update DOM siblings
          $slide.prev().addClass('swiper-slide-prev');
          $slide.next().addClass('swiper-slide-next');
          break;
        }
      }

      $(slick.$slides).filter('.slick-current').find('video').each(function (ind) {
        this.play();
      });

      updatePreviews(slick);
    })
    .slick({
      infinite: true,
      speed: 1000,
      fade: true,
      dots: false,
      cssEase: 'linear',
      zIndex: 1,
      initialSlide: 0,
      //centerPadding: '0',
      slide: '.manufactureGallery .slide',
      prevArrow: '.galPrev',
      nextArrow: '.galNext',

      slidesToShow: 1,
      slidesToScroll: 1,
      touchThreshold: 10
    });

  var manufactureSlider = $('.manufactureSlider .manufacture_list')
    .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      slick.$slides.removeClass('prevdiv').removeClass('nextdiv');
    })
    .on('afterChange', function (event, slick, currentSlide, nextSlide) {
      console.log(nextSlide);

      console.log('afterChange/init', event, slick, slick.$slides);
      // remove all prev/next
      slick.$slides.removeClass('swiper-slide-prev').removeClass('swiper-slide-next');

      // find current slide
      for (var i = 0; i < slick.$slides.length; i++) {
        var $slide = $(slick.$slides[i]);
        if ($slide.hasClass('slick-current')) {
          // update DOM siblings
          $slide.prev().addClass('swiper-slide-prev');
          $slide.next().addClass('swiper-slide-next');
          break;
        }
      }

      updateBullets(slick);
    })
    .on('init', function (event, slick, currentSlide, nextSlide) {
      updateBullets(slick);

      setTimeout(function () {
        $('.swiperPagination').animate({'opacity': 1}, 500);

        $('.manufactureSlider').animate({'opacity': 1}, 500);
      }, 10);

    })
    .slick({
      dots: true,
      mobileFirst: true,
      infinite: false,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
      //centerMode: true,
      //variableWidth: true,
      speed: 600,
      zIndex: 1,
      initialSlide: 0,
      //centerPadding: '0',
      slide: '.manufactureSlider .swiper-slide',
      //prevArrow: '.manufactureSlider .slide_prev',
      //nextArrow: '.manufactureSlider .slide_next',
      appendDots: '.swiperPagination',
      slidesToShow: 4,
      slidesToScroll: 4,
      touchThreshold: 10
    });
}

function updatePreviews(swiper, callback) {
  var manufactureGallery = $('.manufactureGallery');

  $('.galPrev .manufacture_gallery_preview img').attr('src', manufactureGallery.find('.swiper-slide-prev').attr('data-preview'));

  $('.galNext .manufacture_gallery_preview img').attr('src', manufactureGallery.find('.swiper-slide-next').attr('data-preview'));

  if (typeof callback == 'function') callback();

}

function updateBullets(sld, callback) {
  var ind = $(sld.$dots).find('.slick-active').index() + 1;

  $('.slide_counter').remove();

  $(sld.$dots).find('.slick-active').append('<span class="slide_counter">' +
    '<span class="fz_56">' + ind + '</span>' +
    '<span class="fz_30">/' + sld.$dots.find('li').length + '</span></span>');


  //$(swiper.bullets).filter('._active').html('<span class="slide_counter">' +
  //  '<span class="fz_56">' + (Math.floor(swiper.activeIndex / swiper.params.slidesPerGroup) + 1) + '</span>' +
  //  '<span class="fz_30">/' + Math.floor(swiper.slides.length / swiper.params.slidesPerGroup) + '</span></span>').siblings().empty();

  if (typeof callback == 'function') callback();

}
