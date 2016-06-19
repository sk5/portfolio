$(document).ready(function () {
    // add .in-view class to any element with the .animate class when it is visible in the viewport
    var $animationElements = $('.animate');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animationElements,
            function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                // if ( ((element_bottom_position - 400) >= window_top_position) && ((element_top_position + 400) <= window_bottom_position) )
                if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {

                    if (!$element.hasClass('in-view')) {
                        $element.addClass('in-view');
                    }

                }

                // revert any element with the .animate class to its original state when it is not visible in the viewport
                // else {
                // $element.removeClass('in-view');
                // }
            });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});