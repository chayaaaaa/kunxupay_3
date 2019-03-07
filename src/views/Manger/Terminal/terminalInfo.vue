<template>
  <div class="terminalInfo">
    <!-- ================     会 员 交 易     ================ -->
  </div>
</template>
<script>
const searchPage = () => import("@/views/Manger/Order/searchPage.vue");
import "@/CSSFILE/tabbar.css";
import "@/CSSFILE/Order.css";
import "@/CSSFILE/input.css";
import { Toast } from "mint-ui";
const axios = require("axios");
import {
  queryTerminal,
  checkToken,
  getRefreshToken,
  BASE_URL
} from "@/api/api.js";
export default {
  name: "terminalInfo",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
