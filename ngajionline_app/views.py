from django.shortcuts import render,redirect
from django.contrib import messages
from .forms import ContactForm
from django.utils import timezone
from .models import Discussion, Event, Profile
# Create your views here.
def index(request):
    return render(request, 'ngajionline/index.html')

def features(request):
    return render(request, 'ngajionline/index.html')

def courses(request):
    return render(request, 'ngajionline/courses.html')

def belajar_online(request):
    return render(request, 'ngajionline/belajar_online.html')

# def community(request):
#     return render(request, 'ngajionline/community.html')

def about(request):
    return render(request, 'ngajionline/about.html')

# def contact(request):
#     return render(request, 'ngajionline/contact.html')

def community(request):
    discussions = Discussion.objects.order_by('-created_at')[:3]
    events = Event.objects.filter(date__gte=timezone.now().date()).order_by('date', 'start_time')[:3]
    members = Profile.objects.select_related('user').order_by('-join_date')[:6]
    
    context = {
        'discussions': discussions,
        'events': events,
        'members': members,
    }
    return render(request, 'ngajionline/community.html', context)

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Pesan Anda telah terkirim. Terima kasih!')
            return redirect('contact')
    else:
        form = ContactForm()
    return render(request, 'ngajionline/contact.html', {'form': form})