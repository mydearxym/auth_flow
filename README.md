![image](https://user-images.githubusercontent.com/6184465/55446887-24d79480-55f4-11e9-900b-09783d0e34f9.png)

## 概览

公网预览地址 [https://auth-flow.mydearxym.now.sh/](https://auth-flow.mydearxym.now.sh/)

> 目前因为线上没有可用 api, 仅做展示使用，如需查看交互逻辑，请按下面步骤操作.

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

样式层选型 styled-component 的原因详见: [知乎回答](https://www.zhihu.com/question/33629737/answer/592881163)



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

eslint & prettier
commit msg lint


## 测试

使用 [cypress](https://www.cypress.io/) 进行 e2e 测试
 
![image](https://user-images.githubusercontent.com/6184465/55447400-2efa9280-55f6-11e9-9dc8-18dca1fb32db.png)


