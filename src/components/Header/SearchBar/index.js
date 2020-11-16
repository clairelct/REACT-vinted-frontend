import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";

const SearchBar = () => {
  // State recherche
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="search-container">
      <FontAwesomeIcon icon="search" />
      <input
        type="text"
        placeholder="Recherche"
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};

export default SearchBar;
