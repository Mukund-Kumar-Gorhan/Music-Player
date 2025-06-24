let songName = document.querySelector("#song-name");
let songSinger = document.querySelector("#song-singer");
let songImage = document.querySelector(".song-image");
let playPauseIcon = document.querySelector(".play-img i");
let volumeRange = document.querySelector("#volume-range");
let songDuration = document.querySelector("#song-duration");

let index = 0;
let playingSong = false;
let track = new Audio();

let songs = [
    {
    //     name: "Akhiya marta",
    //     path: "firstsong.mp3",  
    //     image: "images/image1.jpg",
    //     singer: "Tuntun Yadav"
    // },
    // {
    //     name: "Dilwo leja rumal me",
    //     path: "secondsong.mp3",
    //     image: "images/image2.jpg",
    //     singer: "Pawan singh"
    // },
    // {
    //     name: "Bajariya me raja",
    //     path: "thirdsong.mp3",
    //     image: "images/image3.jpg",
    //     singer: "Shilpi raj"
    // },
    // {
    //     name: "Babuaan",
    //     path: "foursong.mp3",
    //     image: "images/image4.jpg",
    //     singer: "Pawan singh"
    // },
    // {
        name: "Hamnava mere",
        path: "9.mp3",
        image: "images/image9.jpg",
        singer: "Jubin noutalya"
    },
    {
        name: "Dil laga liya",
        path: "6.mp3",
        image: "images/image6.jpg",
        singer: "udit narayan"
    },
    {
        name: "Be-mine",
        path: "8.mp3",
        image: "images/image8.jpg",
        singer: "Shubh"
    },
    {
        name:"Meri jindagi hai tu",
        path: "7.mp3",
        image: "images/image7.jpg",
        singer: "Jubin Noutalya"
    },
    {
        name: "Marad nahi matha ke darad",
        path: "10.mp3",
        image: "images/image10.jpg",
        singer: "Shivani singh"
    },
    {
        name: "Nirdaiya marad",
        path: "11.mp3",
        image: "image11.jpg",
        singer: "Shilpi raj"
    },
    {
        name: "Lut gaye",
        path: "12.mp3",
        image: "image12.jpg",
        singer: "Jubin noutalya"
    },
    {
        name: "Zihaal e miskin",
        path: "13.mp3",
        image: "image13.jpg",
        singer: "Vishal mishra"
    },
    {
        name: "Aaj ki raat",
        path: "14.mp3",
        image: "image14.jpeg",
        singer: "Tamanna bhatiya"
    },
    {
        name: "Baarish",
        path: "15.mp3",
        image: "image15.jpg",
        singer: "Payal dev"
    },{
        name: "Dekhne walo ne",
        path: "16.mp3",
        image: "image16.jpg",
        singer: "Salman khan"
    },
    {
        name: "Gali gali me",
        path: "17.mp3",
        image: "image17.jpg",
        singer: "Neha kakkar"
    },
    {
        name: "masroof hai dil",
        path: "18.mp3",
        image: "image18.jpeg",
        singer: "Himesh reshammiya"
    },
    {
        name: "Pahli pahli baar",
        path: "19.mp3",
        image: "image19.jpeg",
        singer: "Kumar sanu"
    },
    {
        name: "Zarori tha",
        path: "20.mp3",
        image: "image20.jpeg",
        singer: "Rahat fateh"
    // },
    // {
    //     name: "Udanbaj rajau",
    //     path: "21.mp3",
    //     image: "images/image21.jpeg",
    //     singer: "Shilpi raj"
    // },
    // {
    //     name: "Supreme",
    //     path: "22.mp3",
    //     image: "images/image22.jpeg",
    //     singer: "Subh"
    // },
    // {
    //     name: "Fell for you",
    //     path: "23.mp3",
    //     image: "images/image23.jpeg",
    //     singer: "Subh"
    // },
    // {
    //     name: "Loot gaini barbaad",
    //     path: "24.mp3",
    //     image: "images/image24.jpeg",
    //     singer: "Neelkamal singh"
    // },
    // {
    //     name: "Jiara ke jari",
    //     path: "25.mp3",
    //     image: "images/image25.jpeg",
    //     singer: "Neelkamal singh"
    // },
    // {
    //     name: "Dhar kamar",
    //     path: "26.mp3",
    //     image: "images/image26.jpeg",
    //     singer: "Neelkamal singh"
    // },
    // {
    //     name: "Chadal jawani",
    //     path: "27.mp3",
    //     image: "images/image27.jpeg",
    //     singer: "Neelkamal singh"
    // },
    // {
    //     name: "Tu has ke bolalu",
    //     path: "28.mp3",
    //     image: "images/image28.jpeg",
    //     singer: "Awanish babu"
    // },
    // {
    //     name: "Aam ke swad",
    //     path: "29.mp3",
    //     image: "images/image29.jpg",
    //     singer: "Khesari lal"
    // },
    // {
    //     name: "Ara ke othalali",
    //     path: "30.mp3",
    //     image: "images/image30.jpg",
    //     singer: "Pawan singh"
    // },
    // {
    //     name: "Nachniye karan",
    //     path: "31.mp3",
    //     image: "images/image31.jpg",
    //     singer: "Khesari lal"
    }
];


function loadTrack(index) {
    track.src = songs[index].path;
    songName.innerText = songs[index].name;
    songSinger.innerText = songs[index].singer;
    songImage.style.backgroundImage = `url(${songs[index].image})`;
    track.load();
}
loadTrack(index);


function playPause() {
    if (!playingSong) {
        playSong();
    } else {
        pauseSong();
    }
}

function playSong() {
    track.play();
    playingSong = true;
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
}

function pauseSong() {
    track.pause();
    playingSong = false;
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
}


function nextSong() {
    index = (index + 1) % songs.length;
    loadTrack(index);
    playSong();
}


function previousSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadTrack(index);
    playSong();
}


volumeRange.addEventListener("input", () => {
    track.volume = volumeRange.value / 100;
});


track.addEventListener("timeupdate", () => {
    if (!isNaN(track.duration)) {
        let progress = (track.currentTime / track.duration) * 100;
        songDuration.value = progress;
    }
});


songDuration.addEventListener("input", () => {
    if (!isNaN(track.duration)) {
        track.currentTime = (songDuration.value / 100) * track.duration;
    }
});


track.addEventListener("ended", () => {
    nextSong();
});

function toggleMute() {
    let icon = document.querySelector("#volume-icon i");

    if (track.muted) {
        track.muted = false;
        icon.classList.remove("fa-volume-xmark");
        icon.classList.add("fa-volume-high");
    } else {
        track.muted = true;
        icon.classList.remove("fa-volume-high");
        icon.classList.add("fa-volume-xmark");
    }
}

let volumeSlider = document.querySelector("#volume-range");
volumeSlider.addEventListener("input", function () {
    track.volume = this.value / 100;
    if (track.volume === 0) {
        document.querySelector("#volume-icon i").classList.remove("fa-volume-high");
        document.querySelector("#volume-icon i").classList.add("fa-volume-xmark");
    } else {
        track.muted = false;
        document.querySelector("#volume-icon i").classList.remove("fa-volume-xmark");
        document.querySelector("#volume-icon i").classList.add("fa-volume-high");
    }
});
// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }
function playSong() {
  track.play();
  playingSong = true;
  playPauseIcon.classList.remove("fa-play");
  playPauseIcon.classList.add("fa-pause");


  document.getElementById("musicanim").classList.add("rotate");
}

function pauseSong() {
  track.pause();
  playingSong = false;
  playPauseIcon.classList.remove("fa-pause");
  playPauseIcon.classList.add("fa-play");


  document.getElementById("musicanim").classList.remove("rotate");
}



let playlistContainer = document.querySelector(".playlist");


function initializePlaylist() {
    songs.forEach((song, i) => {
        let playlistItem = document.createElement("div");
        playlistItem.className = "playlist-item";
        playlistItem.setAttribute("data-index", i);
        
        playlistItem.innerHTML = `
            <img src="${song.image}" alt="${song.name}" class="playlist-img">
            <div class="playlist-song-name">${song.name}</div>
            <div class="playlist-singer">${song.singer}</div>
        `;
        
        playlistItem.addEventListener("click", () => {
            index = i;
            loadTrack(index);
            playSong();
        });
        
        playlistContainer.appendChild(playlistItem);
    });
}


initializePlaylist();
