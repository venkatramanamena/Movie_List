import React, { Component } from 'react';
import './App.css';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ hover: true });
  }

  handleMouseLeave = () => {
    this.setState({ hover: false });
  }

  render() {
    const { Title, Poster } = this.props.movie;
    const { hover } = this.state;

    return (
      <div
        className={`movie-card ${hover ? 'hover' : ''}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={Poster} alt={Title} />
        {hover && <div className="movie-title">{Title}</div>}
      </div>
    );
  }
}

class App extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const apiUrl = 'https://www.omdbapi.com/?apikey=45f0782a&s=war';
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          this.setState({ movies: data.Search });
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  render() {
    const { movies } = this.state;

    return (
      <div className="App">
        <h1>Movie Listing</h1>
        <div className="movie-list">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
