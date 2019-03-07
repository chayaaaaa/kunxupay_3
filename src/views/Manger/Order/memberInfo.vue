<template>
  <div class="memberInfo">
    <!-- ================     会 员 信 息     ================ -->
  </div>
</template>
<script>
import "@/CSSFILE/tabbar.css";
import "@/CSSFILE/Order.css";
import "@/CSSFILE/force.css";
import { Toast } from "mint-ui";
const axios = require("axios");
import {
  getqueryMemberInfo,
  checkToken,
  getRefreshToken,
  BASE_URL
} from "@/api/api.js";
export default {
  name: "memberInfo",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
