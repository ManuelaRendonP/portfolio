async function fetchProjects() {
    try {
        const response = await fetch('./data/projects.json');
        if (!response.ok) {
            throw new Error('Error al obtener los datos del archivo JSON');
        }
        const data = await response.json();
        renderProjects(data);
    } catch (error) {
        console.error(error);
    }
}

async function fetchSkills() {
    try {
        const response = await fetch('./data/skills.json');
        if (!response.ok) {
            throw new Error('Error al obtener los datos del archivo JSON');
        }
        const data = await response.json();
        renderSkills(data);
    } catch (error) {
        console.error(error);
    }
}

function renderProjects(arr) {
    for (const project of arr) {
        let card = `
        <a href="${project.link}" class="card-link">
            <figure class="card">
                <img src="${project.image}" class="card__image" />
                <figcaption class="card__body">
                    <h2 class="card__title">${project.name}</h2>
                    <p class="card__description">${project.description}</p>
                </figcaption>
            </figure>
        </a>`
        document.querySelector('.card-projects').insertAdjacentHTML('beforeend', card)
    }
}

function renderSkills(arr) {
    for (const skill of arr) {
        let skillCard = `
        <a href="${skill.link}" class="card-link">
            <figure class="card-skill">
                <img src="${skill.image}" class="card__image-skill" />
            </figure>
        </a>`
        document.querySelector('.skill-cards').insertAdjacentHTML('beforeend', skillCard)
    }
}

fetchSkills();
fetchProjects();

function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('open');
}
