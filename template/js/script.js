$(document).ready(function(){
    $('.main-slider-carousel').each(
        function () {
            $(this).slick({
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 3,
                slidesToScroll: 1,
                variableWidth: true,
                dots: true,
                speed: 300,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
                // responsive: [
                //     {
                //         breakpoint: 768,
                //         settings: {
                //             arrows: true,
                //             centerMode: true,
                //             centerPadding: '40px',
                //             slidesToShow: 3
                //         }
                //     },
                //     {
                //         breakpoint: 480,
                //         settings: {
                //             arrows: false,
                //             centerMode: true,
                //             centerPadding: '40px',
                //             slidesToShow: 1
                //         }
                //     }
                // ]
            });
        }
    );
    $('.workers-item-slider').each(
        function () {
            console.log($(this));
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
            // $('.worker-slider-nav-item', sliderNav).each(
                // function() {
                    // var index = $(this).index();
// 
                    // $(this).click(
                        // function(){
                            // $(this).slickGoTo(index, false);
                        // }
                    // );
                // }
            // );
        }
    );
});