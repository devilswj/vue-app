<template>
    <div>
        <van-nav-bar title="用户注册" left-text='返回' left-arrow @click-left="goBack"/>
            <div class="register-panel">
                <van-field :error-message="usernameErrorMsg" v-model="username" label="用户名" icon="clear" placeholder="请输入用户名" required @click-icon="username=''"/>

                <van-field :error-message="passwordErrorMsg" v-model="password" type="password" label="密码"  placeholder="请输入密码" />

                <div class="register-button">
                    <van-button :loading="loading" type="primary" @click="createUser" size="large">马上注册</van-button>
                </div>
            </div>
    </div>
</template>
<script>
import axios from "axios";
import { Toast } from 'vant'
export default {
 data(){
     return{
         username:'',
         password:'',
         loading:false,
          usernameErrorMsg:'',
          passwordErrorMsg:''
     }
 },
 methods:{
     goBack(){
         this.$router.go(-1)
     },
     creatUser(){
          this.loading=true
         axios({
             url:'http://localhost:3000/register',
             method:'post',
             data:{
                 username:this.username,
                 password:this.password
             }
         })
         .then(resolve=>{
             if(resolve.data.status == 200){
            Toast.success('注册成功')
            this.$router.push('/')
        }else{
            console.log(resolve.data.message)
            Toast.fail('注册失败')
            this.loading=false
        }
             console.log(resolve)
         })
     },
     check(){
         let isok=true
         let isOk= true
    if(this.username.length<5){
        this.usernameErrorMsg="用户名不能小于5位"
        isOk= false
    }else{
        this.usernameErrorMsg=''
    }
    if(this.password.length<6){
        this.passwordErrorMsg="密码不能少于6位"
        isOk= false
    }else{
        this.passwordErrorMsg=''
    }
    return isOk
     },
     createUser(){
         if(this.check()){
             this.creatUser()
         }
     }
 }   
}
</script>
<style scoped>
    .register-panel{
        width: 96%;
        border-radius: 5px;
        margin:20px auto;
        padding-bottom: 50px;
    }
    .register-button{
        padding-top: 10px;
    }
</style>