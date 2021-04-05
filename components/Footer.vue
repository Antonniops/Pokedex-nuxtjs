<template>
  <div class="footer">
    <footer>
      <div class="container text-center pt-4">
        <img :src="logo" alt="Pokelogo" />
        <p class="text-muted mt-3"><b>Poke Api oficial &copy;</b></p>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  name: "pokefooter",
  data() {
    return {
      logo: require("@/assets/pokelogo.png"),
    };
  },
};
</script>


<style lang="css">
.footer {
  position: absolute;
  bottom: -100;

  clear: both;

  height: 200px;
  width: 100%;

  margin-top: 5%;
  background-color: #c4c4c4;
}

footer img {
  width: 260px;
  height: 100px;
}
</style>
