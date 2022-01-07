from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "slug", "image"]


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


class ShowcaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Showcase
        fields = ["id", "name", "details", "product_id", "image"]
