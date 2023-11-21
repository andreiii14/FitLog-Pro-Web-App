# FitLog Pro

Hello, World! FitLog Pro is a web application designed to help users track their fitness progress, calculate daily calorie intake, estimate their BMI (Body Mass Index), and connect with a fitness community. Whether you're a fitness enthusiast or just starting your fitness journey, FitLog Pro provides valuable tools and resources to help you achieve your health and fitness goals.

## Project Overview
FitLog Pro is a multifaceted project that leverages a range of technologies to deliver a comprehensive fitness tracking and community platform. Key technologies used in this project include HTML, CSS, Python, JavaScript, and the Flask web framework.

## File Structure
Here's a brief overview of the main files in the FitLog Pro project:

app.py: This is the core of the web application. It contains the routing logic, database interactions, and user authentication. It's responsible for handling HTTP requests and rendering the appropriate HTML templates.

templates folder: This directory contains all the HTML templates used to create the web pages seen by the users. Each HTML file corresponds to a specific page on the website, such as the homepage, signup page, login page, exercise library, calorie calculator, BMI calculator, community page, and contact page.

static folder: This directory houses all static assets, such as CSS stylesheets and image files. CSS files in this folder are applied to the HTML templates to ensure a consistent and visually appealing user interface.

database.db: This SQLite database stores user information, including usernames and hashed passwords, to enable user registration and authentication.

## Demonstration on youtube
[My Final Project presentation](https://youtu.be/mpfiDRYjei8)

## Design Choices
Flask Framework
We chose the Flask web framework for its simplicity and flexibility. It allows us to structure our project in a clean and organized manner. Flask's routing system makes it easy to create different routes for various parts of the application, such as user authentication, fitness calculators, and community features.

HTML Templates
Each HTML template file corresponds to a distinct page, ensuring separation of concerns and making it easier to maintain and update the project. This modular approach allows us to focus on the design and functionality of individual pages.

User Authentication
We implemented user authentication to protect user data and enable personalized experiences. Users can sign up, log in, and access their fitness-related information securely. Passwords are hashed and stored in the database for enhanced security.

Database Management
SQLite was chosen as the database management system because of its simplicity and compatibility with Flask. It provides the required functionality for user registration and data storage while keeping the project lightweight.

## Conclusion
FitLog Pro is designed to empower users on their fitness journeys by providing valuable tools and a supportive community. With user-friendly features such as calorie intake calculation and BMI estimation, along with a clean and intuitive interface, FitLog Pro aims to make fitness tracking and goal setting easier and more accessible. We welcome contributions and feedback to continue improving and expanding this project. Get started today and take a step toward a healthier you!