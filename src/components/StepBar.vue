<template>
    <div class="steps">
        <div class="container">
            <div
            v-for="(step, index) in steps"
            :key="index"
            class="step">
                <div class="step--number"
                :class="{'is-active': currentStep == step.step, 'is-completed': currentStep > step.step}" 
                >
                    <span v-if="currentStep <= step.step" class="step--number-text" v-text="step.step"></span>
                    <i class="step--completed" v-if="currentStep > step.step">
                        <IconCheck></IconCheck>
                    </i>
                </div>
                <div class="step--text" v-text="step.title"></div>
            </div>
        </div>
    </div>
</template>

<script>
import IconCheck from "./icons/IconCheck";

export default {
    components: {
        IconCheck
    },
    data: function() {
        return {
            steps: [
                {
                    step: 1,
                    title: 'Datos',
                    completed: false
                },
                {
                    step: 2,
                    title: 'Pago',
                    completed: false
                }
            ],
            state: 1
        }
    },
    computed: {
        currentStep() {
            return this.state;
        }
    }
}
</script>