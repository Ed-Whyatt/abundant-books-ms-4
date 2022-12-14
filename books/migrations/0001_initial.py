# Generated by Django 3.2.16 on 2022-11-24 18:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=254)),
                ('friendly_name', models.CharField(blank=True, max_length=254, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=254)),
                ('author', models.CharField(blank=True, max_length=254, null=True)),
                ('format', models.CharField(blank=True, max_length=254, null=True)),
                ('book_depository_stars', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('price', models.CharField(max_length=254)),
                ('currency', models.TextField(blank=True, null=True)),
                ('old_price', models.DecimalField(blank=True, decimal_places=2, max_digits=6, null=True)),
                ('isbn', models.DecimalField(blank=True, decimal_places=0, max_digits=15, null=True)),
                ('img_paths', models.ImageField(blank=True, null=True, upload_to='')),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='books.category')),
            ],
        ),
    ]
