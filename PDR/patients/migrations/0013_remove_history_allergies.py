# Generated by Django 3.2.12 on 2023-07-02 11:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0012_auto_20230702_1135'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='history',
            name='Allergies',
        ),
    ]
