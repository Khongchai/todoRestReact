from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from knox.auth import TokenAuthentication

#Register API
class RegisterAPI(generics.GenericAPIView):
    #Set the global serializer for this class.
    serializer_class = RegisterSerializer

    #For post method.
    def post(self, request, *args, **kwargs):
        #this is where the user gets created
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            #"user" is returned so that the info within can be utilized if needed:
            #ex. Welcome, "John".
            "user": UserSerializer(user, context=self.get_serializer_context()).data, #context might not be necessary
            "token": AuthToken.objects.create(user)[1]
        })
         

#Login API
class LoginAPI(generics.GenericAPIView):
    #Set the global serializer for this class.
    serializer_class = LoginSerializer

    #For post method.
    def post(self, request, *args, **kwargs):
        #this is where the user gets created
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            #"user" is returned so that the info within can be utilized if needed:
            #ex. Welcome, "John".
            "user": UserSerializer(user).data, #context might not be necessary
            #This create a token for the user and also returns a JSON so you can see in the console.
            #AuthToken returns a tuple (instance, token). So to get the token, we need to do [1].
            "token": AuthToken.objects.create(user)[1]
        })


#Get User API
class UserAPI(generics.RetrieveAPIView):
    #this line identifies Token
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

