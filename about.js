function CategoryPage(name) {
  $.ajax({
    url: "http://localhost:3000/product/category/" + name,
    method: "GET",
    success: function (response) {
      window.location.href = "bottles.html?category=" + name;
      console.log(response);
    },
    error: function (xhr) {
      console.log(xhr.responseText);
      // Handle the error
    },
  });
}

function initMap() {
  var map = new Microsoft.Maps.Map(document.getElementById("map"), {
    center: new Microsoft.Maps.Location(31.771955, 34.683598), // Set the initial center of the map to Israel 31.774061, 34.683261
    zoom: 14, // Set the initial zoom level
  });

  //Load points from the database
  $.ajax({
    url: "http://localhost:3000/point",
    method: "GET",
    success: function (data) {
      data.forEach(function (point) {
        addMarker(map, point.latitude, point.longitude);
      });
    },
    error: function (error) {
      console.error("An error occurred while loading points:", error);
    },
  });
}

function addMarker(map, lat, lng) {
  var location = new Microsoft.Maps.Location(lat, lng);

  var pushpin = new Microsoft.Maps.Pushpin(location, null);
  map.entities.push(pushpin);
}

const socket = io.connect('http://127.0.0.1:3000');

// Emit 'login' event when the page loads
socket.emit('login', { userId: 'YourUserID' });

socket.on('usercnt', (msg) => {
  document.getElementById('UsersCount').innerHTML = "There are " + msg + " Users online";
});