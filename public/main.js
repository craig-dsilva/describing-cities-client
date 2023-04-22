const sentenceEl = document.querySelector("#sentence");
const bodyEl = document.querySelector("body");

const getDescription = async () => {
  try {
    const res = await fetch("https://backend.cloudproject.craigdsilva.com");
    const data = await res.json();
    let sentence = data;
    sentenceEl.innerText = sentence;
    let cityName = sentence.split(" ")[0];
    bodyEl.style.backgroundImage = `url(img/${cityName}.jpg)`;
  } catch (err) {
    console.error(err);
  }
};

getDescription();
