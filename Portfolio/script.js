const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// Animation of work like Web Development
const typedElement = document.getElementById('text');

// Define your strings or sentences
const strings = ["Web Developer", "Frontend Developer", "Backend Developer"];

// Initialize Typed.js
const options = {
  strings: strings,
  typeSpeed: 100,      
  backSpeed: 100,      
  backDelay: 1000,     
  loop: true           
};

const typed = new Typed(typedElement, options);
