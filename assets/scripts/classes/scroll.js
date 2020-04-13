/* eslint-disable */
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
            top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
    });
});


var counterStart = false;
var e_top = $('.counter').offset().top - $(window).height();
console.log(e_top);

$(window).on('beforeunload', function () {
  $(window).scrollTop(0);
});

$(window).on('scroll', function () {
  var w_top = $(window).scrollTop();

  if (w_top >= e_top && !counterStart) {
    counterStart = true;
    var time = 2;


    $('.number').each(function () {

      var $item = $(this),
        maxNum = +$item.data('num'),
        step = Math.floor(time * 2000 / maxNum);

      showNumber($item, step, maxNum);
    });


  }
})

function showNumber($item, step, maxNum) {
  var currentNum = +$item.html() + 1;

  if (currentNum <= maxNum) {
    $item.html(Math.min(maxNum, currentNum));

    setTimeout(function () {
      showNumber($item, step, maxNum)
    }, step);
  }
}