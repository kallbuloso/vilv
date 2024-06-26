import './bootstrap'
// import '../css/app.css'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { createPinia } from 'pinia'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy'
import piniaPluginPersist from 'pinia-plugin-persist'
import vuetify from './Plugins/vuetify'
import { staticPrimaryColor } from '@/Plugins/theme'
// import * from './utils/sweetAlert2'
// import Swal from 'sweetalert2'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) })
      .use(createPinia().use(piniaPluginPersist))
      .use(plugin)
      .use(vuetify)
      .use(ZiggyVue)
      .mount(el)
  },
  progress: {
    color: staticPrimaryColor
  }
})
