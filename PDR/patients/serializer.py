from rest_framework import serializers
from .models import *
from django.db.models import fields

class Patientselizer(serializers.ModelSerializer):
    class Meta:
        model=Patients
        fields ='__all__'