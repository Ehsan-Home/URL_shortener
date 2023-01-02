const showErrorNotif = (status, description, api) => {
  api["error"]({
    message: `Error ${status}`,
    description: description,
  });
};

export default showErrorNotif;
