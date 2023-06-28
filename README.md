# URL_shortener

This is a URL_Shortener app.

## Tech stack

Front-end: React, Ant-design
<br>
Back-end: Django
<br>
Database: Sqllite3
<br>
Deployment: Docker

## Demo

You can find the demo of the app in this [YouTube video](https://youtu.be/aIrZlY3LTQE).

## Assumptions

1. Django contains a secret key that usually is hidden using `.env` variables. Each developer in the team should individually set up `.env` file and **MUST NOT** upload it to the GitHub. However, for this project and for the simplicity, this secret key is exposed to GitHub. Therefore, you can run the server.
2. To deploy front-end, we should deploy the `build` version since it is faster and lighter. I've assumed I can deploy the front-end using `dev` resources.
3. The database should not be uploaded to GitHub as it might contain users' sensitive information. However, this project doesn't contain any sensitive data (only long url and short url is stored). Threfore, we can assume that we can upload database to GitHub.

## Methodology

Each long url requires a unique key associated to it.  
**Q**: The natural question is how we can generate this key and make sure it is unique?  
**A**: When a pair of (long url,short url) is added to the database, a unique identifier named as `id` is assigned to the entry. `id` is also a default primary key. We can leverage this value to generate the unique key for each long url.

To generate the unique key, we can use [Base62](https://en.wikipedia.org/wiki/Base62). As you may know, `+` and `/` are reserved characters in URL. Base62 is considered as a safe way to generate unique key for short URL since Base62 doesn't produce `+` or `/`.

```Python
unique_key = base62(id)
short_url = "localhost:3000/" + unique_key
```

Each entry in the database is somehow a tuple.

```Python
# entry to be stored in database
entry = (id, long_url, unique_key)
```

## Analysis

let's see how many urls the database can store using the base62 approach.

The number of carachters for the SMS is limited to 67. We know that 15 out of 67 chars are occupied by the domain (domain is `localhost:3000/` according to the assumptions). So, we have 52 characters available for the unique key.

Since we are working with base62, the last item in the database (after that, the database is full) has a unique key with the size of 52 chars.  
The largest number with the size of 52 chars in base62 can be approximately calculated to decimal using the following approach.

```
62 ^ 52 ~= 3.67 x 10^78
```

As we can observe, this is a very big number (much larger than the number of atoms in the observable universe). Therefore, the short URL can be expanded up to 52 characters as well as the number of generated short URLs can be up to `3.67 * 10^78`.

## How to run the app?

### Prerequisite

For running the app, you need to have [Docker](https://docs.docker.com/get-docker/) installed.  
Please note that there is a docker client and docker server that needs to be installed.

### Command

Once the docker server is running, you can simply enter the command below to `build` and `run` the container.

```
docker-compose up --build
```

**Note**: Running front-end server can take up to 10 mins. The reasons are mainly:

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

1. Assign a short URL to a long URL (POST): This API is used to return an unique short URL corresponding to a long address. If the long address exists in the database, the API simply returns the unique short address. Otherwise, the back-end creates a unique short address associated to the long URL and returns it.
2. Get the long URL of a specific short URL: returns the long URL associated the the short URL, not found, otherwise.

## Database

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

## Dependenices

1. Django
2. Djangorestframework
3. [python-decouple](https://pypi.org/project/python-decouple/): for hiding SECRET_KEY
4. [pybase62](https://github.com/suminb/base62): for calculating base62.
