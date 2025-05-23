// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeGlyphs = document.querySelectorAll('.like-glyph')
const errorBanner = document.querySelector('#modal')
const errorBannerMsg = document.querySelector('#modal-message')

const toggleLike = (target) => {
  mimicServerCall()
    .then(res => {
      if (res === 'Pretend remote server notified of action!') {
        if (target.textContent === FULL_HEART) {
          target.textContent = EMPTY_HEART
          target.classList.remove('activated-heart')
        } else if (target.textContent === EMPTY_HEART) {
          target.textContent = FULL_HEART
          target.classList.add('activated-heart')
        } else {
          target.textContent = FULL_HEART
          target.classList.add('activated-heart')
        }
      }
    })
    .catch(() => {
      errorBanner.classList.remove('hidden')
      errorBannerMsg.textContent = 'Random server error. Try again.'
      setTimeout(() => errorBanner.classList.add('hidden'), "3000")
    })
}

likeGlyphs.forEach(glyph => glyph.addEventListener('click', (e) => toggleLike(glyph)))





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
