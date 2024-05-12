import os
import json
from datetime import datetime
from django.core.management.base import BaseCommand
from app.models import Movie

class Command(BaseCommand):
    help = 'Load data from JSON file and populate the database'

    def handle(self, *args, **kwargs):
        json_file_path = os.path.join('movies', 'index.json')
        with open(json_file_path, 'r') as f:
            data = json.load(f)

        for index, record in enumerate(data, start=1):
            try:
                entries = record.get('movies', [])
                # print(entry)
                for entry in entries:
                    movie = Movie.objects.create(
                        title=entry['title'],
                        year=entry['year'],
                        rated=entry['rated'],
                        released=datetime.strptime(entry['released'], '%d %b %Y').strftime('%Y-%m-%d'),
                        runtime=entry['runtime'],
                        genre=', '.join(entry['genre']),
                        director=entry['director'],
                        writer=entry.get('writer', ''),
                        actors=entry['actors'],
                        plot=entry['plot'],
                        language=entry['language'],
                        country=entry['country'],
                        awards=entry['awards'],
                        poster=entry['poster'],
                        meta_score=entry['meta_score'],
                        imdb_rating=entry['imdb_rating'],
                        imdb_votes=entry['imdb_votes'],
                        imdb_id=entry['imdb_id'],
                        type=entry['type'],
                        dvd=datetime.strptime(entry['dvd'], '%d %b %Y').strftime('%Y-%m-%d') \
                            if entry['dvd'] != "N/A" else entry['add'] ,
                        box_office=entry['box_office'],
                        production=entry['production'],
                        website=entry['website']
                    )
                    self.stdout.write(self.style.SUCCESS(f"Successfully added {movie.title} to the database."))
            except KeyError as e:
                self.stderr.write(self.style.WARNING(f"Skipping entry {index} due to missing key: {e}, {entry}"))
            except Exception as e:
                self.stderr.write(self.style.ERROR(f"Failed to add entry {index}: {e}"))
