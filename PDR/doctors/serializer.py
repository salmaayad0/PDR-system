from rest_framework import serializers
from .models import *
from django.db.models import fields

class Doctorselizer(serializers.ModelSerializer):
    class Meta:
        model=Doctors
        fields ='__all__'


    def validate_username(self, username):
        username_exists=Doctors.objects.filter(username__iexact=username)
        if username_exists:
            raise serializers.ValidationError({'username':'This username already exists'})
        return username

        
    def validate_password(self, password):
        if password.isdigit():
            raise serializers.ValidationError('Your password should contain letters!')
        return password  

 

    def validate(self, data):
        password=data.get('password')
        confirm_password=data.pop('confirm_password')
        if password != confirm_password:
            raise serializers.ValidationError({'password':'password must match'})
        return data


    def create(self, validated_data):
        user= Doctors.objects.create(
                name=validated_data['name'],
                email=validated_data['email'],
                password=validated_data['password'],
                confirm_password=validated_data['confirm_password'],
                major=validated_data['major'],
                address=validated_data['address'],
                phone_number=validated_data['phone_number'],

                status=False
            )
    
        user.set_password(validated_data['password'])
        user.save()
     
        return user   