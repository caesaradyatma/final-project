<template>
  <div class="usersetting">
    <div class="row">
      <div class="col-sm-5">
        <h2 class="text-title">USER SETTING</h2>
        <hr>
        <input type="text" placeholder="Username" class="form-control">
        <textarea class="form-control" placeholder="Address"></textarea>
        <input type="email" class="form-control">
        <input type="text" class="form-control" placeholder="Phone Number">
        <select class="form-control">
          <option value="1">Female</option>
          <option value="2">Not Female</option>
        </select>
        <input type="file">
        <button class="form-control btn btn-primary">Modify</button>
      </div>
      <div class="col-sm-2">

      </div>
      <div class="col-sm-5">
        <center>
          <img src="https://www.ludoviccareme.com/files/image_211_image_fr.jpg" alt="profile picture" class="profile-picture">
        </center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'usersetting',
};
</script>

<style scoped>
  .usersetting {
    margin-top:2%;
    text-align: left;
    background-color:rgba(216, 214, 214, 0.8);
    padding: 2%;
  }

  input, textarea, select {
    margin-bottom:2%;
  }
</style>
