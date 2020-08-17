import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div
      style={{ backgroundColor: "#ff6666", marginTop: 20 }}
      className="ui segment search-bar"
    >
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Search for a video</label>
          <input
            type="text"
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
