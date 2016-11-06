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
      Child Component  : 
        <ul>
        {
          this.props.data.map( (item, index)=> {
           return <li key={index}>{item} <button type="button" onClick={()=>{this.props.onRemove(item)}} >x</button></li>
          })
        }
        </ul>
      </div>
    );
  }
});

export default Children