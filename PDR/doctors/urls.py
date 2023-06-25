from django.urls import path
from .views import delete_doctor,get_doctor,update_doctor,registrationView
urlpatterns = [
path('DeleteDoctor/<int:id>',delete_doctor),
path('UpdateDoctor/<int:id>',update_doctor),
path('GetDoctor/<int:id>',get_doctor),
    path('registration/', registrationView.as_view(), name='api_doctor_registration'),
]
