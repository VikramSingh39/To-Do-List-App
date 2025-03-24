const input_box = document.getElementById('input_goal');
const list_container = document.getElementById('list_container');
const addtask_button = document.getElementById('addtask_button')

function addTask(){
    if(input_box.value === ''){
        alert('You must write something')
    }else{
        let li = document.createElement('li');
        li.innerHTML = input_box.value;
        list_container.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        input_box.value = ''
        saveData();
    }
}
list_container.addEventListener('click', (e)=>{
if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
    saveData();
}else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
}
});

addtask_button.addEventListener('click', ()=>{
    addTask();
})

input_box.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){ 
        addTask();  
    }
});

// Local Storage

function saveData(){
    localStorage.setItem('data', list_container.innerHTML)
}
function showData(){
    list_container.innerHTML = localStorage.getItem('data')
}
showData();