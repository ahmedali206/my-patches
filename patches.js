console.log("تم تحميل الملف بنجاح!");

document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector("h1");
    if (element) {
        element.style.color = "red"; // تغيير لون العنوان إلى أحمر
    }
});
