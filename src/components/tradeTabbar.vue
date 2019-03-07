<template>
  <div class="tardeTabbar">
    <!-- ==============    订 单 管 理TABBAR    ============= -->
   <div class="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item @click="jumpToAgents()">
          <span>代理信息</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
        </van-tabbar-item>
        <van-tabbar-item @click="jumpToAgentsTypeIn()">
          <span>代理录入</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active2 : icon.normal2">
        </van-tabbar-item>
        <van-tabbar-item @click="jumpToAgentsProfit()">
          <span>代理利润</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active3 : icon.normal3">
        </van-tabbar-item>
        <van-tabbar-item @click="CAPION()">
          <span>商户信息</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active4 : icon.normal4">
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import "@/CSSFILE/tabbar.css";
export default {
  name: "tardeTabbar",
  data() {
    return {
      active: 0,
      cur: 0,
      /* tabbar */
      icon: {
        normal: require("@/assets/image/Manger/Agents/icon07.png"),
        active: require("@/assets/image/Manger/Agents/icon07_choice.png"),
        normal2: require("@/assets/image/Manger/Agents/icon08.png"),
        active2: require("@/assets/image/Manger/Agents/icon08_choice.png"),
        normal3: require("@/assets/image/Manger/Agents/icon09.png"),
        active3: require("@/assets/image/Manger/Agents/icon09_choice.png"),
        normal4: require("@/assets/image/Manger/Agents/icon10.png"),
        active4: require("@/assets/image/Manger/Agents/icon10_choice.png")
      }
    };
  }
};
</script>
<style lang="less" scoped>
</style>
