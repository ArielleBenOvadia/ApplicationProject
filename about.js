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
