// var React = require('react');
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

//es6
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

//es5 
var Greeting = React.createClass({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }
});

//JSX
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);

//without JSX
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);


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

//index.html
<div id="root"></div>
...

//index.js
...
const element = <h1>Hello, world</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);