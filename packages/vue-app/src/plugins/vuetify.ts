import { App } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export const useVuetify = (app: App): void => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: { defaultSet: 'mdi' },
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
            background: '#1e1e2e',
            primary: '#89b4fa',
            secondary: '#cba6f7',
            success: '#a6e3a1',
            warning: '#fab387',
            error: '#f38ba8',
            info: '#74c7ec',
            surface: '#181825',
            'on-info': '#fefefe',
            'on-error': '#fefefe',
            'on-primary': '#fefefe',
            'on-success': '#fefefe',
            'on-surface': '#cdd6f4',
            'on-warning': '#fefefe',
            'on-secondary': '#fefefe',
            'on-background': '#cdd6f4'
          }
        }
      }
    }
  })

  app.use(vuetify)
}
