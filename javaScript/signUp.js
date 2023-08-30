
$(document).ready(function () {
  $("#modalSignUp").submit(function (event) {
    console.log("i am here");
      event.preventDefault();

      const email = document.getElementById("emailSignUp").value;
      const password = document.getElementById("passwordSignUp").value;
      
      var data = {
          email: email,
          password: password,
      };

      $.ajax({
          url: "http://localhost:3000/user/register/data",
          type: "POST",
          data: data,
          success: function (response) {
              if (response == "OK") {
                  window.location.href = "index.html";
              } else {
                  alert("Invalid email or password");
              }
          },
          error: function (xhr, status, error) {
              if (xhr.status == 401) {
                  alert("Invalid email or password");
              }
              console.error(error);
          },
      });
  });
});
