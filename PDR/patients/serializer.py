from rest_framework import serializers
from .models import *
from django.db.models import fields
from django.contrib.auth import login,authenticate,logout

class Patientselizer(serializers.ModelSerializer):
    class Meta:
        model=Patients
        fields ='__all__'


class LogPatientSerilaizer(serializers.ModelSerializer):
    class Meta:
        model=Patients
        fields =("email","password")



class UpdateSessionSerializer(serializers.ModelSerializer):
    doc_name = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    pat_name = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        
        model=Sessions
        fields=("number","medicine","medical_analysis","doc_name","pat_name")

# ," medical_diagnoses","history"
class ListSessionSerializer(serializers.ModelSerializer):
  
    class Meta:
        
        model=Sessions
        fields="__all__"     
              

class AddSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sessions
        fields = "__all__"



class AddHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model=History
        fields="__all__"         



class ListHistorySerializer(serializers.ModelSerializer):
    pat_name = serializers.PrimaryKeyRelatedField( read_only=True)

    class Meta:
        
        model=History
        fields="__all__"     
                      




class UpdateHistorySerializer(serializers.ModelSerializer):
    pat_name = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        
        model=History
        fields=("Diabetes","Cancer","Heart_Disease","High_Blood_Pressure","High_Cholesterol","pat_name")                      
# "Allergies""Bone_denisty",



class RegPatientselizer(serializers.ModelSerializer):
    class Meta:
        model=Patients
        fields =("name","email","age","phone_number","gender","address","password")

    def validate_email(self, email):
        email_exists=Patients.objects.filter(email__iexact=email)
        if email_exists:
            raise serializers.ValidationError({'email':'This emailalready exists'})
        return email

        
    def validate_password(self, password):
        if password.isdigit():
            raise serializers.ValidationError('Your password should contain letters!')
        return password  

 



    def create(self, validated_data):
        user= Patients.objects.create(
                name=validated_data['name'],
                email=validated_data['email'],
                password=validated_data['password'],
                age=validated_data['age'],
                address=validated_data['address'],
                phone_number=validated_data['phone_number'],
                gender=validated_data['gender']

            )
    
        user.save()
     
        return user   
    




class LogonPatientselizer(serializers.ModelSerializer):
    class Meta:
        model=Patients
        fields =("email","password")    

    # def login(self,email,password)    :
    #      x=Patients.objects.all()
    #      u=Patients.objects.filter(email=Patients.email,password=password)
    #     # x=LogonPatientselizer(data=request.data)
    #     #  userobj=authenticate(email=email,password=password)
    #      if u in x:
    #         print(u)
    #         print(x)
    #         print("*******")
    #         return u


# class LogooutPatientselizer(serializers.ModelSerializer):
#     class Meta:
#         model=Patients
        