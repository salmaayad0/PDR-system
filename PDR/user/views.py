from django.contrib.auth import get_user_model
from .serializer import UserSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_404_NOT_FOUND
from django.contrib.auth import authenticate,login,logout
# Create your views here
from django.http import JsonResponse
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view

class UserViewSet(viewsets.ModelViewSet):
    permission_classes=(IsAuthenticated,)
    serializer_class=UserSerializer
    queryset=get_user_model().objects.all()


