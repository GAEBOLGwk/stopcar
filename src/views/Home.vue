<template>
  <div class="home">
    <div class="box">
        <div class="item k">空置</div>
        <div class="item z">占用</div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
    <div class="text">
        <span>识别车牌号:</span><br/>
        <span>总车位数量:</span><br/>
        <span>闲置车位数量:</span><br/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

}
</script>
<style scoped>
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
  color: white;
  font-size: 26px;
}
.k{
  background: rgb(92, 68, 226);
}
.z{
  background: rgb(255, 156, 234);
}
.text{
  margin-left: 80px; ;
}
.text span{
  padding: 20px;
  display: inline-block;
}

</style>