document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const imagePreview = document.getElementById("imagePreview");

    if (fileInput.files.length > 0) {
        for (let i = 0; i < fileInput.files.length; i++) {
            const file = fileInput.files[i];
            const reader = new FileReader();

            reader.onload = function(e) {
                const imgContainer = document.createElement("div");
                imgContainer.classList.add("image-container");

                const img = document.createElement("img");
                img.src = e.target.result;
                img.alt = file.name;

                const deleteBtn = document.createElement("button");
                deleteBtn.classList.add("delete-btn");
                deleteBtn.textContent = "✖";
                deleteBtn.onclick = function() {
                    imgContainer.remove(); // Remove the image when the delete button is clicked
                };

                imgContainer.appendChild(img);
                imgContainer.appendChild(deleteBtn);
                imagePreview.appendChild(imgContainer);
            };

            reader.readAsDataURL(file);
        }
    }
});

// Modal Functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

document.getElementById("imagePreview").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "IMG") {
        modal.style.display = "block";
        modalImg.src = e.target.src;
        captionText.innerHTML = e.target.alt;
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Scroll-to-Top and Scroll-to-Bottom Functionality
const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollBottomBtn = document.getElementById("scrollBottomBtn");

// Show buttons when user scrolls down
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
        scrollBottomBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
        scrollBottomBtn.style.display = "none";
    }
};

// Scroll to the top of the page
scrollTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Scroll to the bottom of the page
scrollBottomBtn.onclick = function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
};
