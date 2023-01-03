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

The description of the front-end is avaialable in `front-end` directory

## Back-end && DB

The description of the back-end and db is avaialable in `back-end` directory
