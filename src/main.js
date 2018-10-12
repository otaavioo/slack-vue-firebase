// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import store from './store'
import auth from 'firebase/auth'

Vue.config.productionTip = false

console.log(process.env)
    // Initialize Firebase
var config = {
    apiKey: "AIzaSyBObMJ6wyq-eb1Z69Q1-g_g14_5iJLh700",
    authDomain: "vuex-slack-c2da5.firebaseapp.com",
    databaseURL: "https://vuex-slack-c2da5.firebaseio.com",
    projectId: "vuex-slack-c2da5",
    storageBucket: "vuex-slack-c2da5.appspot.com",
    messagingSenderId: "585722682530"
};
firebase.initializeApp(config);

window.firebase = firebase

const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    // dispatch user
    store.dispatch('setUser', user)

    new Vue({
        el: '#app',
        router,
        store,
        components: {
            App
        },
        template: '<App/>'
    })

    unsubscribe()
})
