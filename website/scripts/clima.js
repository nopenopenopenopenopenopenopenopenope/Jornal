
const CIDADES = [
  "Arapiraca,AL", "Delmiro Gouveia,AL", "Maceió,AL", "Maragogi,AL", "Palmeira dos Índios,AL", "Penedo,AL", "Santana do Ipanema,AL", "União dos Palmares,AL",

  "Alagoinhas,BA", "Barreiras,BA", "Camaçari,BA", "Feira de Santana,BA", "Guanambi,BA", "Ilhéus,BA", "Itabuna,BA", "Jacobina,BA", "Juazeiro,BA", "Lauro de Freitas,BA", "Luís Eduardo Magalhães,BA", "Paulo Afonso,BA", "Porto Seguro,BA", "Salvador,BA", "Senhor do Bonfim,BA", "Serrinha,BA", "Teixeira de Freitas,BA", "Vitória da Conquista,BA",

  "Aquiraz,CE", "Aracati,CE", "Barbalha,CE", "Canindé,CE", "Caucaia,CE", "Crateús,CE", "Crato,CE", "Fortaleza,CE", "Iguatu,CE", "Itapipoca,CE", "Juazeiro do Norte,CE", "Maracanaú,CE", "Maranguape,CE", "Quixadá,CE", "Quixeramobim,CE", "Sobral,CE", "Tianguá,CE",

  "Açailândia,MA", "Bacabal,MA", "Balsas,MA", "Caxias,MA", "Codó,MA", "Imperatriz,MA", "Paço do Lumiar,MA", "Pinheiro,MA", "Santa Inês,MA", "São José de Ribamar,MA", "São Luís,MA", "Timon,MA",

  "Bayeux,PB", "Cabedelo,PB", "Campina Grande,PB", "Cajazeiras,PB", "Guarabira,PB", "João Pessoa,PB", "Patos,PB", "Santa Rita,PB", "Sousa,PB",

  "Abreu e Lima,PE", "Afogados da Ingazeira,PE", "Araripina,PE", "Arcoverde,PE", "Cabo de Santo Agostinho,PE", "Camaragibe,PE", "Caruaru,PE", "Garanhuns,PE", "Goiana,PE", "Gravatá,PE", "Ipojuca,PE", "Jaboatão dos Guararapes,PE", "Olinda,PE", "Ouricuri,PE", "Paulista,PE", "Petrolina,PE", "Recife,PE", "Salgueiro,PE", "Santa Cruz do Capibaribe,PE", "Serra Talhada,PE", "Vitória de Santo Antão,PE",

  "Altos,PI", "Campo Maior,PI", "Floriano,PI", "Parnaíba,PI", "Picos,PI", "Piripiri,PI", "São Raimundo Nonato,PI", "Teresina,PI",

  "Açu,RN", "Caicó,RN", "Ceará-Mirim,RN", "Currais Novos,RN", "Macau,RN", "Mossoró,RN", "Natal,RN", "Parnamirim,RN", "São Gonçalo do Amarante,RN",

  "Aracaju,SE", "Estância,SE", "Lagarto,SE", "Nossa Senhora do Socorro,SE", "São Cristóvão,SE", "Tobias Barreto,SE"
];

const climaSearchInput = document.getElementById("climaSearch");
const climaSuggestions = document.getElementById("climaSuggestions");

climaSearchInput.addEventListener("input", () => {
  const q = climaSearchInput.value.trim().toLowerCase();
  climaSuggestions.innerHTML = "";
  if (!q) { climaSuggestions.classList.remove("open"); return; }

  const matches = CIDADES.filter(c => c.toLowerCase().includes(q));
  if (!matches.length) { climaSuggestions.classList.remove("open"); return; }

  matches.slice(0, 8).forEach(city => {
    const li = document.createElement("li");
    li.textContent = city;
    li.addEventListener("click", () => selectCity(city));
    climaSuggestions.appendChild(li);
  });
  climaSuggestions.classList.add("open");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#climaSearch") && !e.target.closest("#climaSuggestions")) {
    climaSuggestions.classList.remove("open");
  }
});

document.getElementById("climaSearchBtn").addEventListener("click", () => {
  const city = climaSearchInput.value.trim();
  if (city) selectCity(city);
});

climaSearchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const city = climaSearchInput.value.trim();
    if (city) selectCity(city);
  }
});

async function selectCity(city) {
  
  climaSearchInput.value = city;
  climaSuggestions.classList.remove("open");
  const data = await fetchWeather(city);
  renderClima(data);
}

let hourlyIdx   = 0;
let hourlyTotal = 0;

function updateHourly() {
  const track = document.getElementById("climaHourlyTrack");
  const card  = track.children[0];
  if (!card) return;
  track.style.transform = `translateX(-${hourlyIdx * (card.offsetWidth + 10)}px)`;
  document.getElementById("hourlyPrevBtn").disabled = hourlyIdx === 0;
  document.getElementById("hourlyNextBtn").disabled = hourlyIdx >= hourlyTotal - 3;
}

document.getElementById("hourlyPrevBtn").addEventListener("click", () => {
  if (hourlyIdx > 0) { hourlyIdx--; updateHourly(); }
});
document.getElementById("hourlyNextBtn").addEventListener("click", () => {
  if (hourlyIdx < hourlyTotal - 3) { hourlyIdx++; updateHourly(); }
});
window.addEventListener("resize", updateHourly);


function renderClima(data) {
  const d = data.full;

  document.getElementById("climaHoje").textContent   = "Hoje " + d.date;
  document.getElementById("climaCidade").textContent = d.city + " " + d.time.split(":")[0] + "h";

  document.getElementById("climaBigIcon").innerHTML  = conditionToIcon(d.condition_slug, "clima-big-fa");
  document.getElementById("climaBigTemp").textContent = d.temp + "° C";
  document.getElementById("climaDetails").innerHTML = `
    <span>Chuva: ${d.rain}%</span>
    <span>Umidade: ${d.humidity}%</span>
    <span>Vento: ${d.wind_speedy}</span>
  `;

  const hourlyTrack = document.getElementById("climaHourlyTrack");
  hourlyTrack.innerHTML = "";
  hourlyTotal = d.hourly.length;
  hourlyIdx   = 0;

  d.hourly.forEach(h => {
    const card = document.createElement("div");
    card.className = "clima-hour-card";
    card.innerHTML = `
      <span class="clima-hour-label">${h.hour}</span>
      <div class="clima-card-icon">${conditionToIcon(h.condition)}</div>
      <span class="clima-hour-temps">${h.min}° ${h.max}°</span>
    `;
    hourlyTrack.appendChild(card);
  });
  setTimeout(updateHourly, 0);

  const week = document.getElementById("climaWeek");
  week.innerHTML = "";
  
  d.forecast.forEach(f => {
    const card = document.createElement("div");
    card.className = "clima-day-card";
    card.innerHTML = `
      <span class="clima-day-label">${f.weekday}</span>
      <div class="clima-card-icon">${conditionToIcon(f.condition)}</div>
      <span class="clima-day-temps">${f.min}° ${f.max}°</span>
    `;
    week.appendChild(card);
  });
}


(async () => {
  const data = await fetchWeather();
  renderClima(data);
})();