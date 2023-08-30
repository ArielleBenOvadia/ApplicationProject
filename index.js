
// function addProduct(image,name){
//     const product = `
//     <div class="col"><a href="https://cdn.bootstrapstudio.io/placeholders/1400x800.png">
//     <img class="img-fluid" src=${image}></a>
//                         <div class="py-4">
//                             <h4>${name}</h4>
//                         </div>
//                     </div>
//     `
//     $(".mid-container").append(product)
// }
// function fetchProduct(){
//     $.ajax({
//         url: "http://localhost:3000/product",
//         type:"GET",
//         success:function(res){
//             return res.map(product =>{
//                 addProduct(product.image,product.name)
//             })
//         },
//         error:function(xhr,status,error){
//             console.log(error);
//         }
//     })
// } 
// $(document).ready(function(){
//     fetchProduct()
// })

// // const socket = io();

// // socket.emit('login',{userId:'YourUserID'});
// // socket.on('usercnt', function(msg) {
// //   $('#UsersCounnt')[0].innerHTML = "There is "+ msg +" Users online";
// // });

function addProduct(image, name, id) {
    const product = `
    <div class="col">
        <a href="/productPage/${id}"> <!-- Replace with your actual product URL pattern -->
            <img class="img-fluid" src="${image}">
        </a>
        <div class="py-4">
            <h4>${name}</h4>
        </div>
    </div>
    `;
    $(".mid-container").append(product);
}

function fetchProduct() {
    $.ajax({
        url: "http://localhost:3000/product",
        type: "GET",
        success: function (res) {
            return res.map(product => {
                addProduct(product.image, product.name, product.id); // Assuming 'id' is a field in your product data
            });
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

$(document).ready(function () {
    fetchProduct();
});


