document.getElementById("signInBtn").addEventListener("click", function () {
    // Login va parolni olish
    let email = document.querySelector("input[type='email']").value;
    let password = document.querySelector("input[type='password']").value;

    // Login va parolni localStorage'ga saqlash
    if (email && password) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        
        // Sahifani student.html ga yo'naltirish
        window.location.href = "student.html";
    } else {
        alert("Iltimos, login va parolni to'ldiring!");
    }
});