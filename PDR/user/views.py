from django.shortcuts import render
from django.contrib.auth.models import User
from .serializer import AdminSerializer,ChangePasswordSerializer
from rest_framework.status import HTTP_404_NOT_FOUND
from django.shortcuts  import  get_object_or_404
from django.contrib.auth import authenticate,login,logout
# Create your views here.
from django.http import JsonResponse
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view
from django.views.decorators.http import require_http_methods
from rest_framework.permissions import IsAuthenticated
@api_view(['PUT'])
def Change_Password(request,id):
    
    user= User.objects.get(id=id)
    old_password = request.POST.get('old_password')
    if old_password == user.password:   
        password = request.POST('password')
        confirm_password = request.POST('password2')
   
        if password==confirm_password:
            updatedpassword=ChangePasswordSerializer(instance=user.password,data=request.data)
            if(updatedpassword.is_valid()):
                updatedpassword.save()
                return Response(status=HTTP_202_ACCEPTED,data=updatedpassword.data)
            else:
              return  Response(status=HTTP_404_NOT_FOUND,data={'message':'id not found'})


# @require_http_methods(['POST','GET'])
# def RegistrationAdminModel(request):
#     if(request.method=="POST"):
#         context={}
#         User.objects.create_superuser(username='usersuper',email='user@gmail.com',password='123')
#         return render(request,'RegistrationAdminModel.html',context)
    

@api_view(['POST'])
def admin_login(request):
     
        username = request.POST.get('username')
        print(username)
        password = request.POST.get('password')
        user = authenticate(username=username, password = password)
        print(user)
        if user is not None:
            login(request, user)
            return Response("Authenticated")
        else:
            return  Response(status=HTTP_404_NOT_FOUND)



@api_view(["POST"])
def admin_logout(request):
    print(request.user)
    logout(request)
    return JsonResponse({"message":"LoggedOut"})


@api_view(['GET'])
def Getuser(request,id):
    objcatgory=User.objects.get(id=id)
    if(objcatgory is not None):
        return Response(data=AdminSerializer(objcatgory).data)
    else:
        return  Response(status=HTTP_404_NOT_FOUND)