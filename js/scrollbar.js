function LeftScrollBarAnimation() {
    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    
    $("#bar").height(scrollPercent + '%');
}


$(document).ready(function () {
    LeftScrollBarAnimation();
});

var lastScrollTop = 0;

$(window).scroll(function () {

    LeftScrollBarAnimation();
    
    $('.scrollbar').fadeIn(400);
    
    clearTimeout($.data(this, "scrollTimer"));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $('.scrollbar').fadeOut(250);
        console.log("Haven't scrolled in 2000ms!");
    }, 1500));

});


