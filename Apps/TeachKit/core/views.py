from django.http import JsonResponse
from django.shortcuts import render

#Sidebar navigation
def home(request):
    return render(request,'home.html')

def workspace(request,mode):
    return render(request,'workspace.html',{"mode",mode})

def account_settings(request):
    return render(request,'acc_settings.html')


def ping(request):
    return JsonResponse({"message": "Assalamualaikum"})