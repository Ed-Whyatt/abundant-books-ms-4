<h1 align="center">Abundant Books</h1>

## A responsive book ecommerce website application for customers to view and purchase books available.
***
## Code Institute – HTML, CSS, JavaScript, python+Django and PostgreSQL -  Milestone Project 4.
***
## [Click Here To View The Live Project](https://abundant-books-ms4.herokuapp.com/)
***
## ![Text](/documentation/i-am-responsive/iam-responsive-image.png)
***
## UX user experience
***
## User stories
- ### First time user goals
    
    1. As a First time user, I want to easily navigate to register and then log in when first entering the website application.
    2. As a First Time User, I want to navigate the website easily and interact with the content.
    3. As a first time user I want to easily navigate to look for the books available.
    4. As a first time user I want to easily add books to my bag.
    5. As a first time user I want to easily checkout and pay for the items in my bag.

- ### Returning user goals
    1. As a Returning User, I want log in easily and view my purchase history.
    2. As a Returning User, I want to see the current deals of the months.
    3. As a Returning User, I want to see the current authors of the month.

- ### Frequent user goals
    1. As a Frequent user, I want to easily sign up to the newsletter.
    2. As a Frequent user, I want to easily the updated deals of the months.
    3. As a Frequent user, I want to easily the updated authors of the months.

- ### Admin user goals
    1. As an Admin User, I want access to add new books to the website application.
    2. As an Admin User, I want access to edit books on the website application.
    3. As an Admin User, I want access to delete books on the website application.

# Design

## Design Introduction
- This ecommerce website application is designed for users who are interested in purchasing books and returning to see the latest deals and authors. 


## Colour Scheme

- ### [Color Mind](http://colormind.io/) : Colormind has been used to aid the decision the colour scheme for the project.

### The main colours used in this website are:
- #### The main colours used for text and backgrounds:
### ![Text](/documentation/color-mind/text-and-background.png)
- #### The colours used for home page carousel and backgrounds:
### ![Text](/documentation/color-mind/carousel.png)

## Typography:
- ### The fonts use throughout this website are:
    - Google fonts 'Lato'with a fallback of sans-serif.

## Imagery

- ### The main images of all the book products are from the [Book covers dataset](https://www.kaggle.com/datasets/lukaanicin/book-covers-dataset) used from [Kaggle.com](https://www.kaggle.com)
- ### The other images used are the placeholder for if theres no book image in the database and the gray smoke image used in the carousel image.
    - [Grey smoke image](https://webstockreview.net/pict/getfirst) from [webstockreview.net](https://webstockreview.net/) 
    - [Book placeholder](https://pixabay.com/illustrations/a-book-isolated-book-cover-empty-3057902/) from [pixabay.com](https://pixabay.com/)

## Wireframes

- ### Large screens

1. Landing Home page genral user Wireframe 
### ![text](#)

2. Landing Home page Managment Wireframe 
### ![text](#)

3. Log In page Wireframe 
### ![text](#)

4. Log Out page Wireframe 
### ![text](#)

5. Register page Wireframe 
### ![text](#)

6. Profile page Wireframe 
### ![text](#)

7. Books page Wireframe 
### ![text](#)

8. Books Managment page Wireframe 
### ![text](#)

9. Book Information page Wireframe
### ![text](#)

10. Book Information Managment page Wireframe
### ![text](#)

11. Shopping Bag page Wireframe
### ![text](#)

12. Checkout page Wireframe
### ![text](#)

- ### Medium Screens click to view

1. Landing Home page genral user Wireframe - [view](#)

2. Landing Home page Managment Wireframe - [view](#)

3. Log In page Wireframe - [view](#)

4. Log Out page Wireframe - [view](#)

5. Register page Wireframe - [view](#)

6. Profile page Wireframe - [view](#)

7. Books page Wireframe - [view](#)

8. Books Managment page Wireframe - [view](#)

9. Book Information page Wireframe - [view](#)

10. Book Information Managment page Wireframe - [view](#)

11. Shopping Bag page Wireframe - [view](#)

12. Checkout page Wireframe - [view](#)


- ### Small Screens click to view

1. Landing Home page genral user Wireframe - [view](#)

2. Landing Home page Managment Wireframe - [view](#)

3. Log In page Wireframe - [view](#)

4. Log Out page Wireframe - [view](#)

5. Register page Wireframe - [view](#)

6. Profile page Wireframe - [view](#)

7. Books page Wireframe - [view](#)

8. Books Managment page Wireframe - [view](#)

9. Book Information page Wireframe - [view](#)

10. Book Information Managment page Wireframe - [view](#)

11. Shopping Bag page Wireframe - [view](#)

12. Checkout page Wireframe - [view](#)


# Data Structure
- [PostgreSQL](#) is used for the backend functionality of the application, that allows admin to create categories and users to register and log in to the Movie Lounge.

## Data Model
# ![text](#)

- Collections
- 
- 
- 


# Features

## Interactive elements.
- Navigation
    - Navigation on large screens
    ### ![text](#)
    - Navigation on small screens
    ### ![text](#)
    - Navigation small screens open
    ### ![text](#)
- Footer
    - Links to social media
    ### ![text](#)
- Home screen
    - Movie edit and delete user movies
    ### ![text](#)
    - Movie view more information
    ### ![text](#)
    - Movie edit page
    ### ![text](#)
    - Movie delete modal
    ### ![text](#)


- Log in
   ### ![text](#)
- Register
   ### ![text](#)
- User logged in display name
    - User logged in
    ### ![text](#)
    - User not logged in
    ### ![text](#)

### owl carsel

### kaggle fixtures

## Technologies Used
### Languages Used
-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
-   [Python](https://www.python.org/)

### Frameworks libraries and programming interface
1. [Django 3.2.16](https://docs.djangoproject.com/en/4.1/releases/3.2.15/)
    - Django was used as the main python framework in the development of this project.
1. [django-allauth 0.41.0](https://django-allauth.readthedocs.io/en/latest/)
    - Django Allauth is integrated set of Django applications addressing authentication, registration, account management and has been used in this project.
1. [Bootstrap 5.2.0:](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts is used to import the Google font 'Lato' with a fallback of sans-serif into the style.css file which is used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes.
1. [Am I Responsive Design:](http://ami.responsivedesign.is/)
    - Am I Responsive Design was used for the responsive image in Readme.
1. [Django jinja](https://pypi.org/project/django-jinja/)
    - Templating language for Python, to simplify displaying data from the backend of this project smoothly and effectively in HTML.
1. [SQLAlchemy](https://www.sqlalchemy.org/)
    - Used to filter and search through the database.
1. [Heroku](https://id.heroku.com/login)
    - A cloud based platform for that is used for hosting this python web based application. 
1. [SmartDraw](https://cloud.smartdraw.com/)
    - SmartDraw helps us create compelling visual content - including Org Charts, Business Processes and Work Flowcharts and has been used for the Data Modal image.

    ADD STRIPE

***
## Testing

### Testing is in TESTING.md - [Link to TESTING.md](/TESTING.md)
***

## Deployment
***

## Setting up 




## Deployment on Heroku and linking git repo, aws and prosgress.

1. To deploy the project online to a Heroku application, we need to
set up some required files that Heroku needs in order to run the app.
First, we need to tell Heroku which applications and dependencies are required to run our app,
which must be in a file called 'requirements.txt'.
while in the gitpod workspace terminal type.
```bash
pip3 freeze --local > requirements.txt
```
you should now have a requirements.txt with all of the installed packages needed.
```txt
click==8.1.3
dnspython==2.2.1
Flask==2.2.2
Flask-PyMongo==2.3.0
Flask-SQLAlchemy==2.5.1
greenlet==1.1.3
itsdangerous==2.1.2
omdb==0.10.1
psycopg2==2.9.3
pymongo==4.2.0
SQLAlchemy==1.4.41
Werkzeug==2.2.2
```
2. Next, you need a Procfile which is what Heroku looks for to know which file runs the app, and how to run it, so we'll use the echo command: "echo web: python run.py > Procfile".
```bash
echo web: python run.py > Procfile
```
you should now have a Procfile with the following in it:
```bash
web: python run.py
```
2. Head over to the Heroku website [https://devcenter.heroku.com/](https://devcenter.heroku.com/) now, where you should create an account and account if you do not have one already. Navigate to the dashboard once logged in and click on the button for creating a new app on your profile.
3. Heroku apps must have a unique name, which generally use a 'dash' or 'hyphen' instead of spaces, and should use all lowercase letters e.g. movie-lounge.
Make sure to select the region closest to you, and then click "Create App".
4. On the "Resources" tab, underneath the "Add-ons" section.
Search for "Heroku Postgres", which will provide us with various Plans to choose from.
For our purposes, the free 'Hobby Dev' is perfectly suitable.
5. Once the Postgres database has been attached to our app, click on the "Settings" tab, and scroll to the section called "Config Vars".
Config Variables are the same thing as Environment Variables, which contain confidential key-value pairs located in the Setting up Flask Development env.py in this README.md
As you can see after revealing the config vars, our new Postgres database URL has been
automatically applied for us and is being hosted on Amazon AWS.
5. Back within our Heroku config vars, we need to add the other variables that are currently saved within the env.py file. The only two that we do not want to include are the "DEVELOPMENT" and "DB_URL" variables. So, your Heroku vars should look like the following.
#### ![text](/documentation/heroku-images/heroku-vars.png)
6. Now go back in the gitpod workspace, and open the ```__init__.py``` file.
As you can see, the app is currently configured to look for the local database, so we can add a conditional check for Heroku's Postgres database.
If the "DEVELOPMENT" environment variable is set to True, then we are working with our local database.
Otherwise, since we didn't set that variable on Heroku, then it should use Heroku's "DATABASE_URL" instead.
The updated information in the ```__init__.py``` file should now look like the following.
```python

app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")


```
7. From within the "Deploy" tab in Heroku, You can now deploy directly from the GitHub repository clone. Click on the GitHub tab and, Make sure your own GitHub profile is displayed, then add your repository name and click Search.
If successfully found, you can now click "Connect" which will link your app to the repository. On this project, we were pushing all changes to the main or master branch, so now we can select "Enable Automatic Deploys", followed by "Deploy Branch".
You should see the message, "Your app was successfully deployed".
8. After we can see the updates being made on Heroku’s Activity tab, and the build is
complete, the final step we need to perform is to create our tables on the database.
Scroll to the top, and click the "More" dropdown button, then select "Run console".
9. within the console terminal type "python3" to access the Python interpreter.
from movielounge import db db.create_all()
Our Heroku database should now have the tables and columns created from our models.py file,
from movielounge import db
```psql
Python 3.8.11 (default, Sep  7 2022, 11:13:18) 
[GCC 9.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from movielounge import db
````
- Now, using db, we need to perform the .create_all() method:
```psql
Python 3.8.11 (default, Sep  7 2022, 11:13:18) 
[GCC 9.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from movielounge import db
>>> db.create_all()
````
11. once that’s done we can exit() this console. Everything should be linked up properly now, so we can finally click on the "Open App" button.

## Credits
***

###  Code

   -   [Code Institute](https://codeinstitute.net/): Code Institutes lessons have help with all coding throughout this project.

   -   [Code Institute Sample README.md](https://github.com/Code-Institute-Solutions/SampleREADME): Code Institute Sample README.md has been used to help with readme layout.

   -   [Bootstrap5](https://getbootstrap.com/docs/5.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

   -   [W3 Schools](https://www.w3schools.com/): W3 Schools has been used with some elements in this project.

### Content
   -   All content was written by the developer.

### Acknowledgments

   -	My mentor for continuous helpful feedback.
   -	Tutor support at Code Institute.
   -	Support from staff at The City of Bristol collage.
   -	Members on Code Institutes Slack.
