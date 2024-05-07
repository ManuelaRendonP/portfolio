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

async function fetchTechnologies() {
    try {
        const response = await fetch('./data/technologies.json');
        if (!response.ok) {
            throw new Error('Error al obtener los datos del archivo JSON');
        }
        const data = await response.json();
        renderTechnologies(data);
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
        <figure class="card-skill">
            <img src="${skill.image}" class="card__image-skill" />
            <p class="card__title">${skill.name}</p> 
        </figure>`
        document.querySelector('.skill-cards').insertAdjacentHTML('beforeend', skillCard)
    }
}

function renderSkillsEN(arr) {
    for (const skill of arr) {
        let skillCard = `
        <figure class="card-skill">
            <img src="${skill.image}" class="card__image-skill" />
            <p class="card__title">${skill.nameEnglish}</p> 
        </figure>`
        document.querySelector('.skill-cards').insertAdjacentHTML('beforeend', skillCard)
    }
}

function renderTechnologies(arr) {
    for (const technologie of arr) {
        let technologieCard = `
        <a href="${technologie.link}" class="card-link">
            <figure class="card-technologie">
                <img src="${technologie.image}" class="card__image-technologie" />
            </figure>
        </a>`
        document.querySelector('.technologie-cards').insertAdjacentHTML('beforeend', technologieCard)
    }
}

fetchSkills();
fetchProjects();
fetchTechnologies();

function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('open');
}
