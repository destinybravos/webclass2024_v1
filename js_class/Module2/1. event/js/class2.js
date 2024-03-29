let todos = [];
let todoForm = document.forms['todo_form'];

todoForm.addEventListener('submit', function(ev_info){
    ev_info.preventDefault();
    // Declare variable to recieve the item, priority and duedate
    // let item = document.forms['todo_form']['item'].value
    let item = todoForm['item'].value;
    let priority = todoForm['priority'].value;
    let duedate = todoForm['duedate'].value;
    let duetime = todoForm['duetime'].value;

    // Create an object of the todo
    let todo = {
        item_name : item,
        priority,
        duedate,
        duetime
    }

    todos.push(todo);
    todoForm.reset();
    displayTodos();
});



function displayTodos(){
    let list = '';
    // todos.forEach((todo) => {
    //     list += `<li class="todo-list ${todo.priority}">
    //                 <h4>${todo.item_name}</h4>
    //                 <div class="duedate_display">${todo.duedate}</div>
    //             </li>`;
    // })

    for (let i = todos.length - 1; i >= 0 ; i--) {
        const todo = todos[i];
        list += `<li class="todo-list ${todo.priority}">
                     <h4>${todo.item_name}</h4>
                     <div class="duedate_display">${moment(todo.duedate + ' ' + todo.duetime).fromNow()}</div>
                 </li>`;
        
    }

    document.getElementById('list').innerHTML = list
}

displayTodos();