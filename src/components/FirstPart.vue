<style>
  .active {
    width: 100px;
    height: 100px;
    background: green;
  }
</style>
<template >
  <div>
    <div class="">
      <h1>FirstParts</h1>
    </div>
    <div>
      <a href="javascript:void(0)" @click="del()">aab</a>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    methods: {
      del: function () {
        this.$axios.get('http://localhost:1008/logins').then(function () {
        });
      }
    }
  };
</script>



