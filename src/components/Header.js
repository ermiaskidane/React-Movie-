import React from "react";
import classes from "./Header.module.css";
import "./Header.module.css";

const header = props => {
  return (
    <div className={classes.Header}>
      <ul>
        <li>movies</li>
        <li>series</li>
      </ul>
      <input
        onKeyUp={props.onKeyUp}
        type="search"
        placeholder="search by title"
        value={props.name}
        onChange={props.change}
        autoComplete="on"
      />
      {/* <Extended searchMovie={props.searchMovies} /> */}
    </div>
  );
};

export default header;
