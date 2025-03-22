document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("sidebar").style.right = "0";
});

function closeMenu() {
    document.getElementById("sidebar").style.right = "-270px";
}

function openLogin() {
    document.getElementById("login-popup").style.display = "block";
}

function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username && password) {
        alert("تم تسجيل الدخول بنجاح!");
        document.getElementById("login-popup").style.display = "none";
    } else {
        alert("يرجى إدخال اسم المستخدم وكلمة المرور!");
    }
}

function startGame() {
    document.getElementById("game-container").style.display = "block";
}
