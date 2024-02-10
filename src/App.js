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

  
  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    })

  }

  render() {

    const {searchField, monsters} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <input className = 'search-box' type = 'search'
        onChange={onSearchChange}
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

