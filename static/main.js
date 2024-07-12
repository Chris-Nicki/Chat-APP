console.log('Test, Test');

const socket =io();

// Socket listener to handle new posts
socket.on('new_post', (newPostData) => {
    console.log('New post being written:', newPostData);
    let postUserSpan = document.getElementById('user');
    postUserSpan.innerText = newPostData.user.toLocaleString();
    let postPostSpan = document.getElementById
})

//  Socket listener to handle errors from the server
socket.on('rejection', (rejectionData) => {
    alert(rejectionData.reason)
})

//  Socket listener to handle chat history
socket.on('post_history', (historyArr) => {
   const historyListElement = document.getElementById('historyList');
   historyListElement.innerHTML = '';
   historyArr.forEach( (user) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item'
        listItem.innerText = `User: ${user.user} posted ${user.post}`
        historyListElement.appendChild(listItem)
   })
})

//  Grab the chat form and add event listener
const chatForm = document.getElementById('chatForm');
chatForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let user = document.getElementById('user').value;
    let post = document.getElementById('post').value;
    let newPostData = {user, post};
    console.log(newPostData)
    socket.emit('new_post', newPostData);
    document.getElementById('user').value = '';
    document.getElementById('post').value = '';

})

