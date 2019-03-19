<template>
  <div class="postsetting">
    <section>
      <div class="row">
        <div class="col-sm-12">
          <h2 class="text-title">POST CONTENT UPDATE</h2>
        </div>
        <div class="col-sm-7">
          <label>Content</label>
          <textarea class="form-control" placeholder="Title" v-model="title"></textarea>
          <textarea class="form-control" placeholder="Content" v-model="content"></textarea>
          <textarea class="form-control" placeholder="Image URL" v-model="image"></textarea>
          <button class="btn btn-success form-control">Submit</button>
        </div>
        <div class="col-sm-5">
          <label>Post Header</label>
          <select class="form-control">
            <option value="1">Horizontal</option>
            <option value="2">Vertical</option>
          </select>
        </div>
        <div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'postsetting',
  props: {
    post: Object,
  },
  data() {
    return {
      title: this.post.title,
      content: this.post.content,
      image: this.post.image,
    };
  },
};
</script>

<style scoped>
  .postsetting {
    text-align:left;
  }

  textarea {
    margin-bottom:2%;
  }
</style>
