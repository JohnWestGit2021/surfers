# Surfer's Company

Situated in Hawaii, USA, the Surfer's Camp arranges social get together's, surfing lessons and surf camp for young adults.

## Table of Contents

- [Layout](#layout)
- [Design](#design)
- [UX/UI](#ux/ui)
- [General work practise](#generalpractise)
- [Technologies Used](#technologies)

<a name="layout></a>

## Layout

The web site is a static web site consisting of four pages.

- Landing page
  Includes a navigation area with links to navigate on page. A welcoming hero image with a textual content of upcoming event. Footer with address and social media links.
- About Us
  Includes general information about the company and the employees.
- Contact Us
  Includes a contact form for users to query about upcoming arrangements and company contact information.
  - Gallery
    An image gallery of previous arrangements, lessons and camps.

## Design <a name="design"></a>

Header - Font family "Reggea One", font-sizes: one H1 per page followed by H2, H3 etc.
Paragraphs - Font family "Roboto", font-size text 16px for now.
[Main color](https://www.colorabout.com/color/hex/60dad4/) - hex #60dad4 rgb(96,218,212), secondary color scheme: #DC9223, #151E2D and #fff.

## UX/UI <a name="ux/ui"></a>

_*Persona One*_

> I am a 16-year old and I am browsing the Web looking for an outdoor summer activity for my upcoming summer break. The activity should include other kids in my own age, in-house overnight stay and could last for a week or two since the summer break is almost two months. I look for information such as price, accomodation, evening activities, duration of stay, how to register and how to get in touch.

_*Persona Two*_

> I am a teenager on vacation with my family. I would like to spend some days of the vacation on a daytime activity with other kids in my own age. I want to learn something new and spend a couple of days on my vacation for the activities. I browse the Web for inspiration and look for different types of sports. I am looking for a typical summer activity.

## General work practise <a name="generalpractise"></a>

### Languages

- HTML5
- CSS3
- Sass (use scss file extension for Sassy css)

### Git Clone

The "clone" command downloads an existing Git repository to a local computer.
There are different options for cloning a repository, but this walkthrough will only cover the Url option, which is the most frequently used
option. You need to have downloaded and installed Git on to your computer. Make sure to allow Git to be used from the command line
in the installation process.

- Create a folder for storing the repository locally.
- Open your web browser and enter the GitHub repository’s URL.
- Click on the button, “Code”, on the right side of the screen, below the “Security” tab<br>
  ![To clone repo with HTTP](assets/images/clone_http.png)
- Open the Command Prompt (on Windows) or Terminal (on Mac).
- In the terminal, navigate to the location in which you would like to store the repository by typing the following command:
  `$ cd <name of directory>`
- To clone the repo. Enter the following command:
  `$ git clone <name of repo-url>`
- Make sure that the repository is in the dedicated folder on your computer. If so, then the repository was successfully cloned to your “Git local” folder.
  For a full tutorial or to find other options to clone a repository than by Url,
  please visit this [Git Tutorial](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone).<br>

Following steps will be taken to fork the repository (recreate my own copy to keep), to update or make changes to the repository (not part of the normal workflow):

- Login the GitHub account and navigate to the repository page.
- Locate the 'Fork' button in the top right corner of the page, above 'Settings'.
- Clicking the "Fork' button gives me a copy of the repository in my GitHub account.

## Technologies Used <a name="technologies"></a>

- Unsplash, images
- Pixabay, images
- Google Fonts
- Font Awesome, icons
- Grammarly, spellchecker
- Tiny.png, compress images
- Favicon.io, favicon generator
- Figma wireframing tool

### Validators to use

- Lighthouse Test Response<br>
  You access Lighthouse by `shift + cmd + i` (Mac) or either `F12` or `ctrl + shift + i` (windows) alternatively
  by right-clicking on the web page to open up Chrome dev tools. You access Lighthouse in the top menu dropdown list and
  select generate report.
- [Troy](http://troy.labs.daum.net/) responsive test
- [Autoprefixer](https://autoprefixer.github.io/)
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)<br>
- [Pineberry](https://www.pineberry.com/analysverktyg/resultat/Vw8vYZpv4xY_/) online SEO tester
