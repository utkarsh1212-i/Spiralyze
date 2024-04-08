// function toggleMenu() {
//     var links = document.querySelector('.links');
//     var contactInfo = document.querySelector('div[style="font-weight: bold;"]');
//     var hamburgerBtn = document.querySelector('.hamburger-btn');
//     var crossBtn = document.querySelector('.cross-btn');

//     links.classList.toggle('show');
//     contactInfo.classList.toggle('show');
//     hamburgerBtn.classList.toggle('active');
//     crossBtn.classList.toggle('active');
// }
function toggleMenu(){
    var links = document.querySelector('.linksection');
    var contactInfo = document.querySelector('div[style="font-weight: bold;"]');
    links.classList.toggle('show');
    contactInfo.classList.toggle('show');
}

const playIcon = document.querySelector('.playbtnclass');
const videoPopup = document.querySelector('#videoPopup');
const closeBtn = document.querySelector('.close-btn');
const video = document.querySelector('video');

// Add event listener to play icon
playIcon.addEventListener('click', () => {
    // Show the video popup
    console.log('clicked in play')
    videoPopup.style.display = 'block';
    // Play the video
    video.play();
});

// Add event listener to close button
closeBtn.addEventListener('click', () => {
    // Hide the video popup
    videoPopup.style.display = 'none';
    // Pause the video
    video.pause();
});



document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    console.log(form)

    form.addEventListener('submit', function(event) {
        // event.preventDefault(); // Prevent form submission to check validation

        const requiredFields = form.querySelectorAll(' .form__group [required]');
        console.log(requiredFields , 'required')
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('error');
                const label = field.nextElementSibling;
                if (label.classList.contains('form__label')) {
                    label.classList.add('error');
                }
            } else {
                field.classList.remove('error');
                const label = field.nextElementSibling;
                if (label.classList.contains('form__label')) {
                    label.classList.remove('error');
                }
            }
        });

        // Check if any required field is empty
        const isEmpty = Array.from(requiredFields).some(field => !field.value.trim());
        
        if (!isEmpty) {
            // Submit the form if all required fields are filled
            form.submit();
        }
    });
});
//caraousel code
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.midbox');
    const prevBtn = document.getElementById('left');
    const nextBtn = document.getElementById('right');

    let currentIndex = 0;

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * slides[0].offsetWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }
});



