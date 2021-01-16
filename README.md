IMPORTANT! 
The frontend is in tennis-website/individual-react folder
The backend is written on JAVA with Spring Boot(link:localhost:8080) and the frontend is on React JS(link:localhost:3000).
The database is on localhost, using XAMPP to host it. 
The backend has full CRUD Operations for every Entity. 
The connection to the react project shows the working CRUD functionalities, which are creating, getting, updating and deleteling every category, product, purchase and user. 
There is also added the "removeAll" functionality, which can be found in the service dropdown menu: "Show products, users".
There is a CI script in the yml file that is sure to be found in two places: in the tennis-website folder and in the directory of the backend (individual-assignment-db),
unit tests for all the controllers, all the models and all the services. 
There is a new order system, which means that a user can add products from "Online shop" to their cart and and then, there is a checkout button to submit the order, which will automatically
appear in the "Orders" tag next to the "Pending tag" that shows the total costs and the quantity of the product in the basket.
The project has the uathorization and authentication and when a person is signed up, they are automatically assigned to a "user-role".

New feautures:
Added distinctions between a user and an admin, so that in the navbar the functions for which only the admin is authorized, will not be seen or accesed
by the user.
Updated CRUD operation of the products and now the getting is done by using the id, not the name as before.
My profile page to edit user infos as well as to delete profile.
Controller services to connect the controllers to the repository interfaces.
Simple exception class(JPAException)
Unit tests for Role entity.
Added Logger to print all beans(https://www.baeldung.com/spring-bean).
Added 2 pages for admins(just created still doesn't show anything).
Commented build.gradle and removed unnecessary dependencies.

Zip file explanation:
There are 5 folders and this README-file, in which everything is explained.

The first folder is "documentation" and there are stored all of the tables or diagrams throughout the sprints. Also, there are the project plan, the design 
document and the OWASP report.

