from rest_framework.response import Response
from  rest_framework.decorators import  api_view
from rest_framework.views import APIView
from django.contrib.auth import login,authenticate,logout
from .models import *
from .serializer import *
from rest_framework import status
from rest_framework.status import *
from django.shortcuts import  get_object_or_404
from rest_framework.permissions import  IsAdminUser,IsAuthenticated,IsAuthenticatedOrReadOnly
from rest_framework import permissions,authentication
from rest_framework.decorators import permission_classes,authentication_classes
from django.contrib.auth.decorators import login_required
from rest_framework import views,generics
from .serializer import Patientselizer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authentication import TokenAuthentication
@api_view(['DELETE'])
@authentication_classes([TokenAuthentication])
@permission_classes([permissions.AllowAny])
def delete_patient(req,id):
    data=get_object_or_404(Patients,id=id)
    data.delete()
    return Response(status=HTTP_200_OK)



@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([permissions.AllowAny])
def search_patient(request,phone_number):
    objcatgory=Patients.objects.get(phone_number=phone_number)
    if(objcatgory is not None):
        return Response(data=Patientselizer(objcatgory).data)
    else:
        return  Response(status=HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([permissions.AllowAny])
def get_patient(request,id):
    obj=Patients.objects.get(id=id)
    if(obj is not None):
        return Response(data=Patientselizer(obj).data)
    else:
        return  Response(status=HTTP_404_NOT_FOUND)



@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([permissions.AllowAny])
def get_patient_by_phone(request,phone_number):
    obj=Patients.objects.get(phone_number=phone_number)
    if(obj is not None):
        return Response(data=Patientselizer(obj).data)
    else:
        return  Response(status=HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([permissions.AllowAny])
def get_patient_by_email(request,email):
    obj=Patients.objects.get(email=email)
    if(obj is not None):
        return Response(data=Patientselizer(obj).data)
    else:
        return  Response(status=HTTP_404_NOT_FOUND)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([permissions.AllowAny])
def get_all_patient(request):
    l=[]
    obj=Patients.objects.all()
    return Response(data=Patientselizer(obj).data)
  


class UserList(generics.ListCreateAPIView):
    authentication_classes=([TokenAuthentication])
    permission_classes = ([permissions.AllowAny])
    queryset = Patients.objects.all()
    serializer_class = Patientselizer

    def list(self, request):
        queryset = self.get_queryset()
        serializer = Patientselizer(queryset, many=True)
        return Response(serializer.data)    







@api_view(['PUT'])
@authentication_classes([TokenAuthentication])
@permission_classes([permissions.AllowAny])
def update_patient(request,id):
    if(len(Patients.objects.filter(id=id))!=0):
        updateobject=Patients.objects.get(id=id)
        print(updateobject)
        updateobjectafterupdate=Patientselizer(instance=updateobject,data=request.data)
        print(updateobjectafterupdate)
        if(updateobjectafterupdate.is_valid()):
            updateobjectafterupdate.save()
            return Response(status=status.HTTP_202_ACCEPTED)
            
    else:
        return Response(status=status.HTTP_404_NOT_FOUND,data={'message':'id not found'})  
    



class CreateSession(views.APIView):
    authentication_classes=([TokenAuthentication])
    permission_classes = ([permissions.AllowAny])
    
    serializer_class = AddSessionSerializer

    def post(self, request):
        # data1=History.objects.get(pat_name=id)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   



@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([permissions.AllowAny])
def ListSession(request,id=Patients.id):
    if(id is not None):
        data=Sessions.objects.filter(pat_name=id)
        number = ListSessionSerializer(data,many=True)        
        return Response(status=HTTP_202_ACCEPTED,data=number.data)

        # return Response(status=HTTP_202_ACCEPTED,data={'data':number.data})
    else:
        return  Response(status=HTTP_404_NOT_FOUND)    

 
    
    

@api_view(['PUT'])
@permission_classes([permissions.AllowAny])
@authentication_classes([TokenAuthentication])
def  UpdateSession(request,id=Sessions.pat_name,number=Sessions.number):
    if(len(Sessions.objects.filter(pat_name=id))!=0):
        updateobject=Sessions.objects.get(pat_name=id,number=number)
        print(updateobject)
        updateobjectafterupdate=UpdateSessionSerializer(instance=updateobject,data=request.data)
        print(updateobjectafterupdate)
        if(updateobjectafterupdate.is_valid()):
            updateobjectafterupdate.save()
            return Response(status=status.HTTP_202_ACCEPTED)
            
    else:
        return Response(status=status.HTTP_404_NOT_FOUND,data={'message':'id not found'})  

    


class CreateHistory(views.APIView):
    authentication_classes=([TokenAuthentication])
    permission_classes = ([permissions.AllowAny])
    serializer_class = AddHistorySerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  





@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([permissions.AllowAny])
def Listhistory(request,id=Patients.id):
    if(id is not None):
        data1=History.objects.get(pat_name=id)
        # obj= ListHistorySerializer(data,many=True)        

        return Response(status=HTTP_202_ACCEPTED,data=ListHistorySerializer(data1).data)
    else:
        return  Response(status=HTTP_404_NOT_FOUND)  
        

@api_view(['PUT'])
@authentication_classes([TokenAuthentication])
@permission_classes([permissions.AllowAny])
def  UpdateHistory(request,id=Sessions.pat_name):
    if(len(History.objects.filter(pat_name=id))!=0):
        updateobject=History.objects.get(pat_name=id)
        print(updateobject)
        updateobjectafterupdate=UpdateHistorySerializer(instance=updateobject,data=request.data)
        print(updateobjectafterupdate)
        if(updateobjectafterupdate.is_valid()):
            updateobjectafterupdate.save()
            return Response(status=status.HTTP_202_ACCEPTED)
            
    else:
        return Response(status=status.HTTP_404_NOT_FOUND,data={'message':'id not found'})       
    




class registrationView(APIView):
    
    authentication_classes=([TokenAuthentication])
    permission_classes = ([permissions.AllowAny])
    def post(self, request, format=None):
        registrationSerializer = RegPatientselizer(
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



class LoginP(APIView):
    authentication_classes=([TokenAuthentication])
    permission_classes = ([permissions.AllowAny])
    def post(self, request, format=None):
        registrationSerializer = LogonPatientselizer(
            data=request.data)
        # print(request.data)
        print(registrationSerializer)
        queryset = Patients.objects.all()
        checkregistration = registrationSerializer.is_valid()
        print(queryset)
        print(checkregistration)
        if checkregistration :
                for patient in queryset:
                    if patient.email==registrationSerializer.data['email'] and patient.password==registrationSerializer.data['password']:
                        n=authenticate(registrationSerializer.data)
                        if n is not None:
                            request.session['email']=registrationSerializer.data["email"]
                            login(request,n)
                        return Response(registrationSerializer.data,status=HTTP_200_OK)

                else:

                         return Response(status=status.HTTP_404_NOT_FOUND,data={'message':'patient not found'})  

@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([permissions.AllowAny])
def LogoutP(request):
    logout(request)
    request.session.clear()
    return Response(status=HTTP_200_OK)

   


















