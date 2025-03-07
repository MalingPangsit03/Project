/*Home and Auto Slider Section*/
let autoSlideIndex = 0;
showAutoSlides();

function showAutoSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides_auto");
  let dots = document.getElementsByClassName("auto_dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  autoSlideIndex++;
  if (autoSlideIndex > slides.length) {autoSlideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[autoSlideIndex-1].style.display = "block";  
  dots[autoSlideIndex-1].className += " active";
  setTimeout(showAutoSlides, 5000); // Change image every 2 seconds
}

var slideIndex = 1;
        var Description = [

            "<span class='km'> Name: Kim Minji (김민지) <br> Birthday: May 7, 2004 <br> Height: 169 cm (5’6.5”) <br> Nationality: Korean Color: Blue <br> Emoji: 🐻 <br> </span>",
            "<span class= 'dm'> Name: Danielle June Marsh (모지혜) <br> Birthday: April 11, 2005 <br> Height: 165 cm (5’5”) <br> Nationality: Korean-Australian <br> Color: Yellow <br> Emoji: 🐶 <br> </span>",
            "<span class='hr'> Name: Haerin (해린) <br> Birthday: May 15, 2006 <br> Height: 164.5 cm (5’5”) <br> Nationality: Korean <br> Color: Green <br> Emoji: 🐱 <br> </span>",
            "<span class='hy'> Name: Hyein (혜인) <br> Birthday: April 21, 2008 <br> Height: 170 cm (5’7”) <br> Nationality: Korean <br> Color: Purple <br> Emoji: 🐣 <br> </span>",
            "<span class='hn'> Name: Hanni (하니) <br> Birthday: October 6, 2004 <br> Height: 161.7 cm (5’3.5”) <br> Nationality: Vietnamese-Australian <br> Color: Pink <br> Emoji: 🐰 <br> ",
        ];

        function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("demo");
            var descText = document.getElementById("image_description");
            
            if (n > x.length) {slideIndex = 1;}
            if (n < 1) {slideIndex = x.length;}
            
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].classList.remove("w3-white");
            }
            
            x[slideIndex-1].style.display = "block";
            dots[slideIndex-1].classList.add("w3-white");
            descText.innerHTML = Description[slideIndex - 1];
        }

        function plusDivs(n) { showDivs(slideIndex += n); }
        function currentDiv(n) { showDivs(slideIndex = n); }
        
        document.addEventListener("DOMContentLoaded", function() { showDivs(slideIndex); });


        const audio = new Audio();
let isPlaying = false;

const playPauseBtn = document.getElementById("playPauseBtn");
playPauseBtn.addEventListener("click", togglePlayPause);

// Load tracks using JavaScript
const tracks = [
    {
        src: "NewJeans (뉴진스) Supernatural Official MV (Part.1).mp3",
        albumArt: "NewJeans-2-800x800.jpg",
        trackTitle: "Supernatural",
        bandName: "Newjeans",
        duration: "3:10" // Format: "minutes:seconds"
    },
    {
        src: "NewJeans 'New Jeans (ft. The Powerpuff Girls)' Lyrics (뉴진스 New Jeans 가사) (Color Coded Lyrics).mp3",
        albumArt: "ab67616d0000b2730744690248ef3ba7b776ea7b.jpg",
        trackTitle: "New Jeans",
        bandName: "Newjeans",
        duration: "1:49" // Format: "minutes:seconds"
    },
      {
        src: "Bubble Gum - NewJeans (Audio).mp3",
        albumArt: "NewJeans-3-800x800.jpg",
        trackTitle: "Bubble Gum",
        bandName: "Newjeans",
        duration: "3:19" // Format: "minutes:seconds"
    },
      
];

let currentTrackIndex = 0;

function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    audio.src = track.src;
    document.getElementById("albumArt").src = track.albumArt;
    document.getElementById("trackTitle").textContent = track.trackTitle;
    document.getElementById("bandName").textContent = track.bandName;
    document.getElementById("trackTime").textContent = track.duration;
}

loadTrack(currentTrackIndex);

// Event listener for updating time and buffering indicator
audio.addEventListener("timeupdate", () => {
    const currentTime = formatTime(audio.currentTime);
    document.getElementById("currentTime").textContent = currentTime;
    document.getElementById("seekSlider").value = audio.currentTime;

    if (audio.buffered.length > 0) {
        const buffered = audio.buffered.end(0);
        const bufferPercent = (buffered / audio.duration) * 100;
        document.getElementById("bufferingIndicator").style.width = `${bufferPercent}%`;
    }

    // Update the seek indicator width based on the current time percentage
    const currentPercent = (audio.currentTime / audio.duration) * 100;
    document.getElementById("seekIndicator").style.width = `${currentPercent}%`;
});

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Event listener for seek slider
const seekSlider = document.getElementById("seekSlider");
seekSlider.addEventListener("input", handleSeek);

function handleSeek() {
    const seekTime = parseFloat(seekSlider.value);
    audio.currentTime = seekTime;
}

// Event listener for updating the total duration when metadata is loaded
audio.addEventListener("loadedmetadata", () => {
    seekSlider.max = audio.duration;
    const totalDuration = formatTime(audio.duration);
    document.getElementById("trackTime").textContent = totalDuration;
});

// Function to toggle play and pause
function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="bx bx-play"></i>';
    } else {
        audio.play();
        playPauseBtn.innerHTML = '<i class="bx bx-pause" ></i>';
    }
    isPlaying = !isPlaying;
}

// Event listeners for play and pause
audio.addEventListener("pause", () => {
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
});

audio.addEventListener("play", () => {
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
});

// Event listener for track ending
audio.addEventListener("ended", playNextOrLoop);

function playNextOrLoop() {
    if (isLooping) {
        // If looping is enabled, replay the current track
        audio.currentTime = 0;
        audio.play();
    } else {
        if (isShuffled) {
            playNextTrackInShuffle();
        } else {
            playNextSequentialTrack();
        }
    }
}

// Functions to play next track (either in shuffle or sequential)
function playNextTrackInShuffle() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

function playNextSequentialTrack() {
    if (currentTrackIndex === tracks.length - 1) {
        currentTrackIndex = 0;
    } else {
        currentTrackIndex++;
    }
    loadTrack(currentTrackIndex);
    audio.play();
}

// Event listeners for next and previous buttons
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", playNextTrack);
prevBtn.addEventListener("click", playPreviousTrack);

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
}

function playPreviousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
}

// Event listeners for loop and shuffle buttons
const shuffleBtn = document.getElementById("shuffleBtn");
const loopBtn = document.getElementById("loopBtn");

let isShuffled = false;
let isLooping = false;

shuffleBtn.addEventListener("click", toggleShuffle);
loopBtn.addEventListener("click", toggleLoop);

function toggleShuffle() {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle("active", isShuffled);
    
    if (isShuffled) {
        shuffleTracks();
    }
}

function shuffleTracks() {
    // Fisher-Yates shuffle algorithm
    for (let i = tracks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tracks[i], tracks[j]] = [tracks[j], tracks[i]];
    }
}

function toggleLoop() {
    isLooping = !isLooping;
    loopBtn.classList.toggle("active", isLooping);
    audio.loop = isLooping;
}

// Volume control functionality
const muteBtn = document.getElementById("muteBtn");
const volumeSlider = document.getElementById("volumeSlider");
const volumeIndicator = document.getElementById("volumeIndicator");
const volumeBar = document.getElementById("volume-bar"); // Assuming #volume-bar exists

let isMuted = false;
let savedVolume = 1; // Store the volume before muting

muteBtn.addEventListener("click", toggleMute);
volumeSlider.addEventListener("input", setVolume);

function toggleMute() {
    isMuted = !isMuted;
    if (isMuted) {
        savedVolume = audio.volume;
        audio.volume = 0;
        muteBtn.innerHTML = '<i class="bx bx-volume-mute"></i>';
        volumeBar.classList.add("muted"); // Add muted class
    } else {
        audio.volume = savedVolume;
        muteBtn.innerHTML = '<i class="bx bx-volume-full"></i>';
        volumeBar.classList.remove("muted"); // Remove muted class
    }
    volumeSlider.value = isMuted ? 0 : savedVolume;
    muteBtn.classList.toggle("active", isMuted);

    // Update volume indicator width
    updateVolumeIndicator();
}

function setVolume() {
    if (!isMuted) {
        audio.volume = volumeSlider.value;
        savedVolume = volumeSlider.value;
    }

    // Update volume indicator width
    updateVolumeIndicator();
}

// Function to update the volume indicator width
function updateVolumeIndicator() {
    const volumePercentage = audio.volume * 100;
    volumeIndicator.style.width = `${volumePercentage}%`;
}

// Initialize the volume indicator width on load
updateVolumeIndicator();

// Like button functionality
const likeBtn = document.getElementById("likeBtn");
let isLiked = false;

likeBtn.addEventListener("click", function() {
    if (isLiked) {
        likeBtn.classList.remove("liked");
        likeBtn.innerHTML = '<i class="far fa-heart"></i>';
    } else {
        likeBtn.classList.add("liked");
        likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
    }
    isLiked = !isLiked;
});