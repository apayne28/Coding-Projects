from django.db import models

# Create your models here.
class Tweet(models.Model):
    # Maps SQL to data
    # id =   models.AutoField(primary_key = True)
    content = models.TextField(blank=True, null=True)
    image = models.FileField(upload_to='images/, black=True, null=True')
