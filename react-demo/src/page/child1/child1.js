import React, { Component } from 'react';

class Child extends Component {
  state={
    num:0
  }
  render(){
    return(
      <div>
        ChildChild子组件：在父元素上定义动作，通过props的方式传给子元素
        <span>{this.props.num}</span>  ===>
        <span onClick={this.props.action}>++++</span>

        
      </div>
    )
  }
}

export default Child