from django.urls import path
from .views import delete_patient,update_patient,search_patient,CreateSession,get_patient,UpdateSession,ListSession
urlpatterns = [
path('DeletePatient/<int:id>',delete_patient),
path('UpdatePatient/<int:id>',update_patient),
path("search_patient/<phone_number>",search_patient),
path("get_patient/<int:id>",get_patient),
# path('Add_session/',Add_session),
path('UpdateSession/<int:id>/<number>/',UpdateSession),
path('allSessions/<int:id>',ListSession),
path('addsession/', CreateSession.as_view()),
]