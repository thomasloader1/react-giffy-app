import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "wouter";

export default function SearchInput() {
  const [keyword, setKeyword] = useState("");
  const onSubmitSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target[0].value);
  };
  return (
    <form onSubmit={onSubmitSearch}>
      <div className="input-group  mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Introduce una palabra para ver Gif's!"
          onBlur={(evnt) => {
            setKeyword(evnt.target.value);
          }}
        />
        <Link to={`/gif/${keyword}`}>
          <a className="btn btn-success">
            <BsSearch />
          </a>
        </Link>
      </div>
    </form>
  );
}
