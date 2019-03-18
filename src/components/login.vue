<template>
  <div class="default-section">
    <div class="background"></div>
    <div class="login-body">
      <div class="login-logo">
        <!-- <img src="../assets/page/big_logo.png"></img> -->
      </div>
      <div class="login-title">
        <h1>学习资料分享平台</h1>
        <p>汕大人最大的学习分享平台！最充足的资源！最细致的分类！最简单的操作！</p>
      </div>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" label-position="left" :label-width="0"
            class="login-form">
        <div>
          <Form-item prop="account">
            <Input v-model="formValidate.account" size="large" icon="person" auto-complete="off"
                   placeholder="账号">
            </Input>
          </Form-item>
          <Form-item prop="password">
            <Input v-model="formValidate.password" type="password" size="large" icon="locked" auto-complete="off"
                   placeholder="密码">
            </Input>
          </Form-item>
          <Form-item>
            <Button style="backgroundColor: red; border: red" type="primary" class="login-btn" @click.native.prevent="handleSubmit()">登录</Button>
            <Button type="primary" class="login-btn" @click.native.prevent="handleRegister()">注册</Button>
          </Form-item>
        </div>
      </Form>
    </div>
    <div class="login-footer">
      <p>
        2017&copy; 汕头大学&nbsp;&nbsp;&nbsp;&nbsp;地址：广东省汕头市金平区大学路243号汕头大学&nbsp;&nbsp;联系电话：13411988465&nbsp;&nbsp;邮箱：14zmcao@stu.edu.cn
      </p>
    </div>
  </div>
</template>

<style scoped>
  /* 基础布局 */
  .default-section {
    /* background: url(../assets/page/bg.jpg) repeat; */
    display: flex;
    display: -webkit-flex;
    height: 100vh;
    flex-direction: column;
    z-index: 9999;
  }
  .background{
    z-index: -1;
    background: url(../assets/BG2.jpg) no-repeat;
    background-size: cover;
    position: absolute;
    height: 100vh;
    width: 100vw;
    animation: fadein 2s;
    -webkit-animation: fadein 2s;
  }
  @keyframes fadein
  {
    from {opacity: 0;}
    to {opacity: 100;}
  }

  @-webkit-keyframes fadein
  {
    from {opacity: 0;}
    to {opacity: 100;}
  }

  .login-title{
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    margin: 10% 0 -10% 0;
  }
  .login-title p{
    margin: 5% 0 25% 0;
    color: white;
    font-size: 1.5rem;
  }

  .login-body {
    flex: 1;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /*background: url('../assets/1.jpg') no-repeat fixed;*/
    background-size: 100% 40%;
    background-position: center 60%;
  }

  .login-footer {
    height: 100px;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    /*font-family: "Open Sans", Arial, sans-serif;*/
    font-weight: lighter;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
  }

  .login-footer hr {
    margin-bottom: 30px;
  }

  /* form */
  .login-form {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border: none;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    width: 450px;
    /*width: calc(30%);*/
    padding: 35px 35px 11px 35px;
    background-color: transparent;
  }

  .login-btn {
    width: 49%;
    display: inline-block;
    font-size: 15px;
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
           password: ''
         },
         ruleValidate: {
           account: [
             {required: true, message: '请输入账号！', trigger: 'blur'}
           ],
           password: [
             {required: true, message: '请输入密码！', trigger: 'blur'}
           ]
         }
       }
     },
     methods: {
       handleSubmit () {
         let password = this.formValidate.password
         let account = this.formValidate.account
         if (password === '' || account === '') {
           this.$Message.error('用户名或密码不能为空')
           return
         }
         /* eslint-disable no-new */
//         new Promise((resolve, reject) => {
//           AV.Query.doCloudQuery('select password from STU_SHARE where account="' + this.formValidate.account + '"').then(function (data) {
//             // data 中的 results 是本次查询返回的结果，AV.Object 实例列表
//             if (data.results.length === 0) {
//               reject('账号不存在！')
//             } else if (data.results[0].attributes.password === password) {
//               resolve()  // 登录成功
//             } else {
//               reject('密码错误！')
//             }
//           }, function (error) {
//             // 查询失败，查看 error
//             console.error(error)
//             alert(error)
//           })
//         }).then((suc) => {
//           let expireDays = new Date()
//           expireDays.setTime(expireDays.getTime() + 600000)
//           document.cookie = 'user_name=' + account + ';password=' + password + ';expires=' + expireDays.toUTCString()
//           this.$router.replace({ path: '/shell/main' })
//         }, (err) => {
//           this.$Message.error(err)
//         })
         let formData = new FormData()
         formData.append('email', this.formValidate.account)
         formData.append('password', this.formValidate.password)
         doPostWithObjectParams(requestApi.login, formData, '').then((response) => {
           let expireDays = new Date()
           expireDays.setTime(expireDays.getTime() + 600000)
           document.cookie = 'user_name=' + account + ';expires=' + expireDays.toTimeString()
           let that = this
           setTimeout(function () {
             that.$router.replace({ path: '/shell/main' })
           }, 100)
         }).catch((error) => {
           console.log(error)
           this.$Message.info(error)
         })
       },
       handleRegister () {
         this.$router.replace({ path: '/register' })
       }
     },
     mounted () {
       this.$nextTick(() => {
       })
     }
   }
</script>
