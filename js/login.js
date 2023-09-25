function toggleForm() {
    var signinForm = document.getElementById("signin-form");
    var signupForm = document.getElementById("signup-form");
    if (signinForm.style.display === "none") {
        signinForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        signinForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

const vendButton = document.getElementById("vend");
const custButton = document.getElementById("cust");

vendButton.addEventListener("click", () => {
    vendButton.classList.add("active-button");
    custButton.classList.remove("active-button");
});

custButton.addEventListener("click", () => {
    custButton.classList.add("active-button");
    vendButton.classList.remove("active-button");
});
