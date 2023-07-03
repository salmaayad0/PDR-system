# Generated by Django 3.2.12 on 2023-07-03 10:56

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sessions',
            old_name='pat_id',
            new_name='pat_name',
        ),
        migrations.AddField(
            model_name='sessions',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AddField(
            model_name='sessions',
            name='medical_diagnose',
            field=models.TextField(default='medicaldiagnoses', max_length=1000),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='patients',
            name='age',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='sessions',
            name='number',
            field=models.IntegerField(auto_created=True),
        ),
        migrations.AlterUniqueTogether(
            name='sessions',
            unique_together={('pat_name', 'number')},
        ),
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Diabetes', models.BooleanField(default=False)),
                ('Allergies', models.BooleanField(default=False)),
                ('Heart_Disease', models.BooleanField(default=False)),
                ('High_Blood_Pressure', models.BooleanField(default=False)),
                ('High_Cholesterol', models.BooleanField(default=False)),
                ('BoneDenisty', models.BooleanField(default=False)),
                ('pat_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='patients.patients')),
            ],
        ),
        migrations.RemoveField(
            model_name='sessions',
            name='analysis_image',
        ),
        migrations.RemoveField(
            model_name='sessions',
            name='x_ray',
        ),
    ]