# Invoicing App
GST Billing Application with Angular and PHP backend to support easy integration into any CPanel or Basic Web Hosting.


## Initialiazing Basic Database
Instal WAMP or XAMPP Server. And open the PHPMyAdmin console and create a new database called invoice and the respective username and password for it.   
It should be an empty database.  
Then import the ``invoice.sql`` in the PHPMyAdmin interface.  
PLEASE ADD LINUX PHP Installation here.  
Once done, take that username, password and database name = invoice and host = localhost and put into ``backend/config/db.php``.

Then continue with the angular project in the ``web`` folder and run the backend server with ``php -S localhost:8888`` inside the ``backend`` folder.
