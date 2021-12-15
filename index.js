const addButton = document.querySelector('#submit');
const taskName = document.querySelector('#taskName');
const list = document.querySelector('#toDoContainer');
const listItem = document.querySelectorAll('li');

addButton.addEventListener('click', function(e) {
    e.preventDefault();
    let newLi = document.createElement('li');
    newLi.innerText = taskName.value;
    list.appendChild(newLi);
    taskName.value = '';
    newLi.addEventListener('click', function(){
        newLi.style.textDecoration = 'line-through';
    })
    newLi.addEventListener('dblclick', function(){
        list.removeChild(newLi);
    })
})

// for(let li of listItem){
//     li.addEventListener('click', function(e){
//         e.preventDefault();
//         console.log(e.target);
//     })
// }

// listItem.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log(e.target)
// })