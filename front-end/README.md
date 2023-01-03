## Front-end

I've leveraged [React](https://reactjs.org/) to develope the front-end application.

### Architecture

The front-end follows **MVC** architecture. This architecture seperates Model from View from Controller for easier maintenance.

1. Model: the model in front-end application referes to network calls. All API calls exists inside **Network** folder.
2. View: all the components forming UI come in **Views** folder.
3. Controller: the files inside **View** consist of several components. These modules are called `Components` and are stored within `Components` folder.

### .gitignore

I've used `.gitignore` for preventing redundant files to be uploaded to GitHub.

### Dependencies

The used dependenice are as follows:

1. [Ant-design](https://ant.design/): React UI library.
2. [axios](https://axios-http.com/): Http and Https calls.
3. [react-router](https://github.com/remix-run/react-router): navigating between different pages of the front-end app.
