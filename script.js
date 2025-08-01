document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const course = document.getElementById("course").value.trim();
  const gender = document.getElementById("gender").value;

  if (name && email && age && course && gender) {
    document.getElementById("success-message").innerText = "Registration Successful!";
    this.reset(); // Clear the form
  } else {
    document.getElementById("success-message").innerText = "Please fill all fields.";
  }
});
