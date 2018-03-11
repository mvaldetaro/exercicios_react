import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
  <Family lastName='Valdetaro'>
    <Member name='Magno' />
  </Family>
, document.getElementById('app'))
