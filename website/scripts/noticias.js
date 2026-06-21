
let articleComments = [];
let relTotal = 0;
let relIndex = 0;


function buildArticle(data) {
  document.querySelector(".article-title").textContent   = data.title;
  document.querySelector(".article-excerpt").textContent = data.excerpt;
  document.querySelector(".article-meta").innerHTML =
    `<span>Autor: ${data.author}</span><br><span>${data.location}, ${data.date}</span>`;

  const img = document.querySelector(".article-image");
  img.style.backgroundImage = data.imageUrl ? `url(${data.imageUrl})` : "";
  img.style.backgroundSize     = "cover";
  img.style.backgroundPosition = "center";

  document.querySelector(".article-caption").textContent = data.caption;
  document.querySelector(".article-body").innerHTML =
    data.body.map(p => `<p>${p}</p>`).join("");
}


function buildReferences(refs) {
  document.querySelector(".references-list").innerHTML =
    refs.map(r => `<li>${r}</li>`).join("");
}


function visibleRelated() {
  return window.innerWidth <= 700 ? 1 : 4;
}

function updateRelCarousel() {
  const track = document.getElementById("relatedTrack");
  const card  = track.children[0];
  if (!card) return;
  track.style.transform = `translateX(-${relIndex * (card.offsetWidth + 14)}px)`;
  document.getElementById("relPrevBtn").disabled = relIndex === 0;
  document.getElementById("relNextBtn").disabled = relIndex >= relTotal - visibleRelated();
}

function buildRelated(relatedIds) {
  const track = document.getElementById("relatedTrack");
  track.innerHTML = "";
  relIndex = 0;

  const items = relatedIds.map(id => getNewsById(id)).filter(Boolean);
  relTotal = items.length;

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "news-card news-card--link";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.excerpt}</p>
      <span class="date">${item.dateShort}</span>
    `;
    card.addEventListener("click", () => openArticle(item.id));
    track.appendChild(card);
  });

  setTimeout(updateRelCarousel, 0);
}

document.getElementById("relPrevBtn").addEventListener("click", () => {
  if (relIndex > 0) { relIndex--; updateRelCarousel(); }
});
document.getElementById("relNextBtn").addEventListener("click", () => {
  if (relIndex < relTotal - visibleRelated()) { relIndex++; updateRelCarousel(); }
});
window.addEventListener("resize", updateRelCarousel);


function renderComments() {
  const list = document.getElementById("commentsList");
  list.innerHTML = articleComments.map((c, i) => `
    <div class="comment-item">
      <div class="comment-avatar">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="20" fill="#ccc"/>
          <circle cx="20" cy="15" r="7" fill="#999"/>
          <ellipse cx="20" cy="34" rx="11" ry="8" fill="#999"/>
        </svg>
      </div>
      <div class="comment-content">
        <div class="comment-header">
          <span class="comment-user">${c.user}</span>
          <span class="comment-time">${c.time}</span>
        </div>
        <p class="comment-text">${c.text}</p>
        <div class="comment-actions">
          <button class="comment-like" data-index="${i}">👍 ${c.likes}</button>
          <button class="comment-reply">✈ Responder</button>
        </div>
      </div>
    </div>
  `).join("");

  list.querySelectorAll(".comment-like").forEach(btn => {
    btn.addEventListener("click", () => {
      articleComments[+btn.dataset.index].likes++;
      renderComments();
    });
  });
}

function buildComments(comments) {
  articleComments = comments;
  renderComments();
}

document.getElementById("commentSubmit").addEventListener("click", () => {
  const input = document.getElementById("commentInput");
  const text  = input.value.trim();
  if (!text) return;
  articleComments.unshift({ user: "Você", time: "Agora", likes: 0, text });
  input.value = "";
  renderComments();
});


async function renderArticle(id) {
  const data = await fetchArticle(id);
  if (!data) return;
  buildArticle(data);
  buildReferences(data.references);
  buildRelated(data.relatedIds);
  buildComments(data.comments);
  document.getElementById("noticias").scrollTop = 0;
  window.scrollTo(0, 0);
}


function openArticle(id) {
  const hash = "#noticias";
  history.pushState({ articleId: id }, "", hash);
  if (typeof setPage === "function") setPage(hash);
  renderArticle(id);
}