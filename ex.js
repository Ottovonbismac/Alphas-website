document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Perform a simple check for demo purposes
    if (username === "user" && password === "password") {
      document.getElementById("loginStatus").innerText = "Login successful!";
      // Redirect or perform further actions here after successful login
      // For example: window.location.href = "dashboard.html";
    } else {
      document.getElementById("loginStatus").innerText = "Invalid username or password";
    }
  });
  
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
  
    // Perform a simple registration process for demo purposes
    // You would typically send this data to a server for registration
    if (newUsername && newPassword) {
      document.getElementById("registerStatus").innerText = "Registration successful!";
      // Redirect to a welcome page after successful registration
      window.location.href = "welcome.html"; // Change "welcome.html" to the desired page
      // Additional logic to handle registration (e.g., sending data to the server)
    } else {
      document.getElementById("registerStatus").innerText = "Please fill in both fields.";
    }
  });
  