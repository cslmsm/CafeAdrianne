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

const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImage');

  function openModal(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
  }

  function closeModal() {
    modal.style.display = "none";
  }

  modalImg.addEventListener('wheel', function(e) {
    e.preventDefault();
    let scale = Number(modalImg.style.transform.replace(/[^0-9\.]/g, '')) || 1;
    if (e.deltaY < 0) {
      scale += 0.1;
    } else {
      scale = Math.max(1, scale - 0.1);
    }
    modalImg.style.transform = `scale(${scale})`;
  });

  // Close when clicking the "X"
  document.querySelector('.close').addEventListener('click', closeModal);