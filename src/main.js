import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './assets/styles/main.css';

Vue.config.productionTip = false

new Vue({
  store,
  computed: {
    currentStep() {
        return store.state.step;
    }
  },
  render: h => h(App),
}).$mount('#app')
