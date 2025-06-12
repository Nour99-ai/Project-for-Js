const upper_images = document.getElementById("upper_images");
const lower_images = document.getElementById("lower_images");
const middle_space = document.getElementById("middle_space");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");
const image7 = document.getElementById("image7");
const image8 = document.getElementById("image8");
const middle_image = document.getElementById("middle_image");
const image1_div = document.getElementById("image1_div");
const image2_div = document.getElementById("image2_div");
const image3_div = document.getElementById("image3_div");
const image4_div = document.getElementById("image4_div");
const image5_div = document.getElementById("image5_div");
const image6_div = document.getElementById("image6_div");
const image7_div = document.getElementById("image7_div");
const image8_div = document.getElementById("image8_div");
const images = [image1, image2, image3, image4, image5, image6, image7, image8];
const divs = [image1_div, image2_div, image3_div, image4_div, image5_div, image6_div, image7_div, image8_div];

// Add click and mousemove events to all images
images.forEach(img => {
    img.addEventListener('click', () => {
        middle_image.src = img.src;
        middle_image.style.backgroundColor = img.style.backgroundColor;
        middle_image.style.boxShadow = window.getComputedStyle(img).boxShadow;
        middle_image.style.filter = window.getComputedStyle(img).filter;
        middle_image.classList.add('active');
    });
    img.addEventListener('mousemove', () => {
        middle_image.src = img.src;
        middle_image.style.backgroundColor = img.style.backgroundColor;
        middle_image.style.boxShadow = window.getComputedStyle(img).boxShadow;
        middle_image.style.filter = window.getComputedStyle(img).filter;
        middle_image.classList.add('active');
    });
});

// Reset middle image when mouse leaves any image
images.forEach(img => {
    img.addEventListener('mouseleave', () => {
        middle_image.classList.remove('active');
        middle_image.style.boxShadow = 'none';
        middle_image.style.filter = 'none';
    });
});
