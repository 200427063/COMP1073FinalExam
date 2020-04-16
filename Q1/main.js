//Javascript document.

let main = document.querySelector('main');
let submit = document.querySelector('input[type="submit"]');
let body = document.querySelector('body');
let name = document.querySelector('input[type="text"]');
let para = document.createElement('p');

submit.addEventListener('click', function(e) {
  let personName = name.value;
  para.innerHTML = 'Hey there ' + name.value + '! Thanks for stopping by!';
  main.appendChild(para);
  body.setAttribute('class', 'meow');
  console.log(para.innerHTML);
 event.preventDefault();
});
