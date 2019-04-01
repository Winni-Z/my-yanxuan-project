<template>
  <div id="app">
    <router-view></router-view>
    <FooterNav />
  </div>
</template>

<script>
  import FooterNav from './components/FooterNav/FooterNav.vue'
export default {
  name: 'App',
  components: {
    FooterNav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
