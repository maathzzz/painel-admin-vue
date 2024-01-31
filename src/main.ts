import { createApp } from 'vue'
import './styles/globals.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import PhosphorIcons from "@phosphor-icons/vue"
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(PhosphorIcons)
app.use(router)
app.use(
    Vue3Toasity,
    {
        autoClose: 3000,
    } as ToastContainerOptions,
)

app.mount('#app')
