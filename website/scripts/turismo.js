
const NORDESTE_ESTADOS_TUR = [
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


const turSearchInput = document.getElementById("turismoSearch");
const turSuggestions = document.getElementById("turismoSuggestions");

turSearchInput.addEventListener("input", () => {
  const q = turSearchInput.value.trim().toLowerCase();
  turSuggestions.innerHTML = "";
  if (!q) { turSuggestions.classList.remove("open"); return; }

  const matches = NORDESTE_ESTADOS_TUR.filter(e =>
    e.nome.toLowerCase().includes(q) || e.sigla.toLowerCase().includes(q)
  );
  if (!matches.length) { turSuggestions.classList.remove("open"); return; }

  matches.forEach(e => {
    const li = document.createElement("li");
    li.textContent = `${e.nome} (${e.sigla})`;
    li.addEventListener("click", () => selectTurismoEstado(e));
    turSuggestions.appendChild(li);
  });
  turSuggestions.classList.add("open");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#turismoSearch") && !e.target.closest("#turismoSuggestions")) {
    turSuggestions.classList.remove("open");
  }
});

document.getElementById("turismoSearchBtn").addEventListener("click", () => {
  const q = turSearchInput.value.trim().toLowerCase();
  const match = NORDESTE_ESTADOS_TUR.find(e =>
    e.nome.toLowerCase() === q || e.sigla.toLowerCase() === q
  );
  if (match) selectTurismoEstado(match);
});

async function selectTurismoEstado(estado) {
  turSearchInput.value = `${estado.nome} (${estado.sigla})`;
  turSuggestions.classList.remove("open");
  const data = await fetchTurismoEstado(estado.sigla);
  renderTurismo(estado, data);
}


function makeCarouselTur(trackId, prevId, nextId, items) {
  const track = document.getElementById(trackId);
  track.innerHTML = "";
  let idx = 0;
  const total = items.length;

  items.forEach(label => {
    const card = document.createElement("div");
    card.className = "turismo-card3";
    card.innerHTML = `<span class="turismo-card3-label">${label}</span>`;
    track.appendChild(card);
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

  window.addEventListener("resize", update);
  setTimeout(update, 0);
}


function renderCustos(items) {
  const list = document.getElementById("turCustosList");
  list.innerHTML = items.map(c => `
    <div class="turismo-custo-card">
      <h3>${c.titulo}</h3>
      <p>${c.descricao}</p>
    </div>
  `).join("");
}


async function renderTurismoWidgets(sigla) {
  const clima = await fetchWeather();
  document.getElementById("turClimaLocation").textContent = `${clima.location} ${clima.time}`;
  document.getElementById("turClimaIcon").innerHTML     = clima.icon;
  document.getElementById("turClimaTemp").textContent     = clima.temp;

  const cultura = await fetchCulturaEstado(sigla);
  document.getElementById("turCulturaSnippet").textContent = cultura.descricao;
}


async function renderTurismo(estado, data) {
  document.getElementById("turismoHeroTitle").textContent = `${estado.nome} (${estado.sigla})`;
  document.getElementById("turismoHeroDesc").textContent  = data.descricao;

  makeCarouselTur("turPontosTrack",  "turPontosPrevBtn",  "turPontosNextBtn",  data.pontos);
  makeCarouselTur("turEventosTrack", "turEventosPrevBtn", "turEventosNextBtn", data.eventos);
  renderCustos(data.custos);
  await renderTurismoWidgets(estado.sigla);
}


(async () => {
  const defaultEstado = NORDESTE_ESTADOS_TUR.find(e => e.sigla === "PE");
  const data = await fetchTurismoEstado("PE");
  renderTurismo(defaultEstado, data);
})();