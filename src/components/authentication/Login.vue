<template>
  <div class="login row">
    <div class="col-sm-4"></div>
    <div class="col-sm-4">
      <center>
        <div class="login-form">
          <h2>Welcome Back!</h2>
          <input type="email" id="email-input" class="form-control emailinput"
          placeholder="Email">
          <input type="password" id="password-input"
          class="form-control passwordinput" placeholder="Password">
          <button name="register-button" id="register-button"
          class="btn btn-success loginbutton">Login</button>
        </div>
      </center>
    </div>
    <div class="col-sm-4"></div>
  </div>
</template>

<script>

export default {
  name: 'login',
  methods: {
    registerForm() {
      this.registerSeen = true,
      this.loginSeen = false
    },
  },
};
</script>

<style scoped>
  .login {
    margin-top:10%;
    color:white;
  }

  .login-form {
    background-color:rgba(175, 175, 175, 0.8);
    margin-top:15%;
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
