import React, { Component } from 'react';
import Child from '@/page/child1/child1.js'
import Child2 from '@/page/child1/child2.js'

class Father extends Component {
  state = {
    name:'this is a children text',
    num:0
  }
  add = () => {
    this.setState(prevState => ({
      num: ++prevState.num
    }));
  }

  render(){
    return(
      <div>
        father
        <Child num={this.state.num} action={this.add}/>
        <Child2 />
      </div>
    )
  }
}

export default Father