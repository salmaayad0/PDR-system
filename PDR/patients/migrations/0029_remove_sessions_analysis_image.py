# Generated by Django 3.2.12 on 2023-07-02 15:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0028_auto_20230702_1536'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sessions',
            name='analysis_image',
        ),
    ]