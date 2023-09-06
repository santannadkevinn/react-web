import React from "react";

class App4 extends React.Component{
  constructor(props){
    super(props)
    this.state = {nome: undefined, txtNote: ''}
  }
  render(){
    if (! this.state.nome){
      return {
      
        <div>
        </div>
    
      }
    }
    return (
     <App4>
       
        <p>
          Olá {this.state.nome}
        </p>
    
     </App4>
    )
}
export default App4
