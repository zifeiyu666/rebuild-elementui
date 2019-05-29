import Button from './button/index.js'
import Link from './link/index.js'
import Input from './input/index.js'
import Radio from './radio/index.js'
import RadioButton from './radio-button/index.js'
import RadioGroup from './radio-group/index.js'
const components = [
  Button,
  Link,
  Input,
  Radio,
  RadioButton,
  RadioGroup
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1',
  Button,
  Link,
  Input,
  Radio,
  RadioButton,
  install,
  RadioGroup
}