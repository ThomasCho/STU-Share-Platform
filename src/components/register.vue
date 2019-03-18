<template>
  <div class="content">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" label-position="left" :label-width="0"
          class="login-form">
      <div>
        <Form-item prop="account">
          <Input v-model="formValidate.account" size="large" icon="person" auto-complete="off"
                 placeholder="请输入汕大邮箱地址">
          </Input>
        </Form-item>
        <Form-item prop="password">
          <Input v-model="formValidate.password" type="password" size="large" icon="locked" auto-complete="off"
                 placeholder="请输入你的密码">
          </Input>
        </Form-item>
        <Form-item prop="sure_password">
          <Input v-model="formValidate.sure_password" type="password" size="large" icon="locked" auto-complete="off"
                 placeholder="请再次输入你的密码">
          </Input>
        </Form-item>
        <Form-item prop="user_name">
          <Input v-model="formValidate.user_name" size="large" icon="person" auto-complete="off"
                 placeholder="请输入你想要被称呼的名字">
          </Input>
        </Form-item>
        <Form-item>
          <div class="login-btn">
            <Button style="backgroundColor: red; width: 50%" type="primary" @click="register">注册</Button>
          </div>
        </Form-item>
      </div>
    </Form>
  </div>
</template>

<style lang="scss" scoped>
  .content{
    display: flex;
    display: -webkit-flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
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
          account: '',
          password: '',
          sure_password: '',
          user_name: ''
        },
        ruleValidate: {
          account: [
            {required: true, message: '请输入邮箱！', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码！', trigger: 'blur'}
          ],
          sure_password: [
            {required: true, message: '请输入密码！', trigger: 'blur'}
          ],
          nickname: [
            {required: true, message: '请输入名称！', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      register () {
        if (this.formValidate.password !== this.formValidate.sure_password) {
          this.$Message.error('两次输入密码不同')
          return
        }
        let formdata = new FormData()
        formdata.append('email', this.formValidate.account)
        formdata.append('nickname', this.formValidate.user_name)
        formdata.append('password', this.formValidate.password)
        doPostWithObjectParams(requestApi.register, formdata, '').then((response) => {
          let expireDays = new Date()
          expireDays.setTime(expireDays.getTime() + 600000)
          document.cookie = 'user_name=' + this.formValidate.account + ';expires=' + expireDays.toUTCString()
          this.$Message.info('注册成功!')
          this.$router.replace({ path: '/shell/main' })
        }).catch((error) => {
          console.log(error)
          this.$Message.info(error)
        })
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
