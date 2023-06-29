from rest_framework import serializers
from .models import *
from django.db.models import fields

class Patientselizer(serializers.ModelSerializer):
    class Meta:
        model=Patients
        fields ='__all__'



class UpdateSessionSerializer(serializers.ModelSerializer):
    doc_name = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    pat_name = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        
        model=Sessions
        fields=("number","medicine","medical_analysis","doc_name","pat_name")


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
  
    class Meta:
        
        model=History
        fields="__all__"     
                      




class UpdateHistorySerializer(serializers.ModelSerializer):
    pat_name = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        
        model=History
        fields=("Diabetes","Cancer","Heart_Disease","High_Blood_Pressure","High_Cholesterol","pat_name")                      

     