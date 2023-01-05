from django.test import TestCase


class TestHomeView(TestCase):

    # Test view returns 200 response
    def test_view_index(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'home/index.html')
