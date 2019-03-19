<template>
  <div class="authentication">
    <div class="row">
      <div class="col-sm-12">
        <Register v-if="registerSeen"/>
        <Login v-if="loginSeen"/>
      </div>
      <div class="col-sm-12">
        <center>
          <button v-on:click="loginForm"
          v-if="registerSeen"
          class="btn btn-primary auth-redirect">Already have an account? Click Here</button>
          <button v-on:click="registerForm"
          v-if="loginSeen"
          class="btn btn-primary auth-redirect">New Around Here? Be a Part of our Family</button>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
import Register from '@/components/authentication/Register.vue';
import Login from '@/components/authentication/Login.vue';

export default {
  name: 'authentication',
  data() {
    return {
      registerSeen: true,
      loginSeen: false,
    };
  },
  components: {
    Register,
    Login,
  },
  methods: {
    registerForm() {
      this.registerSeen = true,
      this.loginSeen = false
    },
    loginForm() {
      this.registerSeen = false,
      this.loginSeen = true
    },
  },
};
</script>

<style scoped>
  .authentication {
    /* background-image:url('https://cdn.vox-cdn.com/thumbor/ffqNXHDvkRBy5PMkA6Z-KQtOjJ8=/0x0:2874x2126/1200x800/filters:focal(1208x834:1666x1292)/cdn.vox-cdn.com/uploads/chorus_image/image/59841589/FullSizeRender_24.0.jpg');
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat; */
    /* height: 100%; */
    padding: 2%;
  }

  .auth-redirect {
    margin-top: 2%;
  }
</style>
