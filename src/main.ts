import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/fonts/vazir/fonts.css'
import '@/assets/css/vendor.css'
import '@/assets/js/modernizr.js'
import '@/assets/js/fontawesome/all.min.js'
import 'vue-future-slider/dist/vue-future-slider.css'
import '@/assets/css/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'


createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
