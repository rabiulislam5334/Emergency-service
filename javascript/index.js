function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// love icon count

getElement("service-box").addEventListener("click", function (e) {
  if (e.target.className.includes("fa-heart")) {
    const loveCount = getElement("loveSet").innerText;
    const count = parseInt(loveCount) + 1;
    getElement("loveSet").innerText = count;

    console.log(loveCount);
  }
});
// main call number
getElement("service-box").addEventListener("click", function (e) {
  if (e.target.className.includes("btn-call")) {
    const card = e.target.closest(".service-card");
    const cardTitle = card.querySelector(".card-title").innerText;
    const callNumber = card.querySelector(".card-title2").innerText;
    const lessPoint = getElement("point").innerText;

    if (lessPoint >= 20) {
      const lessCount = parseInt(lessPoint) - 20;
      getElement("point").innerText = lessCount;
      alert(`📞 ${cardTitle} -${callNumber} ...`);
      const newHistory = document.createElement("div");
      newHistory.innerHTML = `
      <div
              class="flex justify-between items-center my-5 bg-slate-200 p-3 rounded-xl"
            >
              <div>
                <h2 class="text-lg lg:text-base font-bold">${cardTitle}</h2>
                <h2 class="text-lg lg:text-base font-bold">${callNumber}</h2>
              </div>
              <h3 id='clock'>${showTime()}</h3>
            </div>`;
      const historyContainer = getElement("history-container");
      historyContainer.append(newHistory);
    } else {
      alert(`❎ Your Point Is no available`);
    }
  }
});

// time function
function showTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // 12-hour format
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds} ${ampm}`;
}
// clear button
getElement("btn-clear").addEventListener("click", function () {
  const container = getElement("history-container");
  container.innerHTML = "";
});
// copy number
/*getElement("service-box").addEventListener("click", function (e) {
  if (e.target.className.includes("btn-copy")) {
    const copyCount = getElement("copy-number").innerText;
    const count = parseInt(copyCount) + 1;
    getElement("copy-number").innerText = count;
  }
});*/
getElement("service-box").addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-copy")) {
    // count বাড়ানো
    const copyCount = parseInt(getElement("copy-number").innerText);
    getElement("copy-number").innerText = copyCount + 1;

    // card থেকে নম্বর নেওয়া (ধরা যাক .card-title2 তে আছে)
    const card = e.target.closest(".service-card");
    const callNumber = card.querySelector(".card-title2").innerText;

    // clipboard এ কপি
    navigator.clipboard
      .writeText(callNumber)
      .then(() => {
        console.log("Copied:", callNumber);
        alert(`✅ Number copied: ${callNumber}`);
      })
      .catch((err) => {
        console.error("Copy failed", err);
      });
  }
});
