$(document).ready(function(){
    $('.workers-item-slider').each(
        function () {
            var sliderFor = $('.workers-item-slider-for', $(this)),
                sliderNav = $('.workers-item-slider-nav', $(this));
            var slider = sliderFor.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: sliderNav
            });

            var navSlider = sliderNav.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                asNavFor: sliderFor,
                focusOnSelect: true,
                vertical: true,
                verticalSwiping: true,
            });
        }
    );
    $('.worker-slider').each(
        function () {
            var sliderFor = $('.worker-slider-for', $(this)),
                sliderNav = $('.worker-slider-nav', $(this));
            var slider = sliderFor.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true
            });

            $('.worker-slider-nav-item', sliderNav).click(function(e) {
                e.preventDefault();
                var slideNum = $(this).data('slide');
                sliderFor.slick('slickGoTo', slideNum);
              });
        }
    );
});