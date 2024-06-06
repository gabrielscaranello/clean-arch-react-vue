import { createApp } from 'vue'

import App from './App.vue'

import '@styles/app.scss'

import { usePlugins } from './plugins'

const app = createApp(App)

usePlugins(app)

app.mount('#app')
