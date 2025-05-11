import React from "react";

function App() {
  // variaveis
  const name: string = "Eduardo";
  const age: number = 18;
  const isWorking: boolean = true;

  // funcoes
  const userGreeting = (name: string):string =>{
    return `Ola, ${name}!`
  }

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>esta trabalhando</p>}
      <h3>{userGreeting(name)}</h3>
    </div>
  );
}

export default App;
