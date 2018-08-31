import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';

import home from "@/page/home/home";
const me = asyncComponent(() => import("@/page/me/me"));
const second = asyncComponent(() => import("@/page/second/second"));
const father = asyncComponent(() => import("@/page/father/father"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
  render(){
    return(
      <div>
        哈哈哈哈
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/me" component={me} />
          <Route path="/second" component={second} />
          <Route path="/father" component={father} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
      </div>
    )
  }
}
