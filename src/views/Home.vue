<template>
  <div class="home">
    <div class="box" id="q">
        <div class="item" >空</div>
        <div class="item" id="z" >占</div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
    <div class="txt">
        <span>识别车牌号:</span><span>{{ carid }}</span><br/>
        <span>总车位数量:</span><span>{{ z }}</span><br/>
        <span>闲置车位数量:</span><span>{{ z-x }}</span><br/>
        <span>位置:</span><span>{{ weizhi }}</span><br/>
        <span>时间:</span><span>{{ t }}</span><br/>


        <h1>{{ place }}</h1>
        <form>
          <a href="javascript:;" @click="addUser">提交</a> <br />
          <a href="javascript:;" @click="getUser">获取</a>
        </form>
    </div>
    <div class="sign">
      <div class="item">空</div>
      <div class="item" id="z">占</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      time: "",
      carid: "",
      t:'',
      weizhi:'',
      x:0,
      z:14,
      place:[],
    };
  },

  //侦听器
  watch:{
    tag(){
      console.log(this.tag)
      this.songList();
    }
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
          "/api/stopcar/add",
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
        .get("/api/stopcar/show")
        .then((response) => {
          console.log(response);
          //清零操作
          this.place=[]
          this.x= 0;
          // console.log(response.data[0].carid);
          this.carid = response.data[0].carid;
          this.t = response.data[0].t;
          this.weizhi = response.data[0].weizhi;

          for(let i=0;i<this.weizhi.length;i++){
            if(1==this.weizhi[i]){
              // console.log(this.weizhi[i])
              // console.log(i)
              this.place.push(i);
              this.x++
              this.add()
              //100011
            }else{
              // console.log(this.weizhi[i])
            }
          }

          // for(1==this.weizhi.length){
            
          // }


        })
        .catch((error) => {
          console.log(error);
        });
    },

       add() {
        let q = document.getElementById('q')
        var list =q.getElementsByTagName("div"); //获取div元素
        var rel = [];
        for (var i = 0; i < list.length; i++) {
        if (list[i].tagName === "DIV") {
           for(var j of this.place){
               list[j].setAttribute("id", 'z');
           }
          rel.push(list[j]);
          }
        }
      // console.log(rel);
    },
  },
}
</script>
<style scoped>
.active{
  background: #000;
  color: #000;
}


h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.home{
  width: 900px;
  margin:0 auto;
  display: flex;
}
.box{
  width: 400px;
  height: 200px;
  border: 2px solid #62be81;
  display: flex;
  flex-wrap: wrap;
}
.item{
  height: 50px;
  width: 50px;
  border:1px solid #000000 ;
  margin: 20px;
  align-content: center;
  line-height: 50px;
  color: black;
  font-size: 26px;
}
#z{
  background: rgb(92, 68, 226);
}
/* .z{
  background: rgb(255, 156, 234);
} */
/* #z{
  background: rgb(255, 156, 234);
} */
.txt{
  margin-left: 80px; ;
  
  text-align: start;
}
.txt span{
  padding: 20px;
  display: inline-block;
}

</style>