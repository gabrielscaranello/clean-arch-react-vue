import { createPinia } from 'pinia'
import { App } from 'vue'

export const usePinia = (app: App): void => {
  const pinia = createPinia()
  app.use(pinia)
}
