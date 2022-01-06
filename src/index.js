import components from './components/components'

import 'root'
import 'global'
import 'mixins'
import 'dtCard'

const plugin = {
    install(Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop]
                Vue.component(component.name, component)
            }
        }
    }
}

export default plugin
