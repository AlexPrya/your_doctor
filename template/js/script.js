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
});