window.addEventListener('DOMContentLoaded', async() => {

    const URL = "https://rws-cards-api.herokuapp.com/api/v1/cards";
    const apiOptions = { method: "GET" };
    const response = await fetch(URL, apiOptions);
    const result = await response.json();
    const tarotButton = document.getElementById('tarot-button');

    tarotButton.addEventListener('click', (evt) => {

        // generate random tarot card on click
        var randomCard = Math.floor(Math.random() * 10);
        var cardName = document.getElementById("name");
        var cardValue = document.getElementById("value");
        var cardMeaning = document.getElementById("meaning");
        var cardReading = document.getElementById("reading");

        cardName.innerHTML = result.response.docs[randomCard].name;
        // cardValue.innerHTML = result.response.docs[randomCard].value;
        // cardMeaning.innerHTML = result.response.docs[randomCard].meaning_up;
        // cardReading.innerHTML = result.response.docs[randomCard].meaning_rev;
    
        const p = document.createElement('p');
        pp.textContent = "happy valentine's day to you too, love!";

        document.body.appendChild(p);
    
    }) 
    })