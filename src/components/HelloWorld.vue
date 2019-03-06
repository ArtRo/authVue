<template>
  <div class="index">
    <h1>欢迎，我的朋友</h1>
    <div class="content">
      <router-link :to='{path:"/login"}'><span>登陆</span></router-link>
      <router-link :to='{path:"/register"}'><span>注册</span></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: "Index",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .index {
    top: 5%;
    position: fixed;
    margin-left: 10%;
    width: 80%;
    height: 90%;
    background-image: url("/static/img/0d8f453eac2b1c5a338e656d316bfbb9.jpg") !important;
  }

  .content {
    position: relative;
    text-align: center;
    top: 10%;
  }

  span {
    margin: 20px;
    font-size: 45px;
  }

  h1 {
    text-align: center;
  }
</style>
