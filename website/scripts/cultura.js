
const NORDESTE_ESTADOS_CUL = [
  { nome: "Alagoas",             sigla: "AL" },
  { nome: "Bahia",               sigla: "BA" },
  { nome: "Ceará",               sigla: "CE" },
  { nome: "Maranhão",            sigla: "MA" },
  { nome: "Paraíba",             sigla: "PB" },
  { nome: "Pernambuco",          sigla: "PE" },
  { nome: "Piauí",               sigla: "PI" },
  { nome: "Rio Grande do Norte", sigla: "RN" },
  { nome: "Sergipe",             sigla: "SE" },
];


const culSearchInput = document.getElementById("culturaSearch");
const culSuggestions = document.getElementById("culturaSuggestions");

culSearchInput.addEventListener("input", () => {
  const q = culSearchInput.value.trim().toLowerCase();
  culSuggestions.innerHTML = "";
  if (!q) { culSuggestions.classList.remove("open"); return; }

  const matches = NORDESTE_ESTADOS_CUL.filter(e =>
    e.nome.toLowerCase().includes(q) || e.sigla.toLowerCase().includes(q)
  );

  if (!matches.length) { culSuggestions.classList.remove("open"); return; }

  matches.forEach(e => {
    const li = document.createElement("li");
    li.textContent = `${e.nome} (${e.sigla})`;
    li.addEventListener("click", () => selectCulturaEstado(e));
    culSuggestions.appendChild(li);
  });
  culSuggestions.classList.add("open");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#culturaSearch") && !e.target.closest("#culturaSuggestions")) {
    culSuggestions.classList.remove("open");
  }
});

document.getElementById("culturaSearchBtn").addEventListener("click", () => {
  const q = culSearchInput.value.trim().toLowerCase();
  const match = NORDESTE_ESTADOS_CUL.find(e =>
    e.nome.toLowerCase() === q || e.sigla.toLowerCase() === q
  );
  if (match) selectCulturaEstado(match);
});

async function selectCulturaEstado(estado) {
  culSearchInput.value = `${estado.nome} (${estado.sigla})`;
  culSuggestions.classList.remove("open");
  const data = await fetchCulturaEstado(estado.sigla);
  renderCultura(estado, data);
}


let culCulIndex = 0;
let culCulTotal = 0;

function renderCulturaSlideshow(items) {
  const track = document.getElementById("culturaSlideshowTrack");
  track.innerHTML = "";
  culCulIndex = 0;
  culCulTotal = items.length;

  items.forEach(item => {
    const slide = document.createElement("div");
    slide.className = "turismo-slide";
    slide.innerHTML = `<span class="turismo-slide-label">${item}</span>`;
    track.appendChild(slide);
  });
  updateCulturaSlideshow();
}

function updateCulturaSlideshow() {
  document.getElementById("culturaSlideshowTrack").style.transform =
    `translateX(-${culCulIndex * 100}%)`;
  document.getElementById("culCulPrevBtn").disabled = culCulIndex === 0;
  document.getElementById("culCulNextBtn").disabled = culCulIndex >= culCulTotal - 1;
}

document.getElementById("culCulPrevBtn").addEventListener("click", () => {
  if (culCulIndex > 0) { culCulIndex--; updateCulturaSlideshow(); }
});
document.getElementById("culCulNextBtn").addEventListener("click", () => {
  if (culCulIndex < culCulTotal - 1) { culCulIndex++; updateCulturaSlideshow(); }
});


function makeCulturaCarousel3(trackId, prevId, nextId, items) {
  const track = document.getElementById(trackId);
  track.innerHTML = "";
  let idx = 0;
  const total = items.length;

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "turismo-card3";
    div.innerHTML = `<span class="turismo-card3-label">${item}</span>`;
    track.appendChild(div);
  });

  function visible() { return window.innerWidth <= 700 ? 1 : 3; }

  function update() {
    const card = track.children[0];
    if (!card) return;
    track.style.transform = `translateX(-${idx * (card.offsetWidth + 14)}px)`;
    document.getElementById(prevId).disabled = idx === 0;
    document.getElementById(nextId).disabled = idx >= total - visible();
  }

  document.getElementById(prevId).addEventListener("click", () => {
    if (idx > 0) { idx--; update(); }
  });
  document.getElementById(nextId).addEventListener("click", () => {
    if (idx < total - visible()) { idx++; update(); }
  });

  setTimeout(update, 0);
  window.addEventListener("resize", update);
}


function renderCulturaGrid4(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "turismo-card";
    div.innerHTML = `<span class="turismo-card-label">${item}</span>`;
    el.appendChild(div);
  });
}


function renderCultura(estado, data) {
  document.getElementById("culturaHeroTitle").textContent = `${estado.nome} (${estado.sigla})`;
  document.getElementById("culturaHeroDesc").textContent  = data.descricao;

  renderCulturaGrid4("culturaFestas", data.festas);
  renderCulturaSlideshow(data.culinaria);
  renderCulturaGrid4("culturaLendas", data.lendas);
  makeCulturaCarousel3("culturaArteTrack",   "culturaArtePrevBtn",   "culturaArteNextBtn",   data.arte);
  makeCulturaCarousel3("culturaPontosTrack", "culturaPontosPrevBtn", "culturaPontosNextBtn", data.pontos);
}


(async () => {
  const defaultEstado = NORDESTE_ESTADOS_CUL.find(e => e.sigla === "PE");
  const data = await fetchCulturaEstado("PE");
  renderCultura(defaultEstado, data);
})();