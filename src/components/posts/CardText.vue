<template>
  <div class="card">
    <div class="card-body">
      <div class="row horizontal" v-if="horizontal">
        <div class="col-sm-4">
          <h2>{{order}}</h2>
        </div>
        <div class="col-sm-8">
          <h5 class="card-title"><strong>{{title}}</strong></h5>
          <p class="card-text">{{author}}</p>
          <small>{{date}}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardtext',
  props: {
    horizontal: Boolean,
    vertical: Boolean,
    order: Number,
    title: String,
    date: String,
    author: String,
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
