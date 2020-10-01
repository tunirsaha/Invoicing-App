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

## Introduction
This is an open-source web app that helps you track & create GST Billing invoices & estimates and supports easy integration into any CPanel or Basic Web Hosting.

Web Application is made using Angular, for the frontend & PHP for the backend.

## Our Target
- Help users manage their business via our free services - quotations, invoices, payments and more!
- Help users build a verified portfolio to grow their business by attracting cutomers from all around the globe!

## Our Services
- Creating easy invoices and quotations for free
- Sending out beautiful quotations and estimates
- Providing national as well as international gateways
- Keep track of all expenses, profits and losses

## Development
### Directory Structure
```
.
    ├── .github/                # Github related files like ISSUE and PR Templates
    ├── backend/                # Backend Source files, written in PHP
    ├── web/                    # Frontend Source files, written in Angular
    ├── CODE_OF_CONDUCT.md      # Open source code of conduct
    ├── CONTRIBUTING.md         # Contribution Guidelines
    ├── LICENSE   
    └── README.md
```

### Instructions
#### 1. Initializing Basic Database :open_file_folder:
- Install `WAMP` or `XAMPP` Server. 
- Open the `PHPMyAdmin` console and create a new database called `invoice` and the respective username and password for it. (It should be an empty database)
- Import the ``invoice.sql`` in the `PHPMyAdmin` interface.
- `<PLEASE ADD LINUX PHP Installation here>`
- Once done, take that username, password and database name = invoice and host = localhost and put into ``backend/config/db.php``.

#### 2. Running the application :clapper:
- Initialize the DB using above steps first
- Install all required dependencies
- Run the angular project in the ``web`` folder using ``ng serve`` command.
- Run the backend server with ``php -S localhost:8888`` inside the ``backend`` folder.

### Contribution Guidelines
Before making any contributions, kindly go through the [CONTRIBUTING](https://github.com/skubotics/Invoice-App/blob/master/CONTRIBUTING.md) and [CODE OF CONDUCT](https://github.com/skubotics/Invoice-App/blob/master/CODE_OF_CONDUCT.md).
It is recommended to raise issues and send PRs using the provided templates.

## LICENSE
The current project is released under the MIT License. See [LICENSE](https://github.com/skubotics/Invoice-App/blob/master/LICENSE) for details.

Thank you!
