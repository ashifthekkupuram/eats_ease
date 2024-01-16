from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager

# Create your models here.
class UserAccountManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email,username=username, **extra_fields)

        user.set_password(password)
        user.save()

        return user    

class User(AbstractBaseUser,PermissionsMixin,BaseUserManager):
    email = models.EmailField(max_length=255,unique=True)
    username = models.CharField(max_length=255,unique=True,blank=True,null=True)
    name = models.CharField(max_length=255)
    profile = models.ImageField(upload_to='profiles/',blank=True,null=True)
    followers = models.ManyToManyField('self', symmetrical=False, blank=True,related_name='following')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email
