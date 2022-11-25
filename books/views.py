from django.shortcuts import render, get_object_or_404
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


def book_info(request):
    """
    A view to return individuel product information
    """
    books = get_object_or_404(Books, pk=book_id)

    context = {
        'book': book,
    }

    return render(request, 'books/books_info.html', context)
