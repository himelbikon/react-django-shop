from django.urls import path
from .views import *

urlpatterns = [
    path("subscribe/", SubscribeApiView.as_view()),
]
