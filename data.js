const data1 = [
    {
        imgSrc: './img/Snake-game.png',
        heading: 'Snake',
        buttonText: 'Play',
        link: 'https://itzmk678.github.io/snake-game/'
    },
    {
        imgSrc: './img/Brick-breaker.png',
        heading: 'Brick-Breaker',
        buttonText: 'Play',
        link: 'http://itzmk678.github.io/brick-breaker/'
    }
];

const data2 = [
    {
        imgSrc: './img/Samsung.png',
        heading: 'Samsung Web',
        buttonText: 'View',
        link: 'https://itzmk678.github.io/samsung/'
    },
    {
        imgSrc: './img/Tourism.png',
        heading: 'Tourism Web',
        buttonText: 'View',
        link: 'https://itzmk678.github.io/tourist/'
    },
    {
        imgSrc: './img/Music-card.png',
        heading: 'Music-Card',
        buttonText: 'Listen',
        link: 'https://itzmk678.github.io/music-player/'
    }
];

// Run JavaScript only after the DOM is fully loaded
window.onload = function () {
    const container1 = document.getElementById("card-container1");
    const container2 = document.getElementById("card-container2");

    if (container1) {
        container1.innerHTML = data1.map(val => `
            <div class="card">
                <img src="${val.imgSrc}" alt="${val.heading}">
                <h3>${val.heading}</h3>
                <button onclick="window.open('${val.link}', '_blank')">${val.buttonText}</button>
            </div>
        `).join('');
    }

    if (container2) {
        container2.innerHTML = data2.map(val => `
            <div class="card">
                <img src="${val.imgSrc}" alt="${val.heading}">
                <h3>${val.heading}</h3>
                <button onclick="window.open('${val.link}', '_blank')">${val.buttonText}</button>
            </div>
        `).join('');
    }
};


