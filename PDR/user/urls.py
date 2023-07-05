# from rest_framework.authtoken import views
# from user.views import UserViewSet
# from rest_framework.routers import DefaultRouter
# from django.contrib import admin
# from django.urls import path,include
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
# urlpatterns = [

#     path('api-auth/', include('rest_framework.urls')),
#     path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

# ]

# router=DefaultRouter()
# router.register('user',UserViewSet,basename='user')
# urlpatterns+=router.urls