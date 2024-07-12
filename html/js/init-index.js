import {checkWindowDimension} from './tools/sizecheck.js';

$(window).on('load', function () {
  checkWindowDimension();
  $('#loader').delay(100).fadeOut('slow');
  // Hide the content and show a message asking for resizing the window or using a different device
  $(window).on('resize', checkWindowDimension);
  // verify if the scrollbar appears!
  $(window).on('resize', verifySize);

});
