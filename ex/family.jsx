import React from 'react'

export default props => (
  <div>
    <h1>Família</h1>
    { React.cloneElement(props.children, {...props}) }
  </div>
)

//{ React.cloneElement(props.children, props) } não é boa pratica, passar propriedade para o filho desta forma
//{ React.cloneElement(props.children, {...props}) } boa prática. Gerar um clone da propriedade utiliazndo o operador 'spread'
