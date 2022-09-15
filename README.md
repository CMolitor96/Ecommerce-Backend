# **Ecommerce Backend**

## Project Description
This project was all about using Sequelize to create an SQL database that one would be able to add to using REST CRUD operations with Insomnia. Sequelize was used to define tables, their respective columns and properties, and the many relationships between tables, while all the routes were created with Express.js to allow users to easily navigate through Insomnia and create, read, update, and delete items from different tables in SQL. This project has an Ecommerce theme, so all tables and respective columns correspond to a clothing store's products. The SQL relationships were as follows, there is a Category, Product, Product Tag, and Tag table, where the Product belongs to Category, the Category has many Products, the Products belong to many Tags, and the Tags belong to many products.

## Table of Contents:
[Project Install](#project-install)

[License](#license)

[Project Usage](#project-usage)


[Questions](#questions)

## Project Install:
Once project is on your local machine, and all dependencies have been downloaded, there are three steps to perform in order to run the program. 

First step is to add your credentials to an .env file according to the variable names in connection.js, then open up MYSQL and source the schema.sql file to initiate the database.

Sourcing schema.sql:
<img width="290" alt="Screen Shot 2022-09-14 at 8 34 11 PM" src="https://user-images.githubusercontent.com/103666997/190310825-75e17c13-9fe3-4fd4-a3ca-d6644adf5681.png">


Second step is to seed the database by running node with the index.js file located in the seeds folder.
Successfull seed:
<img width="1045" alt="Screen Shot 2022-09-14 at 8 35 24 PM" src="https://user-images.githubusercontent.com/103666997/190310494-f1758a06-7540-492c-bd1f-4fd33585bdc7.png">


Third and final step is to start the server with npm start, then go to Insomnia to perform all CRUD operations.


## License:
Please click the license badge for more information on the license under which this project is covered.
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Project Usage:
Once program has been fully started and you are in Insomia, simply navigate to the desired URL, whether its /api/categories, /api/products, or /api/tags, and perform your get, post, put, and delete operations. Please remember to inclue JSON bodies when performing post and put operations. Examples of JSON bodies are in comments in the respective routes files. 

Walkthrough Video: https://drive.google.com/file/d/1Sg0s52rQoWHywqcA3gMQvZ0P_4nZD3U6/view

Successfull GET request of all categories:
<img width="1026" alt="Screen Shot 2022-09-14 at 8 53 52 PM" src="https://user-images.githubusercontent.com/103666997/190310667-2d83b8e2-13b1-40c7-bed2-f7412868f2a9.png">

Successfull POST request of a category from a JSON style input:
<img width="1024" alt="Screen Shot 2022-09-14 at 8 54 33 PM" src="https://user-images.githubusercontent.com/103666997/190310735-9b62d442-eec8-491e-98fe-76653983c649.png">



## Questions:
GitHub Username: CMolitor96

GitHub profile: (https://github.com/CMolitor96)

Please email me at (charlie.molitor.38@gmail.com) for any further questions regarding this application.
