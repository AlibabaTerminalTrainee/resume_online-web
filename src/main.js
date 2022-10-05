import { createSSRApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './commonStyle/base.scss'

export function createApp () {
  const app = createSSRApp(App)
  return {
    app
  }
}
