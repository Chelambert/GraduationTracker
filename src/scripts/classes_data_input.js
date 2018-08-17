const btn = document.querySelector("button");
const classCategory = document.querySelector("#classCategory");
const classDesc = document.querySelector("#classDesc");
const classTitle = document.querySelector("#classTitle");
const classCredit = document.querySelector("#classCredit");

const frm = document.querySelector("form");

const submit = true;

const BASEURL = "http://localhost:4000/classes"




const structure = {
    category: "",
    desc: "",
    title: "",
    credits: ""
}


btn.addEventListener("click", function (e) {
    e.preventDefault();

    //create data structure
    if(classCategory.value == 'select'){
        alert('select a class category');
        classCategory.classList.add('err');
        return;
    }
    if(classTitle.value == ''){
        alert('fill out title');
        classTitle.classList.add('err');
        return;
    }
    if(classCredit.value == ''){
        alert('enter credits');
        classCredit.classList.add('err');
        return;
    }

    structure.category = classCategory.value;
    structure.desc = classDesc.value;
    structure.title = classTitle.value;
    structure.credits = classCredit.value;

    console.log(JSON.stringify(structure));

    //send data to endpoint
    fetch(BASEURL, {
        method: "POST",
        body: JSON.stringify(structure),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    })
        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            console.log(data);

            //upon success show success message
            var success = document.getElementById("success");
            success.classList.remove("hide");

            //and clear form
            classCategory.classList.remove("err");
            classDesc.classList.remove("err");
            classTitle.classList.remove("err");
            classCredit.classList.remove("err");

            frm.reset();

        })
        .catch(function (err) {

            //upon fail show fail msg
            var fail = document.getElementById("fail");
            fail.classList.remove("hide");

            console.log(err);
        })
});