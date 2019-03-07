<template>
  <div class="memberDeals">
    <!-- ================     会 员 交 易     ================ -->
  </div>
</template>
<script>
import "@/CSSFILE/tabbar.css";
import "@/CSSFILE/Order.css";
import { DatetimePicker, Toast, Popup, Picker } from "mint-ui";
const axios = require("axios");
import {
  getqueryMemberTrade,
  checkToken,
  getRefreshToken,
  BASE_URL
} from "@/api/api.js";
export default {
  name: "memberDeals",
  data() {
    return {};
  },

  methods: {}
};
</script>
<style lang="less" scoped>
</style>
