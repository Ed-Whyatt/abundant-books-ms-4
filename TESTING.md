# Testing

Return back to the [README.md](README.md) file.

## HTML

### W3C Markup Validator - [Link to site](https://validator.w3.org/#validate_by_uri).
The W3C Markup Validator and W3C Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project. The most substantial bugs that were fixed are in the bug fixed section.

- #### Home page
    ![text](/documentation/w3c-marckup-validator/w3-html-home.png)
- #### Books page
    ![text](/documentation/w3c-marckup-validator/w3-html-books.png)
- #### Books Information page
    ![text](/documentation/w3c-marckup-validator/w3-html-book-info.png)
- #### Bag page
    ![text](/documentation/w3c-marckup-validator/w3-html-bag.png)
- #### Checkout page
    ![text](/documentation/w3c-marckup-validator/w3-html-checkout.png)
- #### Checkout Confirmation page
    ![text](/documentation/w3c-marckup-validator/w3-html-checkout-confirmation.png)
- #### Profile page
    ![text](/documentation/w3c-marckup-validator/w3-html-profile.png)
- #### News Letter page
    ![text](/documentation/w3c-marckup-validator/w3-html-news-letter.png)
- #### Add book page
    ![text](/documentation/w3c-marckup-validator/w3-html-add-book.png)
- #### Edit Book page
    ![text](/documentation/w3c-marckup-validator/w3-html-edit-book.png)

## CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.
- #### base.css
    ![text](/documentation/jigsaw-w3-css-validator/jigsaw-base-css.png)
- #### checkout.css
    ![text](/documentation/jigsaw-w3-css-validator/jigsaw-checkout-css.png)
- #### profile.css
    ![text](/documentation/jigsaw-w3-css-validator/jigsaw-profile-css.png)

## Javascript

### JSHint - [Link to site](https://jshint.com/)
JSHint  Services were used to validate every JavaScript page of the project to ensure there were no major syntax errors in the project. The most substantial bugs that were fixed are in the bug fixed section.

- #### base.js
    - #### Before fix
        ![text](/documentation/jshint/base-javascript-before.png)
    - #### After Fix
        ![text](/documentation/jshint/base-javascript-after.png)
- #### postload_base.js
    - #### Before fix
        ![text](/documentation/jshint/postload-javascript-before.png)
    - #### After Fix
        ![text](/documentation/jshint/postload-javascript-after.png)
- #### profile.js
    ![text](/documentation/jshint/profile-js-clear.png)
- #### stripe_js.js
    ![text](/documentation/jshint/chckout-stripe-elements-js-clear.png)
- #### bag.html script
    - #### Before fix
        ![text](/documentation/jshint/bag-script-before.png)
    - #### After Fix
        ![text](/documentation/jshint/bag-script-after.png)
- #### books quantity_input_script.html
    ![text](/documentation/jshint/quantity-input-script-clear.png)
- #### books synopsis_auther_script.html
    - #### Before fix
        ![text](/documentation/jshint/synopsis-author-script-before.png)
    - #### After Fix
        ![text](/documentation/jshint/synopsis-author-script-after.png)

## Python

## pep8
***

I have used the recommended [CI Python Linter](https://pep8ci.herokuapp.com) to validate all of my Python files.

The CI Python Linter can be used two different ways.
- Copy/Paste your Python code directly into the linter.
- As an API, using the "raw" URL appended to the linter URL.
    - To find the "raw" URL, navigate to your file directly on the GitHub repo.
    - On that page, GitHub provides a button on the right called "Raw" that you can click on.
    - From that new page, copy the full URL, and paste it after the CI Python Linter URL (with a `/` separator).
    - Examples:

| File | CI URL | Raw URL | Combined (CI PEP8) |
| --- | --- | --- | --- |
| PP3 *manage.py* file | `https://pep8ci.herokuapp.com/` | `https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/manage.py` | `https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/manage.py`

### PEP8 Results

---
#### abundent_books app
| File | CI URL | Screenshot | Notes |
| --- | --- | --- | --- |
| settings.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/abundant_books/settings.py) | ![screenshot](/documentation/pep8/abundant-books-settings.png) | All clear, no errors found |
| urls.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/abundant_books/urls.py) | ![screenshot](/documentation/pep8/abundant_books_url.png) | All clear, no errors found |

---
#### bag app
| File | CI URL | Screenshot | Notes |
| --- | --- | --- | --- |
| contexts.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/bag/contexts.py) | ![screenshot](/documentation/pep8/bag-contexts.png) | All clear, no errors found |
| urls.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/bag/urls.py) | ![screenshot](/documentation/pep8/bag-url.png) | All clear, no errors found |
| views.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/bag/views.py) | ![screenshot](/documentation/pep8/bag-views.png) | All clear, no errors found |

---
#### books app
| File | CI URL | Screenshot | Notes |
| --- | --- | --- | --- |
| admin.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/books/admin.py) | ![screenshot](/documentation/pep8/books-admin.png) | All clear, no errors found |
| forms.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/books/forms.py) | ![screenshot](/documentation/pep8/books-forms.png) | All clear, no errors found |
| models.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/books/models.py) | ![screenshot](/documentation/pep8/books-models.png
) | All clear, no errors found |
| urls.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/books/urls.py) | ![screenshot](/documentation/pep8/books-urls.png) | All clear, no errors found |
| views.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/books/views.py) | ![screenshot](/documentation/pep8/books-views.png) | All clear, no errors found |

---
#### checkout app
| File | CI URL | Screenshot | Notes |
| --- | --- | --- | --- |
| admin.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/checkout/admin.py) | ![screenshot](/documentation/pep8/checkout-admin.png) | All clear, no errors found |
| forms.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/checkout/forms.py) | ![screenshot](/documentation/pep8/checkout-forms.png) | All clear, no errors found |
| models.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/checkout/models.py) | ![screenshot](/documentation/pep8/checkout-models.png) | All clear, no errors found |
| urls.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/checkout/urls.py) | ![screenshot](/documentation/pep8/checkout-urls.png) | All clear, no errors found |
| views.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/checkout/views.py) | ![screenshot](/documentation/pep8/checkout-views.png) | All clear, no errors found |
| webhook_handler.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/checkout/webhook_handler.py) | ![screenshot](/documentation/pep8/checkout-web-hook-handler.png) | All clear, no errors found |
| webhooks.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/checkout/webhooks.py) | ![screenshot](/documentation/pep8/checkout-webhook.png) | All clear, no errors found |

---
#### home app
| File | CI URL | Screenshot | Notes |
| --- | --- | --- | --- |
| urls.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/home/urls.py) | ![screenshot](/documentation/pep8/home-urls.png) | All clear, no errors found |
| views.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/home/views.py) | ![screenshot](/documentation/pep8/home-views.png) | All clear, no errors found |

---
#### news_letter app
| File | CI URL | Screenshot | Notes |
| --- | --- | --- | --- |
| admin.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/news_letter/admin.py) | ![screenshot](/documentation/pep8/news-letter-admin.png) | All clear, no errors found |
| forms.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/news_letter/forms.py) | ![screenshot](/documentation/pep8/news-letter-forms.png) | All clear, no errors found |
| models.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/news_letter/models.py) | ![screenshot](/documentation/pep8/news-letter-model.png) | All clear, no errors found |
| urls.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/news_letter/urls.py) | ![screenshot](/documentation/pep8/news-letter-urls.png) | All clear, no errors found |
| views.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/news_letter/views.py) | ![screenshot](/documentation/pep8/news-letter-views.png) | All clear, no errors found |

---
#### profiles app
| File | CI URL | Screenshot | Notes |
| --- | --- | --- | --- |
| forms.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/profiles/forms.py) | ![screenshot](/documentation/pep8/profile-forms.png) | All clear, no errors found |
| models.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/profiles/models.py) | ![screenshot](/documentation/pep8/profile-models.png) | All clear, no errors found |
| urls.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/profiles/urls.py) | ![screenshot](/documentation/pep8/profile-urls.png) | All clear, no errors found |
| views.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/profiles/views.py) | ![screenshot](/documentation/pep8/profile-views.png) | All clear, no errors found |

---
#### custom_storages.py
| File | CI URL | Screenshot | Notes |
| --- | --- | --- | --- |
| custom_storages.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/custom_storages.py) | ![screenshot](/documentation/pep8/custum-storgies.png) | All clear, no errors found |

---
#### manage.py
| File | CI URL | Screenshot | Notes |
| --- | --- | --- | --- |
| manage.py | [CI PEP8](https://pep8ci.herokuapp.com/https://raw.githubusercontent.com/Ed-Whyatt/abundant-books-ms-4/main/manage.py) | ![screenshot](/documentation/pep8/manage.png) | All clear, no errors found |


---
## Google Chrome Developer Tools
Google Chrome Developer Tools has been used throughout the development of this page, To use it in Google Crome browser Right click anywhere on the screen and click inspect on the menu.

### Google Chrome Developer Tool Lighthouse results
- #### Home page
    ![screenshot](/documentation/lighthouse/home-lighthouse.png)
- #### Books page
    ![screenshot](/documentation/lighthouse/books-lighthouse.png)
- #### News letter
    ![screenshot](/documentation/lighthouse/news-letter-lighthouse.png)
- #### Books detail
    ![screenshot](/documentation/lighthouse/books-detail.png)
- #### Bag
    ![screenshot](/documentation/lighthouse/bag.png)
- #### Checkout
    ![screenshot](/documentation/lighthouse/checkout.png)
- #### Checkout success
    ![screenshot](/documentation/lighthouse/checkout-sucess.png)
- #### Profile
    ![screenshot](/documentation/lighthouse/profile.png)
- #### Admin add book
    ![screenshot](/documentation/lighthouse/books-add.png)
- #### Admin edit book
    ![screenshot](/documentation/lighthouse/books-edit.png)


## Bugs Fixed
## Google dev tool lighthouse highlighted bugs.



### Bugs highlighted during the development.

#### Bag app Checkout grand total
The bag grand total was not adding up correctly due to the sum being created with a float. The float was corrected to a decimal place.
- #### Site image before fix
    ![screenshot](/documentation/bug-fix-images/total-fix-before.png)
- #### Site image after fix
    ![screenshot](/documentation/bug-fix-images/total-fix-after.png)
- #### bag/ context.py before fix
    ![screenshot](/documentation/bug-fix-images/total-fix-context-before.png)
- #### bag/ context.py after fix
    ![screenshot](/documentation/bug-fix-images/total-fix-context-after.png)
- #### bag/ templatetags/ bag_tools.py before fix
    ![screenshot](/documentation/bug-fix-images/total-fix-bag-tools-before.png)
- #### bag/ templatetags/ bag_tools.py after fix
    ![screenshot](/documentation/bug-fix-images/total-fix-bag-tools-after.png)

#### News letter page footer placement
The footer on the news letter page was not sitting at the bottom of the page due to a missing div in the html template.
- #### Site image before fix
    ![screenshot](/documentation/bug-fix-images/news-letter-before.png)
- #### Site image after fix
    ![screenshot](/documentation/bug-fix-images/news-letter-after.png)
- #### news_lettr.html before fix
    ![screenshot](/documentation/bug-fix-images/news-letter-code-before.png)
- #### news_lettr.html  after fix
    ![screenshot](/documentation/bug-fix-images/news-letter-code-after.png)

#### Email 
The email onfirmation link returned an error due to unneeded crispy forms.
- #### Django Error message with devlopment settings set to True.
    ![screenshot](/documentation/bug-fix-images/e-mail-bug.png)
- #### templates/ allauth/ account/ email_confirm.html code before
    ![screenshot](/documentation/bug-fix-images/e-mail-bug-code-before.png)
- #### templates/ allauth/ account/ email_confirm.html code after
    ![screenshot](/documentation/bug-fix-images/e-mail-bug-code-after.png)

## Further Testing

### Browsers
I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](/documentation/browsers-devices/chrome.png) | Works as expected
| Firefox | ![screenshot](/documentation/browsers-devices/firefox.png) | Works as expected
| Microsoft Edge | ![screenshot](/documentation/browsers-devices/microsoft-edge.png) | Works as expected

### Responsiveness
I've tested my deployed project on [Am I Responsive Design:](http://ami.responsivedesign.is/) and multiple devices to check for compatibility issues and responsiveness.
####  I Am I Responsive Image
[Am I Responsive Design:](/documentation/i-am-responsive/iam-responsive-image.png)

| Device | Screenshot | Notes |
| --- | --- | --- |
| Mobile | ![screenshot](/documentation/browsers-devices/note-10-Chrome.jpg) | Works as expected
| Tablet | ![screenshot](/documentation/browsers-devices/tablet.png) | Works as expected
| Laptop | ![screenshot] | Works as expected
| Desktop | ![screenshot](/documentation/browsers-devices/chrome.png) | Works as expected

## Defensive Programming

## Testing User Stories from User Experience (UX) section in README.md

## Known Bugs