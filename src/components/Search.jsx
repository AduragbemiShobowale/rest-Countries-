import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import Dropdown from "./Dropdown";

const Search = ({ filterByRegion, filterBySearch }) => {
  const [userInput, setUserInput] = useState("");
  return (
    <div className="d-md-flex px-5 py-4 bg-main-color custom-text-white align-items-md-center justify-content-md-between">
      <form action="" className="position-relative">
        <BiSearchAlt2 className="fs-2 position-absolute ms-5 search-icon" />
        <input
          onChange={(event) => {
            setUserInput(event.target.value);
            filterBySearch(event.target.value.trim().toLowerCase());
          }}
          className="w-100 bg-elements border-0 py-3 rounded-2 custom-text-white"
          type="text"
          placeholder="Search for a Country..."
        />
      </form>
      <Dropdown filterByRegion={filterByRegion} />
    </div>
  );
};

export default Search;

// onClick={() => {
//     setRotateArrow(!rotateArrow)
//   }}

// const [rotateArrow, setRotateArrow] = useState(false)

// style={{
//     transform: rotateArrow ? "rotate(180deg)" : "rotate(0deg)",
//   }}
