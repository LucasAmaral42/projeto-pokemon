<template>
  <div class="card">
    <div class="card-body">
        <div class="d-flex flex-wrap justify-content-end justify-content-between">
          <h4 class="">{{ numero }}</h4>
          <h4 class="">{{ nome }}</h4>
        </div>
          <h5 class="text-right">100% CP 40 = {{ stat }}</h5>
          <h5 class="mt-5">{{ primaria }}</h5>
          <h5  class="">{{ secundaria }}</h5>
          <h2 class="text-right mt-5">Geração {{ geracao }}</h2>
      </div>
  </div>
</template>

<script>
export default {
  props: ['numero', 'nome', 'stat', 'primaria', 'secundaria', 'geracao'],
}
</script>

<style scoped>
  .card {
    cursor: pointer;
  }
</style>