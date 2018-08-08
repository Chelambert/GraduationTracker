const btn = document.querySelector("button");
const classCategory = document.querySelector("#classCategory");
const classDesc = document.querySelector("#classDesc");
const classTitle = document.querySelector("#classTitle");
const classCredit = document.querySelector("#classCredit");





const structure = {
    category: "",
    desc: "",
    title: "",
    credits: ""
}





btn.addEventListener("click", function (e) {
    e.preventDefault();

    structure.category = classCategory.value || "Major";
    structure.desc = classDesc.value || "In this class, we will learn how to build websites with HTML, CSS, and Javascript.";
    structure.title = classTitle.value || "Website Development";
    structure.credits = classCredit.value || "3";

    console.log(structure);
});