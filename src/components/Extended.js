import React, { Component } from "react";

class Extended extends Component {
  state = {
    listMovie: ""
  };

  componentDidMount() {
    const url = `https://api.themoviedb.org/3/${
      this.props.url
    }&api_key=31c6b1550db0d44ade47f6883ea63a30&language=en-US`;

    // const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=31c6b1550db0d44ade47f6883ea63a30&language=en-US`;

    // https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=en-US
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

  // onClickHndler = () => {
  //   this.loadContent();
  // };

  render() {
    let options = "";
    if (this.state.listMovie !== "") {
      options = (
        <React.Fragment>
          {this.state.listMovie.map((list, i) => {
            if (i < 5) {
              return (
                <React.Fragment key={list.id}>
                  <li value={list.title} style={{ alignSelf: "flex-end" }}>
                    {list.original_title || list.original_name}
                  </li>
                  <li>{list.overview}</li>
                  <li>{list.release_date}</li>
                  <li>{list.vote_average}</li>
                  <li>
                    <img
                      style={{ width: "200px" }}
                      src={"https://image.tmdb.org/t/p/w500" + list.poster_path}
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
