fetch("http://localhost:4000/classes")
    .then(function (resp) {
        return resp.json();
    })
    .then(displayClasses)

function displayClasses() {
    const classes = document.querySelector("#card");

    classes.innerHTML = article.map(function (p) {
        console.log(p);
        return ` <article id="card-${p.id}" class="class -${p.classCategory}">
        <div class="class__hero">
            <p class="class__subject">${p.classCategory}</p>
        </div>
        <div class="class__info">
            <a class="class__title">${p.classTitle}</a>
            <h2 class="class__subtitle">${p.classDesc}</h2>
            <p class="class__info">${p.classCredits}</p>
        </div>
    </article>`
    }).join("");
}