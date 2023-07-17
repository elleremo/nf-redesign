<template class="product-page-tmp">
    <div class="hystmodal hystmodal-size-table" id="myModal" aria-hidden="true">
        <div class="hystmodal__wrap">
            <div class="hystmodal__window" role="dialog" aria-modal="true">
                <button data-hystclose class="hystmodal__close">Close</button>

                <div class="table table__size">
                    <h4 class="table__title">Таблица Размеров (СМ)</h4>
                    <table class="table__content">
                        <thead>
                            <tr>
                                <td class="tg-0lax">размер</td>
                                <td class="tg-0lax">xs</td>
                                <td class="tg-0lax">s</td>
                                <td class="tg-0lax">m</td>
                                <td class="tg-0lax">l</td>
                                <td class="tg-0lax">xl</td>
                                <td class="tg-0lax">xxl</td>
                                <td class="tg-0lax"> + / -</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>рост</td>
                                <td>180</td>
                                <td>134</td>
                                <td>14.8</td>
                                <td>200</td>
                                <td>34</td>
                            </tr>
                            <tr>
                                <td>длина плеча</td>
                                <td>180</td>
                                <td>134</td>
                                <td>14.8</td>
                                <td>200</td>
                                <td>34</td>
                                <td>133.4</td>
                                <td>1.0</td>
                            </tr>
                            <tr>
                                <td>длина спинки</td>
                                <td>180</td>
                                <td>134</td>
                                <td>14.8</td>
                                <td>200</td>
                                <td>34</td>
                                <td>133.4</td>
                                <td>1.0</td>
                            </tr>
                            <tr>
                                <td>длина рукава</td>
                                <td>180</td>
                                <td>134</td>
                                <td>14.8</td>
                                <td>200</td>
                                <td>34</td>
                                <td>133.4</td>
                                <td>1.0</td>
                            </tr>
                            <tr>
                                <td>ширина переда</td>
                                <td>180</td>
                                <td>134</td>
                                <td>14.8</td>
                                <td>200</td>
                                <td>34</td>
                                <td>133.4</td>
                                <td>1.0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="product-page">
        <div class="product-page__layout">
            <div class="  product-page__layout-inner">

                <div class="product-page__content-wpapper">
                    <div class="product-page__content">
                        <div class="container has-mobile-pad">
                            <h1 class="page-title">GOD OF THUNDER</h1>
                            <h3 class="product-page__price">8 800 Р</h3>

                            <div class="row is-middle is-between">
                                <div class="col">
                                    <ul class="choices-selector">
                                        <li class="choices-selector__name">размер:</li>
                                        <li class="choices-selector__item choices-selector__item--selected">m</li>
                                        <li class="choices-selector__item">l</li>
                                        <li class="choices-selector__item">xl</li>
                                        <li class="choices-selector__item">xxl</li>
                                    </ul>
                                </div>
                                <div class="col">
                                    <a href="#" data-hystmodal-size=".hystmodal-size-table"
                                        class="product-page__size-table-link">таблица размеров</a>
                                </div>
                            </div>

                            <div class="tabs product-page__tabs">

                                <div class="scroll-line">
                                    <ul class="tabs__items choices-selector" @click="tabsClick">
                                        <li data-tab-id="1" class="tabs__item choices-selector__item ">Описание</li>
                                        <li data-tab-id="2"
                                            class="tabs__item choices-selector__item choices-selector__item--selected">
                                            производство</li>
                                        <li data-tab-id="3" class="tabs__item choices-selector__item ">характеристики</li>
                                        <li data-tab-id="4" class="tabs__item choices-selector__item">доставка</li>
                                    </ul>

                                </div>

                                <div class="tabs__content">
                                    <div v-if="currentTabId == 1" :data-tab-select="1" class="tabs__content-item">
                                        <p>На одежде изображён Зенитцу в образе бога грома. NikiFilini постаралась в полной
                                            мере изобразить историю этого персонажа и его чувств при помощи 7 уникальных
                                            принтов. Каждый принт был вдохновлён событиями оригинальной сюжетной линии
                                            популярного аниме Клинок рассекающий демонов.
                                        </p>
                                        <p>
                                            Данный худи выходит из продажи 11 марта 2023 года.
                                        </p>
                                        <p>
                                            Производство от 30-ти дней.
                                        </p>
                                    </div>
                                    <div v-if="currentTabId == 2" :data-tab-select="2" class="tabs__content-item">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, fuga.</p>
                                    </div>
                                    <div v-if="currentTabId == 3" :data-tab-select="3" class="tabs__content-item">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore minus itaque
                                            illum quod eos. Hic aut quia tenetur eos? Recusandae maiores voluptate
                                            perferendis iure assumenda quo optio, minima laudantium, amet vel ullam eos!
                                            Alias praesentium quas quisquam, neque aliquam illo! Mollitia amet voluptas,
                                            illum perspiciatis veritatis ullam itaque ut quo fugiat a minima quos porro
                                            magni obcaecati, iure cupiditate quis eveniet eum accusantium exercitationem
                                            repellat non. Nesciunt ratione eos nulla magnam! Cupiditate, repellendus
                                            molestias ullam reiciendis laudantium recusandae ex veniam saepe perspiciatis
                                            voluptas officia earum minima possimus, facere doloribus assumenda? Modi
                                            necessitatibus, voluptatum laborum quisquam doloremque perspiciatis magni.
                                            Officia, sed.</p>
                                    </div>
                                    <div v-if="currentTabId == 4" :data-tab-select="4" class="tabs__content-item">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto
                                            consectetur fugit veritatis suscipit necessitatibus quo, iste ducimus molestias
                                            nisi.</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, rerum.</p>
                                    </div>
                                </div>

                            </div>


                            <div class="product-page__add-to-cart">
                                <div class="row">
                                    <div class="col is-16 is-md-8"><button class="button product-page__button">Добавить в
                                            корзину</button></div>
                                    <div class="col is-16 is-md-8"><button
                                            class="button button--secondary product-page__button">В избранное</button></div>
                                </div>
                            </div>
                            <!-- <button class="button">elwmgvwmeg</button> -->
                        </div>
                    </div>
                </div>

                <div class="product-page__images">
                    <div class="swiper">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                            <div class="swiper-slide  " v-for="(card, key) in new Array(4)">
                                <img :src="`/nf-build-redesign/product_page/${key + 3}.png`" alt="" class="product-card__image">
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="container   product-page__layout-outer">
                <div class="product-page__review product-page__review-1">
                    <div class="row is-gap-0">
                        <div class="col is-16 is-lg-8 is-lg-order-n2">
                            <div class="review-text product-page__review-text">
                                <h3 class="review-text__title">Передний принт</h3>
                                <h4 class="review-text__subtitle">GOD OF THUNDER</h4>
                                <p class="review-text__desc">На одежде изображён Зенитцу в образе бога грома.
                                    NikiFilini
                                    постаралась в полной мере
                                    изобразить историю этого персонажа и его чувств при помощи 7 уникальных принтов.
                                    Каждый
                                    принт был вдохновлён событиями оригинальной сюжетной линии популярного аниме
                                    Клинок
                                    рассекающий демонов.</p>
                            </div>
                        </div>
                        <div class="col is-16  ">
                            <div class="review-image product-page__review-image">
                                <img src="/product_page/front.png" alt="">
                            </div>
                        </div>
                        <div class="col is-16 is-lg-8 is-lg-order-n1">
                            <div class="review-text product-page__review-text">
                                <h3 class="review-text__title">Задний принт</h3>
                                <h4 class="review-text__subtitle">GOD OF THUNDER</h4>
                                <p class="review-text__desc">На одежде изображён Зенитцу в образе бога грома.
                                    NikiFilini
                                    постаралась в полной мере
                                    изобразить историю этого персонажа и его чувств при помощи 7 уникальных принтов.
                                    Каждый
                                    принт был вдохновлён событиями оригинальной сюжетной линии популярного аниме
                                    Клинок
                                    рассекающий демонов.</p>
                            </div>
                        </div>
                        <div class="col is-16 ">
                            <div class="review-image product-page__review-image">
                                <img src="/product_page/back.png" alt="">
                            </div>
                        </div>

                        <div class="col is-16">
                            <div class="review-text product-page__review-text">
                                <h3 class="review-text__title">История Товара / идеи</h3>
                                <h4 class="review-text__subtitle">GOD OF THUNDER</h4>
                                <p class="review-text__desc">Благодаря высококачественному плотному хлопку, худи
                                    очень
                                    мягкое, долго сохраняет объём, не скатывается в процессе носки и хорошо держит
                                    тепло.
                                    Объемный капюшон сможет надежно защитить вас от ветра. В нижней части худи
                                    расположен
                                    просторный карман, имеющий два отсека для хранения самых важных вещей</p>
                            </div>
                        </div>

                        <div class="col is-16">
                            <div class="review-image product-page__review-image">
                                <img src="/product_page/big-1.png" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="row is-gap-0 is-middle is-center">
                        <div class="col is-8 is-md-5 ">
                            <div class="review-image product-page__review-image">
                                <img src="/product_page/left.png" alt="">
                            </div>
                        </div>
                        <div class="col is-12 is-md-6 is-order-n1 is-md-order-unset">
                            <div class="review-text product-page__review-text">
                                <h3 class="review-text__title">OUTLOOK</h3>
                                <h4 class="review-text__subtitle">GOD OF THUNDER</h4>
                                <p class="review-text__desc">На одежде изображён Зенитцу в образе бога грома.
                                    NikiFilini
                                    постаралась в полной мере изобразить историю этого персонажа и его чувств при
                                    помощи 7
                                    уникальных принтов. Каждый принт был вдохновлён событиями оригинальной сюжетной
                                    линии
                                    популярного аниме Клинок рассекающий демонов.</p>
                            </div>
                        </div>
                        <div class="col is-8 is-md-5">
                            <div class="review-image product-page__review-image">
                                <img src="/product_page/right.png" alt="">
                            </div>
                        </div>
                        <div class="col is-16">
                            <div class="review-image product-page__review-image">
                                <img src="/product_page/big-2.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contanier">
                <div class="product-slider">
                    <div class="product-slider__top">
                        <div class="product-slider__title">похожие товары</div>
                        <div class="product-slider__controls">
                            <div class="product-slider__button product-slider__button-prev">
                                <i class="mi icon--24">west</i>
                            </div>
                            <div class="product-slider__button product-slider__button-next">
                                <i class="mi icon--24">east</i>
                            </div>
                        </div>
                    </div>
                    <div class="product-slider__wrapper">
                        <div class="swiper swiper-slider">
                            <!-- Additional required wrapper -->


                            <div class="swiper-wrapper">
                                <div class="swiper-slide product-slider__slide" v-for="(card, key) in new Array(8)">
                                    <ProductCard :keyn="key" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '../components/site/ProductCard.vue';

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle'

export default {
    components: { ProductCard },

    data() {
        return {
            currentTabId: 2
        }
    },
    mounted() {
        const sizeTableModal = new HystModal({
            linkAttributeName: "data-hystmodal-size",
            //settings (optional). see Configuration
        });


        // document.onload(() => {
        //     console.log('onload')
        // })

        window.onload = () => { // можно также использовать window.addEventListener('load', (event) => {
            
        };
        this.initSwiper();
            this.initSwiperSlider();


    },


    methods: {
        initSwiper: () => {
            console.log('initSwiper')

            var bp = 1024;
            var isEnable = false;
            var swiperP = new Swiper('.swiper', {
                // Optional parameters
                // direction: 'vertical',
                // loop: true,

                // If we need pagination
                breakpoints: {
                    // when window width is >= 640px
                    1024: {
                        slidesPerView: 1,
                    }
                },

                on: {
                    init: function () {
                        console.log('swiper initialized');
                    },
                    breakpoint: function (swiper) {
                     
                        if (window.innerWidth > bp) {
                            swiper.disable()
                            console.log('swiper disable');
                        }
                        else {
                            swiper.enable()
                            console.log('swiper enable');

                        }
                    }

                },
            });

            isEnable = true;

            // swiperP.on('afterInit', () => {
            //     console.log('swiperP INIT');

            // })

            // var myybeChange = () => {
            //     console.log('MAYBE CHANGE');


            //     if (window.innerWidth > bp && isEnable == true) {
            //         swiperP.disable()
            //         isEnable = false;
            //         console.log('swiper disable');
            //     } else if (isEnable == false) {
            //         swiperP.enable()
            //         isEnable = true;
            //         console.log('swiper enable');
            //     }
            // }

            // myybeChange();


            // window.addEventListener('resize', () => {
            //     myybeChange();
            // })

            // swiper.on('breakpoint', function (swiper, breakpointParams) {
            //     // console.log(swiper.width);
            //     if (window.innerWidth > bp) {
            //         swiper.disable()
            //         console.log('swiper disable');
            //     }
            //     else {
            //         swiper.enable()
            //         console.log('swiper enable');

            //     }
            // });
        },

        initSwiperSlider: () => {
            console.log('initSwiperSlider')

            var swiper2 = new Swiper('.swiper-slider', {
                // Optional parameters
                // direction: 'vertical',
                // loop: true,
                slidesPerView: 2,
                navigation: {
                    nextEl: '.product-slider__button-next',
                    prevEl: '.product-slider__button-prev',
                },
                // spaceBetween: -1,
                // If we need pagination
                breakpoints: {
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    }
                }
            });
        },
        tabsClick: function (el) {
            // console.log(el);
            let element = el.srcElement;
            if (element.classList.contains('tabs__item')) {
                this.currentTabId = element.getAttribute('data-tab-id') ? element.getAttribute('data-tab-id') : null;

                [...document.querySelectorAll('.tabs__item.choices-selector__item')].forEach(s => {
                    s.classList.remove('choices-selector__item--selected')
                });
                element.classList.add('choices-selector__item--selected')
            }
        }
    },
}
</script>