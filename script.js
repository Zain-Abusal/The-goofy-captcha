const verifyBtn = document.getElementById("verifyBtn");
const wrongBtn = document.getElementById("wrongBtn");

const answer = document.getElementById("answer");
const humanCheck = document.getElementById("humanCheck");

const message = document.getElementById("message");

const loadingArea = document.getElementById("loadingArea");
const loading = document.getElementById("loading");
const loadingText = document.getElementById("loadingText");


// Make the "real" button escape sometimes
verifyBtn.addEventListener("mouseenter", () => {

  const randomX = Math.random() * 120 - 60;
  const randomY = Math.random() * 80 - 40;

  verifyBtn.style.transform =
    `translate(${randomX}px, ${randomY}px)`;

});


// Fake verify button
wrongBtn.addEventListener("click", () => {

  message.textContent =
    "Wrong verify button. Please click the button that says DO NOT TOUCH.";

});


// Actual verification
verifyBtn.addEventListener("click", () => {

  if (answer.value !== "4") {

    message.textContent =
      "Robot detected because apparently 2 + 2 is just too hard.";

    return;
  }
  if (answer.value === "2") {
    message.textContent =
      "It appears you are a human who hasn't fully graduated kindergarden yet.";
    return;
  }

  if (!humanCheck.checked) {

    message.textContent =
      "Please confirm you are not a active running refrigerator.";

    return;
  }

  startLoading();

});


function startLoading() {

  message.textContent = "";

  loadingArea.classList.remove("hidden");

  let percent = 0;

  const interval = setInterval(() => {

    percent += Math.floor(Math.random() * 15);

    if (percent > 99) {
      percent = 99;
    }

    loading.style.width = percent + "%";

    loadingText.textContent = percent + "%";

  }, 250);


  setTimeout(() => {

    clearInterval(interval);

    loading.style.width = "100%";
    loadingText.textContent = "100%";

    message.textContent =
      "✅ Congratulations. You are probably not a refrigerator but might be a human.";

  }, 4000);

}