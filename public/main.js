const sentence = document.querySelector("#sentence");
const url = "http://18.130.69.19";

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
