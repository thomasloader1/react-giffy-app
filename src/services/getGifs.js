const apiKey = "XPZdu2CSHUsrEBdkY89GOlgPOkvSt3JS";
const rapidAPIConf = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3c729f1cadmshd2229234f3252f9p1b3044jsn2e0c3993ed6e",
    "x-rapidapi-host": "giphy.p.rapidapi.com",
  },
};

export default function getGifs({ keyword = "red hot chili peppers" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  //const apiURL = `https://giphy.p.rapidapi.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((res) => {
      const { data } = res;
      //console.log(data);
      const gifs = data.map((gif) => {
        // console.log(gif);
        const { images, title, id, embed_url } = gif;
        const { url } = images.downsized_medium;
        return { id, title, url, embed_url };
      });

      return gifs;
    });
}

export function getGif({ id }) {
  const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`;
  //const apiURL = `https://giphy.p.rapidapi.com/v1/gifs/${id}?api_key=${apiKey}`;
  return fetch(apiURL)
    .then((r) => r.json())
    .then((r) => {
      const { data } = r;
      //console.log(data);
      return data;
    });
}
