import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/quick-style.less";
import "@/styles/index.less";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Element from "element-ui";
import echarts from "echarts";

Vue.prototype.$echarts = echarts;

Vue.use(Element, { size: "small", zIndex: 3000 });
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
