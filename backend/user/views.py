from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *


class SubscribeApiView(APIView):
    def post(self, request):
        serializer = SubscriptionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
