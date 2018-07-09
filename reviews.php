<?require("template/header.html");?>

    <h1>Отзывы</h1>

    <div class="container reviews">
        <div class="row">
            <div class="col-md-12">
                <form action="" class="reviews-form">
                    <div class="row">
                        <div class="col-md-6">
                            <input type="text" name="name" id="reviewName" placeholder="Ваше имя*">
                            <input type="text" name="phone" id="reviewPhone" placeholder="Номер телефона*">
                            <input type="text" name="email" id="reviewEmail" placeholder="Email*">
                        </div>
                        <div class="col-md-6">
                            <textarea name="text" id="reviewText" cols="30" rows="7" placeholder="Отзыв*"></textarea>
                        </div>
                        <div class="col-md-6">
                            <select name="worker" id="reviewWorker">
                                <option value="">Выберите специалиста</option>
                                <option value="1">Зиманков Даниил Андреевич</option>
                                <option value="2">Зиманков Даниил Андреевич</option>
                                <option value="3">Зиманков Даниил Андреевич</option>
                                <option value="4">Зиманков Даниил Андреевич</option>
                                <option value="5">Зиманков Даниил Андреевич</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <input type="submit" name="submit" id="reviewSubmit" value="Оставить отзыв" class="btn btn-second btn-big fl-r">
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-12">
                <ul class="nav nav-tabs reviews-tabs">
                    <li class="active"><a href="#reviews-list-site" data-toggle="tab">Сайт</a></li>
                    <li><a href="#reviews-list-vk" data-toggle="tab">Вконтакте</a></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 tab-content">
                <div class="reviews-list tab-pane active load" id="reviews-list-site">
                    <div class="reviews-list-item">
                        <p class="reviews-list-item__name">Дарья</p>
                        <p class="reviews-list-item__about">Отзыв о <span>Зиманкове Данииле Андреевиче</span></p>
                        <p class="reviews-list-item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
amet, consectetur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
amet, consectetur.</p>
                        <a href="#" class="reviews-list-item__more js-reviews-more">Развернуть...</a>
                    </div>
                    <div class="reviews-list-item">
                        <p class="reviews-list-item__name">Дарья</p>
                        <p class="reviews-list-item__about">Отзыв о <span>Зиманкове Данииле Андреевиче</span></p>
                        <p class="reviews-list-item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
amet, consectetur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
amet, consectetur.</p>
                        <a href="#" class="reviews-list-item__more js-reviews-more">Развернуть...</a>
                    </div>
                    <div class="reviews-list-item">
                        <p class="reviews-list-item__name">Дарья</p>
                        <p class="reviews-list-item__about">Отзыв о <span>Зиманкове Данииле Андреевиче</span></p>
                        <p class="reviews-list-item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
amet, consectetur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
amet, consectetur.</p>
                        <a href="#" class="reviews-list-item__more js-reviews-more">Развернуть...</a>
                    </div>
                </div>
                <div class="reviews-list  tab-pane load" id="reviews-list-vk">
                    <div class="reviews-list-item">
                        <p class="reviews-list-item__name">Дарья</p>
                        <p class="reviews-list-item__about">Отзыв о <span>Зиманкове Данииле Андреевиче</span></p>
                        <p class="reviews-list-item__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
amet, consectetur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
amet, consectetur.</p>
                        <a href="#" class="reviews-list-item__more js-reviews-more">Развернуть...</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?require("template/footer.html");?>