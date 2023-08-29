const socket = io.connect('http://localhost:3000'); // Replace with your server URL

socket.emit('login', {userId: 'YourUserID'});

socket.on('usercnt', function(msg) {
  document.getElementById('UsersCounnt').innerHTML = `There are ${msg} Users online`;
});
