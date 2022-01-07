from rest_framework import serializers
from .models import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "category",
            "price",
            "views",
            "details",
            "image",
            "image2",
            "image3",
            "image4",
            "image5",
        ]
