let presentation = document.getElementById("presentation");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const topic = document.getElementById("topic").value;
  fetch(`https://history.muffinlabs.com/date/${month}/${day}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      presentation.innerHTML = "";
      if (topic === "Events") {
        const topic = data.data.Events;
        for (let i = 0; i < topic.length; i++) {
          let li = document.createElement("li");
          li.textContent = `In year ${topic[i].year}: ${topic[i].text}`;
          presentation.appendChild(li);
        }
      } else if (topic === "Births") {
        const topic = data.data.Births;
        for (let i = 0; i < topic.length; i++) {
          let li = document.createElement("li");
          li.textContent = `In year ${topic[i].year}: ${topic[i].text}`;
          presentation.appendChild(li);
        }
      } else if (topic === "Deaths") {
        const topic = data.data.Deaths;
        for (let i = 0; i < topic.length; i++) {
          let li = document.createElement("li");
          li.textContent = `In year ${topic[i].year}: ${topic[i].text}`;
          presentation.appendChild(li);
        }
      }
    })
    .catch((error) => {
      alert("ERROR!");
    });
});