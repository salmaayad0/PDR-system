from django.contrib import admin
from .models import Patients,Sessions,History
# Register your models here.
admin.site.register(Patients)
admin.site.register(Sessions)

admin.site.register(History)