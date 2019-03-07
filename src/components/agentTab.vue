<template>
  <div class="agentTab">
    <!-- ===================     代 理 商 管 理 TABBAR     =================== -->
    <div class="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item @click="cur=0">
          <span>代理信息</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
        </van-tabbar-item>
        <van-tabbar-item @click="cur=1">
          <span>代理录入</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active2 : icon.normal2">
        </van-tabbar-item>
        <van-tabbar-item @click="cur=2">
          <span>代理利润</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active3 : icon.normal3">
        </van-tabbar-item>
        <van-tabbar-item @click="cur=3">
          <span>商户信息</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active4 : icon.normal4">
        </van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- ================      代 理 录 入      ================= -->
    <entry v-show="cur === 1" :class="{'curr':cur === 1}"></entry>
    <!-- ================      代 理 利 润      ================= -->
    <agentProfit v-show="cur === 2" :class="{'curr':cur === 2}"></agentProfit>
    <!-- ================      商 户 信 息      ================= -->
    <BusinessInformation v-show="cur === 3" :class="{'curr':cur === 3}"></BusinessInformation>
  </div>
</template>
<script>
import entry from "@/views/Manger/Agent/entry.vue";
import BusinessInformation from "@/views/Manger/Agent/BusinessInformation.vue";
const agentProfit = () => import("@/views/Manger/Agent/agentProfit.vue");
export default {
  name: "agentTab",
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
  },
  methods: {} 
  /* 注册组件 */,
  components: {
    /* 代理录入 */
    entry,
    /* 代理利润 */
    agentProfit,
    /* 商户信息 */
    BusinessInformation,
  }
};
</script>
<style lang="less">
/* tabbar */
.tabbar {
  width: 100%;
  height: 1.3rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  .mint-tabbar {
    height: 1.3rem;
    .mint-tab-item-label {
      font-size: 0.35rem;
    }
    .mint-tab-item-icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
  li {
    width: 33.3%;
    height: 1.3rem;
    float: left;
    text-align: center;
  }
}
</style>
