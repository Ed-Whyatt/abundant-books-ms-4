from django.contrib import admin
from .models import Book, Category


class BookAdmin(admin.ModelAdmin):
    list_display = (
        'isbn',
        'name',
        'category',
        'price',
    )

    ordering = ('category',)


class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        'friendly_name',
        'name',
    )


admin.site.register(Book, BookAdmin)
admin.site.register(Category, CategoryAdmin)
