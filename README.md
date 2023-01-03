# URL_shortener

This is a URL_Shortener app.

## Tech stack

Front-end: React, Ant-design
<br>
Back-end: Django
<br>
DB: Sqllite3
<br>
Deployment: Docker

## How to run the app?

### Prerequisite

For running the app, you need to have [Docker](https://docs.docker.com/get-docker/) installed.  
Please note that there is a docker client and docker server that needs to be installed.

### Command

Once the docker server is running, you can simply enter the command below to `build` and `run` the container.

```
docker-compose up --build
```

**Note**: Running front-end server can take up to 5 mins. The reasons are mainly:

1. `create-react-app` is a popular environment for setting up React apps. Desipte the popularity, runnning `dev` server using `create-react-app` can be slow.
2. The `dev` version is being deployed to the docker. As a future work, instead of `dev`, we can deploy the `build` version which is faster and lightweight. Then, we can setup a `nginx` docker image for serving the front-end `build` release.

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

## Back-end

I've used Django-Rest-Framework as the back-end web framework for developing the server.

### Architecture

Django requires the developer to follow **MVC** architecture.
