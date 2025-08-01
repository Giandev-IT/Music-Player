// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Tombol play di halaman detail

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini

// App State
let songs = [
    {
        id: 1,
        title: "Always",
        artist: "Isak Danielson",
        album: "Love",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273f9123fff925e023b51596909",
        audioSrc: "audio/Isak Danielson - Always.mp3",
        videoBgSrc: "videos/always_bg.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 4.09, text: "You put your hands under my jacket" },
{ time: 7.03, text: "They're cold as hell, but I'ma let you anyway" },
{ time: 11.08, text: "Wouldn't you say there's a light in the darkest moment?" },
{ time: 15.01, text: "And this is the moment when I can be brave" },
{ time: 19.06, text: "You say you want to call a taxi" },
{ time: 24.05, text: "But I don't wanna go and meet up all your friends" },
{ time: 28.06, text: 'So then you say, "We get another pack and some coffee"' },
{ time: 33.02, text: "I hope it doesn't ruin our first kiss" },
{ time: 36.05, text: "And for every song, there's a song we're not singing" },
{ time: 40.03, text: "For every step, there's a step we're not taking" },
{ time: 44.02, text: "So let me know if there's something I'm missing" },
{ time: 48.04, text: "'Cause this is all I need" },
{ time: 53.00, text: "So say we'll be always, always" },
{ time: 58.00, text: "Say it will be you and me to the old days" },
{ time: 61.01, text: "Let us be always, always" },
{ time: 66.02, text: "Through the highs and the lows, we'll be always" },
{ time: 70.03, text: "We will be always (always), always (always)" },
{ time: 75.09, text: "Say we will be you and me to the old days" },
{ time: 78.08, text: "We will be always (always), always (always)" },
{ time: 84.07, text: "Through the highs and the lows, we'll be always" },
{ time: 88.05, text: "We are lying on the sofa" },
{ time: 92.00, text: "We fall asleep watching an episode of Friends" },
{ time: 96.03, text: "Will we end up just like Ross and Rachel?" },
{ time: 100.04, text: "I'm so sorry for the spoiler, but that's the end" },
{ time: 104.06, text: "And for every song, there's a song we're not singing" },
{ time: 108.09, text: "For every step, there's a step we're not taking" },
{ time: 112.08, text: "So let me know if there's something I'm missing" },
{ time: 117.00, text: "'Cause this is all I need" },
{ time: 121.09, text: "So say we'll be always, always" },
{ time: 125.06, text: "Say it will be you and me to the old days" },
{ time: 129.04, text: "Let us be always, always" },
{ time: 134.09, text: "Through the highs and the lows, we'll be always" },
{ time: 138.09, text: "We will be always (always), always (always)" },
{ time: 143.03, text: "Say we will be you and me to the old days" },
{ time: 146.00, text: "We will be always (always), always (always)" },
{ time: 151.06, text: "Through the highs and the lows, we'll be always" },
{ time: 155.09, text: "Through the highs and the lows" },
{ time: 158.07, text: "We keep together you and me to we're old" },
{ time: 163.09, text: "I am ready for the highs and lows" },
{ time: 168.04, text: "I am ready for the highs and lows" },
{ time: 172.00, text: "For the highs and lows" },
{ time: 175.01, text: "Always (always), always (always)" },
{ time: 179.09, text: "Say it will be you and me to the old days" },
{ time: 181.01, text: "We will be always, always (always)" },
{ time: 185.02, text: "Through the highs and the lows, we'll be always" },
{ time: 189.00, text: "We will be always (always), always (always)" },
{ time: 194.03, text: "Say we will be you and me to the old days" },
{ time: 197.05, text: "We will be always (always), always (always)" },
{ time: 202.00, text: "Through the highs and the lows, we'll be always" },
{ time: 206.02, text: "We will be always, always" },
{ time: 210.02, text: "Through the highs and the lows, we'll be always" }

        ]
    },
    {
        id: 2,
        title: "Perfect",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        albumArtUrl: "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
        audioSrc: "audio/Ed Sheeran - Perfect.mp3",
        videoBgSrc: "videos/perfect_bg.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 2.9 , text: "I found a love for me" },
            { time: 10.6, text: "Oh, darlin, just dive right in and follow my lead" },
            { time: 18, text: "I found a girl, beautiful and sweet" },
            { time: 25, text: "I never knew you were the someone waiting for me" },
            { time: 32, text: "'Cause we were just kids when we fell in love" },
            { time: 36.7, text: "Not knowin' what it was" },
            { time: 40.5, text: "I will not give you up this time" },
            { time: 48, text: "But, darlin', just kiss me slow" },
            { time: 51.6, text: "Your heart is all I own" },
            { time: 55.9, text: "And in your eyes, you're holdin' mine" },
            { time: 62.3, text: "Baby, I'm dancing in the dark with you between my arms" },
            { time: 73.6, text: "Barefoot on the grass, listening to our favorite song" },
            { time: 80.9, text: "When you said you looked a mess, I whispered underneath my breath" },
            { time: 88, text: "But you heard it, darling, you look perfect tonight" }
        ]
    },    
    {
        id: 3,
        title: "Give Me Your Forever",
        artist: "Zack Tabudlo",
        album: "Love",
        albumArtUrl: "https://source.boomplaymusic.com/group10/M00/10/13/8ae0a9351b2246cdadf67357b574654a_464_464.jpg",
        audioSrc: "audio/Zack Tabudlo - Give Me Your Forever.mp3",
        videoBgSrc: "videos/forever_bg.mp4", // Path video background khusus lagu ini
        // Lirik dengan timestamp dalam detik
        lyrics: [
            { time: 18.17, text: "Do you remember" },
            { time: 21.16, text: "When we were young you were always with your friends" },
            { time: 25.25, text: "Wanted to grab your hand and run away from them" },
            { time: 30.72, text: "I knew that it was time to tell you how I feel" },
            { time: 37.47, text: "So I made a move, I took your hand" },
            { time: 40.20, text: "My heart was beating loud like I've never felt before" },
            { time: 44.90, text: "You were smiling at me like you wanted more" },
            { time: 50.40, text: "I think you're the one I've never seen before" },
            { time: 56.41, text: "I want you to know" },
            { time: 58.94, text: "I love you the most" },
            { time: 61.13, text: "I'll always be there right by your side" },
            { time: 65.90, text: "'Cause baby, you're always in my mind" },
            { time: 70.78, text: "Just give me your forever (give me your forever)" },
            { time: 75.65, text: "I want you to know" },
            { time: 78.01, text: "That you'll be the one" },
            { time: 80.32, text: "And I'll be the guy who'll be on his knees" },
            { time: 85.01, text: "To say I love you" },
            { time: 87.73, text: "And I need you" },
            { time: 90.22, text: "And say I'd die for you (just give me your forever)" },
            { time: 94.88, text: "I never knew" },
            { time: 97.28, text: "It would be possible" },
            { time: 98.98, text: "For you to be with me" },
            { time: 102.19, text: "'Cause you loved someone else back in '73" },
            { time: 107.58, text: "I was so jealous seeing you with him" },
            { time: 114.35, text: "Oh baby, I know that I can treat you better back in those nights" },
            { time: 121.63, text: "Oh, you wouldn't cry from his stupid lies" },
            { time: 126.89, text: "Oh baby, I was there watching wishing you to be mine" },
            { time: 133.30, text: "I want you to know" },
            { time: 135.99, text: "I love you the most" },
            { time: 138.10, text: "I'll always be there right by your side" },
            { time: 142.92, text: "'Cause baby, you're always in my mind" },
            { time: 148.09, text: "Just give me your forever (give me your forever)" },
            { time: 152.62, text: "I want you to know" },
            { time: 155.20, text: "That you'll be the one" },
            { time: 157.53, text: "And I'll be the guy who'll be on his knees" },
            { time: 162.14, text: "To say I love you" },
            { time: 164.77, text: "And I need you" },
            { time: 166.72, text: "And say I'd die for you (just give me your forever)" },
            { time: 172.73, text: "Do you remember" },
            { time: 174.91, text: "I was on the aisle" },
            { time: 176.76, text: "Waiting for you, babe" },
            { time: 179.64, text: "Saw you in your gown" },
            { time: 181.33, text: "I was crying all my tears" },
            { time: 184.11, text: "I told myself that you are the one" },
            { time: 189.84, text: "(You are the one)" },
            { time: 191.54, text: "I want you to know" },
            { time: 193.65, text: "I love you the most" },
            { time: 195.95, text: "I'll always be there right by your side" },
            { time: 200.79, text: "'Cause baby, you're always in my mind" },
            { time: 205.12, text: "Just give me your forever (just give me your forever)" },
            { time: 210.21, text: "I want you to know" },
            { time: 212.56, text: "That you'll be the one" },
            { time: 214.82, text: "And I'll be the guy who'll be on his knees" },
            { time: 219.66, text: "To say I love you (just give me your forever)" },
            { time: 222.85, text: "And I need you" },
            { time: 225.24, text: "And say I'd die for you (just give me your forever)" },
            { time: 233.74, text: "Just give me your forever" },
            { time: 237.29, text: "Just give me your forever" }
          ]          
    },
    {
        id: 4,
        title: "Multo",
        artist: "Cup of Joe",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.ytimg.com/vi/BqGCJUXEqxQ/maxresdefault.jpg",
        audioSrc: "audio/Rewrite The Stars - James Arthur feat. Anne Marie.mp3",
        videoBgSrc: "videos/rewrite_the_stars_bg.mp4",
        lyrics: [
            { time: 1000, text: "You know I want you" },
            { time: 1000, text: "It's not a secret I try to hide" },
            { time: 100000, text: "You know you want me" },
            { time: 1000, text: "So don't keep sayin' our hands are tied" },
            { time: 1000, text: "You claim it's not in the cards" },
            { time: 1000, text: "And fate is pullin' you miles away and out of reach from me" },
            { time: 1000, text: "But you're here in my heart" },
            { time: 1000, text: "So who can stop me if I decide that you're my destiny?" },
            { time: 1000, text: "What if we rewrite the stars?" },
            { time: 1000, text: "Say you were made to be mine" },
            { time: 1000, text: "Nothin' could keep us apart" },
            { time: 1000, text: "You'd be the one I was meant to find" },
            { time: 1000, text: "It's up to you and it's up to me" },
            { time: 1000, text: "No one can say what we get to be" },
            { time: 1000, text: "So why don't we rewrite the stars?" },
            { time: 1000, text: "Maybe the world could be ours tonight" },
            { time: 1000, text: "Ah-oh (No, no, no, no)" },
            { time: 1000, text: "Ah-oh (Mm)" },
            { time: 1000, text: "You think it's easy" },
            { time: 1000, text: "You think I don't wanna run to you, yeah" },
            { time: 1000, text: "But there are mountains (There are mountains)" },
            { time: 1000, text: "And there are doors that we can't walk through" },
            { time: 1000, text: "I know you're wonderin' why" },
            { time: 1000, text: "Because we're able to be just you and me within these walls" },
            { time: 1000, text: "But when we go outside" },
            { time: 1000, text: "You're gonna wake up and see that it was hopeless after all" },
            { time: 1000, text: "No one can rewrite the stars" },
            { time: 1000, text: "How can you say you'll be mine?" },
            { time: 1000, text: "Everything keeps us apart" },
            { time: 1000, text: "And I'm not the one you were meant to find" },
            { time: 1000, text: "It's not up to you, it's not up to me" },
            { time: 1000, text: "When everyone tells us what we can be" },
            { time: 1000, text: "And how can we rewrite the stars?" },
            { time: 1000, text: "Say that the world can be ours tonight" },
            { time: 1000, text: "All I want is to fly with you" },
            { time: 1000, text: "All I want is to fall with you" },
            { time: 1000, text: "So just give me all of you" },
            { time: 1000, text: "It feels impossible" },
            { time: 1000, text: "It's not impossible" },
            { time: 1000, text: "Is it impossible?" },
            { time: 1000, text: "Say that it's possible" },
            { time: 1000, text: "How do we rewrite the stars?" },
            { time: 1000, text: "Say you were made to be mine" },
            { time: 1000, text: "And nothin' could keep us apart" },
            { time: 1000, text: "'Cause you are the one I was meant to find" },
            { time: 1000, text: "It's up to you and it's up to me" },
            { time: 1000, text: "No one could say what we get to be" },
            { time: 1000, text: "And why don't we rewrite the stars?" },
            { time: 1000, text: "Changin' the world to be ours" },
            { time: 1000, text: "Ah-oh (No, no, no, no)" },
            { time: 1000, text: "Ah-oh (Mm)" },
            { time: 1000, text: "You know I want you" },
            { time: 1000, text: "It's not a secret I try to hide" },
            { time: 1000, text: "But I can't have you" },
            { time: 1000, text: "We're bound to break and my hands are tied" }
        ]
    },

];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();
