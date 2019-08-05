import React, { Component } from "react";
import classes from "./extended.module.css";
// import "./extended.css";

class Extended extends Component {
  state = {
    listMovie: ""
  };

  componentDidMount() {
    const url = `https://api.themoviedb.org/3/${
      this.props.url
    }&api_key=31c6b1550db0d44ade47f6883ea63a30&language=en-US`;

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ listMovie: data.results });
        console.log(data);
      })
      .catch(err => {
        console.log("there has been an error");
      });
  }

  render() {
    let options = "";
    if (this.state.listMovie !== "") {
      options = (
        <React.Fragment>
          {this.state.listMovie.map((list, i) => {
            if (i < 5) {
              return (
                <React.Fragment key={list.id}>
                  {/* <li value={list.title} style={{ alignSelf: "flex-end" }}>
                    {list.original_title || list.original_name}
                  </li> */}
                  <img
                      style={{ width: "200px" }}
                      src={"https://image.tmdb.org/t/p/w500" + list.poster_path}
                    />
                  <div>
                      <li className={classes.ListOne}>{list.overview}</li>
                      <li className={classes.ListTwo}>{list.release_date}</li>
                      <li className={classes.ListThree}>{list.vote_average}</li>
                  </div>  
                </React.Fragment>
              );
            }
          })}
        </React.Fragment>
      );
    }
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            backgroundColor: "#ccc",
            width: "100%",
            height: "100%"
          }}
        >
          {options}
        </ul>
      </div>
    );
  }
}

export default Extended;
