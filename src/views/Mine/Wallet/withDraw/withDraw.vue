<template>
  <div class="withDraw">
    <!-- ===========   提 现 页 面   =========== -->
  </div>
</template>
<script>
import { PasswordInput, NumberKeyboard } from "vant";
import { Toast, MessageBox } from "mint-ui";
import { Popup, Picker } from "vant";
import md5 from "js-md5";
const axios = require("axios");
import "@/CSSFILE/alert.css";
import "@/CSSFILE/Order.css";
import {
  getConfigFee,
  getRefreshToken,
  BASE_URL,
  showBankCardList,
  getCashDetails,
  queryDrawPermissions,
  checkPayPassword,
  queryPasswordExist
} from "@/api/api.js";
export default {
  name: "withDraw",
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

