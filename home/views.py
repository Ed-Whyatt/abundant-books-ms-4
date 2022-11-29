from django.shortcuts import render
from books.models import Book, Category


def index(request):
    """
    A view to return home index page with book products
    """

    books = Book.objects.all()

    context = {
        'books': books,
    }

    return render(request, 'home/index.html', context)
