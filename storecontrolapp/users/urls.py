from django.conf.urls import url
from .views import create_user, authenticate_user

urlpatterns = [
  url(r'^create/$', create_user),
  url(r'^obtain_token/$', authenticate_user)
]