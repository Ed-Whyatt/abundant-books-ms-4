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


def book_info(request, book_id):
    """
    A view to return individuel product information
    """
    book = get_object_or_404(Book, pk=book_id)

    context = {
        'book': book,
    }

    return render(request, 'books/book_info.html', context)
