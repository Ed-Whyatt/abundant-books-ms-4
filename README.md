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
    3. As a first time user, I want to easily navigate to look for the books available.
    4. As a first time user, I want to easily add books to my bag.
    5. As a first time user, I want to easily checkout and pay for the items in my bag.

- ### Returning user goals
    1. As a Returning User, I want log in easily and view my purchase history.
    2. As a Returning User, I want to see the current deals of the month.
    3. As a Returning User, I want to see the current authors of the month.

- ### Frequent user goals
    1. As a Frequent user, I want to easily sign up to the newsletter.
    2. As a Frequent user, I want to easily see the updated deals of the month.
    3. As a Frequent user, I want to easily see the updated authors of the month.

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

1. Home page general user Wireframe 
### ![text](/documentation/wireframes/landing-page.png)

2. Home page Managment Wireframe 
### ![text](/documentation/wireframes/landing-page-management.png)

3. Log In page Wireframe 
### ![text](/documentation/wireframes/log-in.png)

4. Log Out page Wireframe 
### ![text](/documentation/wireframes/log-out.png)

5. Register page Wireframe 
### ![text](/documentation/wireframes/register.png)

6. Profile page Wireframe 
### ![text](/documentation/wireframes/profile.png)

7. Books page Wireframe 
### ![text](/documentation/wireframes/books.png)

8. Books Managment page Wireframe 
### ![text](/documentation/wireframes/books-management.png)

9. Book Information page Wireframe
### ![text](/documentation/wireframes/book-info.png)

10. Book Information Managment page Wireframe
### ![text](/documentation/wireframes/book-info-management.png)

11. Shopping Bag page Wireframe
### ![text](/documentation/wireframes/shopping-bag.png)

12. Checkout page Wireframe
### ![text](/documentation/wireframes/checkout.png)
---
- ### Medium Screens click to view
---

1. Home page genral user Wireframe - [view](/documentation/wireframes/landing-page-med.png)

2. Log In page Wireframe - [view](/documentation/wireframes/log-in-med.png)

3. Log Out page Wireframe - [view](/documentation/wireframes/log-out-med.png)

4. Register page Wireframe - [view](/documentation/wireframes/register-med.png)

5. Profile page Wireframe - [view](/documentation/wireframes/profile-med.png)

6. Books page Wireframe - [view](/documentation/wireframes/books-med.png)

7. Book Information page Wireframe - [view](/documentation/wireframes/book-info-med.png)

8. Shopping Bag page Wireframe - [view](/documentation/wireframes/shopping-bag-med.png)

9. Checkout page Wireframe - [view](/documentation/wireframes/checkout-med.png)

---
- ### Small Screens click to view
---

1. Home page genral user Wireframe - [view](/documentation/wireframes/landing-page-sml.png)

2. Log In page Wireframe - [view](/documentation/wireframes/log-in-sml.png)

3. Log Out page Wireframe - [view](/documentation/wireframes/log-out-sml.png)

4. Register page Wireframe - [view](/documentation/wireframes/register-sml.png)

5. Profile page Wireframe - [view](/documentation/wireframes/profile-sml.png)

6. Books page Wireframe - [view](/documentation/wireframes/books-sml.png)

7. Book Information page Wireframe - [view](/documentation/wireframes/book-info-sml.png)

8. Shopping Bag page Wireframe - [view](/documentation/wireframes/shopping-bag-sml.png)

9. Checkout page Wireframe - [view](/documentation/wireframes/checkout-sml.png)


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
    - Browse Categories navigation on large screens
    ### ![text](/documentation/features/large-cat-nav.png)
    - Browse Categories navigation on small screens
    ### ![text](/documentation/features/nav-small.png)
    - My account navgation for general users with login, register, or logout and My profile
    ### ![text](/documentation/features/my-pro-logout.png)
    ### ![text](/documentation/features/large-account-nav.png)
    - My account admin product managment opens to add book page
    ### ![text](/documentation/features/large-account-admin.png)
- Log in page form.
   ### ![text](/documentation/features/sign-in.png)
- Register page form.
   ### ![text](/documentation/features/sign-up.png)
- Log out page.
    ### ![text](/documentation/features/sign-out-button.png)
    
- Books page
    - Books page view the book button takes user to book information page
    ### ![text](/documentation/features/books-view-book-button.png)
    - Books page sort dropdown menu
    ### ![text](/documentation/features/books-sort.png)
- Footer
    - Links to social media.
    ### ![text](/documentation/features/social-buttons.png)
- Back to top button on all pages.
    ### ![text](/documentation/features/back-to-top.png)
- Home page
    - Carousel view the book button opens book information page for selected book.
    ### ![text](/documentation/features/car-view-book.png)
    - Popular genres tabs buttons to select each tab.
    ### ![text](/documentation/features/pop-gen-tabs.png)
    - Popular genres view the book button opens book information page selected book.
    ### ![text](/documentation/features/pop-gen-button.png)
    - Author of the month section
    ### ![text](/documentation/features/authers-of-month.png)
    - Deals of the month section
    ### ![text](/documentation/features/deal-of-month.png)
- Book information page
    - Add book to bag or keep shoping buttons.
    ### ![text](/documentation/features/add-to-bag.png)
    - Synopsis and Author tabs to view more information.
    ### ![text](/documentation/features/syno-aut-buttons.png)
- Profile page
    - Profile order history button open orer in new page
    ### ![text](/documentation/features/profile-order-history-button.png)
    - Profile update form and button.
    ### ![text](/documentation/features/profile-update-button.png)
- News letter form to sucribe to the news letter.
    ### ![text](/documentation/features/news-letter.png)
- Bag Checkout Button takes you to your bag content page
    ### ![text](/documentation/features/checkout-button.png)
- Bag page 
    - Update or remove item from your bag and secure checkout button that takes the user to checkout page.
    ### ![text](/documentation/features/shopping-bag.png)
- Checkout page 
    - Fill in delevery details form.
    ### ![text](/documentation/features/checkout-one.png)
    - Complete delvery and comple order or ajust your bag.
    ### ![text](/documentation/features/checkout-two.png)
- Admin edit buttons on all pages with books displayed.
    - Carousel admin edit button.
    ### ![text](/documentation/features/car-edit-button.png)
    - Authors of the month admin edit button takes admin to edit page.
    ### ![text](/documentation/features/authors-edit-button.png)
    - Deals of the month edit button takes admin to edit page.
    ### ![text](/documentation/features/deals-edit-button.png)
    - Popular genres and Books page edit button to edit page.
    ### ![text](/documentation/features/books-edit-button.png)
    - Book information page admin edit button to edit page, and delete that displays the delete model.
    ### ![text](/documentation/features/book-info-edit-buttons.png)
- Admin add, edit books page and model.
    - Admin add book page details
    ### ![text](/documentation/features/book-add-one.png)
    ### ![text](/documentation/features/book-add-two.png)
    - Admin edit book page details
    ### ![text](/documentation/features/book-edit-one.png)
    ### ![text](/documentation/features/book-edit-two.png)
    - Admin delete book button
    ### ![text](/documentation/features/edit-book-delete.png)
    - Admin delete book model
    ### ![text](/documentation/features/delete-book-modal.png)

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
1. [Gitpod](https://gitpod.io)
    - Gitpod used as a cloud-based IDE for development.
1. [Tim Nelson](https://traveltimn.github.io/readme-builder) 
    - Tim Nelsons traveltimn has been used to help generate the Markdown files.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes.
1. [Am I Responsive Design:](http://ami.responsivedesign.is/)
    - Am I Responsive Design was used for the responsive image in Readme.md and Testing.md.
1. [Django jinja](https://pypi.org/project/django-jinja/)
    - Templating language for Python, to simplify displaying data from the backend of this project smoothly and effectively in HTML.
1. [SQLAlchemy](https://www.sqlalchemy.org/)
    - Used to filter and search through the database.
1. [PostgreSQL](https://www.postgresql.org) 
    - Used as the relational database management.
1. [ElephantSQL](https://www.elephantsql.com)
    - Used as the Postgres database.
1. [Heroku](https://id.heroku.com/login)
    - A cloud based platform for that is used for hosting this python web based application.
1. [Stripe](https://stripe.com) 
    - Used for online secure payments of ecommerce products/services.
1. [AWS S3](https://aws.amazon.com/s3)
    - Used for online static file storage.
1. [SmartDraw](https://cloud.smartdraw.com/)
    - SmartDraw helps us create compelling visual content - including Org Charts, Business Processes and Work Flowcharts and has been used for the Data Modal image.
1. [owlcarousel2](https://owlcarousel2.github.io/OwlCarousel2/index.html)
    - Used for the carousels for the home and book info page.

### API Application Programming Interfaces Used

1. [Google Books API](https://developers.google.com/books)
    - Google Books API is used for the book Synopsis information in the books information Synopsis tab.

1. [openlibrary.org](https://openlibrary.org/dev/docs/api/authors)
    - Open Libary is used for the Authors information in the books information Author tab.

## Testing
***
### Testing is in TESTING.md - [Link to TESTING.md](/TESTING.md)
***

## Deployment
The live deployed application can be found deployed on [Heroku](https://abundant-books-ms4.herokuapp.com).

### ElephantSQL Database

This project uses [ElephantSQL](https://www.elephantsql.com) for the PostgreSQL Database.

To obtain your own Postgres Database, sign-up with your GitHub account, then follow these steps:
- Click **Create New Instance** to start a new database.
- Provide a name (this is commonly the name of the project: abundant-books-ms-4).
- Select the **Tiny Turtle (Free)** plan.
- You can leave the **Tags** blank.
- Select the **Region** and **Data Center** closest to you.
- Once created, click on the new database name, where you can view the database URL and Password

### Amazon AWS

This project uses [AWS](https://aws.amazon.com) to store media and static files online, due to the fact that Heroku doesn't persist this type of data.

Once you've created an AWS account and logged-in, follow these series of steps to get your project connected.
Make sure you're on the **AWS Management Console** page.

#### S3 Bucket

- Search for **S3**.
- Create a new bucket, give it a name (matching your Heroku app name), and choose the region closest to you.
- Uncheck **Block all public access**, and acknowledge that the bucket will be public (required for it to work on Heroku).
- From **Object Ownership**, make sure to have **ACLs enabled**, and **Bucket owner preferred** selected.
- From the **Properties** tab, turn on static website hosting, and type `index.html` and `error.html` in their respective fields, then click **Save**.
- From the **Permissions** tab, paste in the following CORS configuration:

	```shell
	[
		{
			"AllowedHeaders": [
				"Authorization"
			],
			"AllowedMethods": [
				"GET"
			],
			"AllowedOrigins": [
				"*"
			],
			"ExposeHeaders": []
		}
	]
	```

- Copy your **ARN** string.
- From the **Bucket Policy** tab, select the **Policy Generator** link, and use the following steps:
	- Policy Type: **S3 Bucket Policy**
	- Effect: **Allow**
	- Principal: `*`
	- Actions: **GetObject**
	- Amazon Resource Name (ARN): **paste-your-ARN-here**
	- Click **Add Statement**
	- Click **Generate Policy**
	- Copy the entire Policy, and paste it into the **Bucket Policy Editor**

		```shell
		{
			"Id": "Policy1234567890",
			"Version": "2012-10-17",
			"Statement": [
				{
					"Sid": "Stmt1234567890",
					"Action": [
						"s3:GetObject"
					],
					"Effect": "Allow",
					"Resource": "arn:aws:s3:::your-bucket-name/*"
					"Principal": "*",
				}
			]
		}
		```

	- Before you click "Save", add `/*` to the end of the Resource key in the Bucket Policy Editor (like above).
	- Click **Save**.
- From the **Access Control List (ACL)** section, click "Edit" and enable **List** for **Everyone (public access)**, and accept the warning box.
	- If the edit button is disabled, you need to change the **Object Ownership** section above to **ACLs enabled** (mentioned above).

#### IAM

Back on the AWS Services Menu, search for and open **IAM** (Identity and Access Management).
Once on the IAM page, follow these steps:

- From **User Groups**, click **Create New Group**.
	- Suggested Name: `group-abundant-books-ms-4` (group + the project name)
- Tags are optional, but you must click it to get to the **review policy** page.
- From **User Groups**, select your newly created group, and go to the **Permissions** tab.
- Open the **Add Permissions** dropdown, and click **Attach Policies**.
- Select the policy, then click **Add Permissions** at the bottom when finished.
- From the **JSON** tab, select the **Import Managed Policy** link.
	- Search for **S3**, select the `AmazonS3FullAccess` policy, and then **Import**.
	- You'll need your ARN from the S3 Bucket copied again, which is pasted into "Resources" key on the Policy.

		```shell
		{
			"Version": "2012-10-17",
			"Statement": [
				{
					"Effect": "Allow",
					"Action": "s3:*",
					"Resource": [
						"arn:aws:s3:::your-bucket-name",
						"arn:aws:s3:::your-bucket-name/*"
					]
				}
			]
		}
		```
	
	- Click **Review Policy**.
	- Suggested Name: `policy-abundant-books-ms-4` (policy + the project name)
	- Provide a description:
		- "Access to S3 Bucket for abundant-books-ms-4 static files."
	- Click **Create Policy**.
- From **User Groups**, click your "group-abundant-books-ms-4".
- Click **Attach Policy**.
- Search for the policy you've just created ("policy-abundant-books-ms-4") and select it, then **Attach Policy**.
- From **User Groups**, click **Add User**.
	- Suggested Name: `user-abundant-books-ms-4` (user + the project name)
- For "Select AWS Access Type", select **Programmatic Access**.
- Select the group to add your new user to: `group-abundant-books-ms-4`
- Tags are optional, but you must click it to get to the **review user** page.
- Click **Create User** once done.
- You should see a button to **Download .csv**, so click it to save a copy on your system.
	- **IMPORTANT**: once you pass this page, you cannot come back to download it again, so do it immediately!
	- This contains the user's **Access key ID** and **Secret access key**.
	- `AWS_ACCESS_KEY_ID` = **Access key ID**
	- `AWS_SECRET_ACCESS_KEY` = **Secret access key**

#### Final AWS Setup

- If Heroku Config Vars has `DISABLE_COLLECTSTATIC` still, this can be removed now, so that AWS will handle the static files.
- Back within **S3**, create a new folder called: `media`.
- Select any existing media images for your project to prepare them for being uploaded into the new folder.
- Under **Manage Public Permissions**, select **Grant public read access to this object(s)**.
- No further settings are required, so click **Upload**.

### Stripe API

This project uses [Stripe](https://stripe.com) to handle the ecommerce payments.

Once you've created a Stripe account and logged-in, follow these series of steps to get your project connected.

- From your Stripe dashboard, click to expand the "Get your test API keys".
- You'll have two keys here:
	- `STRIPE_PUBLIC_KEY` = Publishable Key (starts with **pk**)
	- `STRIPE_SECRET_KEY` = Secret Key (starts with **sk**)

As a backup, in case users prematurely close the purchase-order page during payment, we can include Stripe Webhooks.

- From your Stripe dashboard, click **Developers**, and select **Webhooks**.
- From there, click **Add Endpoint**.
	- `https://abundant-books-ms4.herokuapp.com/checkout/wh/`
- Click **receive all events**.
- Click **Add Endpoint** to complete the process.
- You'll have a new key here:
	- `STRIPE_WH_SECRET` = Signing Secret (Wehbook) Key (starts with **wh**)

### Gmail API

This project uses [Gmail](https://mail.google.com) to handle sending emails to users for account verification and purchase order confirmations.

Once you've created a Gmail (Google) account and logged-in, follow these series of steps to get your project connected.

- Click on the **Account Settings** (cog icon) in the top-right corner of Gmail.
- Click on the **Accounts and Import** tab.
- Within the section called "Change account settings", click on the link for **Other Google Account settings**.
- From this new page, select **Security** on the left.
- Select **2-Step Verification** to turn it on. (verify your password and account)
- Once verified, select **Turn On** for 2FA.
- Navigate back to the **Security** page, and you'll see a new option called **App passwords**.
- This might prompt you once again to confirm your password and account.
- Select **Mail** for the app type.
- Select **Other (Custom name)** for the device type.
	- Any custom name, such as "Django" or abundant-books-ms-4
- You'll be provided with a 16-character password (API key).
	- Save this somewhere locally, as you cannot access this key again later!
	- `EMAIL_HOST_PASS` = your new 16-character API key
	- `EMAIL_HOST_USER` = your own personal Gmail email address (`you@gmail.com`)

### Heroku Deployment

This project uses [Heroku](https://www.heroku.com), a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.

Deployment steps are as follows, after account setup:

- Select **New** in the top-right corner of your Heroku Dashboard, and select **Create new app** from the dropdown menu.
- Your app name must be unique, and then choose a region closest to you (EU or USA), and finally, select **Create App**.
- From the new app **Settings**, click **Reveal Config Vars**, and set your environment variables.

| Key | Value |
| --- | --- |
| `AWS_ACCESS_KEY_ID` | insert your own AWS Access Key ID key here |
| `AWS_SECRET_ACCESS_KEY` | insert your own AWS Secret Access key here |
| `DATABASE_URL` | insert your own ElephantSQL database URL here |
| `DISABLE_COLLECTSTATIC` | 1 (*this is temporary, and can be removed for the final deployment*) |
| `EMAIL_HOST_PASS` | insert your own Gmail API key here |
| `EMAIL_HOST_USER` | insert your own Gmail email address here |
| `SECRET_KEY` | this can be any random secret key |
| `STRIPE_PUBLIC_KEY` | insert your own Stripe Public API key here |
| `STRIPE_SECRET_KEY` | insert your own Stripe Secret API key here |
| `STRIPE_WH_SECRET` | insert your own Stripe Webhook API key here |
| `USE_AWS` | True |

Heroku needs two additional files in order to deploy properly.
- requirements.txt
- Procfile

You can install this project's **requirements** (where applicable) using:
- `pip3 install -r requirements.txt`

If you have your own packages that have been installed, then the requirements file needs updated using:
- `pip3 freeze --local > requirements.txt`

The **Procfile** can be created with the following command:
- `echo web: gunicorn app_name.wsgi > Procfile`
- *replace **app_name** with the name of your primary Django app name; the folder where settings.py is located*

For Heroku deployment, follow these steps to connect your own GitHub repository to the newly created app:

Either:
- Select **Automatic Deployment** from the Heroku app.

Or:
- In the Terminal/CLI, connect to Heroku using this command: `heroku login -i`
- Set the remote for Heroku: `heroku git:remote -a app_name` (replace *app_name* with your app name)
- After performing the standard Git `add`, `commit`, and `push` to GitHub, you can now type:
	- `git push heroku main`

The project should now be connected and deployed to Heroku!

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

For either method, you will need to install any applicable packages found within the *requirements.txt* file.
- `pip3 install -r requirements.txt`.

You will need to create a new file called `env.py` at the root-level,
and include the same environment variables listed above from the Heroku deployment steps.

Sample `env.py` file:

```python
import os

os.environ.setdefault("AWS_ACCESS_KEY_ID", "insert your own AWS Access Key ID key here")
os.environ.setdefault("AWS_SECRET_ACCESS_KEY", "insert your own AWS Secret Access key here")
os.environ.setdefault("DATABASE_URL", "insert your own ElephantSQL database URL here")
os.environ.setdefault("EMAIL_HOST_PASS", "insert your own Gmail API key here")
os.environ.setdefault("EMAIL_HOST_USER", "insert your own Gmail email address here")
os.environ.setdefault("SECRET_KEY", "this can be any random secret key")
os.environ.setdefault("STRIPE_PUBLIC_KEY", "insert your own Stripe Public API key here")
os.environ.setdefault("STRIPE_SECRET_KEY", "insert your own Stripe Secret API key here")
os.environ.setdefault("STRIPE_WH_SECRET", "insert your own Stripe Webhook API key here")

# local environment only (do not include these in production/deployment!)
os.environ.setdefault("DEBUG", "True")
```

Once the project is cloned or forked, in order to run it locally, you'll need to follow these steps:
- Start the Django app: `python3 manage.py runserver`
- Stop the app once it's loaded: `CTRL+C` or `⌘+C` (Mac)
- Make any necessary migrations: `python3 manage.py makemigrations`
- Migrate the data to the database: `python3 manage.py migrate`
- Create a superuser: `python3 manage.py createsuperuser`
- Load fixtures (if applicable): `python3 manage.py loaddata file-name.json` (repeat for each file)
- Everything should be ready now, so run the Django app again: `python3 manage.py runserver`

If you'd like to backup your database models, use the following command for each model you'd like to create a fixture for:
- `python3 manage.py dumpdata your-model > your-model.json`
- *repeat this action for each model you wish to backup*

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/Ed-Whyatt/abundant-books-ms-4) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/Ed-Whyatt/abundant-books-ms-4.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Ed-Whyatt/abundant-books-ms-4)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Ed-Whyatt/abundant-books-ms-4)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!



## Credits
***

###  Code

   -   [Code Institute](https://codeinstitute.net/): Code Institutes lessons have help with all coding throughout this project.

   -   [Code Institute Sample README.md](https://github.com/Code-Institute-Solutions/SampleREADME): Code Institute Sample README.md has been used to help with readme layout.

   -   [Bootstrap5](https://getbootstrap.com/docs/5.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the    Bootstrap Grid System.

   -   [W3 Schools](https://www.w3schools.com/): W3 Schools has been used with some elements in this project.

   -   [owlcarousel2](https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html) Owl Carousel 2 has been used for the carousels on the home and books information pages.

### Content
   -   All content was written by the developer.

### Acknowledgments

   -	My mentor for continuous helpful feedback.
   -	Tutor support at Code Institute.
   -	Support from staff at The City of Bristol collage.
   -	Members on Code Institutes Slack.
