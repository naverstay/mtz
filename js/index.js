var ru_months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
  shadow_matrix = [
//@formatter:off
        // MTZ
        '.87 0   0 0   0  ' +
        '0   .18 0 0   0  ' +
        '0   0   0 .18 0  ' +
        '0   0   0 1   0',
      
        // Zagorskiy
        '.15 0   0 0   0  ' +
        '0   .51 0 0   0  ' +
        '0   0   0 .8  0  ' +
        '0   0   0 1   0',
        
        // Volgskiy
        '.22 0   0 0   0  ' +
        '0   .75 0 0   0  ' +
        '0   0   0 .67 0  ' +
        '0   0   0 1   0',
      
        // Chelyabinsk
        '.77 0   0 0   0  ' +
        '0   .4  0 0   0  ' +
        '0   0   0 .4  0  ' +
        '0   0   0 1   0'
      
//@formatter:on
  ], shadow_arr = [];

var big_chart = [
  {
    "name": "Мытищинский трубный завод",
    "color": "#E75151",
    "dot_shadow": ".87 0 0 0 0  0 .18 0 0 0  0 0 0 .18 0  0 0 0 1 0",
    "data": [
      {"date": "01-Jan-12", "close": 56000},
      {"date": "01-Feb-12", "close": 56950},
      {"date": "01-Mar-12", "close": 55300},
      {"date": "01-Apr-12", "close": 55750},
      {"date": "01-May-12", "close": 55000},
      {"date": "01-Jun-12", "close": 56000},
      {"date": "01-Jul-12", "close": 56950},
      {"date": "01-Aug-12", "close": 55500},
      {"date": "01-Sep-12", "close": 54800},
      {"date": "01-Oct-12", "close": 55200},
      {"date": "01-Nov-12", "close": 55855},
      {"date": "01-Dec-12", "close": 56000}
    ]
  },
  {
    "name": "Загорский трубный завод",
    "color": "#2185D8",
    "dot_shadow": ".15 0 0 0 0  0 .51 0 0 0  0 0 0 .8  0  0 0 0 1 0",
    "data": [
      {"date": "01-Jan-12", "close": 57500},
      {"date": "01-Feb-12", "close": 58200},
      {"date": "01-Mar-12", "close": 58350},
      {"date": "01-Apr-12", "close": 57800},
      {"date": "01-May-12", "close": 57500},
      {"date": "01-Jun-12", "close": 57955},
      {"date": "01-Jul-12", "close": 58255},
      {"date": "01-Aug-12", "close": 58500},
      {"date": "01-Sep-12", "close": 58010},
      {"date": "01-Oct-12", "close": 57850},
      {"date": "01-Nov-12", "close": 57700},
      {"date": "01-Dec-12", "close": 58000}
    ]
  },
  {
    "name": "Волжский трубный завод",
    "color": "#37BFAB",
    "dot_shadow": ".22 0 0 0 0  0 .75 0 0 0  0 0 0 .67 0  0 0 0 1 0",
    "data": [
      {"date": "01-Jan-12", "close": 60000},
      {"date": "01-Feb-12", "close": 59500},
      {"date": "01-Mar-12", "close": 59750},
      {"date": "01-Apr-12", "close": 60400},
      {"date": "01-May-12", "close": 61000},
      {"date": "01-Jun-12", "close": 60250},
      {"date": "01-Jul-12", "close": 60000},
      {"date": "01-Aug-12", "close": 59240},
      {"date": "01-Sep-12", "close": 59000},
      {"date": "01-Oct-12", "close": 59450},
      {"date": "01-Nov-12", "close": 60000},
      {"date": "01-Dec-12", "close": 61000}
    ]
  },
  {
    "name": "Челябинский трубный завод",
    "color": "#C46565",
    "dot_shadow": ".77 0 0 0 0  0 .4  0 0 0  0 0 0 .4  0  0 0 0 1 0",
    "data": [
      {"date": "01-Jan-12", "close": 63000},
      {"date": "01-Feb-12", "close": 60500},
      {"date": "01-Mar-12", "close": 62750},
      {"date": "01-Apr-12", "close": 64400},
      {"date": "01-May-12", "close": 63000},
      {"date": "01-Jun-12", "close": 62250},
      {"date": "01-Jul-12", "close": 64000},
      {"date": "01-Aug-12", "close": 63500},
      {"date": "01-Sep-12", "close": 65000},
      {"date": "01-Oct-12", "close": 64500},
      {"date": "01-Nov-12", "close": 64400},
      {"date": "01-Dec-12", "close": 65000}
    ]
  }
];

var prices = [
  {
    factory: "Мытищинский трубный завод",
    color: "#E75151",
    dot_shadow: ".87 0 0 0 0  0 .18 0 0 0  0 0 0 .18 0  0 0 0 1 0",
    data: [
      {"date": "01-Jan-12", "close": 4236},
      {"date": "01-Feb-12", "close": 3221},
      {"date": "01-Mar-12", "close": 2221},
      {"date": "01-Apr-12", "close": 2313},
      {"date": "01-May-12", "close": 1313},
      {"date": "01-Jun-12", "close": 3264},
      {"date": "01-Jul-12", "close": 2229},
      {"date": "01-Aug-12", "close": 3818},
      {"date": "01-Sep-12", "close": 2229},
      {"date": "01-Oct-12", "close": 3818},
      {"date": "01-Nov-12", "close": 4236},
      {"date": "01-Dec-12", "close": 1236}
    ]
  },
  {
    factory: "Загорский трубный завод",
    color: "#2185D8",
    dot_shadow: ".15 0 0 0 0  0 .51 0 0 0  0 0 0 .8  0  0 0 0 1 0",
    data: [
      {"date": "01-Jan-12", "close": 4236},
      {"date": "01-Feb-12", "close": 3221},
      {"date": "01-Mar-12", "close": 2221},
      {"date": "01-Apr-12", "close": 2313},
      {"date": "01-May-12", "close": 1313},
      {"date": "01-Jun-12", "close": 3264},
      {"date": "01-Jul-12", "close": 2229},
      {"date": "01-Aug-12", "close": 3818},
      {"date": "01-Sep-12", "close": 2229},
      {"date": "01-Oct-12", "close": 3818},
      {"date": "01-Nov-12", "close": 4236},
      {"date": "01-Dec-12", "close": 1236}
    ]
  },
  {
    factory: "Волжский трубный завод",
    color: "#37BFAB",
    dot_shadow: ".22 0 0 0 0  0 .75 0 0 0  0 0 0 .67 0  0 0 0 1 0",
    data: [
      {"date": "01-Jan-12", "close": 4236},
      {"date": "01-Feb-12", "close": 3221},
      {"date": "01-Mar-12", "close": 2221},
      {"date": "01-Apr-12", "close": 2313},
      {"date": "01-May-12", "close": 1313},
      {"date": "01-Jun-12", "close": 3264},
      {"date": "01-Jul-12", "close": 2229},
      {"date": "01-Aug-12", "close": 3818},
      {"date": "01-Sep-12", "close": 2229},
      {"date": "01-Oct-12", "close": 3818},
      {"date": "01-Nov-12", "close": 4236},
      {"date": "01-Dec-12", "close": 1236}
    ]
  },
  {
    factory: "Челябинский трубный завод",
    color: "#C46565",
    dot_shadow: ".77 0 0 0 0  0 .4  0 0 0  0 0 0 .4  0  0 0 0 1 0",
    data: [
      {"date": "01-Jan-12", "close": 4236},
      {"date": "01-Feb-12", "close": 3221},
      {"date": "01-Mar-12", "close": 2221},
      {"date": "01-Apr-12", "close": 2313},
      {"date": "01-May-12", "close": 1313},
      {"date": "01-Jun-12", "close": 3264},
      {"date": "01-Jul-12", "close": 2229},
      {"date": "01-Aug-12", "close": 3818},
      {"date": "01-Sep-12", "close": 2229},
      {"date": "01-Oct-12", "close": 3818},
      {"date": "01-Nov-12", "close": 4236},
      {"date": "01-Dec-12", "close": 1236}
    ]
  }

];

var pageSliderDensity = 30,
  prevTracingDot,
  resizeTimer,
  pageSliderLoaded = false,
  sliderDirection = 'down',
  fadeMeUpDelay = 100,
  fadeMeUp2Delay = 300,
  pageSliderParams = {
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'forthPage', 'fifthPage', 'sixthPage', 'eighthPage', 'ninthPage', 'seventhPage'],
    navigation: false,
    navigationPosition: 'right',
    //navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'forthSlide'],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 100,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    //normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    resize: false,
    //sectionsColor: ['#ccc', '#f00'],
    paddingTop: '0',
    paddingBottom: '0',
    //fixedElements: '#header, #footer',
    //responsiveWidth: 1920,
    //responsiveHeight: 910,

    //Custom selectors
    sectionSelector: '.slide_section',
    slideSelector: '.slide',

    //events
    onLeave: function (index, nextIndex, direction) {

      updateSlider(index, nextIndex);

    },
    afterLoad: function (anchorLink, index) {
      var section = $('.pageSlider .slide_section').eq(index - 1),
        animationClass = sliderDirection == 'down' ? 'fadeInUpBig' : 'fadeInDownBig';

      //console.log(anchorLink, index);

      //$('.fadeMeUp').removeClass('fadeInUpBig animated fadeInDownBig');
      //$('.fadeMeIn').removeClass('fadeIn animated');

      section.find('.fadeMeUp').each(function (ind) {
        var el = $(this), delay = el.attr('data-fade-delay') || 100;

        setTimeout(function () {
          el.addClass(animationClass + ' animated');
        }, delay);
      });

      section.find('.fadeMeIn').each(function (ind) {
        var el = $(this), delay = el.attr('data-fade-delay') || 100;

        setTimeout(function () {
          el.addClass('fadeIn animated');
        }, delay);
      });

      updateSlider(anchorLink, index);

    },
    afterRender: function () {
      pageSliderLoaded = true;

      $('.chartPrice').each(function (ind) {
        //init_area_family_chart($(this), prices);
        init_area_family_chart($(this), big_chart);
      });

      windowRisize();

    },
    afterResize: function () {
    },
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      console.log(anchorLink, index, slideAnchor, slideIndex);
    },
    onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
      console.log(anchorLink, index, slideIndex, direction, nextSlideIndex);
    }
  };

d3.selection.prototype.moveToFront = function () {
  return this.each(function () {
    this.parentNode.appendChild(this);
  });
};

d3.selection.prototype.moveToBack = function () {
  return this.each(function () {
    var firstChild = this.parentNode.firstChild;
    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
};

function play_video(vid) {
  vid[0].play();
}

$(function ($) {

  var $video = $('#bgvid'),
    videoElement = $video[0];

  $video.on('canplaythrough', play_video($('#bgvid')));

  if (videoElement.readyState > 3) {
    play_video($('#bgvid'));
  }

  body_var
    .delegate('.scrollTo', 'click', function () {
      var target = $($(this).attr('data-href'));

      //console.log(target);

      if (target.length) {
        //$('.fp-section.ignore').removeClass('ignore').addClass('ignored');

        setTimeout(function () {
          $.fn.fullpage.moveTo(target.index() + 1);
        }, 1);
      }

    })
    .delegate('.prevSlide', 'click', function () {
      //$('.fp-section.ignored').addClass('ignore').removeClass('ignored');

      var sections = $('.fp-section');

      console.log(sections.filter('.active').index(), sections.filter('.product_section').last().index());

      if (sections.filter('.active').index() > sections.filter('.product_section').last().index()) {
        setTimeout(function () {
          $.fn.fullpage.moveTo(sections.filter('.product_section').last().index() + 1);
        }, 1);
      } else {
        setTimeout(function () {
          $.fn.fullpage.moveSectionUp(0);
        }, 1);
      }

    })
    .delegate('.nextSlide', 'click', function () {
      //$('.fp-section.ignored').addClass('ignore').removeClass('ignored');

      var sections = $('.fp-section');

      console.log(sections.filter('.active').index(), sections.filter('.product_section').first().index());


      if (sections.filter('.active').index() < sections.filter('.product_section').first().index()) {
        setTimeout(function () {
          $.fn.fullpage.moveTo(sections.filter('.product_section').first().index() + 1);
        }, 1);
      } else {
        setTimeout(function () {
          $.fn.fullpage.moveSectionDown(0);
        }, 1);
      }

    });

  d3.selectAll('.mapHolder .region').on('mouseenter', function () {
    var reg = d3.select(this), box = this.getBBox();

    d3.selectAll('.mapHolder .region_shadow').filter(function () {
      return d3.select(this).attr('data-shadow') == reg.attr('id');
    }).moveToFront().style("opacity", 1).selectAll('.region_name').moveToFront().attr('x', box.x + box.width / 2).attr("y", box.y + box.height / 2);
  }).on('mouseleave', function () {
    var reg = d3.select(this);
    d3.selectAll('.mapHolder .region_shadow').filter(function () {
      return d3.select(this).attr('data-shadow') == reg.attr('id');
    }).style("opacity", 0);
  })

});

function updateSlider(el, ind) {
  var sections = $('.fp-section'), cur_section = sections.eq(ind - 1), nav_label = $(cur_section.attr('data-slide-label'));

  body_var.toggleClass('header_white', cur_section.attr('data-header-white') == 1);

  $('.asideNav').toggleClass('_shifted', cur_section.attr('data-nav-shifted') == 1);

  $('.nextSlide').toggle(cur_section.attr('data-nav-next') == 1);
  $('.nextTip').html(cur_section.attr('data-nav-next-tip') || '');

  $('.prevSlide').toggle(cur_section.attr('data-nav-prev') == 1);
  $('.prevTip').html(cur_section.attr('data-nav-prev-tip') || '');

  if ((nav_label[0].tagName).toUpperCase() == 'IMG') {
    nav_label.css({'width': nav_label.attr('data-width'), 'height': nav_label.attr('data-height')});
  }

  $('.asideNavLabel').html(nav_label);

  //$('.prevSlide').toggle(!(ind == 1));

  //$('.nextSlide').toggle(!(ind == sections.length));

}

$(window).on('resize', function () {

  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(function () {

    $('.chartPrice').each(function (ind) {
      //init_area_family_chart($(this), big_chart);
    });
  }, 1);

}).on('load', function () {

  init_main_slider();

});

function init_area_family_chart(el, data_files) {

  el.find('svg').remove();

  var legendBlock = el.parents('.graphUnit').find('.legend_v1');

  if (!legendBlock.length) {
    legendBlock = $('<ul class="legend_v1" />');
    el.parents('.graphUnit').append(legendBlock);
  }

  legendBlock.empty();

  var dates = [], values = [];

  for (var i = 0; i < data_files[0].data.length; i++) {
    var obj = data_files[0].data[i];
    dates.push(moment(obj.date));
    values.push(obj.close);
  }

  var margin = {top: 20, right: 95, bottom: 50, left: 105},
    width = el.width() - margin.left - margin.right,
    height = el.height() - margin.top - margin.bottom;

  var bisectDate = d3.bisector(function (d) {
      //console.log(d);
      return d.date;
    }).left,
    parseDate = d3.time.format("%d-%b-%y").parse;

  var currencyFormatter = function (e) {
    return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
  };

  var x = d3.time.scale()
    .domain([moment.min(dates), moment.max(dates)])
    .range([0, width]);
  var y = d3.scale.linear()
    .domain([800 * Math.floor((Math.min.apply(null, values) / 1000) - 1), 1200 * Math.floor((Math.max.apply(null, values) / 1000) + 1)])
    .range([height, 0]);

  var valueline = d3.svg.line()
      .x(function (d) {
        return x(d.date);
      })
      .y(function (d) {
        return y(d.close);
      })
      //.interpolate("basis")
      .interpolate("monotone")
    ;

  var yAxis = d3.svg.axis()
    .scale(y)
    .ticks(0)
    .tickFormat(function (d) {
      return d == 0 ? "" : currencyFormatter(d) + " руб.";
    })
    .orient("left");

  var xAxis = d3.svg.axis()
    .scale(x)
    .ticks(dates.length - 1)
    .tickFormat(function (date) {
      return ru_months[date.getMonth()];
    })
    .orient("bottom");

  var svg = d3.select(el[0]).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("viewBox", "0 0 " + ( width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var defs = svg.append('defs');

  svg.append("g")
    .attr("class", "x axis")
    .style("font-size", '16em')
    .style("fill", '#4A4A4A')
    .attr("transform", "translate(0," + (height - 5) + ")")
    .call(xAxis);

  //svg.append("g")
  //  .attr("class", "y axis")
  //  .attr("transform", "translate(" + (-25) + ", 0)")
  //  .style("font-size", '14em')
  //  .style("fill", '#A5ADB3')
  //  .attr("class", "grid")
  //  .attr("stroke-width", 0)
  //  .call(yAxis);

  for (var i = 0; i < data_files.length; i++) {
    var data = data_files[i].data;

    //var shdw = data_files[i].dot_shadow, shadow_name = 'drop_shadow_' + i;
    //
    //var dropShadowFilter = defs.append('svg:filter')
    //  .attr('id', shadow_name)
    //  .attr('filterUnits', "userSpaceOnUse")
    //  .attr('width', '250%')
    //  .attr('height', '250%');
    //dropShadowFilter.append('svg:feGaussianBlur')
    //  .attr('in', 'SourceGraphic')
    //  .attr('stdDeviation', 4)
    //  .attr('result', 'blur-out');
    //dropShadowFilter.append('feColorMatrix')
    //  .attr('in', 'blur')
    //  .attr('type', 'matrix')
    //  .attr('values', shdw);
    //dropShadowFilter.append('svg:feOffset')
    //  .attr('in', 'color-out')
    //  .attr('dx', 0)
    //  .attr('dy', 0)
    //  .attr('result', 'the-shadow');
    //dropShadowFilter.append('svg:feBlend')
    //  .attr('in', 'SourceGraphic')
    //  .attr('in2', 'the-shadow')
    //  .attr('mode', 'normal');

    data.forEach(function (d) {
      d.date = parseDate(d.date);
      d.close = +d.close;
    });

    svg.append("path")
      .datum(data)
      .attr("class", "line line_v1")
      .attr("id", 'factory_' + i)
      .attr("rx", 10)
      //.attr('stroke-linejoin', 'round')
      .attr("stroke", function (d) {

        var color = data_files[i].color,

          legendItem = $('<li class="legend_item" />')
            .append($('<div class="legend_dot" />').css('background-color', data_files[i].color))
            .append($('<div class="legend_name" />').append($('<span/>').text(data_files[i].name)));

        legendItem.attr('data-line', '#factory_' + i).on('click', function () {
          var item = $(this).addClass('_active');

          $('.legend_item').not(item).removeClass('_active');

          d3.selectAll('.line.line_v1').each(function (ind) {

            if ('#' + d3.select(this).attr('id') == item.attr('data-line')) {
              d3.select(this).classed('_active', true);
            } else {
              d3.select(this).classed('_active', false);
            }
          });

        }).on('mouseleave', function () {
          //d3.select(d3.select(this).attr('data-line')).style("opacity", 0.6).attr("stroke-width", "3em");
        });

        legendBlock.append(legendItem);

        return data_files[i].color;
      })
      .attr("stroke-width", "3em")
      //.attr("d", area)
      .attr("d", valueline(data))
      .style("fill", 'none')
      .style("opacity", .6)
      .on('mouseover', function (d) {
        var line = d3.select(this);
        line.transition()
          .duration(300).style("opacity", 1).attr("stroke-width", "4em");
        d3.selectAll('.legend_item').filter(function (e, i) {
          return d3.select(this).attr('data-line') == '#' + line.attr('id');
        }).transition()
          .duration(300).style("opacity", 1);
      })
      .on('mouseout', function (d) {
        var line = d3.select(this);
        line.transition()
          .duration(300).style("opacity", 0.6).attr("stroke-width", "3em");
        d3.selectAll('.legend_item').filter(function (e, i) {
          return d3.select(this).attr('data-line') == '#' + line.attr('id');
        }).transition()
          .duration(300).style("opacity", null);
      });

    svg.selectAll("dot")
      .data(data)
      .enter().append("text")
      .attr('class', function (d, i) {
        return 'text_v1 ';
        //return 'mark_v3 ' + (i == 0 || (i == data.length - 1) ? ' hidden' : '');
      })
      .attr('data-line', '#factory_' + i)
      .attr('data-dot', function (d, i) {
        return 'dot_' + i;
      })
      .attr("x", function (d) {
        return x(d.date);
      })
      .attr("y", function (d) {
        return y(d.close);
      })
      .attr("dy", "-1em")
      .style("opacity", 0)
      .text(function (d) {
        return currencyFormatter(d.close);
      });

    svg.selectAll("dot")
      .data(data).enter()
      .append("circle")
      .attr("r", 5.5)
      .attr("fill", "#fff")
      .attr("stroke-width", 1)
      .attr("stroke", data_files[i].color)

      //.attr('filter', 'url(#' + shadow_name + ')')
      .attr("data-y-value", function (d, i) {
        return y(d.close);
      })
      .attr('class', function (d, i) {
        return 'mark_v1 ';
        //return 'mark_v3 ' + (i == 0 || (i == data.length - 1) ? ' hidden' : '');
      })
      .attr('id', function (d, i) {
        return 'dot_' + i;
      })
      .attr('data-line', '#factory_' + i)
      .attr("cx", function (d) {
        return x(d.date);
      })
      .attr("cy", function (d) {
        return y(d.close);
      })
      .style("opacity", 0)
      .on('mouseover', function (d) {
        //var dot = d3.select(this).moveToFront().style("opacity", 1);
        //var line_id = dot.attr('data-line');
        //d3.select(line_id).transition()
        //  .duration(300).style("opacity", 1).attr("stroke-width", "4em");
        //d3.selectAll('.text_v1').filter(function (e, i) {
        //  return d3.select(this).attr('data-line') == line_id && d3.select(this).attr('data-dot') == 'dot_' + dot.attr('id').replace(/\D/g, '');
        //}).moveToFront().transition()
        //  .duration(300).style("opacity", 1);
        //d3.selectAll('.legend_item').filter(function (e, i) {
        //  return d3.select(this).attr('data-line') == line_id;
        //}).transition()
        //  .duration(300).style("opacity", 1);
      })
      .on('mouseout', function (d) {
        //var dot = d3.select(this).transition()
        //  .duration(300).style("opacity", 0);
        //var line_id = dot.attr('data-line');
        //d3.select(d3.select(this).attr('data-line')).transition()
        //  .duration(300).style("opacity", 0.6).attr("stroke-width", "3em");
        //d3.selectAll('.text_v1').filter(function (e, i) {
        //  return d3.select(this).attr('data-line') == line_id && d3.select(this).attr('data-dot') == 'dot_' + dot.attr('id').replace(/\D/g, '');
        //}).transition()
        //  .duration(300).style("opacity", 0);
        //d3.selectAll('.legend_item').filter(function (e, i) {
        //  return d3.select(this).attr('data-line') == line_id;
        //}).transition()
        //  .duration(300).style("opacity", null);
      });

    svg.selectAll("dot")
      .data(data).enter()
      .append("rect")
      .attr("class", 'hoverCatcher')
      .attr('data-dot', function (d, i) {
        return 'dot_' + i;
      })
      .attr('data-line', '#factory_' + i)
      .style("opacity", 0)
      .attr("width", '80')
      .attr("height", '20')
      .attr("transform", "translate(-40,-10)")
      .attr("x", function (d) {
        return x(d.date);
      })
      .attr("y", function (d) {
        return y(d.close);
      })
      .moveToFront()
      .on('mouseover', function (d) {
        var dot = d3.select(this);
        var line_id = dot.attr('data-line');
        d3.select(line_id).transition()
          .duration(300).style("opacity", 1).attr("stroke-width", "4em");
        d3.selectAll('.text_v1').filter(function (e, i) {
          return d3.select(this).attr('data-line') == line_id && d3.select(this).attr('data-dot') == 'dot_' + dot.attr('data-dot').replace(/\D/g, '');
        }).moveToFront().transition()
          .duration(300).style("opacity", 1);
        d3.selectAll('.mark_v1').filter(function (e, i) {
          return d3.select(this).attr('data-line') == line_id && d3.select(this).attr('id') == 'dot_' + dot.attr('data-dot').replace(/\D/g, '');
        }).moveToFront().transition()
          .duration(300).style("opacity", 1);
        d3.selectAll('.legend_item').filter(function (e, i) {
          return d3.select(this).attr('data-line') == line_id;
        }).transition()
          .duration(300).style("opacity", 1);
      })
      .on('mouseout', function (d) {
        var dot = d3.select(this);
        var line_id = dot.attr('data-line');
        d3.select(d3.select(this).attr('data-line')).transition()
          .duration(300).style("opacity", 0.6).attr("stroke-width", "3em");
        d3.selectAll('.text_v1').filter(function (e, i) {
          return d3.select(this).attr('data-line') == line_id && d3.select(this).attr('data-dot') == 'dot_' + dot.attr('data-dot').replace(/\D/g, '');
        }).transition()
          .duration(300).style("opacity", 0);
        d3.selectAll('.mark_v1').filter(function (e, i) {
          return d3.select(this).attr('data-line') == line_id && d3.select(this).attr('id') == 'dot_' + dot.attr('data-dot').replace(/\D/g, '');
        }).transition()
          .duration(300).style("opacity", 0);
        d3.selectAll('.legend_item').filter(function (e, i) {
          return d3.select(this).attr('data-line') == line_id;
        }).transition()
          .duration(300).style("opacity", null);
      });
  }

  svg.append("line")
    .style("stroke", "#4A4A4A")
    .style("stroke-width", "2")
    .attr("x1", 0 - margin.left)
    .attr("x2", width + margin.right)
    .attr("y1", height - margin.bottom + 32)
    .attr("y2", height - margin.bottom + 32);


  svg.append("line")
    .style("stroke", "#E0E0E0")
    .style("stroke-width", "1")
    .attr("x1", 0 - margin.left)
    .attr("x2", width + margin.right)
    .attr("y1", height - margin.bottom)
    .attr("y2", height - margin.bottom);

  svg.append("text")
    .style("fill", "#4A4A4A")
    .attr('class', 'grid_label')
    .attr("x", 0 - margin.left)
    .attr("y", height - margin.bottom - 10)
    .text('0 руб.');


  svg.append("line")
    .style("stroke", "#E0E0E0")
    .style("stroke-width", "1")
    .attr("x1", 0 - margin.left)
    .attr("x2", width + margin.right)
    .attr("y1", (height - margin.bottom) / 2)
    .attr("y2", (height - margin.bottom) / 2);

  svg.append("text")
    .style("fill", "#4A4A4A")
    .attr('class', 'grid_label')
    .attr("x", 0 - margin.left)
    .attr("y", (height - margin.bottom) / 2 - 10)
    .text('Среднегодовая');


  svg.append("line")
    .style("stroke", "#E0E0E0")
    .style("stroke-width", "1")
    .attr("x1", 0 - margin.left)
    .attr("x2", width + margin.right)
    .attr("y1", 32)
    .attr("y2", 32);

  svg.append("text")
    .style("fill", "#4A4A4A")
    .attr('class', 'grid_label')
    .attr("x", 0 - margin.left)
    .attr("y", 22)
    .text('100 000 руб.');

  $('.graphLegend').html(legendBlock).find('.legend_item').first().click();
}

function init_main_slider() {

  if (pageSliderLoaded) {
    return;
  } else {
    console.log('loaded', pageSliderLoaded);
  }

  $('.pageSlider').fullpage(pageSliderParams);

}
