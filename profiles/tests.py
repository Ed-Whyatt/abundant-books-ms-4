from django.test import TestCase
from .forms import UserProfileForm


class TestProfilesForm(TestCase):

    # Test form value is not required
    def test_default_phone_number_is_not_required(self):
        form = UserProfileForm({'default_phone_number': ''})
        self.assertTrue(form.is_valid())

    # Test form value is not required
    def test_default_default_postcode_is_not_required(self):
        form = UserProfileForm({'default_postcode': ''})
        self.assertTrue(form.is_valid())

    # Test form value is not required
    def test_default_default_town_or_city_is_not_required(self):
        form = UserProfileForm({'default_town_or_city': ''})
        self.assertTrue(form.is_valid())

    # Test form value is not required
    def test_default_street_address1_is_not_required(self):
        form = UserProfileForm({'street_address1': ''})
        self.assertTrue(form.is_valid())

    # Test form value is not required
    def test_default_street_address2_is_not_required(self):
        form = UserProfileForm({'street_address2': ''})
        self.assertTrue(form.is_valid())

    # Test form value is not required
    def test_default_default_county_is_not_required(self):
        form = UserProfileForm({'default_county': ''})
        self.assertTrue(form.is_valid())
