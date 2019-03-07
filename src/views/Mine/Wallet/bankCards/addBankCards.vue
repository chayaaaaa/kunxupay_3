<template>
  <!-- =====================   添 加 银 行 卡 页 面   =======================-->
  <div class="addBankCards">
  </div>
</template>
<script>
const axios = require("axios");
import qs from "qs";
import { VueClip } from "vue-pic-clip";
import { Toast, MessageBox } from "mint-ui";
import "@/CSSFILE/alert.css";
import {
  queryTwoElementsResult,
  queryBankSup,
  getRefreshToken,
  BASE_URL
} from "@/api/api.js";
export default {
  inject: ["reload"],
  name: "addBankCards",
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