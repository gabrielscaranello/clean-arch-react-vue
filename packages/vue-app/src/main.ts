import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'

import '@styles/app.scss'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
