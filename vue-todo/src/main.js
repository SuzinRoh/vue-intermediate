import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'

/** font awsome icon */
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(fas, far)


const app = createApp(App)

    app
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
