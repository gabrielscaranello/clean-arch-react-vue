import { App } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import 'vuetify/styles'

export const useVuetify = (app: App): void => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: '#89b4fa',
            secondary: '#a6e3a1',
            error: '#f38ba8',
            info: '#89b4fa',
            success: '#a6e3a1',
            'on-background': '#cdd6f4',
            background: '#1e1e2e',
            'on-info': '#1e1e2e',
            'on-error': '#1e1e2e',
            'on-surface': '#1e1e2e',
            'on-secondary': '#1e1e2e',
            'on-primary': '#1e1e2e'
          }
        }
      }
    }
  })

  app.use(vuetify)
}
