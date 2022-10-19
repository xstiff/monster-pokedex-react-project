import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() { // Uruchamia się na początku klasy 
    super(); // Zawsze w constructor();
//https://jsonplaceholder.typicode.com/users
    this.state = {
      monsters: [],
      originalMonsters: []
    }
  }

  // Executed when component arrives
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState( () => { 
        return{ monsters: users, originalMonsters: users }
      },
      ()=>{
        // console.log(this.state);
      }))
    }
  
    
    onSearchChange = (event) => {
        console.log(event.target.value)
        const OriginalData = this.state.originalMonsters;
        let filteredMonsters = OriginalData.filter((e) => {
            return e.name.toLowerCase().includes(event.target.value.toLowerCase());
        })
        this.setState(()=>{
          return{
            monsters: filteredMonsters
          }
        })
      }
    

  render(){

    // console.log('render')
    const { monsters, originalMonsters } = this.state;
    const { onSearchChange } = this;

  return (
    <div className='App'>
      <SearchBox onChangeHandler={onSearchChange} placeHolder={'Search for monsters'} class={'search-box'}/>
      <CardList monsters={monsters}/>
    </div>
    
    
  );
}}

export default App;
