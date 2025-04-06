function createCard(title, cName, views, monthsold, duration, thumbnail) {
    let viewStr;
    if (views < 1000000) {
        viewStr = views / 1000 + "K";
    } else if (views >= 1000000) {
        viewStr = views / 1000000 + "M";
    }
    let html = ` <div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                    <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsold} months ago</p>
            </div>
        </div>`;

    document.querySelector(".container").innerHTML += html;
}

createCard("Installing  VS Code & How Website Work | Sigma Web Development Course - Tutorial #1", "CodewithHarry", 72700, 2, "31:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA");