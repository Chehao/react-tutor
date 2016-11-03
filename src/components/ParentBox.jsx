import React, { Component } from 'react'
import Children from 'components/Children'

var ParentBox = React.createClass({
         
  loadCommentsFromServer: function() {
    this.setState({data: 'update data'})
  },

  getInitialState: function() {
    console.log('getInitialState')
    return {data: ''};
  },

  getDefaultProps: function() {
    console.log('getDefaultProps')
    return {
      pollInterval: 5000,
    };
  },

  componentWillMount: function () {
    console.log('componentWillMount')
  },

  componentDidMount: function(node) {
    console.log('componentDidMount')
    //setTimeout(this.loadCommentsFromServer, this.props.pollInterval);
  },
  
  componentWillReceiveProps: function(){
    console.log('componentWillReceiveProps')
  },

  // shouldComponentUpdate: function() {
  //   console.log('shouldComponentUpdate')
  // },

  componentWillUpdate: function() {
    console.log('componentWillUpdate')
  },

  componentDidUpdate: function() {
    console.log('componentDidUpdate')
    
  },

  componentWillUnmount: function() {
    console.log('componentWillUnmount')
  },

  render: function() {
    console.log('>>render Parent')
    return (
      <div className="commentBox">
        <h1>Parent Comments</h1>
        <button type="button" onClick={()=>{this.loadCommentsFromServer()}} >click</button>
        <button type="button" onClick={()=>{this.setState({data: ''})}} >clear</button>
        <hr/>
        <Children data={this.state.data} />
      </div>
    );
  }
});

export default ParentBox