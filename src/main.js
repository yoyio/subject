import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'

import './assets/all.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faArrowLeft, faChartPie, faPalette, faThumbsUp, faArrowUpRightDots,faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)
app.component(FontAwesomeIcon)
app.use(VueAxios, axios)
app.use(router)
app.use(AOS.init())
app.mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon)
library.add(faArrowRight, faArrowLeft, faChartPie, faPalette, faThumbsUp, faArrowUpRightDots, faCircleCheck)
