function insertDataInHtml(data) {
  // grabbing three (daily, weekly, monthly) buttons
  const timeFramesInHtml = document
    .querySelector("#time-frames")
    .querySelectorAll("button");
  // grabbing all cards
  const allCards = document.querySelectorAll(".card");

  // on initial load shows data of daily
  // for each card section grab heading h1 for its dataset which matches title in json data for getting desired object
  // grabbing two spans for displaying hours and last week data
  allCards.forEach((card) => {
    const headingHtml = card.querySelector("h1");
    const hoursHtml = card.querySelector(".hours").querySelector("span");
    const previousHtml = card.querySelector(".previous").querySelector("span");
    let currentObj = data.filter(
      (i) => i.title === headingHtml.dataset.heading.trim()
    );
    hoursHtml.innerHTML = currentObj[0].timeframes.daily.current;
    previousHtml.innerHTML = currentObj[0].timeframes.daily.previous;
  });

  // onclicking (daily, weekly, monthly) button
  // adding text-neutral-100 class to currently clicked and removing same class from other btns
  timeFramesInHtml.forEach((element) => {
    element.addEventListener("click", (e) => {
      element.classList.toggle("text-clr-desaturated-blue");
      element.classList.toggle("text-neutral-100");
      timeFramesInHtml.forEach((i) => {
        if (i !== e.target) {
          if (i.classList.contains("text-neutral-100")) {
            i.classList.remove("text-neutral-100");
            i.classList.add("text-clr-desaturated-blue");
          }
        }
      });
      // for each card section grab heading h1 for its dataset which matches title in json data for getting desired object
      // grabbing two spans for displaying hours and last week data
      allCards.forEach((card) => {
        const headingHtml = card.querySelector("h1");
        const hoursHtml = card.querySelector(".hours").querySelector("span");
        const previousHtml = card
          .querySelector(".previous")
          .querySelector("span");
        let currentObj = data.filter(
          (i) => i.title === headingHtml.dataset.heading.trim()
        );
        hoursHtml.innerHTML =
          currentObj[0].timeframes[element.dataset.timeframe].current;
        previousHtml.innerHTML =
          currentObj[0].timeframes[element.dataset.timeframe].previous;
      });
    });
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

window.onload = function () {
  const url = "./data.json";
  fetchData(url);
};
