from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Chat,Room


class ChatSerializer(ModelSerializer):
    user = SerializerMethodField("get_name")
    class Meta:
        model = Chat
        fields = '__all__'
    def get_name(self, obj):
        return obj.user.username
class RoomSerializer(ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'name']