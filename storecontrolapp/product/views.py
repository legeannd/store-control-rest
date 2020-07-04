from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from product.models import Product
from product.serializers import ProductSerializer
from rest_framework.decorators import api_view

@api_view(['GET', 'POST',])
def product_list(request):
  if request.method == 'GET':
    products = Product.objects.all()

    title = request.GET.get('title', None)
    if title is not None:
      products = products.filter(title__icontains=title)

    products_serializer = ProductSerializer(products, many=True)
    return JsonResponse(products_serializer.data, safe=False)
  
  elif request.method == 'POST':
    product_data = JSONParser().parse(request)
    product_serializer = ProductSerializer(data=product_data)
    if product_serializer.is_valid():
      product_serializer.save()
      return JsonResponse(product_serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(product_serializer.errors, status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def product_detail(request, pk): 
  try:
    product = Product.objects.get(pk=pk)
  except Product.DoesNotExist:
    return JsonResponse({'message': 'The product does not exist'}, status=status.HTTP_404_NOT_FOUND)

  if request.method == 'GET':
    product_serializer = ProductSerializer(product)
    return JsonResponse(product_serializer.data)
  
  elif request.method == 'PUT':
    product_data = JSONParser().parse(request)
    product_serializer = ProductSerializer(product, data=product_data)
    if product_serializer.is_valid():
      product_serializer.save()
      return JsonResponse(product_serializer.data)
    return JsonResponse(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
  elif request.method == 'DELETE':
    product.delete()
    return JsonResponse({'message': 'Product was delected successfully'}, status=status.HTTP_204_NO_CONTENT)