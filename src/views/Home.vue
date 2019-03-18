<template>
  <div class="home">
    <h1>List of all posts</h1>
    <Highlights />
    <hr>
    <HeroBanner />
    <hr>
    <div class="row">
      <div class="col-sm-8">
        <Featured featuredTitle="Featured for Members" />
      </div>
      <div class="col-sm-4">
        <PopularPosts />
      </div>
    </div>
  </div>
</template>

<script>
import Highlights from '@/components/sections/Highlights.vue';
import HeroBanner from '@/components/sections/HeroBanner.vue';
import PopularPosts from '@/components/sections/PopularPosts.vue';
import Featured from '@/components/sections/Featured.vue';

export default {
  name: 'home',
  components: {
    Highlights,
    HeroBanner,
    PopularPosts,
    Featured,
  },
};
</script>

<style>
  section {
    margin: 3%;
  }
</style>

