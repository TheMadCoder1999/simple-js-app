
# Simple JS App - Pokedex

This project is a web-based Pokedex application that fetches data from the PokeAPI. It displays a list of Pokemon and allows users to view more details about each Pokemon in a modal.


## Features

- Pokemon Repository: A local repository is maintained to store the details of each Pokemon fetched from the PokeAPI.
- Infinite Scroll Pagination: The application fetches and displays 150 Pokemon at a time. As the user scrolls down, more Pokemon are fetched.
- Pokemon Details: Clicking on a Pokemon displays a modal with detailed information about the Pokemon, including its image, height, and types.

## Useage

To use the application, simply open the index.html file in your web browser. You will see a list of Pokemon. Click on a Pokemon's name to see more details about that Pokemon.


## Technologies and Dependencies

This project is built using a variety of modern web development technologies and dependencies to ensure a high-quality, user-friendly application.

**JavaScript**

The core functionality of the application is written in JavaScript. This includes the use of promises for asynchronous operations, arrow functions for cleaner syntax, and modules for better code organization.

**jQuery**

jQuery is used to simplify the DOM manipulation and event handling. It provides a powerful, easy-to-use API for interacting with HTML documents.

**Bootstrap**

Bootstrap is used for the application's responsive layout, pre-designed components, and modal dialogs. It ensures that the application looks good on all screen sizes, provides a consistent user experience, and allows for interactive modal dialogs to display detailed information about each Pokemon.

**PokeAPI**

The PokeAPI is used to fetch the data about the Pokemon. It is a RESTful API that provides data about all known Pokemon, including their names, types, abilities, and images.

**ESLint**

ESLint is used to catch potential bugs and enforce best practices.
