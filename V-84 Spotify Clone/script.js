let currentsong = new Audio();
let currfolder;

async function getsongs(folder) {
    currfolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/V-84%20Spotify%20Clone/${folder}/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    songUL.innerHTML = "";
    for (const song of songs) {
        songUL.innerHTML += `<li>
                            <img class="invert" src="img/music.svg" alt="">
                            <div class="info">
                                <div>${song}</div>
                                <div>Akash</div>
                            </div>
                            <div class="play_now">
                                <span>Play Now</span>
                                <img class="invert" src="img/play.svg" alt="">
                            </div>
                        </li>`;
    }

    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerText);
            playMusic(e.querySelector(".info").firstElementChild.innerText.trim());
        });
    });
    return songs;
}

const playMusic = (track, pause = false) => {
    currentsong.src = `http://127.0.0.1:3000/V-84%20Spotify%20Clone/${currfolder}/${track}`; // Ensure the correct path
    if (!pause) {
        currentsong.play();
        play.src = "img/pause.svg";
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};

async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:3000/V-84%20Spotify%20Clone/song/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer");
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
    if (e.href.includes("/song")) {
        let folder = e.href.split("/").slice(-2)[0];
        let a = await fetch(`http://127.0.0.1:3000/V-84%20Spotify%20Clone/song/${folder}/info.json`);
        let response = await a.json();
        cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card">
                        <div class="play">
                            <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="50" fill="#1fdf64"/>
                                <polygon points="40,30 70,50 40,70" fill="black"/>
                              </svg>
                        </div>
                        <img src="http://127.0.0.1:3000/V-84%20Spotify%20Clone/song/${folder}/cover.jpg" alt="">
                        <h2>${response.title}</h2>
                        <p>${response.description}</p>
                    </div>`
    }
}
Array.from(document.getElementsByClassName("card")).forEach(e => {
    e.addEventListener("click", async item => {
        let songs = await getsongs(`song/${item.currentTarget.dataset.folder}`);
        playMusic(songs[0])
    });
});
}

async function main() {
    await getsongs("song/ncs");
    playMusic(songs[0], true);

    displayAlbums()


    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = "img/pause.svg";
        } else {
            currentsong.pause();
            play.src = "img/play.svg";
        }
    })
    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinuteSeconds(currentsong.currentTime)}/${secondsToMinuteSeconds(currentsong.duration)}`;
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
    });

    function secondsToMinuteSeconds(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = (currentsong.duration / 100) * percent;
    });
    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").pop());
        if (index > 0) {
            playMusic(songs[index - 1]);
        }
    });
    next.addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").pop());
        if (index < songs.length - 1) {
            playMusic(songs[index + 1]);
        }
    });
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        currentsong.volume = parseInt(e.target.value) / 100;
    });
    document.querySelector(".volume img").addEventListener("click", e => {
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg", "mute.svg");
            currentsong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        } else {
            e.target.src = e.target.src.replace("mute.svg", "volume.svg");
            currentsong.volume = .1;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }
    });
}

main();
