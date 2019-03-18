<template>
  <div class="default-section">
    <div class="default-header">
      <div class="logo-container">
        <img src="../assets/logo.jpg">
      </div>
      <div class="header-right">
        <router-link to="main" replace><span>首页</span></router-link>
        <router-link to="personalData" replace><span>个人资料</span></router-link>
        <router-link to="IWantLearning" replace><span>我要学习</span></router-link>
      </div>
    </div>
    <div class="default-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  /* 基础布局 */
  .default-section {
    overflow: hidden;
    /*background-color: #EAF8FB;*/
    display: flex;
    display: -webkit-flex;
    height: 100vh;
    flex-direction: column;
  }

  .default-header {
    height: 100px;
    /*background-color: #B7D7E6;*/
    border-top: 5px orange solid;
    border-bottom: 0.5px #D3D3D3 solid;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
  }

  /* header-right */
  .header-right {
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
    height: 100%;
  }

  /* header-right separator */
  .header-right a {
    height: 100%;
    width: 100px;
    font-size: 20px;
    text-align: center;
    color: black;
  }
  .header-right a:hover{
    /*transform: scale(1.5, 1.5);*/
    border-bottom: solid 3px orange;
  }
  .header-right span {
    position: relative;
    top: 50%;
  }

  .default-wrapper {
    display: flex;
    display: -webkit-flex;
    flex: 1;
  }

  /* logo-container */
  .logo-container {
    margin-left: 18px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: flex-start;
  }

  .logo-container img {
    height: 90px;
    width: 150px;
    vertical-align: middle;
    color: transparent;
    border: 0;
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
     }
   }
</script>
