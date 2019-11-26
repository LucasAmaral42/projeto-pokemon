<template>
    <div>
        <div class="d-flex flex-wrap justify-content-end justify-content-between">
          <ul>
            <li>
              <h4 class="">{{ pokemon }}</h4>
            </li>
          </ul>
      </div>
    </div>
</template>

<script>
export default {
    props: ['pokemon'],
}
</script>

<style scoped>
    
</style>