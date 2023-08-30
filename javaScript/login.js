
$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    event.preventDefault();
    const email = $("#emailLogin").val();
    const password = $("#passwordLogin").val();
    $.ajax({
      url: "http://localhost:3000/user/login",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        email,
        password
      }),
      success: function (response, status, xhr) {
        if (xhr.status === 200) {
          // Handle successful login
          window.location.href = "index.html";
        } else {
          alert("Invalid email or password");
        }
      },
      error: function (xhr, status, error) {
        if (xhr.status === 401) {
          alert("Invalid email or password");
        } else {
          alert("An error occurred: " + error);
        }
      },
    });
  });
});
