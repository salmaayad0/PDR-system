# Generated by Django 3.2.12 on 2023-06-30 08:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('doctors', '0003_alter_doctors_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='doctors',
            name='confirm_password',
        ),
    ]
