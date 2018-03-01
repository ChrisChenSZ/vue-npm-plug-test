import chrisTest from './chris-test.vue'
const chris = {
  install (Vue, option) {
    Vue.component(chrisTest.name, chrisTest)
  }
}
export default chris
