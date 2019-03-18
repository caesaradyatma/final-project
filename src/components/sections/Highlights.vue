<template>
  <section class="highlights">
      <div class="row">
        <div class="col-sm-3">
          <Card :vertical="true" :title="posts.post1.title"
          :desc="posts.post1.desc" :id="posts.post1.id" />
        </div>
        <div class="col-sm-6">
          <Card v-for="(value,key,index) in posts"
          :horizontal="true" :key="index" :title="value.title" :desc="value.desc" :id="index+1" />
        </div>
        <div class="col-sm-3">
          <Card :vertical="true" :title="posts.post4.title"
          :desc="posts.post4.desc" :id="posts.post4.id" />
        </div>
        <div class="col-sm-12">
          <a href="#">SEE ALL FEATURED ></a>
        </div>
      </div>
    </section>
</template>

<script>
import Card from '@/components/posts/Card.vue';

export default {
  name: 'highlights',
  components: {
    Card,
  },
  data() {
    return {
      posts: {
        post1: {
          title: 'The standard Lorem Ipsum passage, used since the 1500s',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          author: 'penulis',
          date: '2019-03-05',
          id: '1',
        },
        post2: {
          title: '1914 translation by H. Rackham 2',
          desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          author: 'tukang ngarang',
          date: '2019-03-05',
          id: 2,
        },
        post3: {
          title: '1914 translation by H. Rackham 3',
          desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          author: 'tukang ngarang',
          date: '2019-03-05',
          id: 3,
        },
        post4: {
          title: '1914 translation by H. Rackham 4',
          desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          author: 'tukang ngarang',
          date: '2019-03-05',
          id: '4',
        },
      },
    };
  },
};
</script>
