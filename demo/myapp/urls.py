from django.urls import path
from . import views

urlpatterns = [
    path('', views.loading, name='loading'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('home/', views.home, name='home'),
    path('galerie/', views.galerie, name='galerie'),
    path('universities/', views.universities, name='universities'),
    path('chatbot/', views.chatbot, name='chatbot'),
]
