const sentence = document.querySelector("#sentence");

const getDescription = async () => {
  try {
    const res = await fetch("http://localhost:5000");
    const data = await res.json();
    sentence.innerText = data;
  } catch (err) {
    console.error(err);
  }
};

getDescription();
