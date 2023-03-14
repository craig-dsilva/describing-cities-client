const sentence = document.querySelector("#sentence");
const url = "https://35.177.128.2";

const getDescription = async () => {
  try {
    const res = await fetch(`${url}:5000`);
    const data = await res.json();
    sentence.innerText = data;
  } catch (err) {
    console.error(err);
  }
};

getDescription();
