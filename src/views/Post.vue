<template>
  <div class="post">
    <PostHeader :horizontal="true" :featured="true" :title="post.title"
    :desc="post.desc" :author="post.author" :post="post" />
    <section class="content">
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <p class="post-content">
            {{post.content}}
          </p>
        </div>
        <div class="col-sm-2"></div>
      </div>
    </section>
  </div>
</template>

<script>
import PostHeader from '@/components/posts/PostHeader.vue';

export default {
  name: 'article',
  components: {
    PostHeader,
  },
  data() {
    return {
      post: {
        title: 'Lorem Ipsum',
        desc: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan nisl suscipit eros dapibus laoreet accumsan in arcu. Sed sit amet interdum est. Ut sed egestas purus. Duis maximus nunc ut magna egestas hendrerit vel eu sapien. Aenean vestibulum massa sapien, ac gravida neque elementum sit amet. Ut ex nunc, tempor nec tempus a, posuere vel tellus. Vivamus eleifend magna quis rhoncus dapibus. Sed pellentesque, odio ac pulvinar sagittis, enim enim imperdiet risus, eu tempor diam libero nec dolor. Morbi in viverra purus. Proin lectus mi, euismod vitae eros at, volutpat dignissim velit. Aliquam vitae sodales purus. Nunc feugiat, dolor id suscipit blandit, lacus risus lacinia tortor, sit amet tincidunt nibh tellus et lacus. Cras id mollis lorem. Mauris vel pharetra arcu. Aenean dignissim erat vel nisi luctus congue. Duis imperdiet volutpat ligula.',
        author: 'seorang penulis',
        createdate: '1/18/2019',
      },
    };
  },
};
</script>
