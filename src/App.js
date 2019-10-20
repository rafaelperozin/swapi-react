import React, { Component } from 'react';
import List from './components/List';
import axios from 'axios';
import './styles/main.css';

class App extends Component {
  // When information comes from the API we will populate our state.
  constructor(props){
    super(props);

    this.state = {
      characters: []
    }

    this.getCharacters = this.getCharacters.bind(this);
  }

  getCharacters() {
    // Get the characters from the SWAPI
    // This will return a promise
    return axios.get('https://swapi.co/api/people')
      .then((response) => {
        // Add the response in our state for we can manipulate it
        this.setState({
          characters: response.data.results
        });
      });
  }

  componentDidMount() {
    // Get data from localStorage
    localStorage.getItem('characters') && this.setState({
      characters: JSON.parse(localStorage.getItem('characters'))['characters'],
      isLoading: false
    });
    // Just get data from API if no localStorage data
    if (!localStorage.getItem('characters')) {
      this.getCharacters();
    }
  }

  componentDidUpdate(nextProps, nextState) {
    // Store API data on localStorage
    localStorage.setItem('characters', JSON.stringify(this.state));
  }
  
  render() {
    const { characters } = this.state;
    return (
      <main className="swapi">
        <h1 className="swapi__title">My SWAPI App</h1>
        <List characters={characters} />
      </main>
    );
  }
}

export default App;
