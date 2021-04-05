<template>
  <div class="container">
    <Loader v-if="isLoading"></Loader>

    <div id="card" v-if="!isLoading">
      <img
        :src="pokeService.spritesUrl + pokemon.id + '.png'"
        alt="pokemon image"
      />

      <div id="card-body">
        <h2 class="mb-5">{{ pokename }}</h2>

        <p class="text-start">
          <b>Base Experience / Experiencia: </b>
          <span>{{ pokemon.base_experience }}</span>
        </p>
        <p class="text-start">
          <b>Height / Altura: </b>
          <span>{{ pokemon.height / 10 }} m </span>
        </p>
        <p class="text-start">
          <b>Weight / Peso: </b>
          <span>{{ pokemon.weight }} kg</span>
        </p>

        <h3 class="text-start mt-5">Types / Tipos</h3>

        <div class="row type mt-3">
          <span
            class="type-box rounded-pill col-2 mx-2"
            v-for="(value, index) in pokemon.types"
            :class="value.type.name"
            :key="index"
          >
            {{ value.type.name }}
          </span>
        </div>

        <h3 class="text-start mt-5">Abilities / Habilidades</h3>

        <div class="row type mt-3">
          <span
            class="hability-box border border-success text-success rounded-pill col-3 mx-2"
            v-for="(value, index) in pokemon.abilities"
            :key="index"
          >
            {{ value.ability.name }}
          </span>
        </div>

        <div class="mt-5 text-center">
          <button class="btn btn-warning text-white" @click="retroceder()">Volver</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import pokeService from "~/plugins/pokeService";
import Loader from "~/components/shared/Loader";

export default {
  name: "pokemondetail",
  data() {
    return {
      pokemon: {},
      pokeService,
      isLoading: false,
    };
  },
  components: {
    Loader,
  },
  fetch() {
    // Activamos el spinner de carga
    this.isLoading = true;
    if (this.pokename) {
      this.searchPokemon();
    }
  },
  head(){
    return {
      title: this.pokename
    }
  },
  asyncData({params}) {
      return {pokename: params.name}
  },
  methods: {
    searchPokemon() {
      // Llamada al servicio
      this.pokeService
        .pokemonByName(this.pokename)
        .then((res) => {
          if (res.status === 404) this.$router.push("/404");
          if (res.status === 200) return res.json();
        })
        .then((data) => {
          // Añadir al array de pokemons
          this.pokemon = data;

          // Ocultar spinner de carga
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    retroceder(){
      this.$router.push('/pokemon/list');
    },
  },
};
</script>


<style lang="css" scoped>
h2,
h3 {
  text-transform: capitalize;
  color: #212529;
}

p,
span {
  color: #212529;
}

#card {
  position: relative;

  width: 700px;

  margin: 8% auto 5% auto;
  text-align: center;

  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
}

#card img {
  position: absolute;
  top: -60px;
  left: 0;
  right: 0;

  margin: 0 auto;

  align-items: center;

  width: 120px;
  height: 120px;

  border-radius: 50%;
  background-color: #ffcb04;
}

#card-body {
  padding: 10% 4% 2% 4%;
}

#card-body .type-box {
  padding: 1% 2%;

  color: white;

  text-transform: capitalize;
  font-weight: bold;
}

#card-body .hability-box {
  text-transform: capitalize;
  font-weight: bold;
}

.grass {
  background: rgb(3, 139, 44) !important;
}
.poison {
  background: rgb(74, 7, 105) !important;
}
.water {
  background: rgb(8, 135, 219) !important;
}
.dragon {
  background: rgb(27, 2, 68) !important;
}
.ice {
  background: rgb(78, 199, 255) !important;
}
.flying {
  background: rgb(145, 215, 255) !important;
}
.fire {
  background: rgb(238, 135, 17) !important;
}
.ghost {
  background: rgb(74, 52, 87) !important;
}
.fighting {
  background: rgb(122, 0, 0) !important;
}
.normal {
  background: rgb(104, 104, 104) !important;
}
.psychic {
  background: rgb(195, 0, 255) !important;
}
.bug {
  background: rgb(52, 87, 6) !important;
}
.dark {
  background: rgb(43, 43, 43) !important;
}
.steel {
  background: rgb(116, 116, 116) !important;
}
.fairy {
  background: rgb(248, 165, 237) !important;
}
.electric {
  background: rgb(255, 217, 1) !important;
}
.rock {
  background: rgb(88, 95, 100) !important;
}
.ground {
  background: rgb(92, 70, 70) !important;
}
</style>