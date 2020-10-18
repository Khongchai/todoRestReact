# Generated by Django 3.1.1 on 2020-10-14 07:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='poster',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='task', to=settings.AUTH_USER_MODEL),
        ),
    ]
