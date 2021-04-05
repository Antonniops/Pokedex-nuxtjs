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
              <nuxt-link to="/pokemon/list" class="nav-link">
                {{ $t('home') }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/about" class="nav-link">
                {{ $t('about') }}
              </nuxt-link>
            </li>
          </ul>
          <p
            v-for="locale in availableLocales"
            :key="locale.code"
            @click="changeLang(locale.code)"
            class="nav-item mb-0 me-5 px-2 py-1 btn btn-outline-primary"
          >
            {{ locale.name }}
          </p>

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
              {{ $t('search') }}
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
      searchQuery: '',
    }
  },
  methods: {
    search() {
      // Emitir evento de búsqueda
      if (this.searchQuery) {
        this.$router.push({
          path: '/pokemon/' + this.searchQuery.toLowerCase(),
        })
      }
    },
    changeLang() {
      this.$i18n.locale = 'en'
    },
  },
  computed: {
    searchMessage() {
      return `Encontrados: `
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>