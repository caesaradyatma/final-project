<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <a class="navbar-brand" href="#">Easy</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/about" class="nav-item nav-link">About</router-link>
        <router-link to="/user" class="nav-item nav-link">Dashboard</router-link>
        <a href="#" class="nav-item nav-link" @click="logout">Logout</a>
      </div>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'usernavbar',
  methods: {
    logout() {
      // this.$store.commit('logout');
      localStorage.setItem('auth', 0);
      location.reload();
    },
  },
};
</script>
