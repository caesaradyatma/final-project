<template>
  <section class="postheader">
    <div v-if="horizontal">
      <div class="row">
        <div class="col-sm-6">
          <p v-if="featured">FEATURED STORIES</p>
          <h1 class="text-title">{{post.title}}</h1>
          <h4>{{post.desc}}</h4>
          <p>{{post.author}}</p>
          <p>{{post.createdate}}</p>
        </div>
        <div class="col-sm-6">
          <img src="https://cdn-images-1.medium.com/max/1200/1*ZHmVzQMBhlFmIdqAxtp00g.jpeg" class="postheader_image" alt="header-image">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'postheader',
  props: {
    horizontal: Boolean,
    featured: Boolean,
    post: Object,
  }
}
</script>

<style scoped>
  .postheader_image {
    height:100%;
    width:100%;
  }

  .postheader {
    height:100%;
  }
</style>

