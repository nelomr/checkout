<template>
    <div class="step-content is-thankyou-page">
        <div class="step-content--box">
            <div class="step-content--img"><img :src="`${content.img}`" alt=""></div>
            <div class="step-content--title" v-text="content.title"></div>
            <div class="step-content--description" v-text="content.text"></div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    }
}
</script>