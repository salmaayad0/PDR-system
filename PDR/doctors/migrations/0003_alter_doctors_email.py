# Generated by Django 3.2.12 on 2023-06-30 08:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0002_doctors_confirm_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctors',
            name='email',
            field=models.EmailField(max_length=150, unique=True),
        ),
    ]
