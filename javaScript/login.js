
function loginForm() {   
    $("#loginform").submit(function (event) {
      event.preventDefault();
  
      const email = document.getElementById("emailLogin").value;
      const password = document.getElementById("passwordLogin").value;

      var data = {
        email: email,
        password: password,
      };
  
      $.ajax({
        url: "http://localhost:3000/user/data",
        type: "POST",
        data: data,
        success: function (response) {   
          if (response == "OK") {           
            window.location.href = "HomePage.html";
            return;
          } else {
            alert("Invalid email or password");
            return;
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
  }

  $(document).ready(function () {
    loginForm();
  });