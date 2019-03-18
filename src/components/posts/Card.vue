<template>
  <div class="card">
    <div class="card-body">
      <a :href="'post/' + id">
        <div class="row horizontal" v-if="horizontal">
          <div class="col-sm-4">
            <img class="card-img-top" src="https://st.motortrend.com/uploads/sites/5/2017/02/2016-BMW-M2-Coupe-front-three-quarter-burnout1.jpg" alt="Card image cap">
          </div>
          <div class="col-sm-8">
            <h5 class="card-title"><strong>{{title}}</strong></h5>
            <p class="card-text">{{desc}}</p>
          </div>
        </div>
      </a>
      <div class="vertical" v-if="vertical">
        <a :href="'post/' + id">
          <img class="card-img-top" src="https://st.motortrend.com/uploads/sites/5/2017/02/2016-BMW-M2-Coupe-front-three-quarter-burnout1.jpg" alt="Card image cap">
          <h5 class="card-title"><strong>{{title}}</strong></h5>
          <p class="card-text">{{desc}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    horizontal: Boolean,
    vertical: Boolean,
    id: Number,
    imgUrl: String,
    title: String,
    desc: String,
    post: Object,
    posts: Object,
  },
};
</script>

<style scoped>
  .card {
    margin:5%;
    text-align: left;
  }

  .horizontal {
    text-align: left;
  }

  a{
    color:black;
  }

  .card:hover{
    background-color:rgba(12, 156, 240, 0.575);
  }
</style>
