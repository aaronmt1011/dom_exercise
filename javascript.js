const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'All right, Pinhead. Your time is up!'
container.appendChild(content);

const pinhead = document.createElement('p');
pinhead.style.cssText = 'color: red;';
pinhead.textContent = "Who you callin' Pinhead? I wanna be Dirty Dan!";
container.appendChild(pinhead);

const dirtyDan = document.createElement('h3');
dirtyDan.style.cssText = 'color: blue;';
dirtyDan.textContent = "What makes you think you can be Dirty Dan?";
container.appendChild(dirtyDan);

const dirtyDiv = document.createElement('div');
dirtyDiv. setAttribute('style', 'border: black; background: pink;');

let dirtyH2 = document.createElement('h2');
dirtyH2.textContent = "I'm Dirty.";

let dirtyh1 = document.createElement('h1');
dirtyh1.textContent = "I'd say I'm Dirty Dan!";

dirtyDiv.appendChild(dirtyH2);
dirtyDiv.appendChild(dirtyh1);

container.appendChild(dirtyDiv);