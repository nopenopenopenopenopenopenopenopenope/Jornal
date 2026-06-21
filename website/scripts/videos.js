

function youtubeUrlToEmbed(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    let id = null;
    if (u.hostname.includes("youtu.be")) {
      id = u.pathname.slice(1);
    } else if (u.pathname.includes("/shorts/")) {
      id = u.pathname.split("/shorts/")[1];
    } else if (u.pathname.includes("/embed/")) {
      return url;
    } else {
      id = u.searchParams.get("v");
    }
    if (!id) return null;
    id = id.split("?")[0].split("&")[0];
    return `https://www.youtube.com/embed/${id}?rel=0`;
  } catch {
    return null;
  }
}


function buildVideosSecao(secao, index) {
  const prevId  = `vidPrev_${index}`;
  const nextId  = `vidNext_${index}`;
  const trackId = `vidTrack_${index}`;

  const block = document.createElement("div");
  block.className = "videos-block";
  block.innerHTML = `
    <div class="section-title">${secao.titulo}</div>
    <div class="videos-carousel-wrap">
      <button class="carousel-btn" id="${prevId}">&#8249;</button>
      <div class="carousel-track-container">
        <div class="carousel-track" id="${trackId}"></div>
      </div>
      <button class="carousel-btn" id="${nextId}">&#8250;</button>
    </div>
  `;

  document.getElementById("videosSecoes").appendChild(block);

  setTimeout(() => {
    const track = document.getElementById(trackId);
    let idx = 0;
    const total = secao.videos.length;

    secao.videos.forEach(video => {
      const card = document.createElement("div");
      card.className = "video-card";

      const embedUrl = youtubeUrlToEmbed(video.youtubeUrl);

      const embedHtml = embedUrl
        ? `<iframe
             class="video-iframe"
             src="${embedUrl}"
             title="${video.titulo}"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen
           ></iframe>`
        : `<div class="video-placeholder">
             <div class="video-play-icon"></div>
           </div>`;

      card.innerHTML = `
        <div class="video-embed-wrap">${embedHtml}</div>
        <span class="video-title">${video.titulo}</span>
      `;
      track.appendChild(card);
    });

    function visible() { return window.innerWidth <= 700 ? 1 : 3; }

    function update() {
      const card = track.children[0];
      if (!card) return;
      track.style.transform = `translateX(-${idx * (card.offsetWidth + 16)}px)`;
      document.getElementById(prevId).disabled = idx === 0;
      document.getElementById(nextId).disabled = idx >= total - visible();
    }

    document.getElementById(prevId).addEventListener("click", () => {
      if (idx > 0) { idx--; update(); }
    });
    document.getElementById(nextId).addEventListener("click", () => {
      if (idx < total - visible()) { idx++; update(); }
    });

    window.addEventListener("resize", update);
    update();
  }, 0);
}


(async () => {
  const data = await fetchVideosData();

  document.getElementById("videosHeroTitle").textContent = data.hero.title;
  document.getElementById("videosHeroDesc").textContent  = data.hero.desc;

  data.secoes.forEach((secao, i) => buildVideosSecao(secao, i));
})();