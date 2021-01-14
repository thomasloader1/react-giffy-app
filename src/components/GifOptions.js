import React from "react";
import { BsEye, BsBoxArrowDown, BsFolderSymlink } from "react-icons/bs";
import { Link } from "wouter";

export default function GifOptions({ keyword, id, many }) {
  return (
    <div className="bg-white rounded-3 w-75 mx-auto mt-n5 position-relative z-index-1000 py-3 d-flex justify-content-around">
      <Link to={`/gif/${keyword}/${id}`}>
        <BsEye />
      </Link>
    </div>
  );
}
