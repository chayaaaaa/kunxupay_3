<template>
  <div class="Identification"></div>
</template>
<script>
import { Toast } from "mint-ui";
import EXIF from "exif-js";
import { VueClip } from "vue-pic-clip";
import { checkToken } from "@/api/api.js";
import qs from "qs";
import submitSuccessPage from "@/views/Mine/Identification/submitSuccessPage.vue";
import {
  returnAuthStatus,
  queryTwoElementsResult,
  getRefreshToken,
  BASE_URL
} from "@/api/api.js";
export default {
  name: "Identification",
  data() {
    return {};
  },

  methods: {}
};
</script>
<style lang="less" scoped>
</style>

