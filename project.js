let projectData = [
    {
        image: 'img/rewild.png',
        name: 'ReWild Aarhus',
        detail: 'We had a client that needed a website to showcase their cause and build an audience. We achieved this by making an engaging website and also made a video to show who they are.',
        github: 'https://github.com/KisLajos/exam-project-rewild',
        live: 'https://exam-project-rewild-after.lajoskis.dk/',
        tags: '#group'
    },
    {
        image: 'img/kino.png',
        name: 'Klovborg Kino',
        detail: 'My first project for a client. I rebranded their logo and created an example of what a new responsive website could look like. Since they needed a solution that would work for mobile too.',
        github: 'https://github.com/carl0981/Mobile-First---Klovborg-Kino',
        live: 'mobile-first-responsive/index.html',
        tags: '#solo'
    },
    {
        image: 'img/webdoc.png',
        name: 'Web Documentary',
        detail: 'We made a WebDoc, which include a video ad for BAAA. I mainly did the directing of the video and coding of the website.',
        github: 'https://github.com/KisLajos/baaa-webdocu-group-2',
        live: 'http://web-documentary.lajoskis.dk/',
        tags: '#group'
    },
    {
        image: 'img/oldspice.png',
        name: 'Old Spice',
        detail: 'My first exam project. I rebranded the popular brand Old Spice, making it more elegant and modern to make it appear to a wider audience.',
        github: 'https://github.com/carl0981/Old-Spice---Exam-Project---1.-Semester-2021/tree/main/old-spice-code',
        live: 'old-spice-rebranding/index.html',
        tags: '#solo'
    },
    {
        image: 'img/whisky.png',
        name: 'The Whisky magazine',
        detail: 'This was the very first website that I made. The assignment was to create an online magazine of our own choosing.',
        github: 'https://github.com/carl0981/Whisky-Magazine',
        live: 'online-magazine/index.html',
        tags: '#solo'
    },
]

// creating project cards in frontend

const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container');

    projectContainer.innerHTML += `
            <div class="project-card" data-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="img/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-img" alt="">
                        <span class="tags">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-detail">${data.detail}</p>
                        <a href="${data.live}" class="btn">see live</a>
                        <a href="${data.github}" class="btn">github</a>
                    </div>
                </div>
            </div>
    `;
}

projectData.forEach(data => createProjectCards(data));