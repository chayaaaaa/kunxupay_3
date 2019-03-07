<template>
  <div class="queryAgent">
    <!-- ==========================    代 理 信 息 页 面   ============================= -->
  </div>
</template>
<script>
import "@/CSSFILE/tabbar.css";
import agentTab from "@/components/agentTab.vue";
import { MessageBox, Toast } from "mint-ui";
import { PullRefresh, Loading, List } from "vant";
const axios = require("axios");
import {
  queryAgent,
  checkToken,
  getRefreshToken,
  BASE_URL
} from "@/api/api.js";
import qs from "qs";
// 上拉刷新每次显示的数据
const loadNumUp = 10;

export default {
  name: "queryAgent",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
