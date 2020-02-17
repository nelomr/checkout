<template>
    <div class="step-content">
        <div class="step-content--title">Mis Datos</div>
        <div class="step-content--description">Revisa los datos y completa aquellos pendientes antes de continuar con el proceso. </div>
        <form class="step-content--form" action="">
            <div class="step-content--field">
                <label for="Nombre">Nombre</label>
                <input :value="name" @input="updateName" name="Nombre" type="text">
            </div>
            <div class="step-content--field">
                <label for="Apellidos">Apellidos</label>
                <input :value="surname" @input="updateSurname" name="Apellidos" type="text">
            </div>
        </form>
    </div>
</template>

<script>

export default {
    computed: {
        name() {
            return this.$store.state.name;
        },
        surname() {
            return this.$store.state.surname;
        }
    },
    methods: {
        updateName (e) {
            this.$store.commit('updateName', e.target.value)
        },
        updateSurname (e) {
            this.$store.commit('updateSurname', e.target.value)
        }
    }
}
</script>
