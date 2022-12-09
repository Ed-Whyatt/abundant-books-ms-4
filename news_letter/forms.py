from django import forms
from .models import News_Letter


class NewsLetterForm(forms.ModelForm):
    class Meta:
        model = News_Letter
        fields = '__all__'
