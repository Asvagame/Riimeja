console.log("JavaScript-tiedosto ladattu oikein");

const levels = [
    {
        mainImage: 'paakuva1.PNG',
        mainSound: 'paakuva1.mp3',
        options: [
            { image: 'kuva1_1.PNG', sound: 'kuva1_1.mp3' },
            { image: 'kuva2_1.PNG', sound: 'kuva2_1.mp3' },
            { image: 'kuva3_1.PNG', sound: 'kuva3_1.mp3' }
        ],
        correctOption: 'kuva3_1.PNG'
    },
    {
        mainImage: 'paakuva2.PNG',
        mainSound: 'paakuva2.mp3',
        options: [
            { image: 'kuva1_2.PNG', sound: 'kuva1_2.mp3' },
            { image: 'kuva2_2.PNG', sound: 'kuva2_2.mp3' },
            { image: 'kuva3_2.PNG', sound: 'kuva3_2.mp3' }
        ],
        correctOption: 'kuva2_2.PNG'
    },
    {
        mainImage: 'paakuva3.PNG',
        mainSound: 'paakuva3.mp3',
        options: [
            { image: 'kuva1_3.PNG', sound: 'kuva1_3.mp3' },
            { image: 'kuva2_3.PNG', sound: 'kuva2_3.mp3' },
            { image: 'kuva3_3.PNG', sound: 'kuva3_3.mp3' }
        ],
        correctOption: 'kuva2_3.PNG'
    },
    {
        mainImage: 'paakuva4.PNG',
        mainSound: 'paakuva4.mp3',
        options: [
            { image: 'kuva1_4.PNG', sound: 'kuva1_4.mp3' },
            { image: 'kuva2_4.PNG', sound: 'kuva2_4.mp3' },
            { image: 'kuva3_4.PNG', sound: 'kuva3_4.mp3' }
        ],
        correctOption: 'kuva1_4.PNG'
    },
    {
        mainImage: 'paakuva5.PNG',
        mainSound: 'paakuva5.mp3',
        options: [
            { image: 'kuva1_5.PNG', sound: 'kuva1_5.mp3' },
            { image: 'kuva2_5.PNG', sound: 'kuva2_5.mp3' },
            { image: 'kuva3_5.PNG', sound: 'kuva3_5.mp3' }
        ],
        correctOption: 'kuva1_5.PNG'
    },
    {
        mainImage: 'paakuva6.PNG',
        mainSound: 'paakuva6.mp3',
        options: [
            { image: 'kuva1_6.PNG', sound: 'kuva1_6.mp3' },
            { image: 'kuva2_6.PNG', sound: 'kuva2_6.mp3' },
            { image: 'kuva3_6.PNG', sound: 'kuva3_6.mp3' }
        ],
        correctOption: 'kuva2_6.PNG'
    },
    {
        mainImage: 'paakuva7.PNG',
        mainSound: 'paakuva7.mp3',
        options: [
            { image: 'kuva1_7.PNG', sound: 'kuva1_7.mp3' },
            { image: 'kuva2_7.PNG', sound: 'kuva2_7.mp3' },
            { image: 'kuva3_7.PNG', sound: 'kuva3_7.mp3' }
        ],
        correctOption: 'kuva3_7.PNG'
    },
    {
        mainImage: 'paakuva8.PNG',
        mainSound: 'paakuva8.mp3',
        options: [
            { image: 'kuva1_8.PNG', sound: 'kuva1_8.mp3' },
            { image: 'kuva2_8.PNG', sound: 'kuva2_8.mp3' },
            { image: 'kuva3_8.PNG', sound: 'kuva3_8.mp3' }
        ],
        correctOption: 'kuva1_8.PNG'
    },
    {
        mainImage: 'paakuva9.PNG',
        mainSound: 'paakuva9.mp3',
        options: [
            { image: 'kuva1_9.PNG', sound: 'kuva1_9.mp3' },
            { image: 'kuva2_9.PNG', sound: 'kuva2_9.mp3' },
            { image: 'kuva3_9.PNG', sound: 'kuva3_9.mp3' }
        ],
        correctOption: 'kuva3_9.PNG'
    },
    {
        mainImage: 'paakuva10.PNG',
        mainSound: 'paakuva10.mp3',
        options: [
            { image: 'kuva1_10.PNG', sound: 'kuva1_10.mp3' },
            { image: 'kuva2_10.PNG', sound: 'kuva2_10.mp3' },
            { image: 'kuva3_10.PNG', sound: 'kuva3_10.mp3' }
        ],
        correctOption: 'kuva2_10.PNG'
    },
    {
        mainImage: 'paakuva11.PNG',
        mainSound: 'paakuva11.mp3',
        options: [
            { image: 'kuva1_11.PNG', sound: 'kuva1_11.mp3' },
            { image: 'kuva2_11.PNG', sound: 'kuva2_11.mp3' },
            { image: 'kuva3_11.PNG', sound: 'kuva3_11.mp3' }
        ],
        correctOption: 'kuva2_11.PNG'
    },
    {
        mainImage: 'paakuva12.PNG',
        mainSound: 'paakuva12.mp3',
        options: [
            { image: 'kuva1_12.PNG', sound: 'kuva1_12.mp3' },
            { image: 'kuva2_12.PNG', sound: 'kuva2_12.mp3' },
            { image: 'kuva3_12.PNG', sound: 'kuva3_12.mp3' }
        ],
        correctOption: 'kuva1_12.PNG'
    }
]

let currentLevel = 0;
let correctAnswers = 0;
let selectedOption = null;
let mainImageAudio = null;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadLevel(level) {
    const mainImage = document.getElementById('paakuva');
    const optionImages = [
        document.getElementById('kuva1'),
        document.getElementById('kuva2'),
        document.getElementById('kuva3')
    ];
    const checkButton = document.getElementById('check-button');
    const nextButton = document.getElementById('next-button');

    checkButton.disabled = true;
    selectedOption = null;
    optionImages.forEach(img => {
        img.classList.remove('active', 'correct', 'incorrect');
    });

    mainImage.src = level.mainImage;
    mainImage.setAttribute('data-sound', level.mainSound);
    shuffle(level.options);
    optionImages.forEach((img, index) => {
        img.src = level.options[index].image;
        img.setAttribute('data-sound', level.options[index].sound);
        img.onclick = () => selectOption(img);
    });

    nextButton.style.display = 'none';

    // Lisää klikkaustapahtuma pääkuvalle
    mainImage.onclick = () => playSound('main');
}

function selectOption(img) {
    const optionImages = document.querySelectorAll('.option-image');
    optionImages.forEach(image => image.classList.remove('active'));
    img.classList.add('active');
    selectedOption = img;
    document.getElementById('check-button').disabled = false;
    playSound(img.getAttribute('src'));
}

function checkAnswer() {
    if (selectedOption) {
        const level = levels[currentLevel];
        if (selectedOption.getAttribute('src') === level.correctOption) {
            selectedOption.classList.add('correct');
            correctAnswers++;
        } else {
            selectedOption.classList.add('incorrect');
            document.querySelector(`[src="${level.correctOption}"]`).classList.add('correct');
        }
        document.getElementById('next-button').style.display = 'block';
    }
}

function nextLevel() {
    if (currentLevel < levels.length - 1) {
        currentLevel++;
        loadLevel(levels[currentLevel]);
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result-text');
    resultText.innerText = `Sait oikein ${correctAnswers} / ${levels.length} tasoa!`;
    resultContainer.style.display = 'flex';
    document.querySelector('.game-container').style.display = 'none';
}

function playAgain() {
    currentLevel = 0;
    correctAnswers = 0;
    document.getElementById('result-container').style.display = 'none';
    document.querySelector('.game-container').style.display = 'flex';
    loadLevel(levels[currentLevel]);
}

function playSound(imageType) {
    let soundSrc;
    if (imageType === 'main') {
        soundSrc = document.getElementById('paakuva').getAttribute('data-sound');
    } else {
        soundSrc = document.querySelector(`[src="${imageType}"]`).getAttribute('data-sound');
    }
    if (soundSrc) {
        if (mainImageAudio) {
            mainImageAudio.pause();
            mainImageAudio.currentTime = 0;
        }
        mainImageAudio = new Audio(soundSrc);
        mainImageAudio.play().catch(error => {
            console.error("Äänen toisto epäonnistui: ", error);
        });
    } else if (imageType !== 'main') {
        console.error("Äänen lähde puuttuu: ", imageType);
    }
}

window.onload = () => {
    loadLevel(levels[currentLevel]);
}