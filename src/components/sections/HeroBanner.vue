<template>
  <section class="herobanner">
    <div class="row">
      <div class="col-sm-8">
        <div class="banner-text">
          <h2><strong>Welcome</strong></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a href="#" class="btn btn-success">Get Started</a>
          <a href="#" class="btn btn-primary">Learn More</a>
        </div>
      </div>
      <div class="col-sm-4">

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'herobanner',
};
</script>

<style scoped>
  .herobanner {
    background-image: url('https://www.forestryengland.uk/sites/default/files/styles/forest_slide_wide_desk/public/media/woodland3.jpg?h=78566fdd&itok=HXeDhGX0');
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    color: white;
    text-align:left;
    padding: 10%;
    height: 100vh;
  }

  .banner-text {
    background-color:rgba(158, 154, 154, 0.432);
    padding: 2%;
    border-radius: 5px
  }

  .banner-text > a {
    margin-right: 2%;
  }
</style>
