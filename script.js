document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("loveBtn");
    const message = document.getElementById("loveMessage");

    btn.addEventListener("click", function () {
        message.style.display = "block";
    });

});
