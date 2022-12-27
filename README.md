# Isdi coders

# College Week 12

Netlify: 

Sonar: 

## Robots

You will have to create a frontend in React that allows the user to manage a list of **robots**.

Create an initial home page and a menu that navigates between the home page and the robots.
The initial page should have a logo along with the number of robots available.

The status and logic should be in a custom Hook. Optionally you can take its instance to a Context.

The user must be able to list, create, modify and delete robots (CRUD).

Each robot must display a name, an image (internet URL) and characteristics:

- Speed (0-10)
- Endurance (0-10)
- Date of creation
- User who creates the robot

(You can get the image from the API of https://robohash.org)

The data must be persisted in JSON-Server.
Create a service/repository to abstract the interactions with your API.
Use TS classes for this.

## Requirements

Test as much as possible at the end of each component or element.
Be careful: you are missing testing

Improve the CSS. It would be very good if you do it with BEM and SASS.

Take care of the semantic value of the HTML and validate it.

Include Audit and testing/sonar actions.

Protect the main github branch and enforce actions to merge PRs.
Work with short branches (a few commits)
Take special care with commit messages

Back to testing: make it pick up on sonar and try to get 100% coverage

## Extras

- Create a favourites page for the bots selected by the user,

- Create a detail page for the robots.
    You can add to the model any information you can think of to display on this page.

Deploy: 
