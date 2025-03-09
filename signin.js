document.getElementById("signInBtn").addEventListener("click", function () {
   
    let email = document.querySelector("input[type='email']").value;
    let password = document.querySelector("input[type='password']").value;

    
    if (email && password) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        
        
        window.location.href = "student.html";
    } else {
        alert("Iltimos, login va parolni to'ldiring!");
    }
});