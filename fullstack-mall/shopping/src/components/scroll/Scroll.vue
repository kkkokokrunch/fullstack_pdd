<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    props: {
        probeType: {
            type:Number,
            default:0
        },
        pullUpLoad: {
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            scroll:null
        }
    },
    mounted() {
        //1.创建bscroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
            click:true
        })
        //2.监听滚动的位置
        this.scroll.on('scroll',(position) => {
            //自定义事件，向外抛出
            this.$emit('scroll',position)
        })

        // this.scroll.refresh()
        // 3.监听上拉事件
        if(this.pullUpLoad) {
            this.scroll.on('pullingUp',() => {
                this.$emit('pullingUp')
            })
        }
        
    },
    methods: {
        scrollTo(x,y,time=300) {
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp()
        },
        refresh() {
            // console.log('--------')
            this.scroll && this.scroll.refresh()
        }
    },
}
</script>

<style>

</style>