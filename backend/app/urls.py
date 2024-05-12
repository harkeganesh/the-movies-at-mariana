from django.urls import path
from . import views

urlpatterns = [
    path('get_movies/', views.get_movies, name='get_movies'),
    path('filter_movies/', views.filter_movies, name='filter_movies'),
    path('search_movies/', views.search_movies, name='search_movies'),
]
