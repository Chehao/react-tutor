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

  modifyProps: function(value){
    this.props.data = this.props.data.filter( (item) => { return item !== value} )
  },

  modifyPropsRefMember: function(value){
    this.props.data[value] = this.props.data[value] + ' modified'
  },

  render() {
    console.log('>>render Children')
    return (
      <div>
      Child Component  : 
        <ul>
        {
          this.props.data.map( (item, index)=> {
           return <li key={index}>{item} 
              <button type="button" onClick={()=>{this.props.onRemove(item)}} >x</button>
              <button type="button" onClick={()=>{this.modifyProps(item)}} >bad action</button>
              <button type="button" onClick={()=>{this.modifyPropsRefMember(index)}} >bad action 2</button>
            </li>
          })
        }
        </ul>
        
      </div>
    );
  }
});

export default Children