<template>
  <div id="app">
   <!--  <router-view v-if="isRouterAlive"/> -->
     <router-view/>
  </div>
</template>

<script>
import commonJS from "@/JS/commonJS.js";
import "@/CSSFILE/common.css";
export default {
  name: "App",
 /*  provide() {
    return {
      reload: this.reload
    };
  }, */
  data() {
    return {
    /*   isRouterAlive: true */
    };
  },/* 
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  },
  mounted() {
    this.$commonJS.inputBlur();
    document.body.addEventListener("focusout", () => {
      //软键盘收起的事件处理
      setTimeout(() => {
        const scrollHeight =
          document.documentElement.scrollTop || document.body.scrollTop || 0;
        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
      }, 100);
    }); */
/*   } */
};
</script>

<style>
#app {

}
</style>
