<template>
  <div class="back"></div>
</template>
<script>
import { Toast } from "mint-ui";
import EXIF from "exif-js";
import { VueClip } from "vue-pic-clip";
import { checkToken } from "@/api/api.js";
import qs from "qs";
export default {
  inject: ["reload"],
  name: "back",
  data() {
    return {};
  },

  methods: {}
};
</script>
<style lang="less" scoped>
</style>