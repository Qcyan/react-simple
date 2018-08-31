import React, {Component} from 'react';
import api from '@/api/index.js'
import { baseURL } from '@/spi/envconfig.js'


//定义子组件1
class Square extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: null,
  //   };
  // }
  // 获取栏目下的子模块
  getColumenChild = (parentId) => {
    axios.get(`${URL}/admin/navbar/exportChild?parentId=${parentId}`).then(res => {
      this.setState({
        data: res.data.data
      })
    })
  }
  render() {
    return (
      
    )
  }
}


