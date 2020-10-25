from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

#User Serializer 
#This class is for returning the users details.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

#Register Serializer
#This class is for registering users.
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {"write_only": True}}

    #This function takes in the data from POST method and save the user's detail.
    #The User.objects.create_user(username, email, password) is just a normal Django method.
    #validated_data contains all the validated data from request.data
    def create(self, validated_data):
        user = User.objects.create_user(validated_data["username"], 
               validated_data["email"], validated_data["password"])

        return user

#Login Serializer
#not using Models.Serializer because we are not creating an object, just validating info.
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    #the "data" argument below is determined by the fields up there
    def validate(self, data):
        #this line below is just a standard django authentication method for user https://docs.djangoproject.com/en/3.1/topics/auth/default/#authenticating-users)
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Inforrect Credentials")
