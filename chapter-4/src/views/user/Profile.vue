<template>
  <div>
    <h1>个人信息</h1>
    {{ $route.params.id }}
    <hr>
    {{ id }}
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: "UserProfile",
  props: ['id'],
  beforeRouteEnter: (to, from, next) => {
    console.log("进入路由之前")
    next(vm => {
      vm.getData(); // 进入路由之前执行getdata
    })
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("进入路由之后")
    next()
  },
  methods: {
    getData() {
      axios.get({
        method: "get",
        url: "http://localhost:8080/data.json"
      }).then(function (resonse) {
        console.log(resonse)
      })
    }
  }
}
</script>

<style scoped>

</style>
