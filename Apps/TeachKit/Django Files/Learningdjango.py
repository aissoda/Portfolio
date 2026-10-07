from django.shortcuts import render
from django.http import JsonResponse

students = [
    {"id": 1, "name": "Alice Johnson", "age": 20, "course": "Computer Science"},
    {"id": 2, "name": "Bob Smith", "age": 22, "course": "Mathematics"},
    {"id": 3, "name": "Carol Davis", "age": 21, "course": "Physics"},
    {"id": 4, "name": "David Lee", "age": 23, "course": "Engineering"},
]

def student_list(request):
    return render(request, "students/student_list.html", {"students": students})

def api_students(request):
    return JsonResponse({"students": students})