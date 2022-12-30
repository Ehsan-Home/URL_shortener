from django.db import models


class URL(models.Model):
    long_url = models.TextField()
    unique_key = models.CharField(max_length=20)

    def __str__(self):
        return f'pk: {self.pk}, long url: {self.long_url}, key: {self.unique_key}'
