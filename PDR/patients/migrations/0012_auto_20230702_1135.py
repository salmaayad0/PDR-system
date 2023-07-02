# Generated by Django 3.2.12 on 2023-07-02 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0011_auto_20230629_1428'),
    ]

    operations = [
        migrations.RenameField(
            model_name='history',
            old_name='Cancer',
            new_name='Allergies',
        ),
        migrations.RenameField(
            model_name='history',
            old_name='High_Cholesterol',
            new_name='Bone_denisty',
        ),
        migrations.AddField(
            model_name='history',
            name='Cholesterol',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='sessions',
            name='history',
            field=models.DateField(default=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='sessions',
            name='medical_diagnosis',
            field=models.TextField(default=True, max_length=1000),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='sessions',
            name='medical_analysis',
            field=models.TextField(blank=True, max_length=1000, null=True),
        ),
    ]
