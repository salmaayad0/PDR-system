# Generated by Django 3.2.12 on 2023-07-02 15:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0030_auto_20230702_1546'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sessions',
            name='date',
        ),
        migrations.RemoveField(
            model_name='sessions',
            name='medical_diagnose',
        ),
    ]