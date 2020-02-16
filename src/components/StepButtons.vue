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
    data: function() {
        return {
            state: 1
        }
    },
    computed: {
        currentStep() {
            return this.state;
        }
    },
    methods: {
        next() {
            if (this.state < 3) {
                this.state++;
            }
            
        },
        prev() {
            if (this.state > 1) {
                this.state++;
            }
        }
    }
}
</script>