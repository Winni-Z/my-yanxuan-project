<template>
    <footer class="footer_guide border-1px">
      <a href="javascript:;" class="guide_item" @click="goto('/home')" :class="{on:$route.path==='/home'}">
    <span class="item_icon">
      <i class="iconfont icon-baseline-home-px"></i>
    </span>
          <span>首页</span>
        </a>
      <a href="javascript:;" class="guide_item" @click="goto('/catalogue')" :class="{on:$route.path==='/catalogue'}">
        <span class="item_icon">
          <i class="iconfont icon-icon" @click="goto('/things')" :class="{on:$route.path==='/things'}"></i>
        </span>
            <span>分类</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goto('/things')" :class="{on:$route.path==='/things'}">
        <span class="item_icon">
          <i class="iconfont icon-shiwu"></i>
        </span>
            <span>识物</span>
      </a>
      <a href="javascript:;" class="guide_item" @click="goto('/shoppingcart')" :class="{on:$route.path==='/shoppingcart'}">
        <span class="item_icon">
          <i class="iconfont icon-qicheqianlian-1-copy"></i>
        </span>
            <span>购物车</span>
          </a>
      <a href="javascript:;" class="guide_item" @click="goto('/personal')" :class="{on:$route.path==='/personal'}">
        <span class="item_icon"><i class="iconfont icon-geren"></i></span>
        <span>个人</span>
      </a>
    </footer>
</template>
<script>
  export default{
    methods: {
      goto (path) {
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 1000
    background #fff
    left 0
    right 0
    bottom 0
    //background-color $footerBgc
    width 100%
    height 98px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 3px
      color #999999
      &.on
        color #b4282d
      span
        font-size 15px
        margin-top 3px
        margin-bottom 5px
        .iconfont
          font-size 42px
          margin-top 7px
</style>

