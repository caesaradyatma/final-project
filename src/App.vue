<template>
  <div id="app">
    <UserNavbar v-if="loggedin" />
    <Navbar v-else />
    <router-view class="container-fluid" />
  </div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar.vue';
import UserNavbar from '@/components/navigation/UserNavbar.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    UserNavbar,
  },
  data() {
    return {
      loggedin: this.auth(),
    };
  },
  methods: {
    auth() {
      if (localStorage.getItem('auth') == 1) {
        return true;
      } return false;
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.text-title{
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 2%;
  font-weight: bold;
}

.post-content{
  text-align:justify;
}
</style>
