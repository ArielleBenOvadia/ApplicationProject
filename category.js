const params = new URLSearchParams(window.location.search);
const products = params.get("category");

function addProducts(image, name, price, _id) {
  const product = `
    <div class="col mb-5">
    <div class="card h-100">
        <!-- Product image-->
        <a href="#" onclick="productPage('${_id}')">
        <img class="card-img-top" src='${image}' alt="..." />
        </a>
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${name}</h5>
                <!-- Product price-->
                $${price}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
        </div>
    </div>
    </div>
    `;
  $(".products-container").append(product);
}
function productPage(id) {
  window.location.href = "product.html?product=" + id;
}
function fetchProducts() {
  $.ajax({
    url: `http://localhost:3000/product/category/${products}`,
    type: "GET",
    success: function (response) {
      console.log(response);
      return response.map((product) => {
        addProducts(product.image, product.name, product.price, product._id);
      });
    },
    error: function (xhr, status, error) {
      console.log("request failed: " + error);
    },
  });
}

$(document).ready(function () {
  fetchProducts();
});
