from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=255)
    year = models.CharField(max_length=4)
    rated = models.CharField(max_length=10)
    released = models.DateField()
    runtime = models.CharField(max_length=10)
    genre = models.CharField(max_length=255)
    director = models.CharField(max_length=255)
    writer = models.CharField(max_length=255)
    actors = models.TextField()
    plot = models.TextField()
    language = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    awards = models.TextField()
    poster = models.URLField()
    meta_score = models.CharField(max_length=10)
    imdb_rating = models.CharField(max_length=5)
    imdb_votes = models.CharField(max_length=20)
    imdb_id = models.CharField(max_length=20)
    type = models.CharField(max_length=20)
    dvd = models.DateField()
    box_office = models.CharField(max_length=50)
    production = models.CharField(max_length=255)
    website = models.URLField()

    def __str__(self):
        return self.title
