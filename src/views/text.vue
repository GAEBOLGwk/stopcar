<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="time" v-model="time" /> <br />
      <input type="text" name="carid" v-model="carid" /> <br />
      <a href="javascript:;" @click="addUser">提交</a> <br />
      <a href="javascript:;" @click="getUser">获取</a>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
      carid: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    addUser() {
      let time = this.time;
      let carid = this.carid;
      this.$http
        .post(
          "/api/stopcar/addUser",
          {
            time,
            carid,
          },
          {}
        )
        .then((response) => {
          console.log(response);
        });
    },
    getUser() {
      // ! 这里不能在浏览器控制台里面打印出来，但是在服务端(cmd中或者power shell)可以打印出来，可以在服务端将值保存在 vuex 中

      this.$http
        .get("/api/stopcar/getUser")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>