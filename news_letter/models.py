from django.db import models


class News_Letter(models.Model):
    """
    A user news mailing list for the new letter
    """
    full_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)

    def __str__(self):
        return self.full_name
