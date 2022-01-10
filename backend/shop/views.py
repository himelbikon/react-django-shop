from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *


class LatestProductApiView(APIView):
    def get(self, request, number):
        page = int(request.GET.get("page", 1))
        start = (page - 1) * number
        end = page * number
        products = Product.objects.all()[start:end]
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class PopularProductApiView(APIView):
    def get(self, request, number=8):
        page = int(request.GET.get("page", 1))
        start = (page - 1) * number
        end = page * number
        products = Product.objects.all().order_by("-views")[start:end]
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class CategoriesApiView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


class ShowcaseApiView(APIView):
    def get(self, request):
        products = Showcase.objects.all()
        serializer = ShowcaseSerializer(products, many=True)
        return Response(serializer.data)
