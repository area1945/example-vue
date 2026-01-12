import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'
import './style.css'


const app = createApp(App)
app.config.globalProperties.$assetUrl = 'https://area1945.github.io/example-template/assets'
app.use(router).mount('#app')
