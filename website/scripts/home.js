
const track   = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
let totalItems   = 0;

function visibleCount() {
  return window.innerWidth <= 700 ? 1 : 4;
}

function updateCarousel() {
  const card = track.children[0];
  if (!card) return;
  track.style.transform = `translateX(-${currentIndex * (card.offsetWidth + 14)}px)`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= totalItems - visibleCount();
}

function buildCards(news) {
  track.innerHTML = "";
  totalItems  = news.length;
  currentIndex = 0;

  news.forEach(item => {
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

  setTimeout(updateCarousel, 0);
}

function buildFeatured(article) {
  const img   = document.querySelector(".featured-img");
  const title = document.querySelector(".featured-content h2");
  const Herotitle = document.getElementById("homeHeroTitle");
  const Herobody = document.getElementById("homeHeroDesc");
  const body  = document.querySelector(".featured-content p");
  const date  = document.querySelector(".featured-content .date");

  if (article.imageUrl) {
    img.style.backgroundImage    = `url(${article.imageUrl})`;
    img.style.backgroundSize     = "cover";
    img.style.backgroundPosition = "center";
  }
  Herotitle.textContent = article.title;
  Herobody.textContent  = article.body;
  title.textContent = article.title;
  body.textContent  = article.body;
  date.textContent  = article.date;

  document.querySelector(".featured-inner").style.cursor = "pointer";
  document.querySelector(".featured-inner").addEventListener("click", () => openArticle(article.id));
}

function buildWeather(data) {
  document.querySelector(".widget-location").textContent = `${data.location} ${data.time}`;
  document.querySelector(".clima-icon").innerHTML        = data.icon;
  document.querySelector(".clima-temp").textContent      = data.temp;
}

function buildEconWidget(cotacoes) {
  const el = document.getElementById("homeEconWidget");
  if (!el) return;
  el.innerHTML = cotacoes.map(c => `
    <div class="econ-widget-row">
      <span class="econ-widget-nome">${c.nome}</span>
      <span class="econ-widget-valor">${c.valor}</span>
      <span class="econ-widget-var ${c.positivo ? 'positivo' : 'negativo'}">${c.variacao}</span>
    </div>
  `).join("");
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) { currentIndex--; updateCarousel(); }
});
nextBtn.addEventListener("click", () => {
  if (currentIndex < totalItems - visibleCount()) { currentIndex++; updateCarousel(); }
});
window.addEventListener("resize", updateCarousel);

(async () => {
  const [news, featured, weather, economia] = await Promise.all([
    fetchRecentNews(),
    fetchFeaturedArticle(),
    fetchWeather(),
    fetchEconomiaData(),
  ]);
  buildCards(news);
  buildFeatured(featured);
  buildWeather(weather);
  buildEconWidget(economia.cotacoes);
})();