<template>
  <div @click="pokemonDetails(pokemon.name)">
    <article>
      <img
        :src="pokeService.spritesUrl + pokemon.id + '.png'"
        width="96"
        height="96"
        alt=""
      />
      <h3>{{ pokemon.name }}</h3>
    </article>
  </div>
</template>

<script>
import pokeService from "~/plugins/pokeService";

export default {
  name: "pokemoncard",
  props: {
    pokemon: Object,
  },
  data() {
    return {
      pokeService,
    };
  },
  methods: {
    pokemonDetails(pokename) {
      console.log(pokename);
      this.$router.push({ path: "/pokemon/" + pokename.toLowerCase() });
    },
  },
};
</script>