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


    // reviews
    var reviews = $('.reviews-list');
    if(reviews.hasClass('load')) {
        $('.reviews-list-item').each(
            function() {
                var obText = $('.reviews-list-item__text', $(this)),
                    text = obText.text();

                if(text.length >= 200) {
                    obText.addClass('hidden').after('<p class="reviews-list-item__min-text">'+text.slice(0,200)+'...'+'</p>');
                } else {
                    $('.reviews-list-item__more').hide();
                }
            }
        );
        reviews.removeClass('load');
    }
    $('.js-reviews-more').click(
        function(e){
            e.preventDefault();
            var item = $(this).parent(),
                min_text = $('.reviews-list-item__min-text', item),
                full_text = $('.reviews-list-item__text', item);
                console.log(min_text != undefined, $(this).hasClass('open'));
            if(min_text != undefined) {
                if($(this).hasClass('open')) {
                    $(this).removeClass('open').text('Развернуть...');
                    full_text.addClass('hidden');
                    min_text.removeClass('hidden');
                } else {
                    $(this).addClass('open').text('Свернуть...');
                    full_text.removeClass('hidden');
                    min_text.addClass('hidden');
                }
            }
        }
    );
});