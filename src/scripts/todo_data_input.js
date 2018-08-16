const btn = document.querySelector("button");
const todoTitle = document.querySelector("#todoTitle");
const todoDesc = document.querySelector("#todoDesc");
const todoCategory = document.querySelector("#todoCategory");
const todoDue = document.querySelector("#todoDue");
const todoCompleted = document.querySelector("#todoCompleted");

const frm = document.querySelector("form");

const submit = true;

const BASEURL = "http://localhost:4000/todos"

const structure = {
    title: "",
    desc: "",
    category: "",
    dueDate: "",
    completed: ""
}





btn.addEventListener("click", function (e) {
    e.preventDefault();

    // create data structure
    if( todoTitle.value == '' ) {
        // add logic here to highlight the form filed specific to the message
        alert('fill out first name');
        todoTitle.classList.add('err');
        return;
    }

    if( todoDesc.value == '' ){
        alert('fill out description');
        todoDesc.classList.add('err');
        return;
    }

    if( todoCategory.value == '' ){
        alert('please select a category');
        todoCategory.classList.add('err');
        return;
    }

    if( todoDue.value == '' ){
        alert('enter a date');
        todoDue.classList.add('err');
        return;
    }


    structure.title = todoTitle.value;
    structure.desc = todoDesc.value;
    structure.category = todoCategory.value;
    structure.dueDate = todoDue.value;
    structure.completed = todoCompleted.value == 'no' ? false : true;

    console.log(JSON.stringify(structure));

    // send data to endpoint
    fetch(BASEURL, {
        method: "POST",
        body: JSON.stringify(structure), // body data type must match "Content-Type" header
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        }
    })
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            console.log(data);

            // upon success show success message
            var success = document.getElementById("success");
            success.classList.remove("hide");

            // and clear form
            todoTitle.classList.remove("err");
            todoDesc.classList.remove("err");
            todoCategory.classList.remove("err");
            todoDue.classList.remove("err");

            frm.reset();

        })
        .catch(function (err) {

            // upon fail show fail message
            var fail = document.getElementById("fail");
            fail.classList.remove("hide");

            console.log(err)

        })


});