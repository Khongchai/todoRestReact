from django.shortcuts import render, redirect
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer
from django.http import HttpResponseRedirect
from django.urls import reverse
from rest_framework import generics
from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAuthenticated, AllowAny


class TaskViewSet(viewsets.ModelViewSet):
    #set the serializer class for this TaskViewSet, can be accessed with self.get_serializer
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated,]
    queryset = Task.objects.all().order_by("-id")

    def destroy(self, request, pk):
        task = Task.objects.get(pk=pk)
        task.delete()

        queryset = Task.objects.all().order_by("-id")
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def update(self, request, pk):
        task = Task.objects.get(pk=pk)
        serializer = self.get_serializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()

        tasks = Task.objects.all().order_by("-id")
        serializer = self.get_serializer(tasks, many=True)
        return Response(serializer.data)

    def get(self, request):
        user = self.request.user
        return user.tasks.all()

"""
# bottom functional views can be written more idiomatically like so
# there is also RetriveUpdateDestroyAPI that determines what to do based on HTTP methods
#  https://www.django-rest-framework.org/api-guide/generic-views/




class TaskListCreate(generics.ListCreateAPIView):
        queryset = Task.objects.all().order_by("-id")
        serializer_class = TaskSerializer

class TaskListUpdate(generics.UpdateAPIView):
    queryset = Task.objects.all().order_by("-id")
    serializer_class = TaskSerializer

class TaskListDetail(generics.RetrieveAPIView):
    queryset = Task.objects.all().order_by("-id")
    serializer_class = TaskSerializer

class TaskListDelete(generics.DestroyAPIView):
    queryset = Task.objects.all().order_by("-id")
    serializer_class = TaskSerializer

class TaskListList(generics.ListAPIView):
    queryset = Task.objects.all().order_by("-id")
    serializer_class = TaskSerializer

###############################################################################

@api_view(["GET", "DELETE"])
def task_list(request):
    tasks = Task.objects.all().order_by("-id")
    #many=True is for querying for multiple objects
    serializer = TaskSerializer(tasks, many=True)

    #returns all tasks
    return Response(serializer.data)


@api_view(["GET"])
def task_detail(request, id):
    task = Task.objects.get(pk=id)
    #many=False is for querying for only 1 object.
    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data)


@api_view(["POST"])
def task_create(request):
    print(f"Request data = {request.data}")
    #request.data >> when called will return a parsed body of the request
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(["POST"])
def task_update(request, id):
    #request.data >> when called will return a parsed body of the request
    task = Task.objects.get(pk=id)
    #to update, put as the first argument a new instance of the object (can also be more explicit with instance=task)
    serializer = TaskSerializer(task, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return redirect("task-list")


@api_view(["DELETE"])
def task_delete(request, id):

    task = Task.objects.get(pk=id)
    task.delete()

    return redirect("task-list")

"""