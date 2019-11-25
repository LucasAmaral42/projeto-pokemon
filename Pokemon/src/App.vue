<template>
  <div class="">
      <menu-topo></menu-topo>
      <div class="corpo shadow-lg py-4 px-3 bg-white">
          <formulario></formulario>

          <ul class="card-columns">
            <li class="" v-for="pokemon of pokemons.recordset">
                <painel  
                :numero="pokemon.Row" 
                :nome="pokemon.Name" :primaria="pokemon.Type_1"
                :secundaria="pokemon.Type_2" :geracao="pokemon.Generation">
                </painel>
            </li>
          </ul>
          
      </div>
  </div>
</template>

<script>
import Menu from './components/shared/menu/Menu.vue';
import Formulario from './components/shared/formulario/Formulario.vue';
import Painel from './components/shared/painel/Painel.vue';

export default {
    components: {
      'menu-topo' : Menu,
      'formulario' : Formulario,
      'painel' : Painel
    },

    data(){
      return{
        pokemons : []
      }
    },

    created(){
      this.$http.get('http://localhost:3000/')
        .then(res => res.json())
        .then(pokemons => this.pokemons = pokemons, err => console.log(err))

    }
}
</script>

<style>
  li{
    list-style-type: none;
  }

</style>