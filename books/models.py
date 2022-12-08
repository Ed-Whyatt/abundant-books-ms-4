from django.db import models


class Category(models.Model):

    class Meta:
        verbose_name_plural = 'Categories'

    name = models.CharField(max_length=254)
    friendly_name = models.CharField(max_length=254, null=True, blank=True)

    def __str__(self):
        return self.name

    def get_friendly_name(self):
        return self.friendly_name


class Book(models.Model):
    category = models.ForeignKey('Category', null=True, blank=True,
                                 on_delete=models.SET_NULL)
    name = models.CharField(max_length=254)
    author = models.CharField(max_length=254, null=True, blank=True)
    format = models.CharField(max_length=254, null=True, blank=True)
    book_depository_stars = models.DecimalField(max_digits=6, decimal_places=2,
                                                null=True, blank=True)
    price = models.CharField(max_length=8)
    currency = models.CharField(max_length=2, null=True, blank=True)
    old_price = models.DecimalField(max_digits=6, decimal_places=2,
                                    null=True, blank=True)
    isbn = models.DecimalField(max_digits=15, decimal_places=0,
                               null=True, blank=True)
    img_paths = models.ImageField(null=True, blank=True)
    on_carousel = models.BooleanField(default=False)
    on_auther = models.BooleanField(default=False)
    on_deal = models.BooleanField(default=False)

    def __str__(self):
        return self.name
