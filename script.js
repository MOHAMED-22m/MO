// التأكد من أن الكود يعمل بعد تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myButton").addEventListener("click", function () {
        document.getElementById("message").innerText = "شكرًا لزيارتك موقعي!";
    });
});
