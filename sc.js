document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Perform a simple check for demo purposes
    if (username === "user" && password === "password") {
      document.getElementById("loginStatus").innerText = "Login successful!";
      // Redirect or perform further actions here after successful login
    } else {
      document.getElementById("loginStatus").innerText = "Invalid username or password";
    }
  });
  