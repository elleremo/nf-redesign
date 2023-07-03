<template>
    <div class="product-card">
        <span class="badge product-card__badge">SALE</span>
        <div class="product-card__image-wrapper">
      
            <img :src="`../../public/product_images/${keyn + 1}.png`" alt="" class="product-card__image">
        </div>
        <div class="product-card__text">
            <h3 class="product-card__name">
              HOODIE / 8th HOKAGE
            </h3>
            <span class="product-card__price">
                12 800 ₽
            </span>
        </div>
    </div>
</template>

 <script>


export default {
    props: {
        keyn: Number
    }, 
    data() {
        return {
            parentList: ['Унисекс', 'Мужское', 'Женское'],
            childList: ['hero academia', 'magic battle', 'hellsing', 'evangelion', 'demon slayer', 'naruto', 'attack on titan', 'shaman king', 'jojo', 'berserk', 'chainsaw man', 'bleach', 'dorohedoro', 'one pice'],
            filterIsOpen: false
        }
    },

    mounted(){
        console.log( this.props );
    }
}
</script>