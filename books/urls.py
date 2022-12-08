from django.urls import path
from . import views

urlpatterns = [
    path('', views.all_books, name='books'),
    path('<int:book_id>/', views.book_info, name='book_info'),
    path('add/', views.add_book, name='add_book'),
]
