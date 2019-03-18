<template>

</template>

<style lang="scss" scoped>

</style>

<script>
  //   import { doPostWithObjectParams } from '../utils/request-common.js'
  import VBar from 'v-bar'
  export default {
    components: { VBar },
    data () {
      return {
      }
    },
    method: {
    },
    mounted () {
      // 如果有依赖dom必须存在的情况，就放到nextTick里面
      this.$nextTick(() => {
      })
    },
    created () {
      // this.listenTips()
    },
    destroyed () {
    }
  }
</script>
