from django.urls import path
from .views import RoomView, CreateRoomView

urlpatterns = [
   path('home', RoomView.as_view()),
   path('api/create-room', CreateRoomView.as_view())
]