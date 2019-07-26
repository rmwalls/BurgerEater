# BurgerEater
Node Express Handlebars MySql Project

Important

This assignment must be deployed. Be sure to utilize the MYSQL Heroku Deployment Guide in order to deploy your assignment.

Before You Begin

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.
Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
Your app will store every burger in a database, whether devoured or not.
Check out this video of the app for a run-through of how it works.

App Setup


DONE Create a GitHub repo called burger and clone it to your computer.
DONE Make a package.json file by running npm init from the command line.
DONE Install the Express npm package: npm install express.
DONE Create a server.js file.
DONE Install the Handlebars npm package: npm install express-handlebars.
DONEInstall MySQL npm package: npm install mysql.

DONE Require the following npm packages inside of the server.js file:
express


DB Setup

DONE Inside your burger directory, create a folder named db.
DONE In the db folder, create a file named schema.sql. 
Write SQL queries this file that do the following:

    DONE Create the burgers_db.
    DONE Switch to or use the burgers_db.
    DONE Create a burgers table with these fields:

*id: an auto incrementing int that serves as the primary key.
*burger_name: a string.
*devoured: a boolean.

DONE Still in the db folder, create a seeds.sql file. 
DONE In this file, write insert queries to populate the burgers table with at least three entries.
DoNE (i used the workbench) Run the schema.sql and seeds.sql files into the mysql server from the command line
Now you're going to run these SQL files.

Make sure you're in the db folder of your app.
Start MySQL command line tool and login: mysql -u root -p.
With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.
Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.
Close out of the MySQL command line tool: exit.

Config Setup

DONE Inside your burger directory, create a folder named config.
DONE Create a connection.js file inside config directory.

DONE Inside the connection.js file, setup the code to connect Node to MySQL.
DONEExport the connection.

DONE Create an orm.js file inside config directory.

DONE*Import (require) connection.js into orm.js

*In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. 
*These are the methods you will need to use in order to retrieve and store data in your database.

selectAll()
insertOne()
updateOne()

DONE*Export the ORM object in module.exports.

Model setup
DONE Inside your burger directory, create a folder named models.

DONE In models, make a burger.js file.
DONE*Inside burger.js, import orm.js into burger.js

DONE*Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
DONE*Export at the end of the burger.js file.

Controller setup
DONE Inside your burger directory, create a folder named controllers.
DONE In controllers, create the burgers_controller.js file.
DONEInside the burgers_controller.js file, import the following:

Express
burger.js

DONECreate the router for the app, and export the router at the end of your file.

View setup
DONE Inside your burger directory, create a folder named views.
DONE Create the index.handlebars file inside views directory.
DONE Create the layouts directory inside views directory.

DONE Create the main.handlebars file inside layouts directory.
DONESetup the main.handlebars file so it's able to be used by Handlebars.
Setup the index.handlebars to have the template that Handlebars can render onto.
Create a button in index.handlebars that will submit the user input into the database.

Directory structure

DONE All the recommended files and directories from the steps above should look like the following structure:

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
