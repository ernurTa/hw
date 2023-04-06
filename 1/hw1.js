function validateEmail() {
    const emailInput = document.getElementById("email-input");
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      alert("Email правильно пиши");
    } else {
      alert("Пожалуйста, введите правильный email адрес.");
    }
  }