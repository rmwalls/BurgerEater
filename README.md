# BurgerEater

## Node Express Handlebars MySql Project

The instructions for this homework were to create a burger logger with:

    - MySQL
    - Node
    - Express
    - Handlebars
    - a homemade ORM 
    - MVC folder structure

We were also to use Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

** What in the world is a burger logger? **
Essentially we are using the tools listed above to:
    - create and seed a MySQL database
    - create an ORM to interact with the database and
        - add a new item to the MySQL database
        - change the state of an item in the MySQL database
    - generate HTML pages using Handlebars
    - use ajax requests to interact with the web server

* I focused on functionality and did not try to make a pretty page. I also added a delete burger function (called Yuck!). *

The working APP was also deployed to Heroku and uses JAWSdb.

## MVC Directory and File Structure

.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
