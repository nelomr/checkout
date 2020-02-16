<template>
    <div class="step-content">
        <div class="step-content--title">Pago del producto</div>
        <div class="step-content--description">Una vez efectuado el pago del producto, recibirás un email con los detalles de la compra.</div>
        <div class="step-content--box">
            <div class="step-content--img"><IconCards></IconCards></div>
            <div class="step-content--title">Tarjeta de crédito</div>
            <div class="step-content--description">Se redirigirá a una plataforma de pago. Se trata de un proceso seguro. Puede que la validación del pago tarde 24 horas en completarse.</div>
        </div>
    </div>
</template>

<script>
import IconCards from './icons/IconCards.vue';

export default {
    components: {
        IconCards
    }
}
</script>