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
    lastObj = URL.objects.last()

    newObjPK = lastObj.pk + 1
    newObjUniquKey = PKToBase62(newObjPK)
    newObjURL = request.data['url']
    newObjDict = {'id': newObjPK, 'long_url': newObjURL,
                  'unique_key': newObjUniquKey}

    urlSerializer = URLSerializer(data=newObjDict)
    if urlSerializer.is_valid():
        urlSerializer.save()
        return Response(None, status=status.HTTP_201_CREATED)
    else:
        print("is not valid")
        print(urlSerializer.error_messages)

    # print("new obj", newObjPK, newObjUniquKey, newObjURL)

    # URLObj = URL.objects.get_or_create(
    #     long_url=request.data.url, unique_key="key")
    # return Response(URLObj, status=status.HTTP_201_CREATED)

    return Response(None, status=status.HTTP_201_CREATED)


def PKToBase62(newObjPK):
    return f'{newObjPK}##'
