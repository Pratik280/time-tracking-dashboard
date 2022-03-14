"use strict";

function insertDataInHtml(data) {
  const timeFramesInHtml = document.querySelector("#time-frames").querySelectorAll("button")
  const allCards = document.querySelectorAll(".card")
  const firstCard = document.querySelector(".card")
  timeFramesInHtml.forEach(element => {
    element.addEventListener("click", (e) => {
      allCards.forEach(card => {
        const headingHtml = card.querySelector("h1").innerText
        const hoursHtml = card.querySelector(".hours").querySelector("span")
        const previousHtml = card.querySelector(".previous").querySelector("span")
        let currentObj = data.filter(i => i.title===headingHtml)
        hoursHtml.innerHTML = currentObj[0].timeframes[element.dataset.timeframe].current
        previousHtml.innerHTML = currentObj[0].timeframes[element.dataset.timeframe].previous
      })
    })
  });
}

function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      insertDataInHtml(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

const url = "./data.json";
fetchData(url);

// TODO
// 1. onCLick btn bold white class 
// 2. initial show content for daily
