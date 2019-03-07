<template>
  <div class="index"></div>
</template>
<script>
var echarts = require("echarts");
require("echarts/lib/chart/bar");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
import {
  checkToken,
  getRefreshToken,
  getIndexBanner,
  getProfitDetails,
  getDealDetails,
  getshowMessage
} from "@/api/api.js";
import qs from "qs";
import axios from "axios";
export default {
  name: "index",
  data() {
    return {};
  },

  methods: {},

  computed: {}
};
</script>
<style lang="less" scoped>
</style>
