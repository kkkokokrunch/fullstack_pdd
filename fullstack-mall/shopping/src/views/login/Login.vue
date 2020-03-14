<template>
  <div class="login">
    <!-- 手机号码和验证码 -->
    <div class="info">
      <div class="phone iconfont icon-shouji">
        <input type="text" placeholder="手机号码" v-model="phoneNum" maxlength="11">
      </div>
      <div class="check iconfont icon-suo">
        <input type="text" placeholder="验证码" v-model="checkNum">
        <button 
        class="send" 
        v-if="!countDown" 
        :class="{phone_right:phoneRight,phone_wrong:!phoneRight}"
        @click.prevent="getCheckCode()">
        发送验证码</button>
        <button class="send phoneRight" v-else disabled="disabled">已发送({{countDown}}s)</button>
      </div>
    </div>
    
    <div class="form-button">
      <button class="agree" @click.prevent="login()">同意协议并登录</button>
      <button class="back">返回</button>
      <span>已阅读并同意服务协议与隐私政策</span>
    </div>
    
  </div>
</template>

<script>
import {getCheckCode,codeLogin} from '../../network/user'
import {mapActions} from 'vuex'
export default {
    name:'Login',
    data() {
      return {
        phoneNum:'',
        checkNum:'',
        countDown:0,
        userInfo:{}
      }
    },
    computed: {
      phoneRight() {
        return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phoneNum)
      }
    },
    methods: {
      ...mapActions(['syncUserInfo']),
      getCheckCode(){
        //开启倒计时
        if(this.phoneRight) {
          this.countDown = 5
          this.intervalId = setInterval(() => {
            this.countDown --
            if(this.countDown === 0) {
              clearInterval(this.intervalId)
            }
          },1000)
        }

        //获取短信验证码
        getCheckCode(this.phoneNum).then(res => {
          console.log(res)
        })

      },
      login() {
        if(!this.phoneNum) {
          alert('请输入手机号码')
          return
        }else if(!this.phoneRight){
          alert('请输入正确的号码')
          return
        }

        if(!this.checkNum) {
          alert('请输入验证码')
          return
        }else if(!(/^\d{6}$/gi.test(this.checkNum))) {
          alert('请输入正确验证码')
          return
        }

        codeLogin(this.phoneNum,this.checkNum).then(res => {
          // console.log(res)
          // console.log(res.success_code)
          // success_code
          if(res.success_code === 200) {
            this.userInfo = res.message
            console.log(this.userInfo)
            // this.$router.replace('/profile')
            alert('success登陆成功')
            window.sessionStorage.setItem('user',this.userInfo.user_name)
          }else {
            this.userInfo = {
              message:'登陆失败，手机或验证码不正确'
            }
            // alert(this.userInfo.message)
          }
          if(!this.userInfo.id) {
            alert(this.userInfo.message)
          }else {
            // console.log(this.userInfo)
            this.syncUserInfo(this.userInfo)
            console.log(this.$store.state.userInfo)
            this.$router.back()
          }
         
        })
        
      }
    },
}
</script>

<style scoped>
input{  
  background:none;  
  outline:none;  
  border:none;
  margin-left: 12px;
  color: black;
}
input::-webkit-input-placeholder{
  color: #bababa;
  opacity: 0.8;
}
button {
  border: 0;
  background-color: transparent;
  outline: none;
}
.iconfont {
  font-size: 17px;
}
.login {
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.login .info {
  margin-top: 10px;
  background-color: #fff;
  padding: 15px;
}
.login .info .phone {
  padding-bottom: 15px;
  border-bottom: 1px solid #f5f5f5;
}
.login .info .check {
  position: relative;
  margin-top: 15px;
}
.login .info .check .send {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  /* color: #f4d0ce;
  border: 1px solid #f4d0ce; */
  border-radius: 5px;
  padding: 5px 10px;
}
.phone_wrong {
  color: #f4d0ce;
  border: 1px solid #f4d0ce;
}
.phone_right {
  color: #e02e24;
  border: 1px solid #e02e24;
}
.login .form-button {
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 17px;
}
.login .form-button .agree {
  width: 95%;
  padding: 13px 28px;
  background-color: #e02e24;
  color: #fff;
  border-radius: 5px;
}
.login .form-button .back {
  width: 95%;
  padding: 12px 28px;
  margin-top: 10px;
  border: 1px solid #e02e24;
  background-color: #fff;
  color: #e02e24;
  border-radius: 5px;
  box-sizing: border-box;
}
.login .form-button span {
  font-size: 12px;
  margin-top: 10px;
}
</style>