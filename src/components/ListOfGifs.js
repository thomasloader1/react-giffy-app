import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { keyword } = params;
  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );

  return (
    <div className="row row-cols-2">
      {gifs.map(({ id, title, url, embed_url }) => (
        <Gif
          key={id}
          title={title}
          url={url}
          embed={embed_url}
          id={id}
          keyword={keyword}
        />
      ))}
    </div>
  );
}
