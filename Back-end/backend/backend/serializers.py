from dataclasses import fields
from rest_framework import serializers
from .models import URL


class URLSerializer(serializers.ModelSerializer):
    class Meta:
        model = URL
        fields = ['long_url']
