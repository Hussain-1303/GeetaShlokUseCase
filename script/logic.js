//Vertical Scrolling ONLY  ✅
//Three buttons  + or - (to increase/decrease the speed) & then restart  ✅
//Funcionality to pause when hovered over the div and resumes when taken out.

let scrollSpeed = 1;

function scrollVertically() {
  const vScroll = document.getElementById("vScroll");
  vScroll.scrollTop += scrollSpeed;
  //JS in-built funxtion for smoother scolling experience
  requestAnimationFrame(scrollVertically);
}

// function scrollHorizontally() {
//   const hScroll = document.getElementById("hScroll");
//   hScroll.scrollLeft += scrollSpeed;
//   requestAnimationFrame(scrollHorizontally);
// }

setTimeout(scrollVertically, 1200);

let verse = document.querySelector(".container .scroll-section #verse");
let verseData = [];

async function fetchVerse() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/gita/gita/refs/heads/main/data/verse.json");
    verseData = await response.json();
    console.log(verseData);
  } catch (error) {
    console.error('Error Fetching the data');
  }
}

fetchVerse();

//FIX : when negative, the auto-scroll get reversed
function changeSpeed(n) {
  scrollSpeed = (scrollSpeed + n);
}

function verseRestart() {
  fetchVerse();
  console.log('Restarted');
}
