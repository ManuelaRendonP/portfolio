let projectsList = []
let skillsList = []

projectsList.push({
    name: 'QR code component',
    description: 'This is a solution to the QR code component challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
    image: 'assets/images/Screenshot Desktop.png',
    link: 'https://qr-code-component-manuela-rendon.netlify.app/'
})

function renderProjects(arr) {
    for (project of arr ){
        let card = `
        <div class="col-md-4">
            <div class="card">
                <img src="${project.image}" class="card-img-top" alt="${project.name}">
                    <div class="card-body">
                        <h5 class="card-title">${project.name}</h5>
                        <p class="card-text">${project.description}</p>
                        <a href="${project.link}" class="btn btn-sm btn-go">Project website</a>
                    </div>
            </div>
        </div>`
        document.querySelector('.container-cards').insertAdjacentHTML('beforeend', card)
    }
}

skillsList.push({
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
})

skillsList.push({
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
    link: 'https://developer.mozilla.org/es/docs/Web/CSS'
})

skillsList.push({
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png',
    link: 'https://getbootstrap.com/'
})

skillsList.push({
    image: 'https://static.javatpoint.com/images/javascript/javascript_logo.png',
    link: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
})

skillsList.push({
    image: 'https://i.blogs.es/8d2420/650_1000_java/1366_2000.png',
    link: 'https://www.java.com/es/'
})

skillsList.push({
    image: 'https://upload.wikimedia.org/wikipedia/en/6/68/Oracle_SQL_Developer_logo.svg',
    link: 'https://www.oracle.com/database/sqldeveloper/'
})

skillsList.push({
    image: 'https://g.foolcdn.com/art/companylogos/square/mdb.png',
    link: 'https://www.mongodb.com/'
})

skillsList.push({
    image: 'https://www.pragimtech.com/wp-content/uploads/2020/08/golang.png',
    link: 'https://go.dev/'
})

skillsList.push({
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
    link: 'https://www.python.org/'
})

skillsList.push({
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1200px-Microsoft_.NET_logo.svg.png',
    link: 'https://dotnet.microsoft.com/es-es/learn/dotnet/what-is-dotnet'
})

skillsList.push({
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
    link: 'https://www.postgresql.org/'
})

function renderSkills(arr) {
    for (skill of arr) {
        let skillCard = `
            <div class="col-md-3">
                <div class="card-skill">
                    <a href="${skill.link}">
                        <img src="${skill.image}" class="card-img-skill">
                    </a>
                </div>
            </div>`
            document.querySelector('.skill-cards').insertAdjacentHTML('beforeend', skillCard)
    }
}

renderProjects(projectsList)
renderSkills(skillsList)