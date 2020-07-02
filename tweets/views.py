import random
from django.http import HttpResponse, Http404, JsonResponse
from django.shortcuts import render

from .forms import TweetForm
from .models import Tweet
# Create your views here.
def home_view(request, *args, **kwargs):
  #return HttpResponse("<h1>Hello World</h1>")
  return render(request, "pages/home.html", context={}, status = 200)

def tweet_create_view(request, *args, **kwargs):
  form = TweetForm(request.POST or None)
  if form.is_valid():
    obj = form.save(commit=False)
    # do other form related logic
    obj.save()
    form = TweetForm()
  return render(request, 'components/form.html', context={"form": form})

def tweet_list_view(request, *args, **kwargs):
  """
  REST API VIEW
  Consumed by Javascript or Swift/Java/iOS/Android
  return json data
  """
  #pylint: disable=maybe-no-member
  qs = Tweet.objects.all()
  tweets_list = [{"id": x.id, "content": x.content,
  "likes": random.randint(0, 123)} for x in qs]
  data = {
    "isUser": False,
    "response": tweets_list
  }
  return JsonResponse(data)

def tweet_detail_view(request, tweet_id, *args, **kwargs):
  """
  REST API VIEW
  Consume by Javascript or Swift/Java/iOS/Android
  return json data
  """
  try:
    #pylint: disable=maybe-no-member
    obj = Tweet.objects.get(id=tweet_id)
  except:
    raise Http404

  data = {
    "id": tweet_id,
    "content": obj.content,
    #"image_path": obj.image.url
  }
  return JsonResponse(data) # json.dumps content_type='application/json
