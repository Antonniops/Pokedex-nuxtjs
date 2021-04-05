<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-4 text-center">
          <img :src="pokeball" alt="Pokeball" />

          <h2 class="text-center">Búsqueda</h2>
          <p class="text-center">
            Con nuestra función de búsqueda podrás encontrar rápidamente
            cualquier pokemon de la pokédex.
          </p>
        </div>

        <div class="col-lg-4 text-center">
          <img :src="superball" alt="Superball" />

          <h2 class="text-center">Pokémon</h2>
          <p class="text-center">
            Con información de la api oficial de pokémon podrás visualizar los
            detalles que caracterizan a cada pokémon.
          </p>
        </div>

        <div class="col-lg-4 text-center">
          <img :src="ultraball" alt="Ultraball" />

          <h2 class="text-center">Filtrado</h2>
          <p class="text-center">
            Si quieres buscar pokémon por tipos con las funciones de Filtrado
            podrás encontrarlos de una forma fácil e intuitiva.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'About',
  data() {
    return {
      pokeball: require('~/assets/pokeball.png'),
      superball: require('~/assets/superball.png'),
      ultraball: require('~/assets/ultraball.png'),
    }
  },
}
</script>


<style lang="css">
img {
  height: 100px;
  width: 100px;
}
</style>