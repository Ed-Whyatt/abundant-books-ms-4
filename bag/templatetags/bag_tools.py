from django import template
from decimal import Decimal

register = template.Library()


@register.filter(name='calc_subtotal')
def calc_subtotal(price, quantity):
    return Decimal(price) * quantity
