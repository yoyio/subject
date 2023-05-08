import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/all.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faArrowLeft, faPen, faPalette, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)
app.component(FontAwesomeIcon)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon)
library.add(faArrowRight, faArrowLeft, faPen, faPalette, faThumbsUp)
