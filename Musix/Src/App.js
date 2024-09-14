const musicContainer = document.getElementById('music-container');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

//song title

const songs = ['Alone', 'golden hour','untamed','You are my Everything'];

//keep track of song

let songIndex = 3;

// load song details into DOM

loadsong(songs[songIndex]);

//update song details

function loadsong(song){
    title.innerText = song;
    audio.src = `/Musix/${song}.mp3`;
    cover.src = `/Images/${song}.jpg`;
}



// Play song

function playSong(){
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play();
}

//pause song

function pauseSong(){
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    playBtn.querySelector("i.fas").classList.add("fa-play");

    audio.pause();
}


//previous song 

function prevSong() {

    songIndex--;

    if ( songIndex < 0 )  {
        songIndex = songs.length - 1 ;
    }
    loadsong(songs[songIndex]);
    playSong();
}

//Next song 

function nextSong() {

    songIndex++;

    if ( songIndex > songs.length-1 )  {
        songIndex = 0;
    }
    loadsong(songs[songIndex]);
    playSong();
}

//Event Listener

playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains("play");

    if(isPlaying){
        pauseSong();
    }
    else{
        playSong();
    }
});

//change song

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);



//update progress bar

function updateProgress(e){
    const { duration , currentTime } = e.srcElement;
    //console.log(duration, currentTime);   //This line prints the durations at the console... just know .. need not be implemented
    const progressPercent = (currentTime / duration) * 100;
    //console.log(progressPercent); //returns the progress percentage
    progress.style.width = `${progressPercent}%`;
}



// Time & song update

audio.addEventListener("timeupdate", updateProgress);


//set progress bar

function setProgress(e){
    const width = this.clientWidth;
    //console.log(width); //returns the progress bar length
    const clickX = e.offsetX;
    //console.log(clickX); //returns the position where the progress bar is clicked
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}


//click on the progress bar

progressContainer.addEventListener("click",setProgress);

// song end

audio.addEventListener("ended",nextSong);