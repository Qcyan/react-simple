import React, { Component } from 'react';

class Child2 extends Component {
  state={
    num:0
  }
  
  add = ()=>{
    // var data = {
    //   data_num:0
    // }
    // data.data_num++
    this.setState(prevState => ({
      num: ++prevState.num
    }));
  }
  render(){
    return(
      <div>
        Child2Child2子组件：在父元素上代入子元素的组件，在子组件上定义动作并产生交互数据
        <span>{this.state.num}</span>  ===>
        <span onClick={this.add}>++++</span>
        <p>data_num值：</p>

        
      </div>
    )
  }
}

export default Child2