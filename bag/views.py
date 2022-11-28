from django.shortcuts import render


def view_bag(request):
    """
    A view to return home index page
    """
    return render(request, 'bag/bag.html')
