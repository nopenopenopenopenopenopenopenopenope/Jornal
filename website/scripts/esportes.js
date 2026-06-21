

function makeNewsCarousel(containerId, prevId, nextId, items) {
  const track = document.getElementById(containerId);
  if (!track) return;
  track.innerHTML = "";
  let idx = 0;
  const total = items.length;

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "news-card news-card--link";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.excerpt}</p>
      <span class="date">${item.date}</span>
    `;
    card.addEventListener("click", () => openArticle(item.id));
    track.appendChild(card);
  });

  function visible() { return window.innerWidth <= 700 ? 1 : 4; }

  function update() {
    const card = track.children[0];
    if (!card) return;
    track.style.transform = `translateX(-${idx * (card.offsetWidth + 20)}px)`;
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
  setTimeout(update, 0);
}




function buildAtletas(atletas) {
  const track = document.getElementById("atletasTrack");
  track.innerHTML = "";

  atletas.forEach(atleta => {
    const card = document.createElement("div");
    card.className = "atleta-card";

    const avatarInner = atleta.fotoUrl
      ? `<img src="${atleta.fotoUrl}" alt="${atleta.nome}" data-placeholder>`
      : `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
           <circle cx="50" cy="35" r="22"/>
           <ellipse cx="50" cy="85" rx="32" ry="22"/>
         </svg>`;

    card.innerHTML = `
      <div class="atleta-avatar">${avatarInner}</div>
      <span class="atleta-nome">${atleta.nome}</span>
    `;
    track.appendChild(card);
  });
}


(async () => {
  const data = await fetchEsportesData();

  document.getElementById("esportesHeroTitle").textContent = data.hero.title;
  document.getElementById("esportesHeroDesc").textContent  = data.hero.desc;

  buildAtletas(data.atletas);
  makeNewsCarousel("esportesRelTrack", "esportesRelPrevBtn", "esportesRelNextBtn", data.relacionadas);
})();