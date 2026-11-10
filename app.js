import { calculatePaces, formatPace, formatTime } from "./pace.js";

const form = document.querySelector("#pace-form");
const distance = document.querySelector("#distance");
const unit = document.querySelector("#distance-unit");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const raceOptions = [...document.querySelectorAll(".race-option")];
const error = document.querySelector("#error");
const results = document.querySelector("#results");

function update() {
  const validInputs = [distance, hours, minutes, seconds].every((input) => input.validity.valid);
  const paces = validInputs
    ? calculatePaces(distance.valueAsNumber, unit.value, hours.valueAsNumber, minutes.valueAsNumber, seconds.valueAsNumber)
    : null;

  raceOptions.forEach((option) => {
    const selected = unit.value === "km" && distance.valueAsNumber === Number(option.dataset.distance);
    option.classList.toggle("selected", selected);
    option.setAttribute("aria-pressed", String(selected));
  });

  error.hidden = Boolean(paces);
  results.hidden = !paces;
  if (!paces) {
    error.textContent = "Enter a distance greater than zero and a valid finish time greater than zero. Minutes and seconds must be between 0 and 59.";
    return;
  }
  document.querySelector("#pace-km").textContent = formatPace(paces.secondsPerKm);
  document.querySelector("#pace-mile").textContent = formatPace(paces.secondsPerMile);
  const summary = document.querySelector("#summary");
  summary.replaceChildren(
    document.createTextNode(`${distance.value} ${unit.value === "km" ? "km" : "miles"} `),
    Object.assign(document.createElement("span"), { textContent: "in" }),
    document.createTextNode(` ${formatTime(paces.totalSeconds)}`)
  );
}

raceOptions.forEach((option) => option.addEventListener("click", () => {
  distance.value = option.dataset.distance;
  unit.value = "km";
  update();
}));
form.addEventListener("input", update);
form.addEventListener("change", update);
form.addEventListener("submit", (event) => event.preventDefault());
update();
