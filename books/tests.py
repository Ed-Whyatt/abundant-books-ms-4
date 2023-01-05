from django.test import TestCase


class TestBooksView(TestCase):

    # Test view returns 200 response
    def test_view_bag(self):
        response = self.client.get('/books/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'books/books.html')
