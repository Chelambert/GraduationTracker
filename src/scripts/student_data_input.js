const btn = document.querySelector("button");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const gpa = document.querySelector("#gpa");



const structure = {
    name: {
        first: "",
        last: ""
    },
    profile: {
        gpa: ""
    }
}







btn.addEventListener("click", function (e) {
    e.preventDefault();

    structure.name.first = fname.value || "smokey";
    structure.name.last = lname.value || "the bear";
    structure.profile.gpa = gpa.value || "4.0";

    console.log(structure);
});
