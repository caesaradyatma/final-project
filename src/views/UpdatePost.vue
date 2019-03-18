<template>
  <div class="createpost">
    <div class="row">
      <div class="col-sm-12 createpost-form">
        <h2 class="text-title"><strong>UPDATE POST</strong></h2>
        <textarea class="form-control" placeholder="Title"></textarea>
        <textarea class="form-control" placeholder="Story"></textarea>
        <textarea class="form-control" placeholder="Image URL"></textarea>
        <button class="btn btn-success">UPDATE</button>
        <button class="btn btn-danger">DELETE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'updatepost',
}
</script>

<style scoped>
  .createpost-form {
    background-color:rgb(0, 195, 255, 0.5);
    padding:2%;
  }

  textarea {
    margin-bottom:2%;
  }
</style>


