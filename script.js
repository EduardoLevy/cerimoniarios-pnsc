/* =========================================================
   CERIMONIÁRIOS PNSC — script.js
   Código organizado para fácil manutenção.
   Para adicionar um novo material ou download, basta incluir
   um novo objeto nos arrays abaixo — nada mais precisa mudar.
   ========================================================= */

/* ---------------------------------------------------------
   1) MATERIAIS DE ESTUDO
   Coloque o PDF correspondente na pasta /pdfs e informe
   apenas o caminho do arquivo em "pdf".
--------------------------------------------------------- */
const materialsData = [
  {
    title: "Introdução ao Cerimoniário",
    description: "Conhecendo o serviço ao altar.",
    pdf: "pdfs/introducao-ao-cerimoniario.pdf"
  },
  // {
  //   title: "Objetos Litúrgicos",
  //   description: "Aprenda os nomes e funções dos objetos utilizados na liturgia.",
  //   pdf: "pdfs/objetos-liturgicos.pdf"
  // },
  // {
  //   title: "Alfaias e Paramentos",
  //   description: "Conheça cada veste e sua utilização.",
  //   pdf: "pdfs/alfaias-e-paramentos.pdf"
  // },
  {
    title: "Ano Litúrgico",
    description: "Tempos litúrgicos e suas cores.",
    pdf: "pdfs/ano_liturgico.pdf"
  },
  // {
  //   title: "Santa Missa",
  //   description: "Estrutura completa da celebração.",
  //   pdf: "pdfs/santa-missa.pdf"
  // },
  // {
  //   title: "Cerimonial",
  //   description: "Funções práticas do cerimoniário.",
  //   pdf: "pdfs/cerimonial.pdf"
  // },
  // {
  //   title: "Documentos da Igreja",
  //   description: "Normas e orientações.",
  //   pdf: "pdfs/documentos-da-igreja.pdf"
  // }
];

/* ---------------------------------------------------------
   2) DOWNLOADS
   Itens de apoio rápido (listas, roteiros, calendários...).
   Basta adicionar um novo objeto para que apareça na seção.
--------------------------------------------------------- */
const downloadsData = [
  {
    title: "Checklist da Sacristia",
    meta: "PDF · Consulta antes da celebração",
    pdf: "pdfs/checklist-sacristia.pdf"
  },
  {
    title: "Calendário Litúrgico do Ano",
    meta: "PDF · Tempos e cores litúrgicas",
    pdf: "pdfs/ano_liturgico.pdf"
  },
  {
    title: "Clara Feia Eu te amo",
    meta: "PDF · Passo a passo das funções",
    pdf: "pdfs/roteiro-missa-dominical.pdf"
  }
];

/* ---------------------------------------------------------
   3) AVISOS
   Lista vazia por padrão. Para publicar um comunicado,
   adicione um objeto como no exemplo comentado abaixo:

   {
     title: "Formação de novos cerimoniários",
     message: "Encontro de formação no próximo sábado, às 14h, no salão paroquial.",
     date: "2026-08-02"
   }
--------------------------------------------------------- */
const avisosData = [
  // adicione novos avisos aqui
  //<font color='red'>  </font>
    {
     title: "Formação de novos cerimoniários",
     message: "Grupo criado para formação de novos <b>cerimoniários</b>. <br> <font color='red'>Primeiras formações ja foram publicadas no site</font>",
     date: "2026-07-19"
   }
];

/* ---------------------------------------------------------
   Helpers
--------------------------------------------------------- */
function formatDate(isoDate){
  if (!isoDate) return "";
  const d = new Date(isoDate + "T00:00:00");
  if (isNaN(d)) return "";
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

function el(tag, className, html){
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

/* ---------------------------------------------------------
   Render: Materiais
--------------------------------------------------------- */
function renderMaterials(){
  const grid = document.getElementById("materialsGrid");
  if (!grid) return;

  materialsData.forEach((item, index) => {
    const card = el("article", "material-card");
    card.style.animationDelay = `${index * 0.06}s`;

    card.innerHTML = `
      <div class="material-icon"><i data-lucide="file-text"></i></div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a class="material-open" href="${item.pdf}" target="_blank" rel="noopener noreferrer">
        <span>Abrir PDF</span>
        <i data-lucide="external-link"></i>
      </a>
    `;
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------
   Render: Downloads
--------------------------------------------------------- */
function renderDownloads(){
  const list = document.getElementById("downloadsList");
  if (!list) return;

  downloadsData.forEach(item => {
    const row = el("div", "download-item");
    row.innerHTML = `
      <div class="download-icon"><i data-lucide="file-down"></i></div>
      <div class="download-info">
        <h4>${item.title}</h4>
        <span>${item.meta}</span>
      </div>
      <a class="download-action" href="${item.pdf}" target="_blank" rel="noopener noreferrer" aria-label="Baixar ${item.title}">
        <i data-lucide="arrow-down"></i>
      </a>
    `;
    list.appendChild(row);
  });
}

/* ---------------------------------------------------------
   Render: Avisos
--------------------------------------------------------- */
function renderAvisos(){
  const list = document.getElementById("avisosList");
  if (!list) return;

  if (avisosData.length === 0){
    list.appendChild(el("div", "avisos-empty",
      `<i data-lucide="bell-off"></i><p>Nenhum aviso publicado no momento. Novos comunicados aparecerão aqui.</p>`
    ));
    return;
  }

  avisosData
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach(item => {
      const card = el("article", "aviso-item");
      card.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.message}</p>
        <time>${formatDate(item.date)}</time>
      `;
      list.appendChild(card);
    });
}

/* ---------------------------------------------------------
   Sidebar (mobile drawer)
--------------------------------------------------------- */
function initSidebar(){
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const toggle = document.getElementById("menuToggle");
  if (!sidebar || !overlay || !toggle) return;

  const openSidebar = () => {
    sidebar.classList.add("is-open");
    overlay.classList.add("is-visible");
    toggle.setAttribute("aria-expanded", "true");
  };
  const closeSidebar = () => {
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    sidebar.classList.contains("is-open") ? closeSidebar() : openSidebar();
  });
  overlay.addEventListener("click", closeSidebar);
  sidebar.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", closeSidebar);
  });
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") closeSidebar();
  });
}

/* ---------------------------------------------------------
   Navegação ativa conforme rolagem
--------------------------------------------------------- */
function initActiveNav(){
  const sections = document.querySelectorAll("main.main > section[id]");
  const links = document.querySelectorAll(".nav-link");
  if (!sections.length || !links.length) return;

  const setActive = id => {
    links.forEach(link => {
      link.classList.toggle("is-active", link.dataset.nav === id);
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        setActive(entry.target.id);
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

/* ---------------------------------------------------------
   Init
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderMaterials();
  renderDownloads();
  renderAvisos();
  initSidebar();
  initActiveNav();

  if (window.lucide){
    window.lucide.createIcons();
  }
});
