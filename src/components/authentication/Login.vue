<template>
  <div class="login">
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
        <center>
          <div class="login-form">
            <h2 class="text-title">WELCOME BACK</h2>
            <input type="email" v-model="email" class="form-control emailinput"
            placeholder="Email">
            <input type="password" v-model="password"
            class="form-control passwordinput" placeholder="Password">
            <button class="btn btn-success loginbutton" @click="login">Login</button>
          </div>
        </center>
      </div>
      <div class="col-sm-4"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    registerForm() {
      this.registerSeen = true,
      this.loginSeen = false
    },
    login() {
      if (this.email === this.$store.state.email && this.password === this.$store.state.password) {
        //this.$store.commit('login');
        localStorage.setItem('auth', 1);
        if (localStorage.getItem('auth') == 1) {
          console.log('berhasil login');
          location.replace('/user');
        }
      }
    },
  },
};
</script>

<style scoped>
  .login {
    /* margin-top:10%; */
    color:white;
  }

  .login-form {
    background-color:rgba(175, 175, 175, 0.8);
    /* margin-top:15%; */
    border-radius: 5px;
    padding: 3%;
  }

  .distance {
    margin-bottom:5%;
  }

  .emailinput {
    margin-bottom:3%;
  }

  .passwordinput {
    margin-bottom:3%;
  }
</style>
