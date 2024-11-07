const scrollSpeed = 1;

function scrollVertically() {
  const vScroll = document.getElementById("vScroll");
  vScroll.scrollTop += scrollSpeed;
  //JS in-built funxtion for smoother scolling experience
  requestAnimationFrame(scrollVertically);
}

function scrollHorizontally() {
  const hScroll = document.getElementById("hScroll");
  hScroll.scrollLeft += scrollSpeed;
  requestAnimationFrame(scrollHorizontally);
}

setTimeout(scrollVertically, 1200);
setTimeout(scrollHorizontally, 1200);
