
const links = document.querySelectorAll("header nav a");
const pages = document.querySelectorAll(".page");

function setPage(hash) {
  const target = hash || "#home";

  pages.forEach(page => {
    page.classList.toggle("active", "#" + page.id === target);
  });

  links.forEach(link => {
    link.classList.toggle("current", link.getAttribute("href") === target);
  });

  if (target === "#home" && typeof updateCarousel === "function") {
    setTimeout(updateCarousel, 0);
  }
}

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const hash = link.getAttribute("href");
    history.pushState(null, "", hash);
    setPage(hash);
    if (hash === "#noticias" && typeof renderArticle === "function") {
      fetchRecentNews().then(news => { if (news.length) renderArticle(news[0].id); });
    }
  });
});

document.addEventListener("click", (e) => {
  const anchor = e.target.closest("a[href^='#']");
  if (!anchor || anchor.closest("header nav")) return;
  e.preventDefault();
  const hash = anchor.getAttribute("href");
  history.pushState(null, "", hash);
  setPage(hash);
});

window.addEventListener("popstate", (e) => {
  setPage(window.location.hash);
  if (e.state && e.state.articleId && typeof renderArticle === "function") {
    renderArticle(e.state.articleId);
  }
});

window.addEventListener("load", () => {
  setPage(window.location.hash);
  if (window.location.hash === "#noticias" && typeof renderArticle === "function") {
    fetchRecentNews().then(news => { if (news.length) renderArticle(news[0].id); });
  }
});