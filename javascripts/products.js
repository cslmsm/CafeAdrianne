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

const image = document.getElementById('scrollImage');

    window.addEventListener('scroll', () => {
      // Get scroll percentage within the image's height
      const scrollY = window.scrollY;
      const offsetTop = image.offsetTop;
      const height = image.offsetHeight;

      if (scrollY >= offsetTop && scrollY <= offsetTop + height) {
        const progress = (scrollY - offsetTop) / height;
        image.style.transform = `translateY(${progress * -50}px)`;
      }
    });