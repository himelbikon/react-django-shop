from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *


class LatestProductApiView(APIView):
    def get(self, request, number=8):
        products = Product.objects.all()[0:number]
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
