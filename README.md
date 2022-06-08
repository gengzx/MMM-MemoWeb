## 前端页面模板


## 技术栈

react + redux + react-router + webpack + ES6/7 + axios

## Develop

```
npm run dev
```

访问 http://127.0.0.1:8888

## Build

```
npm run build
```




## 项目结构

```

--- src                         源代码
--- static                      静态文件
--- .babelrc                    Babel  配置文件（js 编译工具 es版本转换器 可向后转化为浏览器兼容的版本）当前环境使用ECMAScript6 ES2015 编写
--- .eslintrc                   ESLint 配置文件（代码检测工具 用来统一代码风格）
--- .gitignore                  Git    配置文件 (忽略提交文件)
--- .prettierrc                 VSCode Prettier 配置（代码格式化工具）
--- bundle.js                   打包组件 让 react-router 实现按需加载
--- package.json                npm 包管理配置文件 类似于 Maven pom 
--- postcss.config.js           postcss-loader 配置 （css编译工具 自动补全浏览器前缀）
--- README.md                   项目介绍 

--- webpack.config.js           webpack 配置（打包工具 将 node 开发环境 打包为 浏览器可用程序）
--- webpack.config.dev.js       webpack 开发环境配置
--- webpack.config.prod.js      webpack 生产环境配置

--- yarn.lock                   yarn 安装依赖锁定 确保包一致性

```