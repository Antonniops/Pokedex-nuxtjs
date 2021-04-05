<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/pokemon/list" class="navbar-brand"
          >PokéDex</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
          <form class="d-flex" @submit.prevent>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar pokemon"
              aria-label="Buscar"
              v-model="searchQuery"
              @keyup.enter.prevent="search"
            />
            <button
              class="btn btn-outline-success"
              type="button"
              @click="search()"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'pokeheader',
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      // Emitir evento de búsqueda
      this.$router.push({ path: '/pokemon/' + this.searchQuery.toLowerCase() });
    },
  },
  computed: {
    searchMessage() {
      return `Encontrados: `;
    },
  },
};
</script>