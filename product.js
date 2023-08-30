const params = new URLSearchParams(window.location.search);
const productId = params.get("product");

function addTopItem(image, name, description, price) {
  const newPrice = parseInt(price) - 5;
  const item = `
    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src=${image} alt="..." /></div>
                    <div class="col-md-6">
                        <div class="small mb-1">SKU: BST-498</div>
                        <h1 class="display-5 fw-bolder">${name}</h1>
                        <div class="fs-5 mb-5">
                            <span class="text-decoration-line-through">$${price}</span>
                            <span>$${newPrice}</span>
                        </div>
                        <p class="lead">${description}</p>
                        <div class="d-flex">
                            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
    `;
  $(".top-item").append(item);
}

function fetchProduct() {
  $.ajax({
    url: `http://localhost:3000/product/${productId}`,
    type: "GET",
    success: function (response) {
      console.log(response);
      addTopItem(
        response.image,
        response.name,
        response.description,
        response.price
      );
    },
    error: function (xhr, status, error) {
      console.log("request failed: " + error);
    },
  });
}

async function addToCart(id) {

  // take cart item from the cookie
  let cart = localStorage.getItem("cart");

  if (cart) {
    cart = cart + "," + id;
    alert("Game added to cart");
  } else {
    cart = id;
    alert("Game added to cart");
  }

  localStorage.setItem("cart", cart);
}


$(document).ready(function () {
  fetchProduct();
});
