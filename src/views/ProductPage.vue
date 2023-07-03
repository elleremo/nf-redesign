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


                            <!-- <button class="button">elwmgvwmeg</button> -->
                        </div>
                    </div>
                </div>

                <div class="product-page__images">
                    <div class="product-page__images-item" v-for="(card, key) in new Array(4)">
                        <img :src="`../../public/product_page/${key + 3}.png`" alt="" class="product-card__image">
                    </div>
                </div>

            </div>

            <div class="product-page__layout-outer">

            </div>
        </div>
    </div>
</template>

<script>
// import ProductCard from '../components/site/ProductCard.vue';

export default {
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
    },
    methods: {
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