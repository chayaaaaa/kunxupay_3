<template>
  <div class="transactionDetails">
    <!-- ================     银 行 卡 明 细      ================= -->
  </div>
</template>
<script>
import { Toast, MessageBox } from "mint-ui";
import { PasswordInput, NumberKeyboard } from "vant";
import "@/CSSFILE/alert.css";
import "@/CSSFILE/alert.css";
import {
  getRefreshToken,
  queryPasswordExist,
  BASE_URL,
  checkPayPassword
} from "@/api/api.js";
import md5 from "js-md5";
const axios = require("axios");
export default {
  name: "transactionDetails",
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
