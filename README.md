# web-portal-system

## 常用命令

### 1、安装
```
 npm i
```
### 2、项目启动
```
npm run serve （ npm run dev # 本地开发模式）
```
### 3、格式化代码
```
npm run lint 自动格式化
```
### 4、打包代码
```
npm run build:dev  # 开发环境打包   
npm run build:fat  # 测试环境打包
npm run build:prod # 生产环境打包
```
### 5、打包分析
```
npm run analyz
```

## 目录结构
```
    .dist代码打包输出目录
        .dev开发环境目录
        .fat测试环境目录
        .prod生产环境目录
        .[dev|fat|prod].MMddhhmm.zip 打包后的压缩文件.MMddhhmm 代表打包时间
    .build 构建时的配置
    .docs文档
        .guide.md 开发指南
        .naming.md 命名规范
        .number.md 数字运算
        .xss.md 跨站脚本
        .font-family 字体规范
    .mock 数据模拟
    .performance 生产模式性能测试
    .public 开发模式服务器公共目录
    .src源码
        .assets 资源文件
        .component 公共组件
        .router 路由
        .service axios 服务
        .store vuex 存储
        .utils 公共脚本
            .libs 第三方库
            .code 业务码值
        .views 页面
    .test 测试
        .e2e端到端测试
        .unit 单元测试
```

# 代码版本管理

## GIT提交规范

### 代码提交需要严格遵循的原则如下：
```
    .必须书写清晰明了的提交记录，描述本次提交的改动内容（50字下）
        .FEAT：xxx（表示此次提交为新功能的开发）
        .MOD：xxx（表示此次提交为某个功能的修改）
        .FIX：xxx（表示此次提交为某个bug的修复）
        .DOCS：xxx（表示文档的修改）
        .REFACTOR：xxx（表示对原有功能的优化重构）
        .TEST：xxx（表示对某个功能的测试）
```

## GIT Hooks
```
提交commit时执行自动格式化命令，warning级别的错误会自动修复，error级别的错误需要手动修改后才可成功提交
{
    "hooks":{
        "pre-commit"："npm run lint"
    }
}
```

## GIT 合并 commit
```
rebase 简介 rebase 可以对某一段线性提交历史进行编辑、删除、复制、粘贴；因此合理使用 rebase 可以使我们的提交历史干净、整洁。
    # 合并前两次 commit
    git rebase -i HEAD~2
    # 放弃本次rebase操作
    git rebase --abort
```

## 代码回滚
```
git reset HEAD^    恢复成上次提交的版本
git reset HEAD^^   恢复成上上次提交的版本，多个^,以此类推

git reflog 查看commit，reset记录

git reset --hard    版本号


```
## npm 源 
```
将 npm 源设置为 taobao镜像(镜像源)：
npm config set registry http:taobao.xxxxxxxxxx
```
