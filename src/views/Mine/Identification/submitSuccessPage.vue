<template>
  <div class="outBox"></div>
</template>
<script>
export default {
  name: "submitSuccessPage",
  data() {
    return {};
  },
  methods: {
    again() {
      this.$router.push("/index");
    }
  }
};
</script>
<style lang="less" scoped>
</style>
