from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework_jwt.settings import api_settings

from storecontrolapp import settings

from users.serializers import UserSerializer
from django.contrib.auth.models import User

@api_view(['POST'])
@permission_classes([AllowAny])
def create_user(request):
  user_data = JSONParser().parse(request)
  user_serializer = UserSerializer(data=user_data)
  if user_serializer.is_valid():
    user_serializer.save()
    return JsonResponse(user_serializer.data, status=status.HTTP_201_CREATED)
  return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def authenticate_user(request):

  try: 
    username = request.data['username']
    password = request.data['password']

    user = User.objects.get(username=username, password=password)
    if user:
      try:
        payload = api_settings.JWT_PAYLOAD_HANDLER(user)
        token = api_settings.JWT_ENCODE_HANDLER(payload)
        user_details = {}
        user_details['name'] = "%s %s" % (
          user.first_name, user.last_name
        )
        user_details['token'] = token
        return JsonResponse(user_details, status=status.HTTP_200_OK)
      
      except Exception as e:
        raise e
    else:
      res = {
        'error': 'Invalid credentials'
      }
      return JsonResponse(res, status=status.HTTP_403_FORBIDDEN)
  except KeyError:
    res = {'error': 'please provide a username and password'}
    return JsonResponse(res)