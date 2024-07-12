function verifySize () {
  console.log('Verify SIZEEEEE')
  var divT = $('#content')
  var div = divT.outerHeight() + 100
  var win = $(window).height()
 var currentPage = document.getElementById('currentpage').value;
  console.log(div + ' ' + win + ' id = ' + currentPage + " " + $(document).height())

  if ($(document).height() > win) {
    switch (currentPage) {
      case '2':
        document.getElementById('scroll-warning_2').hidden = false
        break
      case '3':
        document.getElementById('scroll-warning_3').hidden = false
        break
      case '4':
        document.getElementById('scroll-warning_4').hidden = false
        break
      case '5':
        document.getElementById('scroll-warning_5').hidden = false
        break
      case '6':
        document.getElementById('scroll-warning_6').hidden = false
        break
      case '7':
        document.getElementById('scroll-warning_7').hidden = false
        break
      case '8':
        document.getElementById('scroll-warning_8').hidden = false
        break
      case '9':
        document.getElementById('scroll-warning_9').hidden = false
        break
      case '10':
        document.getElementById('scroll-warning_10').hidden = false
        break
      case '11':
        document.getElementById('scroll-warning_11').hidden = false
        break
    }
    if ($(window).scrollTop() + $(window).height() != $(document).height()) {
      document.getElementById('arrowBottom').hidden = false
    }
  } else {
    switch (currentPage) {
      case '2':
        document.getElementById('scroll-warning_2').hidden = true
        break
      case '3':
        document.getElementById('scroll-warning_3').hidden = true
        break
      case '4':
        document.getElementById('scroll-warning_4').hidden = true
        break
      case '5':
        document.getElementById('scroll-warning_5').hidden = true
        break
      case '6':
        document.getElementById('scroll-warning_6').hidden = true
        break
      case '7':
        document.getElementById('scroll-warning_7').hidden = true
        break
      case '8':
        document.getElementById('scroll-warning_8').hidden = true
        break
      case '9':
        document.getElementById('scroll-warning_9').hidden = true
        break
      case '10':
        document.getElementById('scroll-warning_10').hidden = true
        break
      case '11':
        document.getElementById('scroll-warning_11').hidden = true
        break
    }
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      document.getElementById('arrowBottom').hidden = true
    }
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      document.getElementById('arrowBottom').hidden = true
    } else {
      document.getElementById('arrowBottom').hidden = false
    }
  })
}
