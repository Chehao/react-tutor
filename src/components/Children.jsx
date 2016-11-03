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
    console.log('>>render Children')
    return (
      <div>
      children : 
        <lu>
        {this.props.data.map( (item, index)=> { return <li key={index}>{item}</li>})}
        </lu>
      </div>
    );
  }
});

export default Children