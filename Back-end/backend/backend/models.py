from django.db import models


class URL(models.Model):
    id = models.BigAutoField(primary_key=True)
    long_url = models.URLField()
    unique_key = models.CharField(max_length=20)

    def __str__(self):
        return f'pk: {self.pk}, long url: {self.long_url}, key: {self.unique_key}'
