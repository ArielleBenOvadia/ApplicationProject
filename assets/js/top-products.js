document.addEventListener('DOMContentLoaded', (event) => {
    let images = ['azurebaracelet.jpg', 'black(2).png', 'black.png', 'blackbracelet.jpg', 'blue (2).png', 'blue.png',
     'bluebracelet.jpg', 'gold.png', 'green.png', 'greybracelet.jpg', 'mermaid.png', 'Picture22.png',
    'Picture44.png', 'Picture48.png', 'pink (2).png', 'pink.png', 'pinkbracelet.jpg', 'purple.png',
    'rose gold.png', 'skystonebracelet.jpg', 'whitebracelet.jpg', 'yellow.png']; // Add all your image names here.
    
    let path = './assets/img/top/';

    let imageElements = document.getElementsByClassName('random-image');

    for(let i=0; i<imageElements.length; i++) {
        let randomIndex = Math.floor(Math.random() * images.length);
        imageElements[i].src = path + images[randomIndex];

        // If you don't want to repeat images, remove the used image from the array.
        // If you want to allow repeats, comment out the line below.
        images.splice(randomIndex, 1);
    }
});
