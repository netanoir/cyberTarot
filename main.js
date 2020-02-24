window.addEventListener('DOMContentLoaded', async () => {

    const $tarotButton = document.getElementById("tarot-button");
    console.log($tarotButton)

    const URL = "https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json";
    const apiOptions = { method: "GET" };
    const response = await fetch(URL, apiOptions);
    const result = await response.json();
    console.log(result);
   

    $tarotButton.addEventListener('click', (evt) => {

        var randomCard = Math.floor(Math.random() * 60);

        var cardName = document.getElementById("name");
        var cardValue = document.getElementById("value");
        var cardFortune = document.getElementById("fortune");
        var cardLightMeaning = document.getElementById("light-meaning");
        var cardShadowMeaning = document.getElementById("shadow-meaning");

        cardName.innerHTML = result.tarot_interpretations[randomCard].name;
        cardValue.innerHTML = result.tarot_interpretations[randomCard].rank;
        cardFortune.innerHTML = result.tarot_interpretations[randomCard].fortune_telling;
        cardLightMeaning.innerHTML = result.tarot_interpretations[randomCard].meanings.light;
        cardShadowMeaning.innerHTML = result.tarot_interpretations[randomCard].meanings.shadow;

        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + r + "," + g + "," + b + ")";

        document.body.style.backgroundColor = bgColor;
    });
})