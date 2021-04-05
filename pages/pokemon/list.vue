<template>
  <div>
    <div v-show="isLoading">
      <Loader></Loader>
    </div>
    <div
      class="row container justify-content-center mx-auto mt-5"
      v-show="!isLoading"
    >
      <PokemonCard
        v-for="(pokemon, index) in pokedex"
        :key="'poke' + index"
        :pokemon="pokemon"
        class="col-sm-6 col-md-4 col-lg-3 my-3"
      >
      </PokemonCard>

      <div class="mt-5 text-center">
        <button class="btn btn-warning py-2 px-5 text-dark" @click="loadMore()">
          Ver más
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonCard from '~/components/PokemonCard.vue'
import pokeService from '~/plugins/pokeService.js'

import Loader from '~/components/shared/Loader'

export default {
  name: 'pokemonlist',
  components: {
    PokemonCard,
    Loader,
  },
  data() {
    return {
      pokemons: [],
      isLoading: false,
      searchQuery: '',
      limit: 100,
      offset: 0,
      pokeService,
    }
  },

  mounted() {
    // Cargamos la pokédex al montar el componente
    this.loadPokedex()
  },
  methods: {
    loadPokedex() {
      // Activamos el spinner de carga
      this.isLoading = true

      // Llamada al servicio
      this.pokeService
        .all(this.limit, this.offset)
        .then((resp) => {
          if (resp.status === 200) return resp.clone().json()
        })
        .then((data) => {
          data.results.forEach((pokemon) => {
            // Obtener id del pokemon a partir de la url recibida
            pokemon.id = pokemon.url
              .split('/')
              .filter(function (part) {
                return !!part
              })
              .pop()

            // Añadir al array de pokemons
            this.pokemons.push(pokemon)
          })

          // Ocultar spinner de carga
          this.isLoading = false
        })
    },
    loadMore() {
      // Aumentar los límites
      this.limit += 100
      this.offset += 100

      // Cargar pokédex
      this.loadPokedex()

      // Hacer scroll al final de los resultados
      window.scrollTo({ bottom: 0, behavior: 'smooth' })
    },
  },
  computed: {
    pokedex() {
      return this.pokemons.filter((poke) =>
        poke.name.includes(this.searchQuery)
      )
    },
  },
}
</script>

<style lang="css">
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 50px;
  width: 100%;
}

article {
  height: 150px;
  background-color: #efefef;
  text-align: center;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}
h3 {
  margin: 0;
}
</style>