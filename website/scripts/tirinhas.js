
let allTirinhas = [];


function renderTirinhas(list) {
  const container = document.getElementById("tirinhasList");
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = '<p class="tirinhas-empty">Nenhuma tirinha encontrada.</p>';
    return;
  }

  list.forEach(tirinha => {
    const block = document.createElement("div");
    block.className = "tirinha-block";

    const paineis = tirinha.paineis.map(url => `
      <div class="tirinha-panel">
        <img src="${url || ""}" alt="Painel" data-placeholder>
      </div>
    `).join("");

    block.innerHTML = `
      <div class="tirinha-titulo">${tirinha.titulo}</div>
      <div class="tirinha-strip">${paineis}</div>
    `;

    container.appendChild(block);
  });
}


document.getElementById("tirinhasSearch").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  if (!q) {
    renderTirinhas(allTirinhas);
    return;
  }
  renderTirinhas(allTirinhas.filter(t => t.titulo.toLowerCase().includes(q)));
});

document.getElementById("tirinhasSearchBtn").addEventListener("click", () => {
  const q = document.getElementById("tirinhasSearch").value.trim().toLowerCase();
  renderTirinhas(allTirinhas.filter(t => !q || t.titulo.toLowerCase().includes(q)));
});


(async () => {
  allTirinhas = await fetchTirinhas();
  renderTirinhas(allTirinhas);
})();
