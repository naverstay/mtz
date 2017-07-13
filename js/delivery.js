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

$(function ($) {

  initValidation();
  
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
  });

});
