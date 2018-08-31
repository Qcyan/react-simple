import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {BrowserRouter as Router,Switch, Route,Link} from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';
import { connect } from 'react-redux';

import PublicHeader from '@/components/header/header';
import PublicFooter from '@/components/footer/footer';
import Father from '@/page/father/father'


const secondChild1 = asyncComponent(() => import("./secondChild1"));
const secondChild2 = asyncComponent(() => import("./secondChild2"));
class Second extends Component {

  render(){
    return(
      <div>
        {/* 引入公共头部 */}
       <PublicHeader title='首页' confirm />

      <p>这个是中间的内容</p>

      
      {/* <Router> */}
      <div className="App">
          {/* <Route  component={PublicHeader} /> */}
          <Route  path="/father" component={Father}/>
        </div>
      {/* </Router> */}
      
      <ul>
			<li><Link to="/father">App</Link></li>
		  </ul>

      <PublicFooter />

      </div>
    )
  }
}


export default Second