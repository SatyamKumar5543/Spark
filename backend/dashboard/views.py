# dashboard/views.py
from bson import ObjectId
from connect import get_mongo_client
from rest_framework.decorators import api_view
from django.http import JsonResponse

@api_view(['GET'])

def get_analytics(request):
    try:
        mongo_client = get_mongo_client()
        db = mongo_client['Spark']
        documents = db['Hari'].find()
        total_shares = 0
        total_likes = 0
        total_comments = 0
        total_posts = db['Hari'].count_documents({})
        for doc in documents:
            total_likes+=doc.get('likes')
            total_shares+= doc.get('shares')
            total_comments+= doc.get('comments')

        return JsonResponse({'total_likes': total_likes, 'total_shares': total_shares, 'total_comments': total_comments, 'total_posts': total_posts})
    except Exception as e:
        print("Error:", str(e))
        return JsonResponse({'error': str(e)}, status=500)
    
def post(request):
    try:
        mongo_client = get_mongo_client()
        db = mongo_client['Spark']
        documents = db['Hari'].find()
        posts = []

        for doc in documents:
            post_data = {
                'id': str(doc['_id']),
                'image': doc.get('image', ''),
                'caption': doc.get('caption', ''),
                'likes': doc.get('likes', 0),
                'shares': doc.get('shares', 0),
                'comments': doc.get('comments', 0),
            }
            posts.append(post_data)

        return JsonResponse({'posts': posts}, safe=False)
    except Exception as e:
        print("Error:", str(e))
        return JsonResponse({'error': str(e)}, status=500)
    
def authenticate_user(request):
    try:
        data = request.data
        username = data.get('username')
        password = data.get('password')

        # Check username and password against your database
        mongo_client = get_mongo_client()
        db = mongo_client['Spark']
        user = db['user_data'].find_one({'username': username, 'password': password})
        print(username,password)
        if user:
            print(f"User '{username}' authenticated successfully.")
            return JsonResponse({'message': 'Authentication successful'})
        else:
            print(f"Authentication failed for user '{username}'.")
            return JsonResponse({'message': 'Invalid username or password'}, status=403)
    except Exception as e:
        print("Error:", str(e))
        return JsonResponse({'error': str(e)}, status=500)