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

"use strict";
let map,searchManager;

function getMap(){
  map = new Microsoft.Maps.Map("#map", {
    credentials:'AnSwNOD-rjLdT-e7jJq1Y7mzbGpX7H4lS2dcU1V7CMPUx6BmmPh8g-No4K9dJNN5',
  })
}

