import React from 'react';

const Children = React.createClass({
  componentWillMount() {
    console.log('Children componentWillMount')
  },
  componentDidMount() {
    console.log('Children componentDidMount')
  },
  componentWillReceiveProps(nextProps) {
    console.log('Children componentWillReceiveProps')
  },
  componentWillUpdate: function() {
    console.log('Children componentWillUpdate')
  },

  componentDidUpdate: function() {
    console.log('Children componentDidUpdate')
    
  },

  render() {
    return (
      <div>children : {this.props.data}</div>
    );
  }
});

export default Children