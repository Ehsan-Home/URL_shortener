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
