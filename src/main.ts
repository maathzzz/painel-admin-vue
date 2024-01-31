import { createApp } from 'vue'
import './styles/globals.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import PhosphorIcons from "@phosphor-icons/vue"

const app = createApp(App)

app.use(createPinia())
app.use(PhosphorIcons)
app.use(router)

app.mount('#app')
