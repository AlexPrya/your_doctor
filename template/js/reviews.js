$(document).ready(function(){
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