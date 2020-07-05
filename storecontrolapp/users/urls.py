from django.conf.urls import url
from .views import create_user

urlpatterns = [
  url(r'^create/$', create_user)
]