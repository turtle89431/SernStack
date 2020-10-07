import '@riotjs/hot-reload'
import { mount, install } from 'riot'
import registerGlobalComponents from './register-global-components'

// register
registerGlobalComponents()
install((comp) => {

    })
    // mount all the global components found in this page
mount('[data-riot-component]')