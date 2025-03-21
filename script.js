// فتح وإغلاق الشريط الجانبي
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-250px";
    } else {
        sidebar.style.right = "0px";
    }
}

// عرض رسالة تسجيل الدخول
function showLoginMessage() {
    alert("هذا الموقع تحت التجريب");
}

// الرجوع إلى الصفحة الرئيسية
function goBack() {
    window.location.href = "index.html";
}
