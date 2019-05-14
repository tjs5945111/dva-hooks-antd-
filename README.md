# dva-hooks-antd-
dva+hooks+antd后台项目搭建步骤：
### 1. 创建路由
~~~
   <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/detail" exact component={DetailPage} />
        <Route path="/"  component={HomeIndexPage} />
      </Switch>
    </Router>
~~~
### 2. 创建登录界面
### 3. 创建主页面
### 4. 将主页面拆分为多个板块使用antd中的Layout布局
### 5. 分别开发对应的模块（左菜单、右头部、右内容、右底部）
### 6. 左菜单使用Menu
