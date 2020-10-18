from django.urls import path
from . import views
from .views import TaskViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'tasks', TaskViewSet,'tasks')
urlpatterns = router.urls


"""
urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('task-list', views.task_list, name="task-list"),
    path('task-detail/<int:id>', views.task_detail, name="task-detail"),
    path('task-create', views.task_create, name="task-create"),
    path('task-update/<int:id>', views.task_update, name="task-update"),
    path('task-delete/<int:id>', views.task_delete, name="task-delete"),

    #for class views (id has to be called pk)
    path('task-class-create', views.TaskListCreate.as_view(),name="task-class-create"),
    path('task-class-list', views.TaskListList.as_view(), name="task-class-list"),
    path('task-class-detail/<int:pk>', views.TaskListDetail.as_view(), name="task-class-detail"),
    path('task-class-update/<int:pk>', views.TaskListUpdate.as_view(),name="task-class-update"),
    path('task-class-delete/<int:pk>', views.TaskListDelete.as_view(), name="task-class-delete")
]
"""