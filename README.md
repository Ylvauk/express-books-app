[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Express Books App

Practice with building a basic ExpressJS server with routes.

## Prerequisites

- Express Intro

## Instructions

1. Fork and clone this repository.
1. Change into the new directory with `cd express-books-app`.
1. Checkout to a new dev branch with `git checkout -b dev` so that you can make a pull request to submit this assignment.
1. Install the project dependencies with `npm i express nodemon`. (Don't install `nodemon` locally if you installed it globally today!)
1. Fulfill the requirements below to complete the assignment.

Unless otherwise stated, assignments are due by 10 am ET on the next class day. 

### MVP
- Your application must run without errors in order to be considered complete. 
- There must be routes for index, show, create, delete for the Books resource. 
 
 ### Stretch 
 - The update route is bonus!

## Requirements

For this assignment you'll be creating an API for books you love!

### Part 1: Create a Server in Express (MVP)

1. Open the index.js and add the lines needed to require express after the require books line one line 1.
2. Next, use the express framework to create an `app`.
3. Add the following 2 lines of code that allow you to access the data in `req.body`:

```js
// Middleware for accessing body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

4. Write some code to start your server using the `app.listen()` method. **_Remember the `app.listen()` must be the last thing in the index.js._**

### Part 2: Create Routes for Books (MVP)

1. Write a route handler for **GET** requests made to the `/books` path. Remember that this is usually referred to as the _Index_ route and should return _all_ the books as an array of objects.
2. Write a route handler for **GET** requests made to the `/books/:id` path. Remember that this is usually referred to as the _Show_ route and should return _a single_ book with a matching id.
3. Write a route handler for **POST** requests made to the `/books` path. Remember that this is usually referred to as the _Create_ route and should add a new book to the books and then return _all_ the books as an array of objects.
4. Write a route handler to delete a single book. Use the pattern from class.

Be sure to attach the routes to the URIs specified to follow the [RESTful paradigm](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/). 

### Part 3: Bonus Add an Update Route (Stretch)

1. Use either a PUT _or_ PATCH operation to update a single book based on its id.
