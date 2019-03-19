<template>
  <div class="card">
    <div class="card-body">
      <div class="row horizontal" v-if="horizontal">
        <div class="col-sm-8">
          <h5 class="card-title"><strong>{{title}}</strong></h5>
          <small>{{desc}}</small>
          <p class="card-text">{{author}}</p>
          <small>{{date}}</small>
        </div>
        <div class="col-sm-4">
          <img class="card-img-top" src="https://st.motortrend.com/uploads/sites/5/2017/02/2016-BMW-M2-Coupe-front-three-quarter-burnout1.jpg" alt="Card image cap">
        </div>
        <div class="col-sm-12">
          <hr>
          <router-link :to="'/post/' + id" class="btn btn-primary" v-if="user">Update Content</router-link>
          <router-link :to="'/post/' + id" class="btn btn-primary" v-else>Go Somewhere</router-link>
          <!-- <a :href="'post/' + id" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
      <div class="vertical" v-if="vertical">
        <img class="card-img-top" src="https://st.motortrend.com/uploads/sites/5/2017/02/2016-BMW-M2-Coupe-front-three-quarter-burnout1.jpg" alt="Card image cap">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <router-link :to="'/post/' + id" class="btn btn-primary" v-if="user">Update Content</router-link>
        <router-link :to="'/post/' + id" class="btn btn-primary" v-else>Go Somewhere</router-link>
        <!-- <a :href="'post/' + id" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardinverted',
  props: {
    horizontal: Boolean,
    vertical: Boolean,
    title: String,
    desc: String,
    author: String,
    date: String,
    id: Number,
  },
};
</script>

<style scoped>
  .card {
    margin:5%;
  }

  .horizontal {
    text-align: left;
  }
</style>
