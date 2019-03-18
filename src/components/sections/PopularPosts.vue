<template>
  <section class="popular">
    <div class="row">
      <div class="col-sm-12">
        <h3><strong>Popular Stuff</strong></h3>
        <hr>
        <CardText v-for="(value, key, index) in posts" :horizontal="true" :order="index+1" :key="index"
        :title="value.title" :author="value.author" :date="value.date" />
      </div>
    </div>
  </section>
</template>

<script>
import CardText from '@/components/posts/CardText.vue';

export default {
  name: 'popularposts',
  data() {
    return {
      posts: {
        post1: {
          title: 'The standard Lorem Ipsum passage, used since the 1500s',
          author: 'penulis',
          date: '2019-03-05',
        },
        post2: {
          title: '1914 translation by H. Rackham',
          author: 'tukang ngarang',
          date: '2019-03-05',
        },
        post3: {
          title: 'judul nya ',
          author: 'tukang ngarang juga',
          date: '2019-03-05',
        },
      },
    };
  },
  components: {
    CardText,
  },
};
</script>
