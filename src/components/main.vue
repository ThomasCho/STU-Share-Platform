<template>
  <div class="content" v-once>
    <div class="content-option">
      <router-link to="upload"><img src="../assets/upload.png"></router-link>
      <router-link to="upload"><Button type="primary" shape="circle">我要上传</Button></router-link>
    </div>
    <div class="content-option">
      <router-link to="download"><img src="../assets/download.png"></router-link>
      <router-link to="download"><Button type="primary" shape="circle">我要下载</Button></router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .content{
    display: flex;
    display: -webkit-flex;
    height: 100%;
    width: 100%;
    justify-content: center;
  }
  .content-option{
    width: 30%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
  }
  .content-option img{
    display: block;
    margin: 10% auto;
    height: 60%;
    width: 100%;
  }
  .content-option img:hover{
    transform: scale(1.2, 1.2);
    cursor: pointer;
  }
  .content-option button{
    transform: scale(1.3, 1.3);
    border: none;
    margin: 0 auto;
    font-size: 1rem;
    background-color: #6d7380;
  }
  .content-option button:hover{
    background-color: #2b85e4;
  }
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
