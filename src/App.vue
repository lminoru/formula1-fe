<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link v-if="!$store.state.username" to="/login">Login</router-link>
    <a v-if="$store.state.username" @click="logout" class="link-pointer">Logout</a>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.link-pointer {
  cursor: pointer;
}
</style>

<script>
export default {
  mounted() {
    this.$store.commit('initialiseStore')
  },
  methods: {
    logout() {
      this.$store.commit('logout')
    }

  },
}
</script>
