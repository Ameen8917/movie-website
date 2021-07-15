import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4" style={{ marginRight: 10 }}>
      <input
        type="text"
        className="form-control "
        placeholder="Type to search..."
        value={props.value}
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
