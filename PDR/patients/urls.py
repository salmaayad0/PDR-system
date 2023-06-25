from django.urls import path
from .views import delete_patient,update_patient,search_patient
urlpatterns = [
path('DeletePatient/<int:id>',delete_patient),
path('UpdatePatient/<int:id>',update_patient),
path("search_patient/<phone_number>",search_patient),
]