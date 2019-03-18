<template>
  <div class="errPage-container">
    <div class="left-div">
      <h1 class="text-jumbo">Oops!</h1>
      <br />
      <h1>你没有权限去该页面</h1>
    </div>
  </div>
</template>

<script>
// import errGif from '../../assets/error/403.gif'

export default {
  data () {
    return {
      // errGif: errGif + '?' + +new Date()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.errPage-container {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh);
  width: calc(100vw);
  background-color: white;
}
.left-div {
  margin-right: 100px;
  color: #484848;
  text-align: center;
}
.text-jumbo {
  font-size: 60px;
  font-weight: 700;
  color: #484848;
}

</style>
