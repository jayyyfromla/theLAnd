
const songs = [
  { title: "Shoreline Mafia - Back 2 Back", file: "music/Shoreline Mafia - Back 2 Back .mp3", video: "media/squabble up.mp4" },
  { title: "BlueBucksClan - Make Niggas Leave", file: "music/BlueBucksClan - Make Niggas Leave.mp3",video: "media/squabble up.mp4" },
  { title: "Keak Da Sneak - Super Hyphy", file: "music/Keak Da Sneak - Super Hyphy.mp3",video: "media/squabble up.mp4" },
  { title: "DrakeoTheRuler - Mr. Big Bank Budda", file: "music/DrakeoTheRuler - Mr. Big Bank Budda.mp3", video: "media/squabble up.mp4" },
  { title: "Kendrick Lamar - tv off", file: "music/Kendrick Lamar - tv off.mp3",video: "media/squabble up.mp4" },
  { title: "Shoreline Mafia - Watch That Hoe", file: "music/Shoreline Mafia - Watch That Hoe.mp3",video: "media/squabble up.mp4" },
  { title: "Mac Dre - Feelin' Myself", file: "music/Mac Dre - Feelin' Myself.mp3",video: "media/squabble up.mp4" },
  { title: "Too Short - Gangsters & Strippers", file: "music/Too Short - Gangsters & Strippers.mp3",video: "media/squabble up.mp4" },
  { title: "Mike Sherm - AssHole", file: "music/Mike Sherm - AssHole.mp3", video: "media/squabble up.mp4" },
  { title: "Webbie - Six 12's", file: "music/Webbie - Six 12's.mp3",video: "media/squabble up.mp4" },
  { title: "DrakeoTheRuler - Evel Kinevil", file: "music/DrakeoTheRuler - Evel Kinevil.mp3",video: "media/squabble up.mp4" },
];

let currentSong = 0;
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const backBtn = document.getElementById('back');
const nextBtn = document.getElementById('next');
const seekBar = document.getElementById('seek');
const nowPlaying = document.getElementById('now-playing');
const songList = document.getElementById('song-list');
const backgroundVideo = document.getElementById('background-video');

function loadSong(index) {
  const song = songs[index];
  audio.src = song.file;
  nowPlaying.textContent = "Now Playing: " + song.title;
  backgroundVideo.src = song.video;
  audio.load();
  audio.play();
}

playBtn.onclick = () => audio.play();
pauseBtn.onclick = () => audio.pause();
backBtn.onclick = () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
};
nextBtn.onclick = () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
};

audio.ontimeupdate = () => {
  seekBar.value = (audio.currentTime / audio.duration) * 100 || 0;
};

seekBar.oninput = () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
};

songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.onclick = () => {
    currentSong = index;
    loadSong(currentSong);
  };
  songList.appendChild(li);
});

loadSong(currentSong);
