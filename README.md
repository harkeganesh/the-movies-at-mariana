# The Movies at Mariana
## Overview
The Movies at Mariana is a web application for viewing and filtering a list of movies. It allows users to browse movies by genre, search for specific titles, and view details about each movie.

## Dependencies
1. Install npm
2. Install Python

### One click run
Open command prompt/terminal and run below command.
```
npm start
```
Please wait for few (5-7) minutes to complete `npm install` command.This will open  `http://localhost:3000` in default browser.

## For Developers

## Running the Backend and Frontend Servers
To run the backend and frontend servers concurrently, follow these steps:

1. Clone the project and navigate to the project directory:
```
cd the-movies-at-mariana
```

2. Create a virtual environment and install backend dependencies:
``` 
python -m venv env
source env/bin/activate  # On Unix/Linux
env\Scripts\activate.bat  # On Windows
pip install -r backend/requirements.txt
```

3. Start the Django development server:
```
cd backend
python manage.py runserver
```

4. Install frontend dependencies and start the React development server:

```
cd frontend
npm install
npm start
```

5. Access the application in your web browser at `http://localhost:3000`.