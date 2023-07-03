<template>
    <fieldset class="fieldset cart__form-fieldset">

        <div class="row">
            <div class="col">
                <legend class="legend">способ оплаты</legend>

                <div class="control cart__form-control">
                    <input type="radio" name="pay-method" id="pay-method-1" value="pay-method-1" class="radio" v-model="radioSelected">
                    <label for="pay-method-1" class="label">Банковской картой</label>

                </div>
                <div class="control cart__form-control">
                    <input type="radio" name="pay-method" id="pay-method-2" value="pay-method-2" class="radio"  v-model="radioSelected">
                    <label for="pay-method-2" class="label">Долями</label>
                </div>
            </div>
            <div class="col is-16 is-big-auto">
                <!-- <div class="dolyame-info" v-if="radioSelected === 'pay-method-2'"> -->
                    <img class="dolyame-info" src="../../public/ui/dolyame.svg" alt="" v-if="radioSelected === 'pay-method-2'">
                <!-- </div> -->
            </div>
        </div>

    </fieldset>
</template>

<script>

export default {
    data() {
        return {
            radioSelected : null
            //   routes: router.getRoutes()
        }
    }
}
</script>