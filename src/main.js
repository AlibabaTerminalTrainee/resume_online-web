import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './common/commonStyle/base.scss'
import BootstrapVue from './common/commonStyle/bootstrap-vue.min'
import './common/commonStyle/bootstrap-vue.min.css'
import './common/commonStyle/bootstrap.min.css'
Vue.use(BootstrapVue, {})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
