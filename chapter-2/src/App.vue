<template>
  <div id="app">
    <router-link to="/main">首页</router-link>
    <h1></h1>
    <router-link to="/content">内容页</router-link>
    <h1></h1>
    <router-link to="/shf">shf</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
