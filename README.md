IMPORTANT! 
The frontend is in tennis-website/individual-react folder
The backend is written on JAVA with Spring Boot(link:localhost:8080) and the frontend is on React JS(link:localhost:3000).
The database is on localhost, using XAMPP to host it. 
The backend has full CRUD Operations for every Entity. 
The connection to the react project shows the working CRUD functionalities, which are creating, getting, updating and deleteling every category, product, purchase and user. 
There is also added the "removeAll" functionality, which can be found in the service dropdown menu: "Show products, users".
There is a CI script in the yml file that is sure to be found in two places: in the tennis-website folder and in the directory of the backend (individual-assignment-db),
unit tests for all the controllers and all the models.
There is a new order system, which means that a user can add products from "Online shop" to their cart and and then, there is a checkout button to submit the order, which will automatically
appear in the "Orders" tag next to the "Pending tag" that shows the total costs and the quantity of the product in the basket.
The project has the uathorization and authentication and when a person is signed up, they are automatically assigned to a "user-role".
There is the SOLID principle implemented in the backend, using the Services to prevent the Repositories from directly communicating with  the Controllers. 
(separating the logic layer from the data layer by the business layer)

New feautures:
Added distinctions between a user and an admin, so that in the navbar the functions for which only the admin is authorized, will not be seen or accesed
by the user.
Updated CRUD operation of the products and now the getting is done by using the id, not the name as before.
There are now tests for the services, not only for the controllers and the models.
Docker is used to host the frontend and the backend(more on how to set it up is explained in the design document).
The database is no more using XAMPP, but the docker server.

Zip file explanation:
There are 5 folders and this README-file, in which everything is explained.
"documentation" - there are stored all of the tables or diagrams throughout the sprints. Also, there are the project plan, the design 
document and the OWASP report.
"individual-assignment-db" - in this folde is the backend project and the yml file, which is important for the CI configuration (which is explained in the design document).
"individual-react" - this is the folder of the frontend. Also, there is a .dockerignore file, which helps the project for building faster by ignoring the unnessecary data.
"wireframe" - in this folder are placed the initial wireframes of the website. This was the entry point of creating the idea of how my website would look like
".gitlab-ci.yml" - in this yml file, the path to my other yml file is displayed. 
"README.md" - this file, where I explain my whole project

