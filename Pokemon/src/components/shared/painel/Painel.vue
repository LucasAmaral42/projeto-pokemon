<template>
  <div class="card">
    <div class="card-body">
        <span >
          <h4 class=" d-inline">{{ numero }}</h4>
          <h4 class="d-inline">{{ nome }}</h4>
        </span>
          <p class="">{{ primaria }}</p>
          <p  class="">{{ secundaria }}</p>
          <h2 class="text-right">{{ geracao }}</h2>
      </div>
  </div>
</template>

<script>
export default {
  props: ['numero', 'nome', 'primaria', 'secundaria', 'geracao'],
}
</script>

<style scoped>
  
</style>