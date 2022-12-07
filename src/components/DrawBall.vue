<template>
  <div class="container">
    <div class="box">
      <div class="egg-cont">
        <div class="cont">
          恭喜获得
          <div class="name">{{ awardData.name }}</div>
          <img class="imgbg" :src="awardData.img" alt="">
          
          <!-- 隐藏图标 -->
          <div @click="hideDrawBall" class="hide"></div>
          <button @click="hideDrawBall" class="hidebtn">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    awardData: {
      type: Object,
      default: Object.create(null),
    },
  },
  methods: {
    hideDrawBall() {
      this.$emit("hideDrawBall");
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  z-index: 99;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: flex;
  justify-content:center;
  align-items: center;

  .box {
    width: 100%;
    height: 500px;
    position: absolute;
    .egg-cont {
      position: absolute;
      left: 60%;
      margin-left: -216px;
      width: 650px;
      height: 412px;
      .cont {
        margin-left: -170px;
        padding: 25px 120px ;
        font-size: 28px;
        background: url('../assets/icons/hbg.png') no-repeat 0 0 /616px 192px;
        width: 616px;
        height: 193px;
        color:#cd4325;
        
        .name {
          color: #cd4325;
          height: 85px;
          line-height: 40px;
          font-weight: bold;
          font-size: 40px;
        }
        .imgbg{
          left:150px;
          top:-5px;
          position: absolute;
          width:180px;
          height: 180px;
          border: 0;
        }
        
        
      }
    }
    .hide {
      position: absolute;
      width:100px;
      height: 100px;
      background: url('../assets/icons/arrowact.png') no-repeat;
      background-size: 80%;
      left:-150px;
      top:10px;
    }
    .hidebtn {
      position: absolute;
      width: 180px;
      height: 60px;
      background: url('../assets/icons/open-btn.png') no-repeat ;
      background-size: 100%;
      font-size: 32px;
      color: rgb(117, 23, 23);
      font-weight:bold ;
      font-family: "微软雅黑";
      top:120px;
      margin: 0;
      border: none;
      text-align: center;
    }
  }
}
</style>