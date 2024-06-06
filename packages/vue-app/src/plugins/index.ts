import { App } from 'vue'

import { usePinia } from './pinia'
import { useVuetify } from './vuetify'

export const usePlugins = (app: App): void => {
  usePinia(app)
  useVuetify(app)
}
