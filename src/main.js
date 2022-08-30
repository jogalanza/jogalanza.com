import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './router/index'

import './assets/scss/app.scss'

const app = createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(router)


    app.mount('#app')
