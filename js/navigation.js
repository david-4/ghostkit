$(document).ready(function() {
    var $navicon = $('.js-nav-icon'),
    $navi = $('.js-main-nav'),
    i = 1;

    $navicon.on('click', function() {
        if(i % 2 == 0) {
            $navi.slideUp();
            $navicon.removeClass('icon-x').addClass('icon-three-bars');
        } else {
            $navi.slideDown();
            $navicon.removeClass('icon-three-bars').addClass('icon-x');
        }
        i++;
    });
});
