<template>
    <div class="step-buttons">
        <button @click="prev()" :class="{'is-hidden': currentStep < 2 || currentStep >= 3}" class="step-button is-prev">
            <i><IconButtonLeft></IconButtonLeft></i>
            Anterior
        </button>
        <button @click="next()" v-if="currentStep < 3" class="step-button is-next">
            Continuar
            <i><IconButtonRight></IconButtonRight></i>
        </button>
    </div>
</template>

<script>
import IconButtonRight from './icons/IconButtonRight.vue';
import IconButtonLeft from './icons/IconButtonLeft.vue'

export default {
    components: {
        IconButtonRight,
        IconButtonLeft
    },
    computed: {
        currentStep() {
            return this.$store.state.step;
        }
    },
    methods: {
        next() {
            if (this.currentStep == 2) {
                this.$store.dispatch('paymentCall');
                return
            }
            if (this.currentStep < 3) {
                this.$store.dispatch('incrementStep');
            }
        },
        prev() {
            if (this.currentStep > 1) {
                this.$store.dispatch('decreaseStep');
            }
        }
    }
}
</script>