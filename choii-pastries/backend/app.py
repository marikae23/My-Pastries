from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import bcrypt
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)

# Conectar ao MongoDB
client = MongoClient('mongodb://localhost:27017/')  # Substitua pela URI do seu MongoDB
db = client['user_db']
users = db['users']

@app.route('/auth/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data['username']
    password = data['password']

    if users.find_one({'username': username}):
        return jsonify({'message': 'Username already exists'}), 409

    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    user_id = users.insert_one({'username': username, 'password': hashed_password}).inserted_id

    user = users.find_one({'_id': user_id})
    return jsonify({'user': {'id': str(user['_id']), 'username': user['username']}}), 201

@app.route('/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    user = users.find_one({'username': username})

    if user and bcrypt.checkpw(password.encode('utf-8'), user['password']):
        return jsonify({'user': {'id': str(user['_id']), 'username': user['username']}}), 200

    return jsonify({'message': 'Invalid username/password'}), 401

if __name__ == '__main__':
    app.run(debug=True)
