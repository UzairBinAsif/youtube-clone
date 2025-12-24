async function getNameData () {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    return data
}

async function getPostsData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    return data
}

try {
    let firstSec = document.getElementsByClassName("firstSec")[0]
    let vidsCount = 60;
    let forUsers = 0;

    getNameData().then(users => {
        getPostsData().then(posts => {
            for (i = 0; i < vidsCount; i++) {
                if (forUsers == users.length) {
                    forUsers = 0
                }
                
                firstSec.innerHTML += `
                    <div class="card">
                    <div style="position: relative;">
                        <img src="https://picsum.dev/1100/600?random=${Date.now() + i}" alt="Thumbnail" class="thumbImgs">
                        <span class="timeBox">${Math.floor(Math.random()*60)}:${Math.floor(Math.random()*60)}</span>
                    </div>
                    <div class="cardDesc">
                        <div>
                            <img src="https://picsum.dev/40?random=${Date.now() + i}" alt="Channel Logo">
                        </div>
                        <div>
                            <p>${posts[i].title}</p>
                            <p>${users[forUsers].name}</p>
                            <p>${Math.floor(Math.random()*999)}K views • ${Math.floor(Math.random()*12)} months ago</p>
                        </div>
                    </div>
                    </div>`
                forUsers++
            }
        })
    })

    
} catch (error) {
    console.error("An Error Occured ->", error);
}