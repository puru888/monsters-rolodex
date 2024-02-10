import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField : ''
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

    const filteredMonsters = this.state.monsters.filter((monster) => {
        return monster.name.toLocaleLowerCse().includes(this.state.searchField)
    })

    return (
      <div className="App">
        <input className = 'search-box' type = 'search'
        onChange={(event) =>{
           const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {return {searchField}})
        }}
        />
      {
        filteredMonsters.map(
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

