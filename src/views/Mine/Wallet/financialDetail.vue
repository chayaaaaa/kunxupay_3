<template>
  <!-- ================   资 金 明 细 页 面    ================== -->
  <div class="financialDetail">
  </div>
</template>
<script>
const axios = require("axios");
import qs from "qs";
import {
  queryBalanceDetailRecord,
  getRefreshToken,
  BASE_URL
} from "@/api/api.js";
import { Toast } from "mint-ui";
export default {
  name: "financialDetail",
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
