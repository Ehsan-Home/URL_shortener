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

## Demo

You can find the demo of the app in this [YouTube video](https://youtu.be/Wd2L4fkAs3I).

## Assumptions

1. Django secert key
2. Dev version of front-end
3. Uploading sqllite into GitHub

## Methodology

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

### APIs

1. Assign a short URL to a long URL (POST): This API is used to return an unique short URL corresponding to a long address. If the long address exists in the DB, the API simply returns the unique short address. Otherwise, the back-end creates a unique short address associated to the long URL and returns it.
2. Get the long URL of a specific short URL: returns the long URL associated the the short URL, not found, otherwise.

## DB

I've used sqllite3 for the sake of simplicity.

### Schema

| id   | URL      | unique key |
| ---- | -------- | ---------- |
| _PK_ | required | required   |

```Python
id = models.BigAutoField(primary_key=True)
long_url = models.URLField(max_length=2083)
unique_key = models.CharField(max_length=20)
```
