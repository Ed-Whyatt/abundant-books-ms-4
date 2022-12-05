from django.shortcuts import render
from books.models import Book, Category


def index(request):
    """
    A view to return home index page with book products
    """

    books = Book.objects.all()
    carousel_books = books.filter(on_carousel=True)

    context = {
        'books': books,
        'carousel_books': carousel_books,
    }

    return render(request, 'home/index.html', context)
