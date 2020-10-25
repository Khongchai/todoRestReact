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
        #deserialize
        user = serializer.validated_data
        _, token = AuthToken.objects.creaete(user) #this is the same as the method above, just another pythonic way of achieving the result.
        return Response({
            #serialize again through the format specified in UserSerializer.
            "user": UserSerializer(user).data, 
            "token": token
        })


#Get User API
class UserAPI(generics.RetrieveAPIView):
    #this line identifies Token
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

