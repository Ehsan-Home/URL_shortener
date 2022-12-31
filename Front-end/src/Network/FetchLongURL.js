import Network from "./Setup";

const fetchLongURL = (key, setLongURL) => {
  Network.get(`shorturl/${key}/`)
    .then((response) => {
      const longURL = response.data["long_url"];
      setLongURL(longURL);
    })
    .catch((error) => console.log("error in getting long url", error));
};

export default fetchLongURL;
