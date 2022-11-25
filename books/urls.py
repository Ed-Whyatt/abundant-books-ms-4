from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_books, name='books'),
    path('<book_id>', views.book_info, name='book_info'),
]
