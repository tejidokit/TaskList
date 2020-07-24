
//###################### ADDING ##############################
const addForm = document.querySelector('.add');
// const searchForm = document.querySelector('#search_input');
// const addInputForm = document.querySelector('#add');


const list = document.querySelector('.todos');

const generateTemplate = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fas fa-trash delete"></i>
    </li>
    `;

    list.innerHTML += html;
};

// searchForm.addEventListener("input", () => {
//     console.log(searchForm.value);
// })

addForm.addEventListener('submit', e => {

    e.preventDefault();
    
    const todo = addForm.elements['add_todo_input'].value.trim();
    // const todo = addInputForm.value;
    

    //### disable blank inputs ###

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

//##################### DELETING ##########################

list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

});

// ##################### FILTERING #########################

//### grabbing input from form field @ form class="search"

const search = document.querySelector('.search input');
