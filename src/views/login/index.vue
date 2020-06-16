<!-- 登录页面 -->
<template>
    <div class="login">
        <div class="loginTemp">
            <h1 class="loginTitle">
                {{ loginTitle }}
            </h1>
            <el-form class="loginForm" ref="loginForm" :model="form" :rules="rules" label-width="80px" size="small">
                <!-- 用户名 -->
                <el-form-item label="用户名" prop="name">
                    <el-input class="login-input" v-model="form.name"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="密码" prop="pwd">
                    <el-input class="login-input" type="password" v-model="form.pwd"></el-input>
                </el-form-item>
                <!-- 验证码 -->
                <el-form-item label="验证码" prop="verCode">
                    <el-input class="login-input" v-model="form.verCode"></el-input>
                </el-form-item>
                <!-- 登录、注册按钮 -->
                <el-form-item>
                    <el-button @click="registerSubmit">注册</el-button>
                    <el-button type="primary" @click="submitLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            loginTitle: '请先登录', // 登录框标题
            form: {
                name: '',
                pwd: '',
                verCode: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名' },
                    {
                        validator: (rule, value, callback) => {
                            if (value !== 'xuhao') {
                                callback(new Error('请重新输入用户名'));
                            }
                        },
                        trigger: 'blur'
                    }
                ],
                pwd: [
                    { required: true, message: '请输入密码' },
                    {
                        validator: (rule, value, callback) => {
                            if (value !== 'xuhao123') {
                                callback(new Error('请重新输入密码'));
                            }
                        },
                        trigger: 'blur'
                    }
                ],
                verCode: [
                    { required: true, message: '请输入验证码' }
                ]
            }
        }
    },
    methods: {
        /**
         * 注册
         */
        registerSubmit() {
            console.log('666');
        },
        /**
         * 登录
         */
        submitLogin() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    sessionStorage.setItem('name', this.form.name);
                    sessionStorage.setItem('pwd', this.form.pwd)
                    sessionStorage.setItem('islogin', true);
                    this.$router.push('/');
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.login{
    width: 100%;
    height: calc(100% - 50px);
    background: url(~@/assets/login/home.png) no-repeat;
    background-size: 100% 100%;
    padding-top: 100px;
    .loginTemp{
        text-align: center;
        width: 350px;
        height: 350px;
        margin-left: 120px;
        background: #fff;
        border-radius: 5px;
        padding-top: 10px;
        .loginTitle{
            width: 100%;
            height: 60px;
            line-height: 60px;
            font-size: 24px;
            text-align: center;
        }
        .loginForm{
            width: 70%;
            margin: 10px 0 0 10px;
        }
    }
}
</style>