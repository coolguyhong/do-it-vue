var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    anotherMessage: 'anotherMessage!!!!!',
    uid: '20',
    flag: false
  },
  methods: {
    clickBtn() {
      console.log('hi');
    },
    clickTest() {
      alert('1234');
    }
  }
})
