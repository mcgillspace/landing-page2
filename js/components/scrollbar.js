// Scrollbar
var Scrollbar = function() {
  'use strict';

  // Handle Scrollbar
  var handleScrollbar = function() {
    $('.js__scrollbar').mCustomScrollbar({
      theme: 'minimal'
    });
  }


  return {
    init: function() {
      handleScrollbar(); // initial setup for Scrollbar
    }
  }
}();

ANGULAR_LOADER.ready('scrollbar', function() {
  Scrollbar.init();
});
