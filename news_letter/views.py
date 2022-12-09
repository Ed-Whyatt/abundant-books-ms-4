from django.shortcuts import render


def news_letter(request):
    """ A view to return nes letter page """

    return render(request, 'news_letter.html')
