fetch("http://localhost:4000/todos")
.then(function(resp) {
    return resp.json();
})
.then(function(todos) {
    // console.log(todos)
    manipulateDate();
});


function manipulateDate(todos){
    const past = todos.filter(function(todo){
        return dateFns.isPast(todo.dueDate);
    });
    const present = todos.filter(function(todo){
        return dateFns.isToday(todo.dueDate);
    });
    const future = todos.filter(function(todo){
        return dateFns.isFuture(todo.dueDate);
    });


}

// const present = document.querySelector("present");
// const past = document.querySelector("past");
// const future = document.querySelector("future");

// present =

// function displayDate(todos){

// }