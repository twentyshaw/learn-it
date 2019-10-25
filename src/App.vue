<template>
  <div id="app">
    <Header id="header"></Header>
    <router-view/>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import './assets/default.css';
@import '/assets/icon/iconfont.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background: #f8f9fa;
}

</style>
