//Vertical Scrolling ONLY  ✅
//Three buttons  + or - (to increase/decrease the speed) & then restart  ✅
//Funcionality to pause when hovered over the div and resumes when taken out. ✅

let scrollSpeed = 1;
let scrollInterval;

function startScrolling() {
  scrollInterval = setInterval(() => {
    document.getElementById("vScroll").scrollTop += scrollSpeed;
  }, 16); 
}

function pauseScrolling() {
  clearInterval(scrollInterval);
}

function resumeScrolling() {
  startScrolling();
}

setTimeout(startScrolling, 1200);
// setTimeout(scrollVertically, 1200);

let verseData = [];

async function fetchVerse() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/gita/gita/refs/heads/main/data/verse.json"
    );
    verseData = await response.json();
    console.log(verseData);
    showVerse();
  } catch (error) {
    console.error("Error Fetching the data");
  }
}

function showVerse() {
  let content = "";
  verseData.forEach(verse => {
    content += verse.text + "<br>";
  });
  document.querySelector(".container .scroll-section #verse").innerHTML = content;
}

fetchVerse();

//FIX : when negative, the auto-scroll get reversed
function changeSpeed(n) {
  scrollSpeed += n;
}

function verseRestart() {
  document.querySelector(".container .scroll-section #verse").innerHTML = ""
  fetchVerse().then(() => {
    showVerse();
    console.log("Restarted");
  });
}


//Commented code :
//JS in-built funxtion for smoother scolling experience
//causing "[Violation] 'requestAnimationFrame' handler took 846ms"
// function scrollVertically() {
//   const vScroll = document.getElementById("vScroll");
//   vScroll.scrollTop += scrollSpeed;
  
//   requestAnimationFrame(scrollVertically);
// }

// function scrollHorizontally() {
//   const hScroll = document.getElementById("hScroll");
//   hScroll.scrollLeft += scrollSpeed;
//   requestAnimationFrame(scrollHorizontally);
// }

// setTimeout(scrollVertically, 1200);

// let verse = document.querySelector(".container .scroll-section #verse");

// function showVerse() {
//   // document.querySelector(".container .scroll-section #verse").innerHTML = verseData[0].text;
//   for (let i = 0; i < verseData.length; i++) {
//     document.querySelector(".container .scroll-section #verse").innerHTML +=
//       verseData[i].text + "<br>"; //br added for readblity
//   }
// }