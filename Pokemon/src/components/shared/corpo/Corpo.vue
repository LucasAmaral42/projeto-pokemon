<template>
  <div class="corpo shadow-lg py-4 px-3 m-2 bg-white rounded">
    <formulario></formulario>
    <painel></painel>
  </div>
</template>

<script>
import Formulario from '../formulario/Formulario.vue';
import Painel from '../painel/Painel.vue';

export default {
    components: {
        'formulario' : Formulario,
        'painel' : Painel
    }
}
</script>

<style scoped>

</style>