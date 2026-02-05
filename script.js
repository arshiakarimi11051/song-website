// ========================
// ARTIST DATA - WITH WORKING AUDIO URLs
// ========================
const artistsData = [
    {
        id: 1,
        name: "Kendrick Lamar",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop",
        genre: "Hip-Hop/Rap",
        bio: "Kendrick Lamar Duckworth is an American rapper and songwriter.",
        songs: 120,
        albums: 5,
        popularSongs: [
            { 
                title: "HUMBLE.", 
                album: "DAMN.", 
                duration: "2:57",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            },
            { 
                title: "Alright", 
                album: "TPAB", 
                duration: "3:39",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
            },
            { 
                title: "Money Trees", 
                album: "GKMC", 
                duration: "6:26",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
            }
        ],
        albumsList: [
            { title: "DAMN.", year: 2017, cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop" },
            { title: "TPAB", year: 2015, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" },
            { title: "GKMC", year: 2012, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" }
        ]
    },
    {
        id: 2,
        name: "Tyler, The Creator",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop",
        genre: "Hip-Hop/Alternative",
        bio: "Tyler Gregory Okonma is an American rapper and record producer.",
        songs: 95,
        albums: 7,
        popularSongs: [
            { 
                title: "EARFQUAKE", 
                album: "IGOR", 
                duration: "3:10",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
            },
            { 
                title: "See You Again", 
                album: "Flower Boy", 
                duration: "3:00",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
            },
            { 
                title: "NEW MAGIC WAND", 
                album: "IGOR", 
                duration: "3:15",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
            }
        ],
        albumsList: [
            { title: "IGOR", year: 2019, cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop" },
            { title: "Flower Boy", year: 2017, cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=400&fit=crop" },
            { title: "Wolf", year: 2013, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" }
        ]
    },
    {
        id: 3,
        name: "Drake",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
        genre: "Hip-Hop/R&B",
        bio: "Aubrey Drake Graham is a Canadian rapper, singer, and actor.",
        songs: 250,
        albums: 8,
        popularSongs: [
            { 
                title: "God's Plan", 
                album: "Scorpion", 
                duration: "3:19",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
            },
            { 
                title: "One Dance", 
                album: "Views", 
                duration: "2:54",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
            },
            { 
                title: "Hotline Bling", 
                album: "Views", 
                duration: "4:27",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
            }
        ],
        albumsList: [
            { title: "CLB", year: 2021, cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop" },
            { title: "Scorpion", year: 2018, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" },
            { title: "Views", year: 2016, cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop" }
        ]
    },
    {
        id: 4,
        name: "The Weeknd",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
        genre: "R&B/Pop",
        bio: "Abel Makkonen Tesfaye, known professionally as the Weeknd.",
        songs: 85,
        albums: 5,
        popularSongs: [
            { 
                title: "Blinding Lights", 
                album: "After Hours", 
                duration: "3:20",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
            },
            { 
                title: "Starboy", 
                album: "Starboy", 
                duration: "3:50",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
            },
            { 
                title: "Save Your Tears", 
                album: "After Hours", 
                duration: "3:35",
                audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
            }
        ],
        albumsList: [
            { title: "After Hours", year: 2020, cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop" },
            { title: "Starboy", year: 2016, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" },
            { title: "BBTM", year: 2015, cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop" }
        ]
    }
];

// ========================
// SIMPLE WORKING AUDIO PLAYER
// ========================
let currentAudio = null;
let currentPlayer = null;
let progressInterval = null;

function playRealSong(songTitle, artistName, audioUrl) {
    console.log("🎵 Playing:", songTitle, "URL:", audioUrl);
    
    // Stop current audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    // Clear progress interval
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
    
    // Remove old player
    if (currentPlayer) {
        currentPlayer.remove();
    }
    
    // Create SIMPLE player (guaranteed to work)
    currentPlayer = document.createElement('div');
    currentPlayer.id = 'musicPlayer';
    currentPlayer.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #1DB954, #1ed760);
        color: white;
        padding: 20px;
        border-radius: 15px;
        z-index: 10000;
        width: 320px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        font-family: Arial, sans-serif;
    `;
    
    currentPlayer.innerHTML = `
        <div style="display: flex; align-items: center; margin-bottom: 15px;">
            <div style="background: rgba(255,255,255,0.2); width: 50px; height: 50px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                <i class="fas fa-music" style="font-size: 24px;"></i>
            </div>
            <div style="flex: 1;">
                <div style="font-size: 12px; opacity: 0.9; margin-bottom: 3px;">NOW PLAYING</div>
                <div style="font-size: 18px; font-weight: bold; margin-bottom: 3px;">${songTitle}</div>
                <div style="font-size: 14px; opacity: 0.9;">${artistName}</div>
            </div>
        </div>
        
        <div style="background: rgba(255,255,255,0.2); height: 4px; border-radius: 2px; margin: 15px 0;">
            <div id="progressBar" style="background: white; width: 0%; height: 100%; border-radius: 2px;"></div>
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="font-size: 12px;">
                <span id="currentTime">0:00</span> / <span id="totalTime">0:00</span>
            </div>
            <div style="display: flex; gap: 10px;">
                <button id="playBtn" style="background: rgba(255,255,255,0.2); border: none; width: 40px; height: 40px; border-radius: 50%; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-play"></i>
                </button>
                <button onclick="stopPlayer()" style="background: rgba(255,255,255,0.2); border: none; padding: 8px 20px; border-radius: 20px; color: white; cursor: pointer;">
                    <i class="fas fa-stop"></i> Stop
                </button>
            </div>
        </div>
        
        <div style="margin-top: 15px; font-size: 11px; opacity: 0.7; text-align: center;">
            <i class="fas fa-headphones"></i> Royalty-free piano music
        </div>
        <div id="statusMessage" style="margin-top: 10px; font-size: 11px; text-align: center;"></div>
    `;
    
    document.body.appendChild(currentPlayer);
    
    // Create audio element
    currentAudio = new Audio();
    currentAudio.src = audioUrl;
    currentAudio.preload = "auto";
    
    // Add event listeners
    currentAudio.addEventListener('loadedmetadata', function() {
        const totalTime = document.getElementById('totalTime');
        totalTime.textContent = formatTime(currentAudio.duration);
    });
    
    currentAudio.addEventListener('timeupdate', function() {
        updateProgress();
    });
    
    currentAudio.addEventListener('ended', function() {
        stopPlayer();
    });
    
    currentAudio.addEventListener('error', function(e) {
        console.log("Audio error:", e);
        document.getElementById('statusMessage').innerHTML = 
            '<span style="color: #ffcc00;">⚠️ Could not load audio. Click play for simulated playback.</span>';
        setupSimulatedPlayback(songTitle, artistName);
    });
    
    // Play button click
    document.getElementById('playBtn').onclick = function() {
        if (currentAudio.paused) {
            startPlayback();
        } else {
            pausePlayback();
        }
    };
    
    // Try to play automatically
    startPlayback();
}

function startPlayback() {
    const playBtn = document.getElementById('playBtn');
    
    currentAudio.play().then(() => {
        console.log("Audio playing successfully");
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        document.getElementById('statusMessage').innerHTML = 
            '<span style="color: #90ff90;">✅ Playing...</span>';
    }).catch(error => {
        console.log("Auto-play failed, waiting for user click:", error);
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        document.getElementById('statusMessage').innerHTML = 
            '<span style="color: #ffcc00;">Click play button to start music</span>';
        
        // Setup simulated playback as fallback
        setupSimulatedPlayback("Demo: " + "Current Song", "Artist");
    });
}

function pausePlayback() {
    if (currentAudio) {
        currentAudio.pause();
        document.getElementById('playBtn').innerHTML = '<i class="fas fa-play"></i>';
    }
}

function updateProgress() {
    if (!currentAudio) return;
    
    const current = currentAudio.currentTime;
    const duration = currentAudio.duration || 180; // 3 minutes fallback
    
    // Update time display
    document.getElementById('currentTime').textContent = formatTime(current);
    
    // Update progress bar
    const progressPercent = (current / duration) * 100;
    document.getElementById('progressBar').style.width = progressPercent + '%';
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function setupSimulatedPlayback(songTitle, artistName) {
    // Fallback: Simulate playback if real audio fails
    console.log("Setting up simulated playback");
    
    let simulatedTime = 0;
    const totalTime = 30; // 30 seconds simulation
    
    if (progressInterval) clearInterval(progressInterval);
    
    progressInterval = setInterval(() => {
        simulatedTime += 1;
        if (simulatedTime >= totalTime) {
            stopPlayer();
            return;
        }
        
        // Update simulated progress
        document.getElementById('currentTime').textContent = formatTime(simulatedTime);
        const progressPercent = (simulatedTime / totalTime) * 100;
        document.getElementById('progressBar').style.width = progressPercent + '%';
    }, 1000);
}

function stopPlayer() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
    
    if (currentPlayer) {
        currentPlayer.remove();
        currentPlayer = null;
    }
}

// ========================
// REST OF YOUR CODE (Keep as is)
// ========================
function displayArtists(artists) {
    const grid = document.getElementById('artistsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    artists.forEach(artist => {
        const card = document.createElement('div');
        card.className = 'artist-card';
        card.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}" class="artist-image">
            <div class="artist-info">
                <h3>${artist.name}</h3>
                <div class="genre">${artist.genre}</div>
                <div class="song-count">
                    <i class="fas fa-music"></i> ${artist.songs} songs
                </div>
            </div>
        `;
        
        card.onclick = () => {
            window.location.href = `artist.html?id=${artist.id}`;
        };
        
        grid.appendChild(card);
    });
}

function setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (!searchBtn || !searchInput) return;
    
    function search() {
        const term = searchInput.value.toLowerCase().trim();
        
        if (!term) {
            displayArtists(artistsData);
            return;
        }
        
        const filtered = artistsData.filter(artist => 
            artist.name.toLowerCase().includes(term) ||
            artist.genre.toLowerCase().includes(term)
        );
        
        displayArtists(filtered);
        
        if (filtered.length === 0) {
            const grid = document.getElementById('artistsGrid');
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align:center; padding:40px; color:#aaa;">
                    <i class="fas fa-search" style="font-size:48px; margin-bottom:20px;"></i>
                    <h3>No artists found</h3>
                    <p>Try a different search</p>
                </div>
            `;
        }
    }
    
    searchBtn.onclick = search;
    searchInput.onkeyup = (e) => e.key === 'Enter' && search();
}

function displayArtistDetails() {
    const params = new URLSearchParams(window.location.search);
    const artistId = parseInt(params.get('id')) || 1;
    const artist = artistsData.find(a => a.id === artistId) || artistsData[0];
    
    document.body.innerHTML = `
        <nav class="navbar">
            <div class="container">
                <h1 class="logo"><i class="fas fa-music"></i> MusicCatalog</h1>
                <a href="index.html" class="back-btn">
                    <i class="fas fa-arrow-left"></i> Back to Artists
                </a>
            </div>
        </nav>
        
        <main class="container">
            <div class="artist-header">
                <img src="${artist.image}" alt="${artist.name}" class="artist-avatar">
                <div class="artist-details">
                    <h2>${artist.name}</h2>
                    <div class="genre">${artist.genre}</div>
                    <p>${artist.bio}</p>
                    
                    <div class="artist-stats">
                        <div class="stat">
                            <span class="stat-number">${artist.albums}</span>
                            <span class="stat-label">Albums</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">${artist.songs}</span>
                            <span class="stat-label">Songs</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <section class="songs-section">
                <h3 class="section-title">
                    <i class="fas fa-play-circle"></i> Popular Songs
                    <span style="font-size:14px; color:#aaa; font-weight:normal; margin-left:10px;">
                        Click play to hear music
                    </span>
                </h3>
                <div class="songs-list" id="songsList"></div>
            </section>
            
            <section class="songs-section">
                <h3 class="section-title"><i class="fas fa-compact-disc"></i> Albums</h3>
                <div class="albums-grid" id="albumsGrid"></div>
            </section>
        </main>
        
        <footer>
            <div class="container">
                <p>Music Catalog &copy; 2024 | University Project</p>
                <p class="disclaimer">Playing royalty-free piano music for demonstration</p>
            </div>
        </footer>
    `;
    
    const songsList = document.getElementById('songsList');
    artist.popularSongs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.className = 'song-item';
        songItem.innerHTML = `
            <div class="song-number">${index + 1}</div>
            <div class="song-info">
                <div class="song-title">${song.title}</div>
                <div class="song-album">${song.album}</div>
            </div>
            <div class="song-duration">${song.duration}</div>
            <button class="play-btn" onclick="playRealSong('${song.title.replace(/'/g, "\\'")}', '${artist.name.replace(/'/g, "\\'")}', '${song.audioUrl}')">
                <i class="fas fa-play"></i>
            </button>
        `;
        songsList.appendChild(songItem);
    });
    
    const albumsGrid = document.getElementById('albumsGrid');
    artist.albumsList.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.className = 'album-card';
        albumCard.innerHTML = `
            <img src="${album.cover}" alt="${album.title}" class="album-cover">
            <div class="album-info">
                <h4>${album.title}</h4>
                <div class="album-year">${album.year}</div>
            </div>
        `;
        albumsGrid.appendChild(albumCard);
    });
}

// ========================
// INITIALIZE
// ========================
document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Music website loaded");
    
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) loading.style.display = 'none';
    }, 500);
    
    if (document.getElementById('artistsGrid')) {
        displayArtists(artistsData);
        setupSearch();
    } else if (window.location.pathname.includes('artist.html')) {
        displayArtistDetails();
    }
    
    window.playRealSong = playRealSong;
    window.stopPlayer = stopPlayer;
});