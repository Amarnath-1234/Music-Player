console.log("Welcome to Music player");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
// audioElement.play
// let masterplay = getElementById('masterplay');
// let progressbar = getElementById('progressbar');
let songItems = Array.from(document.getElementsByClassName('Songitem'));

let songs =[
    {songName:"lo-maan-liya", filePath:"songs/1.mp3", coverPath:"covers/s1.jpg"},
    {songName:"Maan meri jaan", filePath:"songs/2.mp3", coverPath:"covers/s2.jpg"},
    {songName:"Pyaar krte ho na", filePath:"songs/3.mp3", coverPath:"covers/s3.jpg"},
    {songName:"Baarish main tum", filePath:"songs/4.mp3", coverPath:"covers/s4.jpg"},
    {songName:"Kesariya", filePath:"songs/5.mp3", coverPath:"covers/s5.jpg"},
    {songName:"Dil de diya hai", filePath:"songs/6.mp3", coverPath:"covers/s6.jpg"},
    {songName:"Dil galti kar ", filePath:"songs/7.mp3", coverPath:"covers/s7.jpg"},
    {songName:"Manike", filePath:"songs/8.mp3", coverPath:"covers/s8.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.querySelector("img")[0] = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audio element.play();

// Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
   console.log('timeupdate');
//    Update seekbar 
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
progressbar.value = progress;
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value*audioElement.duration/100;
})

const makeAllplays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`${songIndex+1}.mp3;`
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})