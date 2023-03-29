# Team-Profile-Generator

## User Story

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles


## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Description

This command-line application allows you to generate a team profile page based on user input. You can add a manager, engineers, and interns to the team and get their name, ID, email, and specific information based on their role. The output is a HTML file that displays the team information.

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in the terminal.
3. Run the application by running `node index.js` in the terminal.

## Usage

To use the application, follow these steps:

1. Answer the questions prompted by the application to add team members.
2. Choose the "I'm done" option when you have added all team members.
3. Check the `dist/teamProfile.html` file to see the generated team profile page.
