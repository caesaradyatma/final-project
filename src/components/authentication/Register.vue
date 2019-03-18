<template>
  <div class="register row">
    <div class="col-sm-8">
      <div class="register-form">
        <h2><strong>Kata - kata mengajak ingin register</strong></h2>
        <p>daftar lah tot</p>
        <div class="row">
          <div class="col-sm-6">
            <input type="email"  id="email-input" class="form-control emailinput"
            placeholder="Email" v-model="email">
            <input type="username" name="username-input" id="username-input"
            class="form-control usernameinput" placeholder="Username" v-model="username">
            <input type="password" name="password-input" id="password-input"
            class="form-control passwordinput" placeholder="Password" v-model="password">
            <button name="register-button" id="register-button"
            class="btn btn-success registerbutton" @click="register">Register</button>
          </div>
          <div class="col-sm-6">

          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="register-ad">
        <h2><strong><i>"Habis cipok minta nenen, gak kerasa besok senen" - rizky jonru</i></strong></h2>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'register',
  data() {
    return {
      email: '',
      username: '',
      password: '',
    };
  },
  methods: {
    loginForm() {
      this.registerSeen = false,
      this.loginSeen = true
    },
    register() {
      console.log(this.email);
    },
  },
};
</script>

<style scoped>
  .register {
    color:white;
    text-align:left;
  }

  .register {
    padding-top:10%;
  }

  .register-form {
    background-color:rgba(175, 175, 175, 0.8);
    border-radius: 5px;
    padding: 3%;
  }

  .register-ad {
    background-color:rgba(175, 175, 175, 0.8);
  }

  input {
    margin: 3%;
  }

  button {
    margin: 3%;
  }
</style>
