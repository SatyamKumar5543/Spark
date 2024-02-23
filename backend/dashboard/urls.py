# dashboard/urls.py

from django.urls import path
from . import views
from dashboard.views import get_analytics, post, authenticate_user

urlpatterns = [
    path('analytics/', get_analytics),
    path('post/', post),
    path('authenticate/', authenticate_user),
]