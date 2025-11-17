const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postEl = document.getElementById("post-section")

function renderPost(){
    let template = ``
    for(let i = 0; i < posts.length; i++){
        template += `
        <section class="post" id="post">
        <div class="poster-info">
            <img class="avatar-img" src="${posts[i].avatar}">
            <p>${posts[i].name}<span class="location">${posts[i].location}</span></p>
        </div>
        <img class="posted-img" src="${posts[i].post}">
        <div class="caption">
            <img class="like" id="like" src="images/icon-heart.png">
            <img class="comment" src="images/icon-comment.png">
            <img class="share" src="images/icon-dm.png">
            <p>${posts[i].likes} likes</p>
            <p>${posts[i].username} <span>${posts[i].comment}</span></p>
        </div>
        </section>
        `
    }
    postEl.innerHTML = template
}
renderPost()