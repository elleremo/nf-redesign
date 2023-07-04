import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import {} from "magnific-popup";
// core version + navigation, pagination modules:
 
 


import 'material-icons/iconfont/outlined.css';

import '../nf-css/nf-styles.css'
// import './assets/main.css'
const app = createApp(App)

app.use(router)
 
// console.log(CoolLightBox);

app.mount('#app')
  