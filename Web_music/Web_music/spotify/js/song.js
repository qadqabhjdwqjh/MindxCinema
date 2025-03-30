const CLIENT_ID = "3e9f98a5d5194c2ab4ef3ec273f8dcdc";
const CLIENT_SECRET = "3190c7f495fa4e658136edb359a6cb55";

async function getAccessToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
    },
    body: "grant_type=client_credentials",
  });
  const data = await response.json();
  return data.access_token;
}

function getSongIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id'); // lấy id từ URL
  }

  async function loadSong() {
    const songId = getSongIdFromURL();
    if (!songId) {
      alert("Không tìm thấy bài hát!");
      return;
    }

    const token = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/tracks/${songId}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    const data = await response.json();
    console.log(data);

    document.getElementById("songName").innerText = data.name;
    document.getElementById("songListen").innerHTML = `
        <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${data.id}?utm_source=generator" 
        width="500px" height="150" frameBorder="0" allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
    `
  }

  loadSong();