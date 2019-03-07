<template>
  <div class="BKManagement">
    <!-- =============    银 行 卡 管 理 页 面     ============== -->
  </div>
</template>
<script>
import { MessageBox, Toast } from "mint-ui";
import "@/CSSFILE/alert.css";
import {
  returnAuthStatus,
  checkToken,
  getRefreshToken,
  BASE_URL
} from "@/api/api.js";
const axios = require("axios");
export default {
  name: "BKManagement",
  data() {
    return {
 
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
