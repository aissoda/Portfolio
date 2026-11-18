from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("workspace/<str:mode>/", views.workspace, name ="workspace"),
    path("acc_settings/", views.account_settings, name = "acc_settings"),
    path("api/ping/", views.ping, name="ping"),
]