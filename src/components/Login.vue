<template>
  <div class="login">
    <div>
      <h3 class="login_title">系统登陆</h3>
    </div>
    <div class="form-control form_item">
      <input placeholder="输入用户名" v-model="username" type="text"></input>
    </div>
    <div class="form-control form_item">
      <input placeholder="输入密码" type="password" v-model="password"></input>
    </div>
    <div>
      <button class="btn btn-success login_btn" @click="login">登陆</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      login: function () {
        if ("" == this.username || "undefined" == this.username ||
          "" == this.password || "undefined" == this.password) {
          alert("输入有效的账号密码");
          return;
        }
        this.postRequest('/api/admin/login', {
            username: this.username,
            password: this.password
          }
        ).then(data => {
          this.header={};
          this.header[data.tokenHeader] = data.tokenHead + data.token;
          this.$router.push("/home")
        })
      }
    }
  }
</script>

<style>
  .login {
    position: relative;
    margin-left: 40%;
    top: 20%;
    text-align: center;
    width: 400px;
    height: 250px;
    border: green solid;
  }

  .login_title {
    text-align: center;
  }

  .form_item {
    width: 100%;
  }

  .login_btn {
    width: 20%;

    color: mediumspringgreen;
    background-color: blue;
    margin-left: 35%;
    padding: 2%;

  }

  input {
    width: 80%;
    margin: 3%;
    padding: 2%;
  }
</style>
