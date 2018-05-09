var addContainer = document.querySelector('.add');
var removeContainer = document.querySelector('.remove');
var btn = document.querySelector('.btn');

function getTask() {
    var task = prompt();
    console.log(task)
    add();
};

function add(task) {
    var task2 = document.createElement('div');
   
    var text = `  <p class="text">${task}</p>
    <button class="edit">✎</button>
    <button class="delete">✖</button>`
};


btn.addEventListener('click', getTask);