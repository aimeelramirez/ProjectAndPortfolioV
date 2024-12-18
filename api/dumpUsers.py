import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth

cred = credentials.Certificate("./projectandportfoliov-api-firebase-adminsdk-p6mni-fe920e0750.json")
firebase_admin.initialize_app(cred)

for user in auth.list_users().iterate_all():
    print("Deleting user " + user.uid)
    auth.delete_user(user.uid)
 # https://firebase.google.com/docs/auth/admin/manage-users#python_8