import Vue from 'vue'
import App from './App'
import router from './router'
import JiraService from './service/JiraService';

Vue.config.productionTip = false;

const jiraService = new JiraService();

/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  router,
  provide: {
    jiraService
  },
  render: h => h(App)
});

