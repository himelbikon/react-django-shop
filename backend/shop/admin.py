from django.contrib import admin
from .models import *

objects = [Product, Category]

for object in objects:
    admin.site.register(object)
