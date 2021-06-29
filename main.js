// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorstates = {
  "pink": "",
  "" : "pink"
}



// Your JavaScript code goes here!
const articleHearts = document.querySelectorAll(".like-glyph");

const modal = document.querySelector("#modal")
modal.setAttribute("class", "hidden")
console.log(modal);

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall("bogusUrl")
   //OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage){
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}


for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}