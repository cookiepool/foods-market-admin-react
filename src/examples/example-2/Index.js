import React from 'react';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: true,
      isAgree: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAgree = this.handleAgree.bind(this);
  }

  handleClick(e) {
    console.log(this.props);
    console.log(this.refs.refDom);
    console.log(this.refs.refTest);
    console.log(this.state.log);
    console.log(e);
  }

  handleAgree() {
    this.setState({
      isAgree: true
    });
  }

  render() {
    return (
      <div>
        <h1>欢迎来到首页~~~~~</h1>
        <hr/>
        <h1>以下为一些测试</h1>
        <h2 ref="refDom">ref测试</h2>
        <TestRef ref="refTest"></TestRef>
        <button onClick={ this.handleClick /* 这儿不能加(),比如this.handleClick()这样的话页面加载完就会调用函数 */ }>测试ref</button> 
        <hr/>
        <h2>测试状态改变</h2>
        <button onClick={ this.handleAgree }>点击同意</button>
        {
          this.state.isAgree === true && <span>已经同意</span>
        }
        {
          this.state.isAgree === false &&  <span>未同意</span>
        }
      </div>
    )
  }
}

class TestRef extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lala: 'jej'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <p>ref测试子组件</p>
        <button onClick={ this.handleClick }>测试ref-子组件按钮</button>
      </div>
    )
  }
}

export default Index;