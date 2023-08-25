import Dog from './Dog.js';

let currentDog = '';

function updateDog(dogArray, el) {
currentDog = dogArray.shift();
if(currentDog) {
  el.innerHTML = currentDog.getHTML();
} else {
  el.innerHTML = `<div class="dog-message"><p>no more dogs</p></div>`;
}
}


function updateStatus(choice, dog, el) {
  if(dog) {
    dog.setMatchStatus(choice);
    el.innerHTML = dog.showStatus();
  }
}

function update(choice, dogs, el, btnEl) {
updateStatus(choice, currentDog, el);
btnEl.disabled = true;
setTimeout(function() {
  updateDog(dogs, el);
  btnEl.disabled = false;
}, 2000);
}

export {updateDog, update}