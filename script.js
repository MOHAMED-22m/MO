function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-250px";
    } else {
        sidebar.style.right = "0px";
    }
}

function showLoginMessage() {
    alert("هذا الموقع تحت التجريب.");
}
