# My old grimoire

## Description

This project led me to develop the back-end of a book rating site.
I had to create a server with Express by connecting it to a MongoDB database.

I developed the data models and implemented CRUD operations for the management of books and ratings.

## Endpoints de l'API

The API will expose multiple endpoints to interact with books.

### Here is an overview of typical endpoints for book :

- **POST /api/books/** : Create a new books. Requires title, author, year of publication, genre, note, image.
- **POST /api/books/:id/rating** : Allows the authenticated user to rate the book
- **GET /api/books/bestrating** : Allows you to retrieve a list of books with the highest ratings.
- **GET /api/books/** : Collect all items.
- **GET /api/books/:id** : Retrieves a specific item by its ID.
- **PUT /api/books/:id** : Updates a specific book by its author.
- **DELETE /api/books/:id** : Deletes a specific book by its author.

### Here is an overview of typical endpoints for user :

- **POST /api/auth/signup** : Account creation.
- **POST /api/auth/login** : Login to account.

## Build

- **Backend**: Node.js, Express.js, MongoDB.

## Configuration
To configure the application, create a `.env` file at the root of the project directory. Below is an example configuration:

```
AUTH_TOKEN=token
```

## Script

```
node app.js
```
