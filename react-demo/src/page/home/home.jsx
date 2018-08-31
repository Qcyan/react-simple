import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PublicHeader from '@/components/header/header';

class Home extends Component {
  state = {
    value: 1,
    seconds: 0,
    listText:['one','two','three'],
    name:'默认名字'
  }
  renderList () {
    return
    // this.props.books.map((book)=>{
    //   <li key={book.title} >{book.title}</li>
    // });
  }
  clickEvent () {
    this.setState({
      value: 'XXXX'
    })
  }
  tick () {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }
  start = () => {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  liCllick = (index) => {
    alert(index)
  }
  handleInput = (type,event)=>{
    let value = event.target.value
    this.setState({
      name: value
    });
    switch(type){
      case 'orderSum':
        value = value.replace(/\D/g, '');
      break;
      case 'name':
      break;
      case 'phoneNo':
        value = this.padStr(value.replace(/\D/g, ''), [3, 7], ' ', event.target);
      break;
      default:;
    }
  }
  componentDidMount () {
    // this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount () {
    clearInterval(this.interval);
  }
  render () {
    if (this.state.value) {
      console.log('aaa')
    }
    return (
      <div>
        {/* 引入公共头部 */}
        <PublicHeader title='首页' confirm />


        {/* 循环例子 */}
        <span>点击得到索引</span>
        <ul>
        {
          this.state.listText.map(function(item,index,arr){
            return (
              <li key={index} data-num={index} onClick={this.liCllick.bind(this, index)}>{item}</li>
            )
          },this)
        }
        </ul>
        
        {/* 点击例子 */}
        <div onClick={this.start}>
          点击开始自动加Seconds: {this.state.seconds}
        </div>
        <div onClick={() => this.clickEvent()}>
          点击改变本来的值：<span>{this.state.value}</span>
        </div>
        
        {/* 数据绑定 */}
        <input type="text"  placeholder="请输入" value={this.state.name} onChange={this.handleInput.bind(this, 'name')} />
        <p>{this.state.name}</p>

      </div>

    );
  }
}

// function mapStateToProps(state){
//   return{
//     books:state.books
//   };
// }

export default connect(state => ({
  // formData: state.formData,
  // proData: state.proData,
}), {
    // saveFormData, 
    // saveImg,
    // clearData,
    // clearSelected,
  })(Home);