const dataHobbies = [{
    image: "/images/gato-5.svg",
    title: "Gato 5",
    description: "Gato 5",
    url: "/images/gato-5.svg"
}, {
    image: "/images/gato-5.svg",
    title: "Gato 5",
    description: "Gato 5",
    url: "/images/gato-5.svg"
}, {
    image: "/images/gato-5.svg",
    title: "Gato 5",
    description: "Gato 5",
    url: "/images/gato-5.svg"
}];

const dataProjects = [{
    image: "/images/gato-5.svg",
    title: "Gato 5",
    description: "Gato 5",
    url: "/images/gato-5.svg"
}, {
    image: "/images/gato-5.svg",
    title: "Gato 5",
    description: "Gato 5",
    url: "/images/gato-5.svg"
}, {
    image: "/images/gato-5.svg",
    title: "Gato 5",
    description: "Gato 5",
    url: "/images/gato-5.svg"
}];

function createCard(data, className) {
    const li = document.createElement("li");
    li.classList.add("card");
    if (className) {
        className.split(" ").forEach(cls => {
            if (cls.trim()) li.classList.add(cls.trim());
        });
    }

    li.innerHTML = `
        <img class="card-image" src="${data.image}" alt="${data.title}">
        <h2 class="card-title">${data.title}</h2>
        <p class="card-description">${data.description}</p>
        <a class="card-url" href="${data.url}">Ver más</a>
    `;
    return li;
}



function renderCard(data, id, className) {

    const container = document.getElementById(id);

    data.forEach(item => {
        container.appendChild(createCard(item, className));
    });
}
renderCard(dataProjects, "projects-list", "flex flex-col gap-4  ");
renderCard(dataHobbies, "hobbies-list", " flex flex-col gap-4 ");

