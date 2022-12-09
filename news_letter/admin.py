from django.contrib import admin
from .models import News_Letter


class News_LetterAdmin(admin.ModelAdmin):
    list_display = (
        'full_name',
        'email',
    )


admin.site.register(News_Letter, News_LetterAdmin)
