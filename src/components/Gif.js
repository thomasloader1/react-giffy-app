import React from "react";
import "./Gif.css";

export default function Gif({ title, id, url, embed, keyword }) {
  return (
    <div className={"col-12 col-sm-12 col-md-3 my-3"}>
      <div key={id} className="card">
        <img src={url} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <a
              target="_blank"
              href={url}
              className="fw-bold text-decoration-none font-monospace d-block font-small"
            >
              Link del gif en GIPHY
            </a>
            <a
              target="_blank"
              href={embed}
              className="fw-bold text-decoration-none font-monospace d-block font-small"
            >
              Link del gif EMBED
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
