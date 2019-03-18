<template>
  <div class="content">
    <div class="body-head">
      <h1>我要上传</h1>
    </div>
    <div class="body-mid">
      <div class="body-mid-left">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
          <div>
            <Form-item prop="name" label="文件名称：">
              <Input v-model="formValidate.name" size="large" auto-complete="off"
                     placeholder="请输入文件名称">
              </Input>
            </Form-item>
            <Form-item prop="tag" label="分类标签：">
              <RadioGroup v-model="formValidate.tag" type="button">
                <Radio label="学院"></Radio>
                <Radio label="系"></Radio>
                <Radio label="科目"></Radio>
                <Radio label="知识点"></Radio>
              </RadioGroup>
            </Form-item>
            <Form-item>
              <Input v-model="formValidate.description" type="textarea" :rows="5" placeholder="请输入...">
              </Input>
            </Form-item>
            <Form-item>
              <input type="file" name="file" style="display:none" @change="changeFile($event)" ref="file">
            </Form-item>
          </div>
        </Form>
      </div>
      <hr>
        <div class="body-mid-right" @click="setFile" style="cursor: pointer; user-select: none">
          <img style="width: 100%; height: 100%" src="../assets/upload.png" >
          <span v-if="isSelected" style="font-size: 1.5rem; position: relative; top: -20%; color: #19be6b">已选择文件</span>
          <span v-else style="font-size: 1.5rem; position: relative; top: -20%;">点击上传文件</span>
        </div>
    </div>
    <Button type="primary" @click="uploadFile" style="height: 5%; width: 15%; margin: 0 10% 10% 0">上传</Button>
  </div>
</template>

<style lang="scss" scoped>
  .content{
    display: flex;
    display: -webkit-flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    flex-direction: column;
  }
  hr{
    margin: 0 10% 0 10%;
    height: 300px;
  }
  .body-head{
    height: 10%;
    width: 100%;
    padding: 2% 0 0 2%;
  }
  .body-mid{
    margin: 5% 0 5% 0;
    width: 100%;
    height: 50%;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
  }
  .body-mid-left{
    width: 20%;
  }
  .body-mid-right{
    width: 30%;
    height: 100%;
    border: 0.5px #D3D3D3 solid;
    text-align: center;
  }
  .login-btn{
    text-align: center;
  }
</style>

<script>
  /* eslint-disable no-unused-vars */
  import { doGetGeneral, doPostWithObjectParams } from '../utils/request-common'
  import requestApi from '../../option'

  export default {
    data () {
      return {
        formValidate: {
          name: '', // 文件名称
          tag: '',  // 分类标签
          description: '',  // 描述
          user_file: ''  // 上传的文件
        },
        isSelected: false,  // 有没有选择了文件
        ruleValidate: {
          name: [
            {required: true, message: '名字不能为空', trigger: 'blur change'}
          ]
        }
      }
    },
    methods: {
      // 上传文件
      uploadFile () {
        let formData = new FormData()
        formData.append('email', document.cookie.slice(document.cookie.indexOf('=') + 1))
        formData.append('file_name', this.formValidate.name)
        formData.append('tag', this.formValidate.tag)
        formData.append('description', this.formValidate.description)
        formData.append('userfile', this.formValidate.user_file)
        doPostWithObjectParams(requestApi.uploadFile, formData, '').then((response) => {
          console.log(response)
          this.handleReset('formValidate')
          this.isSelected = false
          this.$Message.info('上传成功!')
          this.$router.replace({ path: '/shell/main' })
        }).catch((error) => {
          this.$Message.error(error)
          console.log(error)
        })
      },
      // 点击图片，触发选文件动作
      setFile () {
        this.$refs.file.click()
      },
      // 选好文件，编码
      changeFile (e) {
//        var file = e.target.files[0]
//        var reader = new FileReader()
//        var that = this
//        reader.readAsBinaryString(file)
//        reader.readAsText(file)
//        reader.onload = function (e) {
//          that.formValidate.user_file = e.target.result
//          that.isSelected = true
//        }
        this.formValidate.user_file = e.target.files[0]
        this.isSelected = true
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      }
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
