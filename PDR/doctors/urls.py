from django.urls import path
from .models import Doctors
from .serializer import Doctorselizer
from .views import delete_doctor,get_doctor,update_doctor,registrationView
from rest_framework.generics import ListCreateAPIView
urlpatterns = [
path('DeleteDoctor/<int:id>',delete_doctor),
path('UpdateDoctor/<int:id>',update_doctor),
path('GetDoctor/<int:id>',get_doctor),
path('registration/', registrationView.as_view(), name='api_doctor_registration'),
path('alldoctors/', ListCreateAPIView.as_view(queryset=Doctors.objects.all(), serializer_class=Doctorselizer), name='user-list')


]
