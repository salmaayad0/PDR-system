from rest_framework.response import Response
from  rest_framework.decorators import  api_view
from .models import *
from rest_framework.views import APIView
from .serializer import *
from rest_framework.status import *
from django.shortcuts import  get_object_or_404
from rest_framework.permissions import  IsAdminUser,IsAuthenticated,IsAuthenticatedOrReadOnly
from rest_framework import permissions,authentication
from rest_framework.decorators import permission_classes
from patients.models import Patients,Sessions
from rest_framework import generics
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_doctor(req,id):
    data=get_object_or_404(Doctors,id=id)
    data.delete()
    return Response(status=HTTP_200_OK)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_doctor(request,id):
    objcatgory=Doctors.objects.get(id=id)
    if(objcatgory is not None):
        return Response(data=Doctorselizer(objcatgory).data)
    else:
        return  Response(status=HTTP_404_NOT_FOUND)
    


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_doctor(request,id):
    if(len(Doctors.objects.filter(id=id))!=0):
        updateobject=Doctors.objects.get(id=id)
        updateobjectafterupdate=Doctorselizer(instance=updateobject,data=request.data)
        if(updateobjectafterupdate.is_valid()):
            updateobjectafterupdate.save()
            return Response(status=HTTP_202_ACCEPTED,data=updateobjectafterupdate.data)
    else:
        return  Response(status=HTTP_404_NOT_FOUND,data={'message':'id not found'})   




class UserList(generics.ListCreateAPIView):
    queryset = Doctors.objects.all()
    serializer_class = Doctorselizer

    def list(self, request):
        queryset = self.get_queryset()
        serializer = Doctorselizer(queryset, many=True)
        return Response(serializer.data)    








class registrationView(APIView):

    """"API endpoint for doctor Registration"""

    permission_classes = []
    def post(self, request, format=None):
        registrationSerializer = RegDoctorselizer(
            data=request.data)
        print(request.data)
        print(registrationSerializer)
        checkregistration = registrationSerializer.is_valid()
        print(checkregistration)
        if checkregistration :
            registrationSerializer.save()
            return Response(registrationSerializer.data, status=HTTP_201_CREATED)
        else:
            print(registrationSerializer.errors)
            return Response({
                'user_data': registrationSerializer.errors,
            }, status=HTTP_400_BAD_REQUEST)     
        

















