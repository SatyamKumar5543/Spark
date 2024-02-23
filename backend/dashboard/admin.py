# dashboard/admin.py

from django.contrib import admin
from .models import SocialMediaPost, PostAnalytics

admin.site.register(SocialMediaPost)
admin.site.register(PostAnalytics)