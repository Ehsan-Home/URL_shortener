from django.http import JsonResponse
from .models import URL
from .serializers import URLSerializer
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
import base62


@csrf_exempt
@api_view(['POST'])
def url(request):
    newObjURL = request.data['url']

    if URL.objects.filter(long_url=newObjURL).exists():
        obj = URL.objects.get(long_url=newObjURL)
        serialized_data = URLSerializer(obj)
        return Response(serialized_data.data, status=status.HTTP_202_ACCEPTED)
    else:
        lastObj = URL.objects.last()

        newObjPK = lastObj.pk + 1
        newObjUniquKey = PKToBase62(newObjPK)

        newObjDict = {'id': newObjPK, 'long_url': newObjURL,
                      'unique_key': newObjUniquKey}

        urlSerializer = URLSerializer(data=newObjDict)
        if urlSerializer.is_valid():
            urlSerializer.save()
            return Response(urlSerializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(urlSerializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['GET'])
def getShortURL(request, short_url_key):
    try:
        obj = URL.objects.get(unique_key=short_url_key)
    except URL.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    urlSerializer = URLSerializer(obj)
    return Response(urlSerializer.data, status=status.HTTP_200_OK)


def PKToBase62(newObjPK):
    return base62.encode(newObjPK)
