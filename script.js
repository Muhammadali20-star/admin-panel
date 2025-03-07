document.addEventListener("DOMContentLoaded", function () {
     signUpButton = document.querySelector("button");
    
    signUpButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        
       
        const emailInput = document.querySelector("input[type='email']");
        const passwordInput = document.querySelector("input[type='password']");
        const email = emailInput ? emailInput.value : "";
        const password = passwordInput ? passwordInput.value : "";
        
      
        let messageBox = document.getElementById("error-message");
        if (!messageBox) {
            messageBox = document.createElement("p");
            messageBox.id = "error-message";
            messageBox.style.color = "red";
            messageBox.style.textAlign = "center";
            messageBox.style.marginTop = "10px";
            signUpButton.insertAdjacentElement("afterend", messageBox);
        }
        
        if (email && password) {
            
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);
            
            window.location.href = "student.html";
        } else {
            messageBox.textContent = "Iltimos, email va parolni to'ldiring!";
        }
    });
});

