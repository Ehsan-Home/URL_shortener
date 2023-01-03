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

Each long url requires a unique key associated to it.  
**Q**: The natural question is how we can generate this key and make sure it is unique?
**A**: When a pair of (long url,short url) is added to the db, a unique identifier named as `id` is assigned to the entry. `id` is also a default primary key. We can leverage this value to generate the unique key for each long url.

To generate the unique key, we can use [Base62](https://en.wikipedia.org/wiki/Base62). As you may know, `+` and `/` are reserved characters in URL. Base62 is considered as a safe way to generate unique key for short URL since Base62 doesn't produce `+` or `/`.

```Python
unique_key = base62(id)
short_url = "localhost:3000/" + unique_key
```

Each entry in the db is somehow a tuple.

```Python
# entry to be stored in DB
entry = (id, long_url, unique_key)
```

## Analysis

let's see how many urls the database can store using the base62 approach.

The number of carachters for the SMS is limited to 67. We know that 15 out of 67 chars are occupied by the domain (domain is `localhost:3000/` according to the assumptions). So, we have 52 characters available for the unique key.

Since we are working with base62, the last item in the db (after that, the db is full) has a unique key with the size of 52 chars.  
The largest number with the size of 52 chars in base62 can be approximately calculated to decimal using the following approach.

```
62 ^ 52 ~= 3.67 x 10^78
```

As we can observe, this is a very big number (much larger than the number of atoms in the observable universe). Therefore, we can make sure the database will have enough space for storing the entries as well as the SMS doesn't exceed more than 67 chars.

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
