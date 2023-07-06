import Network from "./Setup";

const fetchLongURL = (key, setLongURL, setFetchError, setLoading) => {
  Network.get(`shorturl/${key}/`)
    .then((response) => {
      const longURL = response.data["long_url"];
      setLongURL(longURL);
    })
    .catch((error) => {
      handleError(error, setFetchError);
      setLongURL(null);
    })
    .finally(() => setLoading(false));
};

const handleError = (error, setFetchError) => {
  if (error.response.status === 404) {
    setFetchError({
      status: 404,
      message: "The content cannot be found.",
    });
  } else {
    setFetchError({
      status: 500,
      message: "Something strange happened. Please try again later.",
    });
  }
  //   console.error("error status " + JSON.stringify(error));
};

export default fetchLongURL;
