![image](https://user-images.githubusercontent.com/6184465/55446887-24d79480-55f4-11e9-900b-09783d0e34f9.png)

项目中的一些构建流程 (比如为什么使用 make 而不是 npm run script) 的思路主要来自陈天老师的 [这篇文章](https://mp.weixin.qq.com/s/a-tUQSy5zT3qhd8mBy2HfA)

## 概览

公网预览地址 [https://auth-flow.mydearxym.now.sh/](https://auth-flow.mydearxym.now.sh/)

> 目前因为线上没有可用 api, 仅做展示使用，如需查看交互逻辑，请按下面步骤操作.

常见的 npm 脚本可以使用 make 或者 make help 查看： 

```text

  [valid init commands]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  init         : 安装 node_modules 依赖
  .....................................................
  install      : 同 init
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  [valid dev commands]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  dev         : 以开发模式启动开发
  .....................................................
  mock        : 以 mock 模式启动开发
  .....................................................
  mock.server : 启动 mock server
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  [valid generators]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  gen : 自动生成 container/component/store 的样板代码
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  [valid commit commands]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  commit : 以规范方式提交 git commit
         | 文档: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  [valid test commands]
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  test             : 使用 jest 进行组件单元测试
  ...............................................................
  test.watch       : 单元测试的 watch 模式
  ...............................................................
  test.e2e         : 使用 cypress 进行 e2e 测试
                   | 文档: https://docs.cypress.io/
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

```

## 安装

1. clone 代码到本地
2. make install
3. make mock.server
4. make mock

## 目录结构

![image](https://user-images.githubusercontent.com/6184465/55447257-9401b880-55f5-11e9-85c6-97c1ceceb224.png)


### 典型的 container(容器组件) 目录结构

![image](https://user-images.githubusercontent.com/6184465/55447267-9cf28a00-55f5-11e9-9423-909cd68a8f8c.png)

```bash
.
├── VerifyCodeInput.js
├── index.js
├── logic.js
├── service.js
├── store.js
├── styles
│   ├── index.js
│   └── verify_code_input.js
└── tests
    ├── index.test.js
    └── store.test.js
```

- index.js   为 view 层入口
- logic.js   为逻辑层
- store.js   为状态管理容器
- styles/    为样式层入口
- service    为 rest api 入口
- tests      为单元测试入口

### 典型的 component (纯组件) 目录结构

> 纯组件不含状态管理和逻辑层，只根据 props 显示不同的样式，类似纯函数

```bash
.
├── index.js
├── styles
│   └── index.js
└── tests
    └── index.test.js
```

- index.js   为 view 层入口
- styles/    为样式层入口
- tests      为单元测试入口


## 样式层选型

样式层选型 styled-component 的原因详见: [这篇知乎回答](https://www.zhihu.com/question/33629737/answer/592881163)


## 代码生成器

可以按照提示生成 component 或 containers 的样板代码, 方便编写

```bash
make gen
```

比如生成一个 containers

![image](https://user-images.githubusercontent.com/6184465/55447324-dc20db00-55f5-11e9-96a5-d9e604ee4e94.png)

按照配置约定会生成如下样板代码

```bash
containers/Hello/
├── index.js
├── logic.js
├── service.js
├── store.js
├── styles
│   └── index.js
└── tests
    ├── index.test.js
    └── store.test.js
```

## mock 层

- 与 umi 之前项目的写法基本一致，支持自定义返回
- 支持目录结构约定路由返回 GET 请求
- 支持热更新

### 启动 mock server

```bash
make mock.server
// or 
npm run mock:server
```
当当前环境为 mock 的时候，项目中的所有 api 请求都会路由到 mock-server 这里。

### 添加 mock 数据

你可以在 mock/data 目录下按照所需的路由层级放置 .json 文件自动生成 get 返回

比如你需要 /first/secend 返回一个 json 结果，你可以在 data 目录下按照路由层级放置 secend.json

```bash
mock
│  ...
├── data
│   └── first
│       └── secend.json
```

这时请求 http://localhost:3001/first/secend 就会自动得到： 

```json
{
  code: 1001,
  message: "获取成功",
  data: {
    foo: "boo"
  }
}
```

### 编写自定义测试

当你需要自定义 POST, DELETE, PUT 或某些特殊的 GET 请求时，你可以在 mock/actions 目录下编写 (文件按照具体功能自行划分)

比如编写一个 /sign_in 的自定义 post 返回: 

```js
// mock/server.js

server.post('/signin', (req, res) => A.account.signin(req, res))
```

```js
// mock/actions/account.js

const C = require('../constants')

const signin = ({ body: { password } }, res) => {
  if (password === C.BAD_SIGN_PASSWORD) {
    return res.json({
      code: C.ERR_CODE,
      message: '登陆失败',
      data: null,
    })
  }

  return res.json({
    code: C.SUCCESS_CODE,
    message: '请求成功',
    data: 'hello',
  })
}

```

## 前端 lint

所有的代码在 push 到代码仓库之前都自动且强制的经过两个 lint:

1. eslint & prettier
2. commit msg

相关配置在 .huskyrc

```bash
{
  "hooks": {
    "pre-commit": "pretty-quick --staged && npm run lint:staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

### eslint & prettier

相关 eslint 的规范请查阅 .eslintrc.js
相关 prettier 的规范请查阅 .prettierrc.js

使用 make commit 时会自动处理:

![image](https://user-images.githubusercontent.com/6184465/55526682-88cb8d00-56c8-11e9-976c-63e20e112e6b.png)

### commit msg

所有 commit 必须强制遵循 [Commitizen 规范](http://commitizen.github.io/cz-cli/) 

比如使用 make commit 提交: 

![image](https://user-images.githubusercontent.com/6184465/55525902-8582d200-56c5-11e9-8945-1a38608ebdde.png)

按照提示一步一步描述的 commit msg 即可

> 注意，如果你使用普通的 git commit 提交，你需要手动的将你的 commit-msg 写成[这种规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines), 否则 ci 会失败。


## 测试

使用 [cypress](https://www.cypress.io/) 进行 e2e 测试, cypress 是我目前所知的最棒的 e2e 测试工具，详情请参考文档以及一些基于 react 的开源项目的[实际用法](https://github.com/withspectrum/spectrum/blob/4e9da1610626d00dc91818158dde80010ed08e5f/cypress/integration/messages_spec.js)
 
![image](https://user-images.githubusercontent.com/6184465/55447400-2efa9280-55f6-11e9-9dc8-18dca1fb32db.png)


