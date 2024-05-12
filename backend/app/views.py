from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Movie
from .serializers import MovieSerializer

@api_view(['GET'])
def get_movies(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def filter_movies(request):
    genre = request.GET.get('genre')
    if genre:
        movies = Movie.objects.filter(genre__icontains=genre)
    else:
        movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def search_movies(request):
    title = request.GET.get('title')
    if title:
        movies = Movie.objects.filter(title__icontains=title)
    else:
        movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)
