from django.test import TestCase
from .forms import NewsLetterForm


class TestNewsLetterView(TestCase):

    # Test view returns 200 response
    def test_view_newsletter(self):
        response = self.client.get('/news_letter/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'news_letter.html')


class TestNewsLetterForm(TestCase):

    # Test form value is required
    def test_full_name_is_required(self):
        form = NewsLetterForm({'full_name': ''})
        self.assertFalse(form.is_valid())
        self.assertIn('full_name', form.errors.keys())
        self.assertEqual(
            form.errors['full_name'][0], 'This field is required.')

    # Test form value is required
    def test_email_is_required(self):
        form = NewsLetterForm({'email': ''})
        self.assertFalse(form.is_valid())
        self.assertIn('email', form.errors.keys())
        self.assertEqual(
            form.errors['email'][0], 'This field is required.')
