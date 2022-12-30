from django.http import JsonResponse
from .models import URL
from .serializers import URLSerializer
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view


@csrf_exempt
@api_view(['POST'])
def url(request):
    print("in url request")
    return Response(None, status=status.HTTP_201_CREATED)
