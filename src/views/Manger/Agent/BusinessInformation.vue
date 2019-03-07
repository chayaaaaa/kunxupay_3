<template>
  <div class="BusinessInformation"></div>
</template>
<script>
export default {
  name: "BusinessInformation",
  data() {
    return {};
  },
  methods: {
    /* 方法 */
    prev() {
      this.$router.go(-1);
    }
  },
  components: {
    /* 组件 */
  }
};
</script>
<style lang="less" scoped>
</style>
