import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



export default class PublicHeader extends Component{
  state = {
    navState: false, //导航栏是否显示
  };
  
  // 切换左侧导航栏状态
  toggleNav = () => {
    this.setState({navState: !this.state.navState});
  }
  render(){
    return(
      <header className="header-container">
        <span className="header-slide-icon icon-catalog" onClick={this.toggleNav}></span>
        <span className="header-title">{this.props.title}：</span>
        {
         this.props.confirm && <NavLink to="/second" exact className="header-link icon-jilu">确定</NavLink>
        }
        {
         this.props.record && <NavLink to="/me" exact className="header-link header-link-confim">确定</NavLink>
        }

        {/* <ReactCSSTransitionGroup
          component={this.FirstChild}
          transitionName="nav"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
            {
              this.state.navState && <aside key='nav-slide' className="nav-slide-list" onClick={this.toggleNav}>
                <NavLink to="/" exact className="nav-link icon-jiantou-copy-copy">首页</NavLink>
                <NavLink to="/balance" exact className="nav-link icon-jiantou-copy-copy">提现</NavLink>
                <NavLink to="/helpcenter" exact className="nav-link icon-jiantou-copy-copy">帮助中心</NavLink>
              </aside>
            }
        </ReactCSSTransitionGroup> */}
        
      </header>
    );
  }
}