

function buildCotacoes(cotacoes) {
  const grid = document.getElementById("cotacoesGrid");
  grid.innerHTML = cotacoes.map(c => `
    <div class="cotacao-card">
      <span class="cotacao-nome">${c.nome}</span>
      <span class="cotacao-valor">${c.valor}</span>
      <span class="cotacao-var ${c.positivo ? 'positivo' : 'negativo'}">${c.variacao}</span>
    </div>
  `).join("");
}


function buildHero(hero) {
  document.getElementById("economiaHeroTitle").textContent = hero.title;
  document.getElementById("economiaHeroDesc").textContent  = hero.desc;
  document.getElementById("economiaHero").addEventListener("click", () => openArticle(hero.id));
}


let econRelIdx   = 0;
let econRelTotal = 0;

function buildRelacionadas(items) {
  const track = document.getElementById("econRelTrack");
  track.innerHTML = "";
  econRelIdx   = 0;
  econRelTotal = items.length;

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
    track.style.transform = `translateX(-${econRelIdx * (card.offsetWidth + 20)}px)`;
    document.getElementById("econRelPrevBtn").disabled = econRelIdx === 0;
    document.getElementById("econRelNextBtn").disabled = econRelIdx >= econRelTotal - visible();
  }

  document.getElementById("econRelPrevBtn").addEventListener("click", () => {
    if (econRelIdx > 0) { econRelIdx--; update(); }
  });
  document.getElementById("econRelNextBtn").addEventListener("click", () => {
    if (econRelIdx < econRelTotal - visible()) { econRelIdx++; update(); }
  });

  window.addEventListener("resize", update);
  setTimeout(update, 0);
}


(async () => {
  const data = await fetchEconomiaData();
  buildCotacoes(data.cotacoes);
  buildHero(data.hero);
  buildRelacionadas(data.relacionadas);
})();