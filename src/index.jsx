import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ParentBox from 'components/ParentBox'

ReactDOM.render(
  <ParentBox  pollInterval={2000}  title="Parent Component" />,
  document.getElementById('content')
);