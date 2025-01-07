document.addEventListener('DOMContentLoaded', function() {

    // Join Now Button Click Event
    document.getElementById('homeN').addEventListener('click', function() {
        alert('You have joined!');
    });

    // Form Submission Event
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();  // To prevent the form from actually submitting
        alert('Form submitted!');
    });

    // Image Hover Effect for Social Links
    let icons = document.querySelectorAll('.links');
    icons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            icon.style.transform = 'scale(1.1)';
        });
        icon.addEventListener('mouseout', function() {
            icon.style.transform = 'scale(1)';
        });
    });

    // Video Play on Button Click
    document.getElementById('button').addEventListener('click', function() {
        let iframe = document.querySelector('iframe');
        let videoSrc = iframe.src;
        iframe.src = videoSrc + "&autoplay=1";  // This will autoplay the video
    });

    // Scroll Event (Color change example)
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            document.getElementById('para2').style.color = 'red';  // Changes text color after scrolling
        }
    });
});
