<template>
    <div class="container is-fullwidth catalog-st">
        <div class="products-cat">
            <h1 class="page-title products-cat__title">Унисекс</h1>
            <div class="products-cat__list-wrapper">
                <ul class="select-list select-list--scrollable select-list--horizontal products-cat__select-list">
                    <li class="select-list__item" v-for="(item, n) in parentList">
                        <a class="choice choice--accent" :class="{ 'choice--accent--active': n == 0 }">{{ item }}</a>
                    </li>
                </ul>
                <ul class="select-list select-list--scrollable select-list--horizontal products-cat__select-list">
                    <li class="select-list__item" v-for="(item, n) in childList">
                        <a class="choice choice--accent" :class="{ 'choice--accent--active': n == 5 }">{{ item }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="hystmodal" id="myModal" aria-hidden="true">
        <div class="hystmodal__wrap">
            <div class="hystmodal__window" role="dialog" aria-modal="true">
                <button data-hystclose class="hystmodal__close">Close</button>
                <form action="" class="form filter__extended" :class="{ 'filter__extended--is-open': filterIsOpen }">
 
                    <div class="fildset-oveflow">

                        <fieldset class="filter__line filter__checked-options"></fieldset>

                    </div>

                    <div class="fildset-oveflow">

                        <fieldset class="filter__line filter__colors">

                            <!-- <div class="control"></div> -->
                            <label class="form__control filter__line-item">
                                <input type="radio" name="filter-colors" class="choice choice--color filter__choice"
                                    data-filter-color="red">

                            </label>

                            <label class="form__control  filter__line-item">
                                <input type="radio" name="filter-colors" class="choice choice--color filter__choice"
                                    data-filter-color="blue">
                            </label>

                            <label class="form__control  filter__line-item">
                                <input type="radio" name="filter-colors" class="choice choice--color filter__choice"
                                    data-filter-color="yellow">
                            </label>

                            <label class="form__control  filter__line-item">
                                <input type="radio" name="filter-colors" class="choice choice--color filter__choice"
                                    data-filter-color="green">
                            </label>

                        </fieldset>
                    </div>

                    <div class="fildset-oveflow">

                        <fieldset class="filter__line filter__sizes">

                            <label class="form__control filter__line-item">
                                <input type="radio" name="filter-size" class="choice choice--text filter__choice"
                                    data-size-val="s">
                            </label>

                            <label class="form__control  filter__line-item">
                                <input type="radio" name="filter-size" class="choice choice--text filter__choice"
                                    data-size-val="m">
                            </label>

                            <label class="form__control  filter__line-item">
                                <input type="radio" name="filter-size" class="choice choice--text filter__choice"
                                    data-size-val="l">
                            </label>

                            <label class="form__control filter__line-item">
                                <input type="radio" name="filter-size" class="choice choice--text filter__choice"
                                    data-size-val="xxxl">
                            </label>

                        </fieldset>
                    </div>

                    <div class="fildset-oveflow">
                        <fieldset class="filter__line filter__sizes">

                            <label class="form__control filter__line-item">
                                <input type="radio" name="filter-type" class="choice choice--text filter__choice"
                                    data-size-val="вышивка">
                            </label>

                            <label class="form__control  filter__line-item">
                                <input type="radio" name="filter-type" class="choice choice--text filter__choice"
                                    data-size-val="Reflective">
                            </label>

                            <label class="form__control  filter__line-item">
                                <input type="radio" name="filter-type" class="choice choice--text filter__choice"
                                    data-size-val="Oversize">
                            </label>

                            <label class="form__control filter__line-item">
                                <input type="radio" name="filter-type" class="choice choice--text filter__choice"
                                    data-size-val="Прототип">
                            </label>

                            <label class="form__control filter__line-item">
                                <input type="radio" name="filter-type" class="choice choice--text filter__choice"
                                    data-size-val="Теплое">
                            </label>

                        </fieldset>
                    </div>
                    <div class="fildset-oveflow">
                        <fieldset class="filter__line filter__sizes">
                            <label class="form__control filter__line-item" v-for="(item, n) in childList">
                                <input type="radio" name="filter-tag" class="choice choice--text choice--accent choice--tag"
                                    :data-size-val="item">
                            </label>
                        </fieldset>
                    </div>

                    <fieldset class="filter__line filter__submits">

                        <div class="row" style="width: 100%;">
                            <div class="col is-16  is-md-8">
                                <button type="submit" class="button">Показать результаты</button>
                            </div>
                            <div class="col is-16 is-md-8">
                                <button type="reset" class="button button--secondary">очистить фильтры</button>
                            </div>
                        </div>
                    </fieldset>

                </form>
            </div>
        </div>
    </div>

    <!-- <div  data-hystmodal=".hystmodal">Open modal with id=myModal</div> -->

    <div class="container is-fullwidth catalog-st filter" :class="{ 'filter--is-open': filterIsOpen }">
        <div class="row is-gap-0 is-between is-center is-middle filter__base">

            <div class="button button--has-icon button--no-design filter__toggle" @click="filterIsOpen = !filterIsOpen">
                <span>Фильтры:</span>
                <i class="mi icon icon--34 icon--circle  button__icon" data-icon="add">add</i>
            </div>

            <div class="button button--has-icon button--no-design filter__toggle--mobile"  data-hystmodal=".hystmodal">
                <span>Фильтры:</span>
                <i class="mi icon icon--34 icon--circle  button__icon" data-icon="add">add</i>
            </div>
  
            <div class="products-ordering filter__products-ordering">
                <ul class="products-ordering__list">
                    <li class="products-ordering__item ">Новинки</li>
                    <li class="products-ordering__item products-ordering__item--active">Популярные</li>
                    <li class="products-ordering__item ">Цена: по возрастанию</li>
                    <li class="products-ordering__item ">Цена: по убыванию</li>
                </ul>
            </div>
        </div>

        <form action="" class="form filter__extended" :class="{ 'filter__extended--is-open': filterIsOpen }">

            <div class="filter__extended-close" @click="filterIsOpen = !filterIsOpen">
                <i class="mi icon--34">close</i>
            </div>

            <div class="fildset-oveflow">

                <fieldset class="filter__line filter__checked-options"></fieldset>

            </div>

            <div class="fildset-oveflow">

                <fieldset class="filter__line filter__colors">

                    <!-- <div class="control"></div> -->
                    <label class="form__control filter__line-item">
                        <input type="radio" name="filter-colors" class="choice choice--color filter__choice"
                            data-filter-color="red">

                    </label>

                    <label class="form__control  filter__line-item">
                        <input type="radio" name="filter-colors" class="choice choice--color filter__choice"
                            data-filter-color="blue">
                    </label>

                    <label class="form__control  filter__line-item">
                        <input type="radio" name="filter-colors" class="choice choice--color filter__choice"
                            data-filter-color="yellow">
                    </label>

                    <label class="form__control  filter__line-item">
                        <input type="radio" name="filter-colors" class="choice choice--color filter__choice"
                            data-filter-color="green">
                    </label>

                </fieldset>
            </div>

            <div class="fildset-oveflow">

                <fieldset class="filter__line filter__sizes">

                    <label class="form__control filter__line-item">
                        <input type="radio" name="filter-size" class="choice choice--text filter__choice" data-size-val="s">
                    </label>

                    <label class="form__control  filter__line-item">
                        <input type="radio" name="filter-size" class="choice choice--text filter__choice" data-size-val="m">
                    </label>

                    <label class="form__control  filter__line-item">
                        <input type="radio" name="filter-size" class="choice choice--text filter__choice" data-size-val="l">
                    </label>

                    <label class="form__control filter__line-item">
                        <input type="radio" name="filter-size" class="choice choice--text filter__choice"
                            data-size-val="xxxl">
                    </label>

                </fieldset>
            </div>

            <div class="fildset-oveflow">
                <fieldset class="filter__line filter__sizes">

                    <label class="form__control filter__line-item">
                        <input type="radio" name="filter-type" class="choice choice--text filter__choice"
                            data-size-val="вышивка">
                    </label>

                    <label class="form__control  filter__line-item">
                        <input type="radio" name="filter-type" class="choice choice--text filter__choice"
                            data-size-val="Reflective">
                    </label>

                    <label class="form__control  filter__line-item">
                        <input type="radio" name="filter-type" class="choice choice--text filter__choice"
                            data-size-val="Oversize">
                    </label>

                    <label class="form__control filter__line-item">
                        <input type="radio" name="filter-type" class="choice choice--text filter__choice"
                            data-size-val="Прототип">
                    </label>

                    <label class="form__control filter__line-item">
                        <input type="radio" name="filter-type" class="choice choice--text filter__choice"
                            data-size-val="Теплое">
                    </label>

                </fieldset>
            </div>
            <div class="fildset-oveflow">
                <fieldset class="filter__line filter__sizes">
                    <label class="form__control filter__line-item" v-for="(item, n) in childList">
                        <input type="radio" name="filter-tag" class="choice choice--text choice--accent choice--tag"
                            :data-size-val="item">
                    </label>
                </fieldset>
            </div>

            <fieldset class="filter__line filter__submits">

                <div class="row" style="width: 100%;">
                    <div class="col is-16  is-md-8">
                        <button type="submit" class="button">Показать результаты</button>
                    </div>
                    <div class="col is-16 is-md-8">
                        <button type="reset" class="button button--secondary">очистить фильтры</button>
                    </div>
                </div>
            </fieldset>

        </form>
    </div>

    <div class="container is-fullwidth is-grid-style">
        <div class="row is-gap-0 ">

            <div class="col is-8 is-lg-4 is-big-4" v-for="(card, key) in new Array(8)">
                 <ProductCard :keyn="key"/>
            </div>
        </div>

    </div>
</template>

<script >
  
import ProductCard from '../components/site/ProductCard.vue'; 

export default {

    components: {ProductCard},
    data() {
        return {
            parentList: ['Унисекс', 'Мужское', 'Женское'],
            childList: ['hero academia', 'magic battle', 'hellsing', 'evangelion', 'demon slayer', 'naruto', 'attack on titan', 'shaman king', 'jojo', 'berserk', 'chainsaw man', 'bleach', 'dorohedoro', 'one pice'],
            filterIsOpen: false
        }
    },
    mounted() {
        const myModal = new HystModal({
            linkAttributeName: "data-hystmodal",
            //settings (optional). see Configuration
        });
    }
 
}
</script>