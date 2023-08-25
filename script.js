import data from './data.js';
import Dog from './Dog.js';
import {updateDog, update} from './update.js';


const mainEl = document.getElementById('main');
const dislikeEl = document.getElementById('dislike');
const likeEl = document.getElementById('like');
const reloadEl = document.getElementById('reload');

const dogs = data.map(dog => new Dog(dog));


updateDog(dogs, mainEl);
likeEl.addEventListener('click', () => update(true, dogs, mainEl, likeEl));
dislikeEl.addEventListener('click', () => update(false, dogs, mainEl, dislikeEl));
reloadEl.addEventListener('click', () => location.reload());