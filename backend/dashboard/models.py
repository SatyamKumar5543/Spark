# dashboard/models.py

from django.db import models

class SocialMediaPost(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.title

class PostAnalytics(models.Model):
    post = models.ForeignKey(SocialMediaPost, on_delete=models.CASCADE)
    likes = models.IntegerField(default=0)
    shares = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)

    def _str_(self):
        return f"Analytics for {self.post.title}"