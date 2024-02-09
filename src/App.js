import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    
    this.state = {
      monsters: []
    };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => this.setState(
    () => {
      return {monsters : users}
    },
    () =>{
      console.log(users)
    }
   ))
}


  render() {
    return (
      <div className="App">
        <input className = 'search-box' type = 'search'
        onChange={(event) =>{
           const searchString = event.target.value.toLocaleLowerCase();
           const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchString);
            })
            this.setState({monsters : filteredMonsters})
        }}
        />
      {
        this.state.monsters.map(
          (monster) => {
            return(
              <div key={monster.id}>
              <h1>{monster.name}</h1>
              </div>
              )
          }
          )
      }
    </div>
    );
  }
}

export default App;

