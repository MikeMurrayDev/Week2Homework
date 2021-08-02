let position = 0;

function previousImage() {
    const slider = document.getElementById('sliderTwo');
    if (position < 0) {
        position += 612;
    }
    slider.style.transform = `translateX(${position}px)`;
}

function nextImage() {
const slider = document.getElementById('sliderTwo');
    if (position > -1224) {
        position -= 612;
    }
    slider.style.transform = `translateX(${position}px)`;
}