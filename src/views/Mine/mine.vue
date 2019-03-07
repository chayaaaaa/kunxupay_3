<template>
  <div class="mine">
    <!-- ==================        这 是 我 的 页 面       ==================== -->
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
export default {
  name: "mine",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
