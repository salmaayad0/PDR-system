from django.urls import path
from .views import delete_patient,update_patient,search_patient,CreateSession,get_patient,UpdateSession,ListSession,CreateHistory,Listhistory,UpdateHistory
from rest_framework.generics import ListCreateAPIView
from .models import Patients
from .serializer import Patientselizer
urlpatterns = [
path('DeletePatient/<int:id>',delete_patient),
path('UpdatePatient/<int:id>',update_patient),
path("search_patient/<phone_number>",search_patient),
path("get_patient/<int:id>",get_patient),
path('allpatients/', ListCreateAPIView.as_view(queryset=Patients.objects.all(), serializer_class=Patientselizer), name='user-list'),
path('UpdateSession/<int:id>/<number>/',UpdateSession),
path('allSessions/<int:id>',ListSession),
path('addsession/', CreateSession.as_view()),
path('addhistory/', CreateHistory.as_view()),
path('GetHistory/<int:id>',Listhistory),
path('UpdateHistory/<int:id>/',UpdateHistory),

]