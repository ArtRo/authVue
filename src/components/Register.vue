<template>
  <div class="register">
    <div>
      <h3 class="login_title">注册</h3>
    </div>
    <div class="form-control form_item">
      <input placeholder="输入用户名" v-model="username" type="text"></input>
    </div>
    <div class="form-control form_item">
      <input placeholder="输入密码" type="password" v-model="password"></input>
    </div>
    <div class="form-control form_item">
      <input placeholder="输入昵称" type="text" v-model="nickname"></input>
    </div>
    <div>
      <button class="btn btn-success login_btn" @click="register">注册</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        username: "",
        password: "",
        nickname: ""
      }
    },
    methods: {
      register: function () {
        const _this = this;
        if ("" == this.username || "undefined" == this.username ||
          "" == this.username || "undefined" == this.username ||
          "" == this.username || "undefined" == this.username) {
          alert("输入有效的参数");
          return;
        }
        this.postRequest("/api/admin/register", {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        }).then(function (data) {
          _this.$router.push("/login")
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped>
  .register {
    position: relative;
    margin-left: 40%;
    top: 20%;
    text-align: center;
    width: 400px;
    height: 300px;
    border: green solid;
  }

  input {
    width: 80%;
    margin: 3%;
    padding: 2%;
  }
</style>
