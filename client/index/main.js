import Vue from 'vue'
import App from './App.vue'

// import VueProgress from './vue-progress'
import VueProgress from './vue-progress.es5'

Vue.use(VueProgress)

new Vue({
    data: {
        msg: '233'
    },
    el: '#app',
    render: h => h(App)
})
