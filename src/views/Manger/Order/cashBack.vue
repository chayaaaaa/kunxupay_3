<template>
  <div class="cashBack">
    <!-- ================     交 易 订 单     ================ -->
  </div>
</template>
<script>
import "@/CSSFILE/tabbar.css";
import "@/CSSFILE/Order.css";
import { Toast } from "mint-ui";
const axios = require("axios");
import {
  queryActiCashback,
  checkToken,
  getRefreshToken,
  BASE_URL
} from "@/api/api.js";
export default {
  name: "cashBack",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>


