<template>
  <div class="JSBridgeIOS">
    <b></b>
    <p>Loading...</p>
  </div>
</template>
<script>
export default {
  name: "JSbridgeIOS",
  data() {
    return {
      responseData: "",
      jsonObject: ""
    };
  },
  mounted() {
    this.JsBridge.registerHandler(
      "testJavascriptHandler", //注册的方法名，供原生调用
      (data, responseCallback) => {
        this.responseData = { Says: "Js have received your message" };
        responseCallback(responseData);
        this.jsonObject = JSON.parse(data);
        if (jsonObject.code == 200) {
          window.localStorage.setItem(
            "token",
            JSON.stringify(jsonObject.token)
          );
          window.localStorage.setItem(
            "userInfo",
            JSON.stringify(jsonObject.data)
          );
           this.$router.push("/index");
        }
       /*  if (jsonObject.token.access_token.length != 0) {
          this.$router.push("/index");
        } */
      }
    );
  }
};
</script>
<style lang="less" scoped>
.JSBridgeIOS {
  width: 100%;
  height: 100%;
  background: url("~@/assets/image/login/bj.png") no-repeat;
  background-size: 100% 100%; /* no */
}
b {
  background: url("~@/assets/image/logo.png") no-repeat center;
  background-size: 51px 51px; /* no */
}

b {
  border-right-color: transparent;
  border-radius: 45px; /* no */
  box-sizing: border-box;
  display: inline-block;
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  margin: 0 auto;
  overflow: hidden;
  text-indent: -9999px;
  width: 90px; /* no */
  height: 85px; /* no */
}

b:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 86px; /* no */
  height: 86px; /* no */
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  border: 2px #a92521 solid;
  clip: rect(50px, 90px, 90px, 0);
  -webkit-animation: b 1.1s infinite linear;
  -webkit-animation: b 1.1s infinite linear;
  -moz-animation: b 1.1s infinite linear;
  -o-animation: b 1.1s infinite linear;
  animation: b 1.1s infinite linear;
}

b:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 86px; /* no */
  height: 86px; /* no */
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  border: 2px #e5c775 solid;
  clip: rect(0, 90px, 40px, 0);
  -webkit-animation: b 1.1s infinite linear;
  -webkit-animation: b 1.1s infinite linear;
  -moz-animation: b 1.1s infinite linear;
  -o-animation: b 1.1s infinite linear;
  animation: b 1.1s infinite linear;
}
@keyframes b {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
p {
  font-size: 0.5rem;
  width: 100%;
  height: 1rem;
  font-weight: bolder;
  background: linear-gradient(to right, #fff, #fff);
  -webkit-background-clip: text;
  color: transparent;
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
