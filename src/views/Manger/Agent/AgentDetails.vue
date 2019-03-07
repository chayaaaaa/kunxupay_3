<template>
  <div class="AgentDetails"></div>
</template>
<script>
import {
  checkToken,
  getRefreshToken,
  queryAgentDetails,
  queryAgentBiz,
  BASE_URL
} from "@/api/api.js";
import { Toast } from "mint-ui";
import commonJS from "@/JS/commonJS.js";
const axios = require("axios");
var padDate = function(va) {
  va = va < 10 ? "0" + va : va;
  return va;
};
export default {
  name: "AgentDetails",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>

</style>
