import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useLocation } from "wouter";

export default function SearchInput() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useLocation();

  const onSubmitSearch = (e) => {
    e.preventDefault();
    setLocation(`/gif/${keyword}`);
  };
  const onChangeInput = (evnt) => {
    setKeyword(evnt.target.value);
  };
  return (
    <form onSubmit={onSubmitSearch}>
      <div className="input-group  mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Introduce una palabra para ver Gif's!"
          onChange={onChangeInput}
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
