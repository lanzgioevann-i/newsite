
$(document).ready(function() {
	//$('.scrollbar').fadeOut(250);
});

$(window).scroll(function() {
    $('.scrollbar').fadeIn(400);
    
    clearTimeout($.data(this, "scrollTimer"));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $('.scrollbar').fadeOut(250);
        console.log("Haven't scrolled in 2000ms!");
    }, 1500));
});
