from django.test import TestCase


class TestBagView(TestCase):

    # Test view returns 200 response
    def test_view_bag(self):
        response = self.client.get('/bag/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'bag/bag.html')
