from django.contrib import admin
from .models import *

objects = [Product, Category, Showcase]

for object in objects:
    admin.site.register(object)
