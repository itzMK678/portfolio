

const cardData = [
    {
        imgSrc: './img/cara web (2).png',
        heading: 'E-commerce website',
        buttonText: 'Visit Site',
        link: 'https://itzmk678.github.io/ecommerce-web/'
    },
    {
        imgSrc: './img/McDonald (2).png',
        heading: 'McDonald',
        buttonText: 'Visit site',
        link: 'https://itzmk678.github.io/mcdonald/'
    },
    {
        imgSrc: './img/flappy.png',
        heading: 'Flappy Bird',
        buttonText: 'Play',
        link: 'https://itzmk678.github.io/flappy-bird/'
    },
 
];



// Get container
const container = document.getElementById('card-container');

// Map through the array to generate cards
container.innerHTML = cardData.map(data => `
    <div class="card">
        <img src="${data.imgSrc}" alt="${data.heading}">
        <h3>${data.heading}</h3>
        <button onclick="window.open('${data.link}', '_blank')">${data.buttonText}</button>
    </div>
`).join('');

const bars = document.querySelector(".bars");
const options = document.querySelector(".options");

if (bars && options) {
    bars.addEventListener("click", function () {
        console.log("clicked"); // Debugging log
        options.classList.toggle("show"); // Toggle menu visibility
    });
} else {
    console.error("Element not found!");
}
