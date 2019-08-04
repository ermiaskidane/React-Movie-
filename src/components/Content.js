import React, { Component } from "react";
import Header from "./Header";
import classes from "./Content.module.css";
import Extended from "./Extended";
// import "./Content.css";

class Content extends Component {
  state = {
    data: [],
    searchMovies: ""
  };

  loadContent() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=31c6b1550db0d44ade47f6883ea63a30&query=${
      this.state.searchMovies
    }&page=1`;

    // https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ data: data.results });
        console.log(data);
      })
      .catch(err => {
        console.log("there has been an error");
      });
  }

  changeHandler = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ searchMovies: e.target.value });
  };

  handleKeyUp = e => {
    if (e.key === "Enter" && this.state.searchMovies !== "") {
      this.loadContent();
    }
  };
  render() {
    let movie = "";

    if (this.state.searchMovies) {
      movie = (
        <React.Fragment>
          {this.state.data.map((d, i) => {
            if (i < 5 && d.poster_path !== null) {
              return (
                <React.Fragment key={d.id}>
                  <li>{d.title}</li>
                  <li>
                    <img
                      style={{ width: "100px" }}
                      src={"https://image.tmdb.org/t/p/w500" + d.poster_path}
                      alt="movie"
                    />
                  </li>
                </React.Fragment>
              );
            }
          })}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Header
          name={this.state.searchMovies}
          change={this.changeHandler}
          onKeyUp={this.handleKeyUp}
        />
        <h1>Content</h1>
        <ul className={classes.ListMovie}>list of movies: {movie}</ul>
        <Extended
          name="Popular Movies"
          url="discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        />
        <Extended
          name="Popular Tv Shows"
          url="discover/tv?sort_by=popularity.desc&page=1&include_null_first_air_dates=false"
        />

        <Extended name="Sci Fic" url="genre/878/movies?language=en-US" />
        {/* <Extended url="genre/movie/list?language=en-US" /> */}
      </React.Fragment>
    );
  }
}

export default Content;
