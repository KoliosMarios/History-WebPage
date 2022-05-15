let presentation = document.getElementById("presentation");
const submitBtn = document.getElementById("submit");

function getTodaysEvents() {
  fetch("https://history.muffinlabs.com/date")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      presentation.innerHTML = "";
      const events = data.data.Events;
      for (let i = 0; i < events.length; i++) {
        let li = document.createElement("li");
        li.textContent = `In year ${events[i].year}: ${events[i].text}`;
        presentation.appendChild(li);
      }
    })
    .catch((error) => {
      alert("ERROR!");
    });
}

function getTodaysBirths() {
  fetch("https://history.muffinlabs.com/date")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      presentation.innerHTML = "";
      const births = data.data.Births;
      for (let i = 0; i < births.length; i++) {
        let li = document.createElement("li");
        li.textContent = `In year ${births[i].year}: ${births[i].text}`;
        presentation.appendChild(li);
      }
    })
    .catch((error) => {
      alert("ERROR!");
    });
}

function getTodaysDeaths() {
  fetch("https://history.muffinlabs.com/date")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      presentation.innerHTML = "";
      const deaths = data.data.Deaths;
      for (let i = 0; i < deaths.length; i++) {
        let li = document.createElement("li");
        li.textContent = `In year ${deaths[i].year}: ${deaths[i].text}`;
        presentation.appendChild(li);
      }
    })
    .catch((error) => {
      alert("ERROR!");
    });
}

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