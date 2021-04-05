<template>
  <div>
    <main class="px-3 container mt-5 text-center">
      <h1>No hemos encontrado lo que estás buscando.</h1>
      <p class="lead">
        Lo sentimos, quizás deberías probar a introducir el nombre del recurso
        solicitado de forma correcta. Evita escribir números, símbolos o
        caracteres no alfabéticos.
      </p>
      <img :src="notfound" alt="Recurso no encontrado" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Notfound',
  data() {
    return {
      notfound: require('~/assets/notfound.png'),
    }
  },
}
</script>

<style lang="css" scoped>
h1 {
  color: #212529;
}
p {
  color: darkgray;
}
img {
  width: 300px;
  height: 200px;
}
</style>