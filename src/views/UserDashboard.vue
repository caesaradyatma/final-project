<template>
  <div class="dashboard">
    <section>
      <div class="row">
        <div class="col-sm-12">
          <h2 class="text-title">DASHBOARD</h2>
          <hr>
        </div>
        <div class="col-sm-5">
          <div class="prifle-picture">
            <img src="https://www.ludoviccareme.com/files/image_211_image_fr.jpg" alt="profile picture" class="profile-picture">
          </div>
        </div>
        <div class="col-sm-7">
          <div class="profile-desc">
            <h2 class="text-title">PROFILE</h2>
            <h4>User Name</h4>
            <h4>Address</h4>
            <h4>Email</h4>
            <h4>Phone</h4>
            <h4>Gender</h4>
            <router-link to="setting" class="btn btn-primary">Modify</router-link>
            <a href="setting" class="btn btn-primary">Modify</a>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-12">
          <h2 class="text-title">MY POSTS</h2>
        </div>
        <div class="col-sm-4">
          <CardInv v-for="(value, key, index) in posts"
        :horizontal="true" :key="index" :title="value.title" :desc="value.desc"
        :author="value.author" :date="value.date" :id="index+1" :user="true" style="margin-left:0;"/>
        </div>
        <div class="col-sm-4">
          <CardInv v-for="(value, key, index) in posts"
        :horizontal="true" :key="index" :title="value.title" :desc="value.desc"
        :author="value.author" :date="value.date" :id="index+1" :user="true" style="margin-left:0;"/>
        </div>
        <div class="col-sm-4">
          <CardInv v-for="(value, key, index) in posts"
        :horizontal="true" :key="index" :title="value.title" :desc="value.desc"
        :author="value.author" :date="value.date" :id="index+1" :user="true" style="margin-left:0;"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardInv from '@/components/posts/CardInverted.vue';

export default {
  name: 'dashboard',
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
};
</script>

<style scoped>
  .dashboard {
    text-align:left;
  }

  .profile-picture {
    width: 100%;
  }
</style>
