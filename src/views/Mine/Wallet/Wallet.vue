<template>
  <div class="Wallet">
    <!-- =================      我 的 钱 包 页 面        ================= -->
  </div>
</template>
<script>
import { MessageBox, Toast } from "mint-ui";
import "@/CSSFILE/alert.css";
import {
  queryDrawPermissions,
  getCashDetails,
  getRefreshToken,
  BASE_URL,
  returnAuthStatus
} from "@/api/api.js";
export default {
  name: "Wallet",
  data() {
    return {
    
    };
  },
  methods: {
  }
};
</script>
<style lang="less" scoped>
</style>
