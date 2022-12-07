<template>
  <div class="container">
    <!-- 转盘 -->
    <div class="content">
      <div class="starleft"></div>
      <div class="starright"></div>
      <div class="title1"></div>
      <div class="machine-botton"></div>
      <div class="box-ballupDown" v-show="showboxball">
        <div class="box-ball1"></div>
        <div class="box-ball2"></div>
        <div class="box-ball3"></div>
        <div class="box-ball4"></div>
        <div class="box-ball5"></div>
        <div class="box-ball6"></div>
      </div>
      <div class="machine"></div>
      <div ref="balls" v-show="showballs" class="balls">
        <div v-show="showball1" :class="'ball1 ' + (centball ? 'centball' : 'divergeball')">
          <div class="pop1"></div>
        </div>
        <div v-show="showball2" :class="'ball2 ' + (centball ? 'centball' : 'divergeball')">
          <div class="pop2"></div>
        </div>
        <div v-show="showball3" :class="'ball3 ' + (centball ? 'centball' : 'divergeball')">
          <div class="pop3"></div>
        </div>
        <div v-show="showball4" :class="'ball4 ' + (centball ? 'centball' : 'divergeball')">
          <div class="pop3"></div>
        </div>
        <div v-show="showball5" :class="'ball5 ' + (centball ? 'centball' : 'divergeball')">
          <div class="pop4"></div>
        </div>
        <div v-show="showball6" :class="'ball6 ' + (centball ? 'centball' : 'divergeball')">
          <div class="pop4"></div>
        </div>
      </div>
      <button @click="lotteryHandler" class="btn-lottery" :disabled="usableTimes < 1">开始抽奖
      </button>
      <button class="btn-left"></button>
      <button class="btn-right"></button>
      <div class="coin">×20</div>
      <div class="tipbg">左右按钮或滑动切换奖池</div>
      <div class="detialbg"></div>
      <button class="btn-win" @click="show_myprizehandler">
        累计奖励
      </button>
      <div class="cj-timesbg">
        剩余XX数量
        <div class="cj-times">
          <i class="i">{{ usableTimes }}</i>
        </div>
      </div>
      <div class="ball-exit">
      </div>
      <!-- 扭蛋下落 -->
      <div class="bounce-down-ball" v-show="showPrizeBox"></div>
    </div>
    <!-- 我的奖品 -->
    <div class="my-prize" v-show="show_myprize">
      <div class="top">累计奖品</div>
      <ul class="list">
        <li v-for="item in awardList" :key="item.timestamp">
          <!-- <span>{{ item.time }}</span> -->
          <span>恭喜获得</span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
      <div class="no-awards" v-if="awardList.length === 0">暂无奖品</div>
    </div>

    <draw-ball @hideDrawBall="hideDrawBallHandler" :awardData="awardData" v-if="(showDrawBall)"></draw-ball>
  </div>
</template>

<script>

import {
  PRIZES_LIST,
  LOTTERY_TIMES
} from "./api/initData";
import Storage from "./storage/index";
import Helper from "./util/helper";
import DrawBall from "./components/DrawBall";

export default {
  name: "App",
  components: {
    DrawBall,
  },
  data() {
    return {
      processing: false, // 是否正在抽奖中
      showDrawBall: false, // 开奖 是否显示
      showPrizeBox: false, // 出奖 是否显示
      showballs: true,
      totalTimes: 0, // 总获得的抽奖次数
      usedTimes: 0, // 已使用的抽奖次数
      awardData: {}, // 中奖奖品详情
      awardList: [], // 奖品列表
      prize_list: PRIZES_LIST,
      centball: false,
      showboxball: false,
      show_myprize: false,
      showball1: true,
      showball2: true,
      showball3: true,
      showball4: true,
      showball5: true,
      showball6: true,
    };
  },
  computed: {
    // 剩余抽奖次数
    usableTimes() {
      return this.totalTimes - this.usedTimes;
    },
  },
  created() {
    let { awardList } = Storage.getStorage();
    this.totalTimes = LOTTERY_TIMES;
    Storage.setItem("totalTimes", this.totalTimes);
    Storage.setItem("usedTimes", 0);

    this.totalTimes = Storage.getItem("totalTimes");
    this.usedTimes = Storage.getItem("usedTimes");

    // 本地获取中奖数据
    if (awardList !== undefined) {
      this.awardList = awardList;
    }
  },
  mounted: function () {
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('lottery');
    });
  },
  methods: {

    _lottery() {
      let length = PRIZES_LIST.length;
      let i = Math.floor(Math.random() * length);
      if (PRIZES_LIST.length > 0) {
        this._storingData(
          Object.assign(PRIZES_LIST[i])
        );
        this.awardList = Storage.getItem("awardList");

      } else {
        alert('附魔道具已抽完')
      }

      let prize_lists = PRIZES_LIST.splice(i, 1);
      
      if (prize_lists[0].id == 1) {
        this.showball1 = false;
      } else if (prize_lists[0].id == 2) {
        this.showball2 = false;
      } else if (prize_lists[0].id == 3) {
        this.showball3 = false;
      } else if (prize_lists[0].id == 4) {
        this.showball4 = false;
      } else if (prize_lists[0].id == 5) {
        this.showball5 = false;
      } else if (prize_lists[0].id == 6) {
        this.showball6 = false;
      }

      return prize_lists[0];

    },
    _storingData(data) {
      let awardList = Storage.getItem("awardList");
      if (awardList === undefined) {
        Storage.setItem("awardList", [data]);
      } else {
        Storage.setItem("awardList", [...awardList, data]);
      }
    },
    async lotteryHandler() {
      this.centball = true;
      this.processing = true; // 抽奖中
      this.usedTimes += 20;
      Storage.setItem("usedTimes", this.usedTimes);

      this.showPrizeBox = false;
      this.showboxball = true;
      this.$refs.balls.style.animationName = "";
      this.$refs.balls.style.animationName = "ballsRolling";

      await Helper.wait(1000);
      this.showPrizeBox = true;
      await Helper.wait(800);
      this.showPrizeBox = false;
      this.showboxball = false;
     this.showDrawBall = true;
      this.centball = false;
      this.awardData = this._lottery();
      this.$refs.balls.style.animationName = ""
    },
    hideDrawBallHandler() {
      this.processing = false;
      this.showDrawBall = false;
    },
    show_myprizehandler() {
      this.show_myprize = true;
    }
  },
};
</script>

<style src="./App.scss" lang="scss">

</style>
