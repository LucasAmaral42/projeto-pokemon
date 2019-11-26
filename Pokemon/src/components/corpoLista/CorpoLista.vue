<template>
  <div>

    <div class="p-3">
        <input type="text" 
        class="form-control mb-1"
        v-on:input="filtro = $event.target.value"
        placeholder="Busque o Pokemon por nome ou número...">

        
    </div>  
      
    <div class="corpo shadow-lg py-4 px-3 bg-white">
        <ul class="card-columns mt-4">
        <li class="" v-for="pokemon of pokemonsComFiltro">
            <painel  
            :numero="pokemon.row" 
            :nome="pokemon.name"
            :stat="pokemon.p100_CP_40"
            :primaria="pokemon.type_1"
            :secundaria="pokemon.type_2" 
            :geracao="pokemon.generation">
            </painel>
        </li>
        </ul>
    </div>

  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';

export default {
    
    components: {
        'painel': Painel
    },

    data(){
      return{
        pokemons : [],
        filtro : ''
      }
    },

    computed: {
      pokemonsComFiltro(){
        if (this.filtro) {
          let exp = new RegExp(this.filtro.trim(), 'i');
          return this.pokemons.filter(pokemon => exp.test(pokemon.name));
        } else{
          return this.pokemons;
        }
      }
    },

    created(){
      this.$http.get('http://localhost:3000/')
        .then(res => res.json())
        .then(pokemons => this.pokemons = pokemons, err => console.log(err))
    }

}
</script>

<style scoped>
    li{
        list-style-type: none;
    }
</style>