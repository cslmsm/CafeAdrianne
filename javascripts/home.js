document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("goToHome");

    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("goToProducts");

    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            window.location.href = "products.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("goToGallery");
  
    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            window.location.href = "gallery.html";
        });
    }
  });

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("arrowToProducts");

    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            window.location.href = "products.html";
        });
    }
});

