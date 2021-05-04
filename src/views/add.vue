<template>
  <div id="q">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div id="item"></div>
    <button @click="add">开始</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            place: [0,3],
        }
    },
  methods: {
    add() {
        let q = document.getElementById('q')
      var list =q.getElementsByTagName("div"); //获取div元素
      var rel = [];
        // for(var j = 0; j < this.place; j++){
        //     console.log();
        // }
        // for (let i of this.place) {
        //     for (let j of i) {
        //         console.log(j);//这样就能打印出他里面的每一个变量
        //     }
        // }
      for (var i = 0; i < list.length; i++) {
        if (list[i].tagName === "DIV") {
        //   list[i].setAttribute("id", 'aaa' + [i]);
           
           for(var j of this.place){
               list[j].setAttribute("class", 'aaa');
               console.log(j);
           }
        //   list[i].className = "aaa" + [i]; //修改class名，

          rel.push(list[j]);
        }
      }
      console.log(rel);
    },
  },
};
</script>

<style  scoped>
.item {
  width: 200px;
  height: 200px;
  background: rgb(0, 0, 0);
  margin: 30px;
}
#item {
  width: 200px;
  height: 200px;
  background: rgb(0, 0, 0);
  margin: 30px;
}
#a {
  width: 200px;
  height: 200px;
  margin: 30px;
  background: red;
}
</style>