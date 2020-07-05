from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

from rest_framework import status
from rest_framework.decorators import api_view

from users.serializers import UserSerializer
from django.contrib.auth.models import User


@api_view(['POST'])
def create_user(request):
  user_data = JSONParser().parse(request)
  user_serializer = UserSerializer(data=user_data)
  if user_serializer.is_valid():
    user_serializer.save()
    return JsonResponse(user_serializer.data, status=status.HTTP_201_CREATED)
  return JsonResponse(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

