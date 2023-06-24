from rest_framework.response import Response
from  rest_framework.decorators import  api_view
from .models import *
from .serializer import *
from rest_framework.status import *
from django.shortcuts import  get_object_or_404
from rest_framework.permissions import  IsAdminUser,IsAuthenticated,IsAuthenticatedOrReadOnly
from rest_framework import permissions,authentication
from rest_framework.decorators import permission_classes
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_doctor(req,id):
    data=get_object_or_404(Doctors,id=id)
    data.delete()
    return Response(status=HTTP_200_OK)



@api_view(['GET'])
def get_doctor(request,id):
    objcatgory=Doctors.objects.get(id=id)
    if(objcatgory is not None):
        return Response(data=Doctorselizer(objcatgory).data)
    else:
        return  Response(status=HTTP_404_NOT_FOUND)
    



def update_doctor(request,id):
    if(len(Doctors.objects.filter(id=id))!=0):
        updateobject=Doctors.objects.get(id=id)
        updateobjectafterupdate=Doctorselizer(instance=updateobject,data=request.data)
        if(updateobjectafterupdate.is_valid()):
            updateobjectafterupdate.save()
            return Response(status=HTTP_202_ACCEPTED,data=updateobjectafterupdate.data)
    else:
        return  Response(status=HTTP_404_NOT_FOUND,data={'message':'id not found'})    