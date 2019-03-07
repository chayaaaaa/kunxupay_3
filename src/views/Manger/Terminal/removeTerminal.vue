<template>
  <div class="removeTerminal">
    <!-- ============    终 端 转 移 页 面    =========== -->
  </div>
</template>
<script>
import "@/CSSFILE/tabbar.css";
import "@/CSSFILE/Order.css";
import "@/CSSFILE/force.css";
import { MessageBox, Toast } from "mint-ui";
const axios = require("axios");
import qs from "qs";
import {
  shiftTerminal,
  checkToken,
  getRefreshToken,
  BASE_URL
} from "@/api/api.js";
export default {
  name: "removeTerminal",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
