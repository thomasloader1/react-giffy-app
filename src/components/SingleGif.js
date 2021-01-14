import React, { useEffect, useState } from "react";
import { getGif } from "../services/getGifs";
import Gif from "./Gif";

export default function SingleGif({ params }) {
  const [gif, setGif] = useState({});
  const { id } = params;
  useEffect(
    function () {
      getGif({ id }).then((gif) => {
        setGif(gif);
      });
    },
    [id]
  );
  return (
    <div>
      <Gif
        title={gif.title}
        id={id}
        url={gif.images.downsized_medium.url}
        keyword=""
        many={false}
      />
    </div>
  );
}
