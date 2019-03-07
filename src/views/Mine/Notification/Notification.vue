<template>
  <div class="Notification">
    <!-- =================      消 息 通 知 页 面        ================= -->
  </div>
</template>
<script>
import { Toast } from "mint-ui";
const axios = require("axios");
import { showAllMessage, getRefreshToken, BASE_URL } from "@/api/api.js";
export default {
  inject: ["reload"],
  name: "Notification",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
