from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('features/', views.features, name='features'),
    path('courses/', views.courses, name='courses'),
    path('belajar_online/', views.belajar_online, name='belajar_online'),
    path('community/', views.community, name='community'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
]