<template>
  <div class="things">
    <div class="things-header">
      <i class="iconfont icon-baseline-home-px"></i>
      <a href="" class="find">发现</a>
      <a href="" class="numberOne">甄选家</a>
      <div class="header-right">
        <i class="iconfont icon-search-1-copy"></i>
        <i class="iconfont icon-qicheqianlian-1-copy"></i>
      </div>
    </div>
    <div class="header-nav">
      <div class="header-nav-hidden">
        <ul class="header-nav-show">
          <li>推荐</li>
          <li>好货内部价</li>
          <li>美食榜单</li>
          <li>美食酒水</li>
          <li>回购榜</li>
          <li>晒单</li>
          <li>达人</li>
          <li>上新</li>
          <li>HOME</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default{
    mounted () {
      const scroll = new BScroll('.header-nav-hidden',{
        scrollX: true,
        click: true
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .things-header
    width 100%
    height 50px
    border-bottom 1px solid #ccc
    padding 15px
    i
      font-size 45px
    a
      font-size 35px
      &.find
        color red
        font-weight bold
        font-size 40px
        margin 0px 20px 0px 140px
    .header-right
      float right
      padding 10px
      i
        margin-right 30px
        margin-left 25px
  .header-nav
    width 100%
    height: 75px
    .header-nav-hidden
      width 750px
      height 66px
      overflow hidden
      .header-nav-show
        width 1500px
        height 66px
        display flex
        align-items center
        /*box-sizing border-box*/
        /*justify-content center*/
        font-size 28px
        >li
          margin 20px 25px
</style>
