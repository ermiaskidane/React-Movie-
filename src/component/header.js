import React from "react";

const header = () => {
  return (
    <div className="header">
      <ul>
        <li>movies</li>
        <li>series</li>
      </ul>
      <input text="search" placeholder="search by title" />
    </div>
  );
};

export default header;
