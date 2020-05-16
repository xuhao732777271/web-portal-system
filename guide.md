# 开发指南

## 1、环境变量
    .evn.development 开发环境配置文件
    .env.prod 生产环境配置文件
    .env.xxx.local 本地配置文件 .git忽略

    配置文件中可以设置服务主机及上下文
    APP_HOST = "http://192.168.43.224:8080/"
    APP_CONTENT = "/servicegateway"
    为了在运行时获取配置信息，需要在编译时通过 webpack DefinePlugin 将配置变量注入到代码中

## 2、请求服务器
    .服务器地址：dev开发环境、fat测试环境、pro生产环境
    .接口文档
    .本地代理：通过 {devServer} 设置代理 将请求转发至服务器
        devServer：{
            prot：8001，
            proxy：IS_PRCO
                ? null
                : {
                    "/servicegateway":{
                        target:process.evn.APP_HOST
                        chargeOrigin：true
                    }
                }
        }
    .发送请求
        1、将请求方法 somemethod 写入 src/service/api 中，请求方法 somemethod (params, config, setting) 的参数
            .params 传输的数据
            .config 请求配置
            .setting 其他配置
                .setting.loading 是否显示 loading 动画
        2、所有请求方法都已经挂载至vue原型上，可以在vue实例中调用接口：
            this.$api.somemethod();
    .错误处理
        1、相应参数：接口返回码： 000000 成功、 非 000000 失败
        2、请求例子
            this.$api
                .somemethod()
                .then(res => {
                    /**
                    *   000000 响应
                    *   由于res 不可信任，必须还要判断 res.data 是否为空，否则会报错：TypeError
                    */
                    if (res && res.data) {
                        this.somedata = res.data
                    } else {
                        // 返回值为空相应处理，比如弹框提示
                    }
                })
                .catch(e => {
                    console.log(e.code, e.message);
                })
            注意：
                1、对于非 000000 相应，已在 axios 拦截器其中拦截，即非000000相应会直接进入promise的catch中，e.code和e.message 分别对应响应的 returnCode 和returnMessage
                2、对于统一的异常状态码，如TN001，已在src/service/http.js进行统一拦截，不会再进入promise的then或者catch中
                3、对于非统一的异常状态码，开发时需要捕获错误并进行处理
## 3、store 存储

## 4、路由
    .路由配置
    .菜单配置
    .路由跳转
## 5、element-ui 开发
## 6、scss样式
## 7、自动化部署
    1、同步githup仓库代码
    2、进入根目录执行脚本
    3、校验 dist.tar.gz 包的完整性
    4、发布
## 8、自动化测试
    cypress e2e 测试
    jest 单元测试
## 9、资源
    .doc/tools 开发工具
    .doc/libs 第三方库文档
## 10、待完善
    .安全相关
    .性能测试
    .打包分析