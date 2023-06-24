from django.urls import path
from .views import delete_patient,get_patient,update_patient
urlpatterns = [
path('DeletePatient/<int:id>',delete_patient),
path('UpdatePatient/<int:id>',get_patient),
path('GetPatient/<int:id>',get_patient),]
