from django.shortcuts import render
from books.models import Book, Category


def index(request):
    """
    A view to return home index page with book products
    """

    books = Book.objects.all()
    carousel_books = books.filter(on_carousel=True)
    author_of_month = books.filter(on_auther=True)
    deal_of_month = books.filter(on_deal=True)

    context = {
        'books': books,
        'carousel_books': carousel_books,
        'author_of_month': author_of_month,
        'deal_of_month': deal_of_month,
    }

    return render(request, 'home/index.html', context)
