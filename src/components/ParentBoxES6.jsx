import React, { Component } from 'react';

export default class ParentBoxES6 extends Component {
  
  //componentWillMount // 原本在 componentWillMount 操作的動作可以放在這
  constructor(props) {
    super(props);
    console.log('constructor')
    
     // This binding is necessary to make `this` work in the callback
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this)
  }

  state = {
    data: []
  }
  
  static defaultProps = {
    pollInterval: 5000,
  }

  static propTypes = {
    pollInterval: React.PropTypes.number.isRequired
  }
   
  componentDidMount() {
    console.log('componentDidMount')
  }
  
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  
  render() {
    console.log('>>render Parent')
    return (
      <div className="commentBox">
        <h1>Parent Comments</h1>
        <button type="button" onClick={this.loadCommentsFromServer} >click</button>
        <button type="button" onClick={()=>{this.setState({data: []})}} >clear</button>
        <hr/>
        <Children data={this.state.data} />
      </div>
    );
  }
}
