const btn = document.querySelector("button");
const todoTitle = document.querySelector("#todoTitle");
const todoDesc = document.querySelector("#todoDesc");
const todoCategory = document.querySelector("#todoCategory");
const todoDue = document.querySelector("#todoDue");
const todoCompleted = document.querySelector("#todoCompleted");

const frm = document.querySelector("form");


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
    structure.title = todoTitle.value || "Homework Stuff";
    structure.desc = todoDesc.value || "Do a lot of work and turn it in.";
    structure.category = todoCategory.value || "Major";
    structure.dueDate = todoDue.value || "Never";
    structure.completed = todoCompleted.value || "yes";

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
            frm.reset();

        })
        .catch(function (err) {
            // upon fail show fail message
            var fail = document.getElementById("fail");
            fail.classList.remove("hide");

            console.log(err)
        })


});