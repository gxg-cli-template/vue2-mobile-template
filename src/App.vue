<template>
 <div id="app">
    <transition :name="direction">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>
    <transition :name="direction">
      <router-view v-if="!$route.meta.keepAlive" />
    </transition>
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    // 动态设置过渡样式
    direction: function () {
      return "fade";
    },
  },
  watch: {
  },
  components: {},
  created() {
    console.log(this.$store.state)
    // this.wxInit();
  },
  mounted() {},
  methods: {
    wxInit() {
      this.$get("/weixinActivity/wxJsSdkConfig", {
        link: window.location.href,
      }).then((res) => {
        console.log("wx：", wx);
        wx.config({
          debug: false,
          appId: res.appId, // 必填，公众号的唯一标识
          timestamp: res.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.nonceStr, // 必填，生成签名的随机串
          signature: res.signature, // 必填，签名
          jsApiList: [
            "chooseImage",
            "previewImage",
            "getLocation",
            "scanQRCode",
            "updateAppMessageShareData",
            "onMenuShareAppMessage",
            "updateTimelineShareData",
            "onMenuShareTimeline",
            "onMenuShareQQ",
            "onMenuShareQZone",
            "wx-open-launch-weapp",
          ], // 必填，需要使用的JS接口列表
          openTagList: ["wx-open-launch-weapp"], //跳转微信小程序
        });
        /* wx.ready(function () {
          console.log("分享");
          //需在用户可能点击分享按钮前就先调用
          wx.updateAppMessageShareData({
            title: "一罐BUFF增益唤醒王者潜力", // 分享标题
            desc: "一罐BUFF增益唤醒王者潜力", // 分享描述
            link: "https://gz.qcutc.com/FXPY", // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
            imgUrl: "https://gz.qcutc.com/wximgs/share.jpg", // 分享图标
            success: function () {
              // 设置成功
            },
          });
          wx.updateTimelineShareData({
            title: "一罐BUFF增益唤醒王者潜力", // 分享标题
            link: "https://gz.qcutc.com/FXPY", // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
            imgUrl: "https://gz.qcutc.com/wximgs/share.jpg", // 分享图标
            success: function () {
              // 设置成功
            },
          });
        }); */
      });
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
