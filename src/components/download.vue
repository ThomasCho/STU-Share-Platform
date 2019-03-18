<template>
  <div class="content">
    <div class="body-head">
      <Input v-model="searchText" placeholder="输入你想学的" class="search-box">
      <!--<Icon type="ios-search" slot="prepend" style="width: 30px"></Icon>-->
      <Button slot="append" icon="ios-search" @click.native="searchFile"></Button>
      </Input>
      <div class="search-tags">
        <span style="margin-right: 5%">热门标签</span>
        <RadioGroup v-model="fileTag" type="button" style="width: 80%" @on-change="searchFile">
          <Radio v-for="tag in tags" :label="tag.tag"></Radio>
        </RadioGroup>
      </div>
    </div>
    <div class="body-middle">
      <div class="body-middle-left">
        <Table :columns="columns1" :data="data1" width="800"  border highlight-row style="cursor: pointer" @on-row-click="getFileDetail"></Table>
      </div>
      <div class="body-middle-right">
        <fieldset style="height: 30%">
          <legend>最近收花最多的用户</legend>
          <div class="avatar">
            <Icon type="person" size="40"></Icon>
            <h5>14cychen1</h5>
          </div>
          <div class="avatar">
            <Icon type="person" size="40"></Icon>
            <h5>14cychen1</h5>
          </div>
          <div class="avatar">
            <Icon type="person" size="40"></Icon>
            <h5>14cychen1</h5>
          </div>
        </fieldset>
        <fieldset style="height: 60%; padding-top: 5%">
          <legend>最近点赞最多的文件</legend>
          <Table :columns="columns2" :data="data2" :show-header="false" height="170" width="330"></Table>
        </fieldset>
        <fieldset style="height: 60%; padding-top: 5%">
          <legend>最近下载最多的文件</legend>
          <Table :columns="columns2" :data="data2" :show-header="false" height="170" width="330"></Table>
        </fieldset>
      </div>
    </div>
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
    width: 100%;
  }
  .search-box{
    width: 30%;
    margin: 0 10% 1% 10%;
    border-radius: 10px;
  }
  .search-tags{
    width: 50%;
    margin: 0 10% 2% 10%;
  }
  .body-middle{
    width: 100%;
    height: 60vh;
    display: flex;
    display: -webkit-flex;
  }
  .body-middle-left{
    margin: 0 0 0 10%;
  }
  .body-middle-right{
    margin: 0 5%;
    width: 40%;
  }
  .body-middle-right fieldset{
    margin: 0 auto 10% auto;
  }
  .avatar{
    float: left;
    margin-left: 5%;
  }
  legend{
    font-size: 1rem;
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
        columns1: [
          {
            title: '',
            key: 'file_id',
            align: 'center',
            width: 1,
            render: (h, params) => {
              let self = this
              return h('span', {
                domProps: {
                  innerText: self.data1[params.index].file_id
                },
                style: {
                  display: 'none'
                }
              })
            }
          },
          {
            title: '文件名',
            key: 'file_name',
            align: 'center'
          },
          {
            title: '分类',
            key: 'tags',
            align: 'center',
            render: (h, params) => {
              let self = this
              return h('span', {
                domProps: {
                  innerText: self.data1[params.index].tags
                }
              })
            }
          },
          {
            title: '上传者',
            key: 'owner',
            align: 'center'
          },
          {
            title: '文件类型',
            key: 'type',
            align: 'center'
          },
          {
            title: '文件大小',
            key: 'size',
            align: 'center'
          },
          {
            title: '点赞数',
            key: 'likes',
            align: 'center'
          },
          {
            title: '下载量',
            key: 'download_times',
            align: 'center'
          }
        ],
        data1: [],
        columns2: [
          {
            title: '下载量',
            key: 'address'
          }
        ],
        data2: [
          {
            address: '北京市朝阳区芍药居'
          },
          {
            address: '北京市朝阳区芍药居'
          },
          {
            address: '北京市朝阳区芍药居'
          },
          {
            address: '北京市朝阳区芍药居'
          },
          {
            address: '北京市朝阳区芍药居'
          }
        ],
        offset: 0,  // 列表偏移量
        total_row: 10,   // 总共的行数
        tags: [],
        fileTag: '',   // 当前选择的tag
        fileTagId: '', // 当前选择的tag的id
        searchText: ''
      }
    },
    methods: {
      getFileDetail (rowDetail) {
        store.commit('changeCurrentFileId', {
          fileId: rowDetail.material_id
        })
        this.$router.push({ path: '/shell/fileDetail' })
      },
      searchFile () {
        let formdata = new FormData()
        let searchKeyWord = ''
        if (this.searchText !== '') {
          searchKeyWord += this.searchText
          if (this.fileTag !== '' && this.fileTag !== '无') {
            searchKeyWord = searchKeyWord + ',' + this.fileTag
          }
        } else {
          if (this.fileTag !== '') {
            if (this.fileTag !== '无') {
              searchKeyWord += this.fileTag
            }
          }
        }
        formdata.append('content', searchKeyWord)
        doPostWithObjectParams(requestApi.searchFile, formdata, '').then((response) => {
          this.data1 = JSON.parse(response).result
        })
      }
    },
    mounted () {
      // 如果有依赖dom必须存在的情况，就放到nextTick里面
      this.$nextTick(() => {
      })
    },
    created () {
      let formdata = new FormData()
      formdata.append('content', '')
      doPostWithObjectParams(requestApi.searchFile, formdata, '').then((response) => {
        this.data1 = JSON.parse(response).result
        console.log(this.data1)
      })

      // 加载标签
      let formData1 = new FormData()
      doPostWithObjectParams(requestApi.getTags, formData1, '').then((response) => {
        this.tags = JSON.parse(response).tag_list
        this.tags.push({'tag': '无'})
      }, (response) => {
        console.log(response)         // promise被reject的回调
      }).catch((error) => {
        this.$Message.error(error)
        console.log(error)
      })
    },
    destroyed () {
    }
  }
</script>
