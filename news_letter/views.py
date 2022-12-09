from django.shortcuts import render
from .forms import NewsLetterForm


def news_letter(request):
    """ A view to return news letter page """
    form = NewsLetterForm()
    template = 'news_letter.html'
    context = {
        'form': form,
    }

    return render(request, template, context)
