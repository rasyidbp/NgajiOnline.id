from django.contrib import admin
from .models import Discussion, Event, Profile
from .models import ContactMessage
# Register your models here.
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'start_time', 'end_time')
    list_filter = ('date',)

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')
    list_filter = ('created_at',)

admin.site.register(Discussion)
admin.site.register(Event, EventAdmin)
admin.site.register(Profile)