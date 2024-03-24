import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import '../../css/app.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
import { VBtn } from 'vuetify/components/VBtn'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import themes from './theme'
import defaults from './defaults'
import pt from './i18n/pt'

const vuetify = createVuetify({
  theme: { themes },
  aliases: {
    IconBtn: VBtn
  },
  locale: {
    locale: 'pt',
    fallback: 'tp',
    messages: { pt }
  },
  components: {
    ...components,
    ...labsComponents
  },
  directives,
  defaults,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

export default vuetify
