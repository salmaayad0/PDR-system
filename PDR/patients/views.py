from rest_framework.response import Response
from  rest_framework.decorators import  api_view
from .models import *
from .serializer import *
from rest_framework.status import *
from django.shortcuts import  get_object_or_404
from rest_framework.permissions import  IsAdminUser,IsAuthenticated,IsAuthenticatedOrReadOnly
from rest_framework import permissions,authentication
from rest_framework.decorators import permission_classes
from django.contrib.auth.decorators import login_required
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
@login_required
def delete_patient(req,id):
    data=get_object_or_404(Patients,id=id)
    data.delete()
    return Response(status=HTTP_200_OK)



@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def search_patient(request,phone_number):
    objcatgory=Patients.objects.get(phone_number=phone_number)
    if(objcatgory is not None):
        return Response(data=Patientselizer(objcatgory).data)
    else:
        return  Response(status=HTTP_404_NOT_FOUND)
    

@api_view(['PUT'])
@permission_classes([permissions.AllowAny])
@login_required
def update_patient(request,id):
    if(len(Patients.objects.filter(id=id))!=0):
        updateobject=Patients.objects.get(id=id)
        updateobjectafterupdate=Patientselizer(instance=updateobject,data=request.data)
        if(updateobjectafterupdate.is_valid()):
            updateobjectafterupdate.save()
            return Response(status=HTTP_202_ACCEPTED,data=updateobjectafterupdate.data)
    else:
        return  Response(status=HTTP_404_NOT_FOUND,data={'message':'id not found'})  
    


    

  