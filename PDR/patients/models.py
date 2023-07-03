from django.db import models
from django.core.validators import RegexValidator
from doctors.models import Doctors
# Create your models here.
class Patients(models.Model):
    x=[
        ("male","male"),
        ("female","female")
    ]
    name=models.CharField(max_length=50)
    age=models.IntegerField()
    address=models.CharField(max_length=100)
    phone_regex = RegexValidator(regex=r'^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$', 
                                 message="Phone number must be entered in the format:010|012|015")
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True)
    password=models.CharField(max_length=15)
    gender=models.CharField(max_length=10,choices=x)
    email=models.EmailField(max_length=150)


    def __str__(self):
        return self.name
    




class Sessions(models.Model):
    number=models.IntegerField(auto_created=True)
    medicine=models.TextField(max_length=1000)
    medical_analysis=models.TextField(max_length=1000)
    # medical_diagnose=models.TextField(max_length=1000)
    # date= models.DateTimeField(auto_now_add=True)
   
    doc_name=models.ForeignKey( Doctors,
        on_delete=models.CASCADE)
    pat_name=models.ForeignKey( Patients,
        on_delete=models.CASCADE)
    def __str__(self):
        return (f"session number:{self.number} for patient :{self.pat_name} with doctor:{self.doc_name}")

    class Meta:
        unique_together = ('pat_name', 'number')


   

# class Pat_Doc(models.Model):
#       doc_name=models.ManyToManyField(Doctors)
#       pat_name=models.ManyToManyField(Patients)
      




class History(models.Model):
    Diabetes=models.BooleanField(default=False)     
    Cancer=models.BooleanField(default=False)     
    Heart_Disease=models.BooleanField(default=False)     
    High_Blood_Pressure=models.BooleanField(default=False)     
    High_Cholesterol=models.BooleanField(default=False)   
    pat_name=models.ForeignKey( Patients,
        on_delete=models.CASCADE)  
 
    def __str__(self):
        return (f"{self.pat_name}'s history")