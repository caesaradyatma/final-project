<template>
  <section class="featured">
    <div class="row">
      <div class="col-sm-12">
        <h3><strong>{{featuredTitle}}</strong></h3>
        <small><a href="#">More ></a></small>
        <hr>
      </div>
      <div class="col-sm-12">
        <CardInv v-for="(value, key, index) in posts"
        :horizontal="true" :key="index" :title="value.title" :desc="value.desc"
        :author="value.author" :date="value.date" style="margin-left:0;"/>
      </div>
    </div>
  </section>
</template>

<script>
import CardInv from '@/components/posts/CardInverted.vue';

export default {
  name: 'featured',
  components: {
    CardInv,
  },
  data() {
    return {
      posts: {
        post1: {
          title: 'The standard Lorem Ipsum passage, used since the 1500s',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          author: 'penulis',
          date: '2019-03-05',
        },
        post2: {
          title: '1914 translation by H. Rackham',
          desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          author: 'tukang ngarang',
          date: '2019-03-05',
        },
      },
    };
  },
  props: {
    featuredTitle: String,
  },
};
</script>

<style scoped>
  .featured {
    text-align: left;
  }
</style>
