jQuery(function($) {
  var contentwithslideEl = $('.content-with-slides');

  jQuery.each(contentwithslideEl, function(_, contentwithslide) {
    var slideEls = $('.content-slide', contentwithslide);

    jQuery.each(slideEls, function(idx, slide) {
      var visibilityEls = $('.show-hide', slide);
      var muicontainerEls = $('.content-to-hide', slide);

      visibilityEls.click(function() {
        if (muicontainerEls.is( ":hidden") ) {
          muicontainerEls.show("slow");
        } else {
          muicontainerEls.slideUp("slow");
        };
      }); // visibilityEls
    }); // contentwithslide
  });
});
