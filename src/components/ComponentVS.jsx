import React from 'react'
// Classes
var Photo = React.createClass({  
  componentWillMount: function() {}
})

class Photo extends React.Component {
  constructor(props) {
    super(props);
    // 原本在 componentWillMount 操作的動作可以放在這
  }
}

// function
var Photo = React.createClass({
  handleClick: function(e) {},
  render: function() {}
});

class Photo extends React.Component {
  handleClick(e) {}
  render() {}
}

// properties initializers


// State

// Arrow functions

// template strings

//dynamic prop name object literals
let obj =
{
  [`${inputName}Value`]: e.target.value,
}

//Destructuring & spread attributes
class Todo extends React.Component {
  render() {
    var {
      className,
      ...others,  // ...others 包含 this.props 除了 className 外所有值。this.props = {value: 'true', title: 'header', className: 'content'}
    } = this.props;
    return (
      <div className={className}>
        <TodoList {...others} />
        <button onClick={this.handleLoadMoreClick}>Load more</button>
      </div>
    );
  }
}