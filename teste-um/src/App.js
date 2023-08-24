import React from "react";

class App extends React.Component{
  render(){
    return (
      <div>
        <p>Meu primeiro paragrafo</p>
        <p>Meu segundo paragrafro</p>
        <p>
          {new Date().toLocaleDateString('pt-br')}
        </p>
      </div>
    );
  }
}

export default App;
