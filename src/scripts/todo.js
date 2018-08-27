fetch("http://localhost:4000/todos")
    .then(function (resp) {
        return resp.json();
    })
    .then(displayDateTodo)


function displayDateTodo(todos) {
    const past = todos.filter(function (todo) {
        //return current object (todo) if this statement is true
        return dateFns.isPast(todo.dueDate);
    });
    const present = todos.filter(function (todo) {
        return dateFns.isToday(todo.dueDate);
    });
    const future = todos.filter(function (todo) {
        return dateFns.isFuture(todo.dueDate);
    });

    const presentDisplay = document.querySelector("#present");
    const pastDisplay = document.querySelector("#past");
    const futureDisplay = document.querySelector("#future");
    console.log(past);

    pastDisplay.innerHTML = past.map(function (p) {
        console.log(p);
        //return a new string
        return `<div class="todo-detail ${p.category}">
            <a href="#" class="todo-detail__title">${p.title}</a>
            <span class="${p.type}">${p.type}</span>
            <p class="todo-detail__info">${p.desc}</p>
            <p class="todo-detail__info">${p.dueDate}</p>
        </div>`
    }).join("");

    futureDisplay.innerHTML = future.map(function (f){
        return `<div class="todo-detail ${f.category}">
            <a href="#" class="todo-detail__title">${f.title}</a>
            <span class="${f.type}">${f.type}</span>
            <p class="todo-detail__info">${f.desc}</p>
            <p class="todo-detail__info">${f.dueDate}</p>
        </div>`
    }).join("");

    presentDisplay.innerHTML = present.map(function (p) {
        return `<div class="todo-detail ${p.category}">
            <a href="#" class="todo-detail__title">${p.title}</a>
            <span class="${p.type}">${p.type}</span>
            <p class="todo-detail__info">${p.desc}</p>
            <p class="todo-detail__info">${p.dueDate}</p>
        </div>`
    }).join("");
}
