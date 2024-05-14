document.getElementById('searchIcon').addEventListener('click', function() {
    const input = document.getElementById('searchInput');
    if (input.style.display === 'none') {
        input.style.display = 'inline-block'; // Muestra el input
        input.style.width = '140px'; // Establece un ancho para el input
        input.focus(); // Enfoca el input para que el usuario pueda empezar a escribir
    } else {
        input.style.display = 'none'; // Oculta el input
        input.style.width = '0'; // Reduce el ancho del input a 0
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const imgs = document.querySelectorAll('.additional-images img');
    let index = 0;

    function displayNextImage() {
        if (index >= imgs.length) return; // Detener cuando todas las imágenes se hayan mostrado
        imgs[index].classList.add('appear');
        index++;
        setTimeout(displayNextImage, 1000); // Esperar 1 segundo antes de mostrar la siguiente imagen
    }

    displayNextImage(); // Iniciar la función al cargar el documento
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-slider img.media");
    let currentIndex = 0;

    function rotateImages() {
        images.forEach((img, index) => {
            img.classList.remove("active");
        });
        images[currentIndex].classList.add("active");
        currentIndex = (currentIndex + 1) % images.length;
    }

    rotateImages(); // Activa la primera imagen al cargar
    setInterval(rotateImages, 3000); // Cambiar cada 3 segundos
});


function showVideo(videoNumber) {
    const videos = document.querySelectorAll('.video-container video');
    const descriptions = document.querySelectorAll('.video-container p');

    // Oculta todos los videos y descripciones primero
    videos.forEach((video, index) => {
        video.style.display = 'none'; // Oculta el video
        descriptions[index].style.display = 'none'; // Oculta la descripción correspondiente
    });

    // Encuentra el video y la descripción específicos basados en videoNumber
    const selectedVideo = document.getElementById('video' + videoNumber);
    const selectedDescription = document.getElementById('videoDesc' + videoNumber);

    // Muestra el video seleccionado y su descripción
    selectedVideo.style.display = 'block';
    selectedDescription.style.display = 'block';
}



// Opcional: mostrar un video por defecto al cargar
document.addEventListener('DOMContentLoaded', function () {
    showVideo(1); // Mostrar el primer video por defecto
});



