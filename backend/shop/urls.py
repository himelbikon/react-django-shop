from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [
    path("latest-products/<int:number>", LatestProductApiView.as_view()),
    path("popular-products/<int:number>", PopularProductApiView.as_view()),
    path("categories/", CategoriesApiView.as_view()),
    path("showcase/", ShowcaseApiView.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
