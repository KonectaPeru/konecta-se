import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDX1vrBjSyw1iumEpBmvtEZ0gIzQcuu8_I',
    libraries: 'places',
  },
  installComponents: true
 

})
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import firebase from 'firebase';
import moment from 'moment';

Vue.prototype.moment = moment
Vue.config.productionTip = false

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDFb0EaWaPKCq37BuZSkoY2193PNZrUx0I",
  authDomain: "konecta-seleccion.firebaseapp.com",
  databaseURL: "https://konecta-seleccion.firebaseio.com",
  projectId: "konecta-seleccion",
  storageBucket: "konecta-seleccion.appspot.com",
  messagingSenderId: "212657214250",
  appId: "1:212657214250:web:34e59f4f06c30511644453",
  measurementId: "G-FZ4MPDHR8G"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
