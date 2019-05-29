/* eslint-disable */
var MyPlugin = {}
MyPlugin.install = function (Vue, options) {
  Vue.testMethod = function () {
    console.log('testmethod')
  }

  Vue.directive('test', {
    bind () {
      console.log('test-bind')
    },
    inserted () {
      console.log('test-inserted')
    },
    update (el, binding, vnode, oldVnode) {
      console.log('test-update')
      console.log(vnode)
      console.log(oldVnode)
    },
    componentUpdated () {
      console.log('updated')
    },
    unbind () {
      console.log('unbind')
    }
  })
}

export default MyPlugin