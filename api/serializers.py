from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        #specifying that all("__all__") fields should be inherited from "Task"(mode = Task) model.
        model = Task
        fields = "__all__"

        #do this to inherit only some properties
        #fields = ["id", "title"]