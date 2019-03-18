<template>
  <div class="content">
    <div class="body-head">
      <div class="file">
        <span style="font-size: 3rem; margin-right: 5%">{{currentFile.file_name}}</span><img src="../assets/like.png" style="width: 30px; height: 30px; margin-right: 3%"><span style="font-size: 2rem; margin-right: 5%">{{currentFile.likes}}</span><img src="../assets/download.png" style="width: 90px; height: 70px; position: relative; top: 20px"><span style="font-size: 2rem;">{{currentFile.download_times}}</span>
      </div>
      <div class="file_detail">
        <span style="margin-right: 3%">上传者：{{currentFile.owner}}</span><hr><span style="margin-right: 3%">大小：{{currentFile.size}}</span><hr><span style="margin-right: 3%">分类：{{currentFile.categories}}</span><hr><span>知识点：{{currentFile.tag}}</span>
      </div>
    </div>
    <div class="body-middle">
      <div class="description">
        <Input type="textarea" placeholder="文件描述：" readonly :value="currentFile.description" :rows="8"></Input>
      </div>
      <Button type="primary" class="download" @click.native="downloadFile">我要下载</Button>
    </div>
    <a class="down" target="_blank"></a>
  </div>
</template>

<style lang="scss" scoped>
  .content{
    display: flex;
    display: -webkit-flex;
    width: 100vw;
    padding-top: 2%;
    align-items: center;
    flex-direction: column;
    overflow: auto;
  }
  .body-head{
    width: 80%;
  }
  hr{
    width: 0;
    height: 20px;
    display: inline-block;
    margin-right: 3%;
  }
  .file{
    margin: 0 0 2% 0;
    border-bottom: solid 1px black;
  }
  .file_detail{
    line-height: 100%;
    vertical-align: middle;
    width: 100%;
    margin: 2% 0 2% 0;
    font-size: 2rem;
  }
  .body-middle{
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    display: -webkit-flex;
  }
  .description{
    width: 50%;
    margin-left: 10%;
  }
  .download{
    width: 50%;
    height: 10%;
    margin: 2% 0 0 10%;
    font-size: 2rem;
    vertical-align: middle;
    line-height: 10%;
  }
  .down{
    display: none;
  }
</style>

<script>
  /* eslint-disable no-unused-vars */
  import { doGetGeneral, doPostWithObjectParams } from '../utils/request-common'
  import requestApi from '../../option'
  import {store} from '../main'

  export default {
    data () {
      return {
        currentFile: ''
      }
    },
    methods: {
      downloadFile () {
        let formdata = new FormData()
        formdata.append('material_id', this.currentFile.material_id)
        var request = new XMLHttpRequest()
        request.open('POST', 'http://120.77.86.119/stushare/index.php?/api/material/download', true)
        request.onreadystatechange = function () {
          if (request.status === 200 && request.readyState === 4) {
            document.querySelector('.down').href = 'http://120.77.86.119' + JSON.parse(request.responseText).file.file_url
            document.querySelector('.down').click()
          }
        }
        request.send(formdata)
      }
    },
    mounted () {
      // 如果有依赖dom必须存在的情况，就放到nextTick里面
      this.$nextTick(() => {
      })
    },
    created () {
      let formData = new FormData()
      formData.append('material_id', store.state.fileId)
      doPostWithObjectParams(requestApi.getCurrentFile, formData, '').then((response) => {
        this.currentFile = JSON.parse(response)
        console.log(this.currentFile)
      })
    },
    destroyed () {
    }
  }
</script>
