from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.contrib import messages
from django.db.models import Q
from .models import Book, Category


def all_books(request):
    """
    A view to return all book products, including sorting and search queries
    """
    books = Book.objects.all()
    query = None
    categories = None

    if 'category' in request.GET:
        categories = request.GET['category'].split(',')
        books = books.filter(category__name__in=categories)
        categories = Category.objects.filter(name__in=categories)

    if request.GET:
        if 'q' in request.GET:
            query = request.GET['q']
            if not query:
                messages.error(request,
                               "You didn't enter any search criteria!")
                return redirect(reverse('books'))

            queries = Q(name__icontains=query) | Q(author__icontains=query)
            books = books.filter(queries)

    context = {
        'books': books,
        'search_term': query,
        'current_categories': categories,
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
