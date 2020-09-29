<p align="center">
  <a href="https://github.com/skubotics/Invoice-App" target="_blank"><h2 align="center">INVOICING APP 🧾 </h2></a>
    <br />
    <br />
    <p align="center"><strong>GST Billing Application to support easy integration into any CPanel or Basic Web Hosting.</strong></p>
    <br />
    <p align="center">🌺 Made with Angular and PHP 🌺</p>
    <br />
</p>

[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-Friendly-blueviolet?style=for-the-badge)](CONTRIBUTING.md)
[![Pull Requests](https://img.shields.io/github/issues-pr/skubotics/Invoice-App?label=Pull%20Requests&style=for-the-badge)](https://github.com/skubotics/Invoice-App/pulls)
[![Issues](https://img.shields.io/github/issues/skubotics/Invoice-App?color=db0000&label=Issues&style=for-the-badge)](https://github.com/skubotics/Invoice-App/issues)
[![Contributors](https://img.shields.io/github/contributors/skubotics/Invoice-App?color=yellow&style=for-the-badge)](https://github.com/skubotics/Invoice-App/graphs/contributors)

# For the contributors
## Initialiazing Basic Database
Instal WAMP or XAMPP Server. And open the PHPMyAdmin console and create a new database called invoice and the respective username and password for it.   
It should be an empty database.  
Then import the ``invoice.sql`` in the PHPMyAdmin interface.  
PLEASE ADD LINUX PHP Installation here.  
Once done, take that username, password and database name = invoice and host = localhost and put into ``backend/config/db.php``.

Then continue with the angular project in the ``web`` folder and run the backend server with ``php -S localhost:8888`` inside the ``backend`` folder.
