from rest_framework import serializers
from .models import *
from django.db.models import fields

class Doctorselizer(serializers.ModelSerializer):
    class Meta:
        model=Doctors
        fields ='__all__'

class LogonDoctorselizer(serializers.ModelSerializer):
    class Meta:
        model=Doctors
        fields =("email","password")  
        
class RegDoctorselizer(serializers.ModelSerializer):
    class Meta:
        model=Doctors
        fields =("name","email","phone_number","major","address","password")

    def validate_email(self, email):
        email_exists=Doctors.objects.filter(email__iexact=email)
        if email_exists:
            raise serializers.ValidationError({'email':'This emailalready exists'})
        return email

        
    def validate_password(self, password):
        if password.isdigit():
            raise serializers.ValidationError('Your password should contain letters!')
        return password  

 



    def create(self, validated_data):
        user= Doctors.objects.create(
                name=validated_data['name'],
                email=validated_data['email'],
                password=validated_data['password'],
                major=validated_data['major'],
                address=validated_data['address'],
                phone_number=validated_data['phone_number']
            )
    
        user.save()
     
        return user   