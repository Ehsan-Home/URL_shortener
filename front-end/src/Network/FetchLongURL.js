import Network from "./Setup";

const fetchLongURL = (key, setLongURL, setFetchError) => {
  Network.get(`shorturl/${key}/`)
    .then((response) => {
      const longURL = response.data["long_url"];
      setLongURL(longURL);
    })
    .catch((error) => handleError(error, setFetchError));
};

const handleError = (error, setFetchError) => {
  if (error.response.status === 404) {
    setFetchError({
      status: 404,
      message: "The page cannot be found.",
    });
  } else {
    setFetchError({
      status: 500,
      message: "Somthing strange happend. Please try again later.",
    });
  }
  //   console.error("error status " + JSON.stringify(error));
};

export default fetchLongURL;
