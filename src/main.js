import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import routerPermission from '@common/router/permission'

import App from './App.vue'
import routes from './router'
import { createWebHashHistory, createRouter } from 'vue-router'

let app = null
let router = null
let history = null
window.mount = () =>{
    history = createWebHashHistory()
    router = createRouter({
        history,
        routes
    })
    routerPermission(router)
    app = createApp(App)
    app.use(router)
    app.use(createPinia())
    app.mount('#app')
    if (window.__MICRO_APP_ENVIRONMENT__) {
        const microData = window.microApp?.getData();
        if (microData && microData.currentRoute) {
            router.push(microData.currentRoute);
        }
    }
}
window.unmount = () =>{
    app.unmount()
    history.destroy()
    app = null
    router = null
    history = null
}
if(!window.__MICRO_APP_ENVIRONMENT__){
    window.mount()
}
