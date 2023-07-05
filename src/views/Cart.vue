<template>
    <div class="container is-fullwidth ">
        <h1 class="page-title cart__page-title"> Корзина </h1>

        <div class="row is-gap-0 is-lg-gap-80">
            <div class="col is-16 is-lg-10 is-big-10 cart-form__col">
                <form action="" class="form cart__form">

                    <!-- Контакты -->
                    <fieldset class="fieldset cart__form-fieldset">
                        <div class="cart__form-fieldset-header">
                            <legend class="legend">контактная информация</legend>

                            <div class="cart__form-fieldset-login">
                                <a href="#" class="--clr-gray">УЖЕ ЕСТЬ АККАУНТ?</a>
                                <a href="#">ВОЙТИ</a>
                                <a href="#">зарегистрироваться</a>
                            </div>
                        </div>
                        <div class="cart__form-fieldset-fields">
                            <div class="row">
                                <div class="col is-16 is-md-8 ">
                                    <div class="control control--has-icon-left">
                                        <input class="input" type="text" placeholder="Email">
                                        <i class="material-icons icon icon--left icon-24 control__icon">email</i>
                                    </div>

                                </div>
                                <div class="col is-16 is-md-8">
                                    <div class="control control--has-icon-right">
                                        <input class="input" type="text" placeholder="Телефон">
                                        <i class="material-icons icon icon--right icon-24 control__icon">phone</i>
                                    </div>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col is-16 is-md-8">
                                    <div class="control control--has-icon-left control--has-icon-right">
                                        <!-- <label class="label" for="">Название поля</label> -->
                                        <input class="input" type="text" placeholder="Имя">
                                        <i class="material-icons icon icon--left icon-24 control__icon">person</i>
                                        <i class="material-icons icon icon--right icon-24 control__icon">close</i>
                                    </div>

                                </div>
                                <div class="col is-16 is-md-8">
                                    <div class="control">
                                        <!-- <label class="label" for="">Название поля</label> -->
                                        <input class="input" type="text" placeholder="Фамилия">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <!-- Адресс -->
                    <fieldset class="fieldset cart__form-fieldset">
                        <legend class="legend">адрес</legend>
                        <div class="cart__form-fieldset-fields">
                            <div class="row">
                                <div class="col is-16 is-md-8"><input class="input" type="text" placeholder="Страна"> </div>
                                <div class="col is-16 is-md-8"><input class="input" type="text" placeholder="Регион"> </div>
                                <div class="col is-16 is-md-8"><input class="input" type="text"
                                        placeholder="Населенный пункт">
                                </div>
                                <div class="col is-16 is-md-8"><input class="input" type="text" placeholder="Индекс"
                                        disabled></div>
                                <div class="col is-16 is-md-8"><input class="input" type="text"
                                        placeholder="Улица, дом, квартира" required invalid></div>
                                <div class="col is-16 is-md-8"><input class="input" type="text"
                                        placeholder="Комментарий к заказу (необязательно)">
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <Field></Field>


                    <fieldset class="fieldset cart__form-fieldset">
                        <legend class="legend">способ доставки</legend>

                        <div class="cart__form-fieldset-fields">
                            <div class="control cart__form-control">
                                <input type="radio" name="delivery-method" id="dm-1" class="radio">
                                <label for="dm-1" class="label">Доставка курьером</label>
                                <p class="control__info">+ 400 Р</p>
                            </div>
                            <div class="control cart__form-control">
                                <input type="radio" name="delivery-method" id="dm-2" class="radio">
                                <label for="dm-2" class="label">Самовывоз из шоурума на Винзаводе</label>
                            </div>
                            <div class="control cart__form-control">
                                <input type="radio" name="delivery-method" id="dm-3" class="radio" disabled>
                                <label for="dm-3" class="label">Самовывоз из шоурума на Охотном ряду</label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="fieldset cart__form-fieldset">

                        <div class="cart__form-fieldset-fields">
                            <div class="control cart__form-control">
                                <input type="checkbox" name="rule-1" id="rule-1" class="checkbox">
                                <label for="rule-1" class="label label--gray">я согласен с обработкой персональных
                                    данных</label>
                            </div>
                            <div class="control cart__form-control">
                                <input type="checkbox" name="rule-2" id="rule-2" class="checkbox">
                                <label for="rule-2" class="label label--gray">отметьте, если приобретаете товар в
                                    подарок!</label>
                                <div class="control__tooltip">
                                    <i class="mi icon--20">info</i>
                                    <span class="control__tooltip-content">
                                        В этом случае мы уточним адресс доставки.
                                    </span>
                                </div>

                            </div>
                            <p class="fieldset__desc">
                                Если мы не успеваем произвести его к конкретной дате, вы получите сертификат,
                                удостоверяющий, что вещь уже готовится, и сможете вручить его получателю. Данное уточнение
                                не отразится на стоимости, сроках производства и доставки.
                            </p>
                        </div>
                    </fieldset>

                    <fieldset class="fieldset cart__form-fieldset">
                        <button class="button cart__pay-button mb-16">Перейти к оплате</button>
                        <button class="button cart__pay-button" disabled>Перейти к оплате</button>
                    </fieldset>
                </form>
            </div>

            <div class="col is-16 is-lg-6 is-big-5 is-big-offset-1 cart-review__col">
                <div class="order cart__order">
                    <div class="cart__order-base">
                        <p class="order-review order__cart-total">
                            <span class="order-review__name">сумма товаров</span>
                            <span class="order-review__value">12 480 Р</span>
                        </p>
                        <p class="order-review order__shipping">
                            <span class="order-review__name">доставка</span>
                            <span class="order-review__value">курьером <span> / </span> 400 Р</span>
                        </p>
                        <p class="order-review order__total">
                            <span class="order-review__name">СТОИМОСТЬ ЗАКАЗА</span>
                            <span class="order-review__value">12 480 Р</span>
                        </p>

                        <div class="promocode order__promocode">
                            <div class="control has-button">
                                <input type="text" class="input input--md" placeholder="Введите промокод">
                                <button class="button control__button">Применить</button>
                            </div>
                        </div>
                    </div>

                    <div class="cart__items">
                        <div class="cart-item cart__item" v-for="(key) in new Array(8)">
                            <div class="cart-item__image-wrapper">
                                <img class="cart-item__image" src="/product_images/product_cart_image.png"
                                    alt="">
                            </div>
                            <div class="cart-item__info-wrapper">
                                <button class="button button--icon cart-item__button-remove"><i
                                        class="material-icons">close</i></button>

                                <h4 class="cart-item__name">худи / VINTAGE KQ BEIGE</h4>

                                <div class="counters">
                                    <div class="counter cart-item__size">
                                        <span class="material-icons counter_dec counter__button counter__button--end">
                                            chevron_left
                                        </span>
                                        <span class="counter_val">
                                            M
                                        </span>
                                        <span class="material-icons counter_inc counter__button ">
                                            chevron_right
                                        </span>
                                    </div>

                                    <div class="counter cart-item__count">
                                        <span class="material-icons counter_dec counter__button counter__button--end">
                                            remove
                                        </span>
                                        <span class="counter_val">
                                            01
                                        </span>
                                        <span class="material-icons  counter_inc counter__button">
                                            add
                                        </span>
                                    </div>
                                </div>


                                <span class="cart-item__price">
                                    2 990 ₽ <span class="cart-item__full-price">3 990 ₽</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="container is-fullwidth">

    </div>
</template>

<script setup>
import Field from '@/components/Field.vue'; 
</script>