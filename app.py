from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import time


app = Flask(__name__)
app.config['SECRET_KEY'] = '2403172934d1148991be5d2d1e5b6237848937c2ffbdbc2b8f562b743ac00e65'

socketio =SocketIO(app)

# Data for the app
current_post = {'user': 'No user', 'post': 'No post yet'}
post_history = []


@app.route('/')
def index():
    return render_template('index.html')

# Listener for connections
@socketio.on('connect')
def handle_connect():
    print('Client has connected')
    emit('current_user', current_post)
    emit('current_post', post_history)

@socketio.on('disconnect')
def handle_disconnect():
    print('Client has disconnected')

# Listener for a new post
@socketio.on('new_post')
def handle_new_post(new_post_data):
    user_name = new_post_data.get('user', 'Anonymous')
    post_text = new_post_data.get('post', 'No post yet')
    current_post['user'] = user_name
    current_post['post'] = post_text
    post_history.append(current_post.copy())
    print(post_history)
    emit('current_post', current_post, broadcast=True)
    emit('post_history', post_history, broadcast=True)


if __name__ == "__main__":
    socketio.run(app, debug=True)
