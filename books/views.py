from django.shortcuts import render
from .models import Book


def all_books(request):
    """
    A view to return all book products, including sorting and search queries
    """
    books = Book.objects.all()

    context = {
        'books': books,
    }

    return render(request, 'books/books.html', context)
