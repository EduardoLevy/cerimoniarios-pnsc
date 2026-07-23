/* =========================================================
   CERIMONIÁRIOS PNSC — script.js
   Código organizado para fácil manutenção.
   Para adicionar um novo material, download, evento ou aviso,
   basta incluir um novo objeto nos arrays abaixo.
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
   {
    title: "Ano Litúrgico",
    description: "Tempos litúrgicos e suas cores.",
    pdf: "pdfs/ano_liturgico.pdf"
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
    title: "Santa Missa",
    description: "Estrutura completa da celebração.",
    pdf: "pdfs/missa.pdf"
  },
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
   (seção atualmente desativada no HTML — reative o link e a
   section#downloads para voltar a usá-la)
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
   3) CALENDÁRIO LITÚRGICO

   3.1) TEMPOS LITÚRGICOS
   Defina aqui o início e o fim de cada tempo do ano litúrgico.
   Isso pinta o fundo dos dias no calendário. Ajuste ano a ano,
   pois as datas móveis (Quaresma, Páscoa, Advento) mudam todo ano.
   cor aceita: "roxo" | "branco" | "verde" | "vermelho"
--------------------------------------------------------- */
const liturgicalSeasons = [
  { name: "Advento",       start: "2025-11-30", end: "2025-12-24", color: "roxo" },
  { name: "Natal",         start: "2025-12-25", end: "2026-01-11", color: "branco" },
  { name: "Tempo Comum",   start: "2026-01-12", end: "2026-02-17", color: "verde" },
  { name: "Quaresma",      start: "2026-02-18", end: "2026-04-01", color: "roxo" },
  { name: "Tríduo Pascal", start: "2026-04-02", end: "2026-04-04", color: "vermelho" },
  { name: "Páscoa",        start: "2026-04-05", end: "2026-05-23", color: "branco" },
  { name: "Tempo Comum",   start: "2026-05-24", end: "2026-11-28", color: "verde" },
  { name: "Advento",       start: "2026-11-29", end: "2026-12-24", color: "roxo" },
  { name: "Natal",         start: "2026-12-25", end: "2027-01-10", color: "branco" }
];

/* ---------------------------------------------------------
   3.2) EVENTOS
   Datas de formação, festas e santos. Adicione novos itens
   aqui — a data precisa estar no formato AAAA-MM-DD.
   type aceita: "formacao" | "festa" | "santo"

   Exemplo:
   { date: "2026-08-02", title: "Formação de novos cerimoniários", type: "formacao" }
--------------------------------------------------------- */
const calendarEvents = [
  { date: "2026-01-01", title: "Santa Maria, Mãe de Deus", type: "solenidade" },
  { date: "2026-01-02", title: "São Basílio Magno e São Gregório Nazianzeno", type: "santo" },
  { date: "2026-01-03", title: "Santíssimo Nome de Jesus", type: "memoria" },
  { date: "2026-01-06", title: "Epifania do Senhor", type: "solenidade" },
  { date: "2026-01-17", title: "Santo Antão", type: "santo" },
  { date: "2026-01-21", title: "Santa Inês", type: "santo" },
  { date: "2026-01-24", title: "São Francisco de Sales", type: "santo" },
  { date: "2026-01-25", title: "Conversão de São Paulo", type: "festa" },
  { date: "2026-01-26", title: "São Timóteo e São Tito", type: "santo" },
  { date: "2026-01-28", title: "São Tomás de Aquino", type: "santo" },
  { date: "2026-01-31", title: "São João Bosco", type: "santo" },

  { date: "2026-02-02", title: "Apresentação do Senhor", type: "festa" },
  { date: "2026-02-03", title: "São Brás", type: "santo" },
  { date: "2026-02-05", title: "Santa Águeda", type: "santo" },
  { date: "2026-02-06", title: "São Paulo Miki e Companheiros", type: "santo" },
  { date: "2026-02-10", title: "Santa Escolástica", type: "santo" },
  { date: "2026-02-11", title: "Nossa Senhora de Lourdes", type: "memoria" },
  { date: "2026-02-14", title: "São Cirilo e São Metódio", type: "santo" },
  { date: "2026-02-22", title: "Cátedra de São Pedro", type: "festa" },

  { date: "2026-03-17", title: "São Patrício", type: "santo" },
  { date: "2026-03-19", title: "São José, Esposo da Virgem Maria", type: "solenidade" },
  { date: "2026-03-25", title: "Anunciação do Senhor", type: "solenidade" },

  { date: "2026-04-23", title: "São Jorge", type: "santo" },
  { date: "2026-04-25", title: "São Marcos Evangelista", type: "festa" },
  { date: "2026-04-29", title: "Santa Catarina de Sena", type: "santo" },

  { date: "2026-05-01", title: "São José Operário", type: "memoria" },
  { date: "2026-05-03", title: "São Filipe e São Tiago", type: "festa" },
  { date: "2026-05-13", title: "Nossa Senhora de Fátima", type: "memoria" },
  { date: "2026-05-14", title: "São Matias Apóstolo", type: "festa" },
  { date: "2026-05-24", title: "Nossa Senhora Auxiliadora", type: "memoria" },
  { date: "2026-05-31", title: "Visitação de Nossa Senhora", type: "festa" },

  { date: "2026-06-03", title: "São Carlos Lwanga e Companheiros", type: "santo" },
  { date: "2026-06-05", title: "São Bonifácio", type: "santo" },
  { date: "2026-06-11", title: "São Barnabé", type: "santo" },
  { date: "2026-06-13", title: "Santo Antônio de Pádua", type: "santo" },
  { date: "2026-06-24", title: "Nascimento de São João Batista", type: "solenidade" },
  { date: "2026-06-26", title: "São Josemaria Escrivá", type: "santo" },
  { date: "2026-06-27", title: "Nossa Senhora do Perpétuo Socorro", type: "memoria" },
  { date: "2026-06-29", title: "São Pedro e São Paulo", type: "solenidade" },

  { date: "2026-07-03", title: "São Tomé Apóstolo", type: "festa" },
  { date: "2026-07-11", title: "São Bento", type: "santo" },
  { date: "2026-07-16", title: "Nossa Senhora do Carmo", type: "memoria" },
  { date: "2026-07-22", title: "Santa Maria Madalena", type: "festa" },
  { date: "2026-07-25", title: "São Tiago Apóstolo", type: "festa" },
  { date: "2026-07-26", title: "São Joaquim e Sant'Ana", type: "santo" },
  { date: "2026-07-29", title: "Santa Marta, Maria e Lázaro", type: "memoria" },
  { date: "2026-07-31", title: "Santo Inácio de Loyola", type: "santo" },

  { date: "2026-08-04", title: "São João Maria Vianney", type: "santo" },
  { date: "2026-08-06", title: "Transfiguração do Senhor", type: "festa" },
  { date: "2026-08-08", title: "São Domingos", type: "santo" },
  { date: "2026-08-10", title: "São Lourenço", type: "festa" },
  { date: "2026-08-11", title: "Santa Clara", type: "santo" },
  { date: "2026-08-14", title: "São Maximiliano Maria Kolbe", type: "santo" },
  { date: "2026-08-15", title: "Assunção de Nossa Senhora", type: "solenidade" },
  { date: "2026-08-20", title: "São Bernardo", type: "santo" },
  { date: "2026-08-21", title: "São Pio X", type: "santo" },
  { date: "2026-08-22", title: "Nossa Senhora Rainha", type: "memoria" },
  { date: "2026-08-24", title: "São Bartolomeu Apóstolo", type: "festa" },
  { date: "2026-08-27", title: "Santa Mônica", type: "santo" },
  { date: "2026-08-28", title: "Santo Agostinho", type: "santo" },
  { date: "2026-08-29", title: "Martírio de São João Batista", type: "memoria" },

  { date: "2026-09-03", title: "São Gregório Magno", type: "santo" },
  { date: "2026-09-08", title: "Nascimento de Nossa Senhora", type: "festa" },
  { date: "2026-09-14", title: "Exaltação da Santa Cruz", type: "festa" },
  { date: "2026-09-15", title: "Nossa Senhora das Dores", type: "memoria" },
  { date: "2026-09-21", title: "São Mateus Apóstolo", type: "festa" },
  { date: "2026-09-23", title: "São Pio de Pietrelcina", type: "santo" },
  { date: "2026-09-27", title: "São Vicente de Paulo", type: "santo" },
  { date: "2026-09-29", title: "São Miguel, São Gabriel e São Rafael", type: "festa" },
  { date: "2026-09-30", title: "São Jerônimo", type: "santo" },

  { date: "2026-10-01", title: "Santa Teresinha do Menino Jesus", type: "santo" },
  { date: "2026-10-02", title: "Santos Anjos da Guarda", type: "memoria" },
  { date: "2026-10-04", title: "São Francisco de Assis", type: "santo" },
  { date: "2026-10-07", title: "Nossa Senhora do Rosário", type: "memoria" },
  { date: "2026-10-15", title: "Santa Teresa de Jesus", type: "santo" },
  { date: "2026-10-18", title: "São Lucas Evangelista", type: "festa" },
  { date: "2026-10-22", title: "São João Paulo II", type: "memoria" },
  { date: "2026-10-28", title: "São Simão e São Judas", type: "festa" },

  { date: "2026-11-01", title: "Todos os Santos", type: "solenidade" },
  { date: "2026-11-02", title: "Comemoração de Todos os Fiéis Defuntos", type: "memoria" },
  { date: "2026-11-04", title: "São Carlos Borromeu", type: "santo" },
  { date: "2026-11-09", title: "Dedicação da Basílica de Latrão", type: "festa" },
  { date: "2026-11-10", title: "São Leão Magno", type: "santo" },
  { date: "2026-11-11", title: "São Martinho de Tours", type: "santo" },
  { date: "2026-11-21", title: "Apresentação de Nossa Senhora", type: "memoria" },
  { date: "2026-11-22", title: "Santa Cecília", type: "santo" },
  { date: "2026-11-30", title: "Santo André Apóstolo", type: "festa" },

  { date: "2026-12-03", title: "São Francisco Xavier", type: "santo" },
  { date: "2026-12-06", title: "São Nicolau", type: "santo" },
  { date: "2026-12-07", title: "Santo Ambrósio", type: "santo" },
  { date: "2026-12-08", title: "Imaculada Conceição", type: "solenidade" },
  { date: "2026-12-13", title: "Santa Luzia", type: "santo" },
  { date: "2026-12-14", title: "São João da Cruz", type: "santo" },
  { date: "2026-12-25", title: "Natal do Senhor", type: "solenidade" },
  { date: "2026-12-26", title: "Santo Estêvão", type: "festa" },
  { date: "2026-12-27", title: "São João Evangelista", type: "festa" },
  { date: "2026-12-28", title: "Santos Inocentes", type: "festa" },

  // Calendário próprio do Brasil

{ date: "2026-02-09", title: "São José de Anchieta", type: "santo" },
{ date: "2026-04-18", title: "Beata Lindalva Justo de Oliveira", type: "beato" },
{ date: "2026-04-21", title: "São Anselmo", type: "santo" },
{ date: "2026-05-19", title: "São Crispim de Viterbo", type: "santo" },
{ date: "2026-07-09", title: "Santos Mártires da China", type: "santo" },
{ date: "2026-08-13", title: "Santos Pontiano e Hipólito", type: "santo" },
{ date: "2026-10-12", title: "Nossa Senhora Aparecida — Padroeira do Brasil", type: "solenidade" },
{ date: "2026-10-20", title: "Santo Antônio de Sant'Ana Galvão", type: "santo" },
{ date: "2026-11-17", title: "Santa Isabel da Hungria", type: "santo" },
{ date: "2026-11-19", title: "Nossa Senhora das Graças", type: "memoria" },

// movéis
{ date: "2026-09-07", title: "Independência do Brasil", type: "memoria" },
{ date: "2026-02-18", title: "Quarta-feira de Cinzas", type: "liturgia" },
{ date: "2026-03-29", title: "Domingo de Ramos", type: "solenidade" },
{ date: "2026-04-02", title: "Quinta-feira Santa", type: "solenidade" },
{ date: "2026-04-03", title: "Sexta-feira da Paixão do Senhor", type: "solenidade" },
{ date: "2026-04-04", title: "Sábado Santo", type: "solenidade" },
{ date: "2026-04-05", title: "Domingo da Páscoa", type: "solenidade" },
{ date: "2026-05-14", title: "Ascensão do Senhor", type: "solenidade" },
{ date: "2026-05-24", title: "Pentecostes", type: "solenidade" },
{ date: "2026-05-31", title: "Santíssima Trindade", type: "solenidade" },
{ date: "2026-06-04", title: "Corpus Christi", type: "solenidade" },
{ date: "2026-06-12", title: "Sagrado Coração de Jesus", type: "solenidade" },
];

/* ---------------------------------------------------------
   4) AVISOS
   Lista vazia por padrão. Para publicar um comunicado,
   adicione um objeto como no exemplo comentado abaixo:

   {
     title: "Formação de novos cerimoniários",
     message: "Encontro de formação no próximo sábado, às 14h, no salão paroquial.",
     date: "2026-08-02"
   }
--------------------------------------------------------- */
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

// AAAA-MM-DD local, sem deslocamento de fuso horário
function toISODate(date){
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
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
   Agora carregados dinamicamente de /api/avisos (dados vivem em
   data/avisos.json no repositório). Editáveis pela página
   /admin-pnsc-8f3.html — não é mais preciso mexer neste arquivo.
--------------------------------------------------------- */
async function renderAvisos(){
  const list = document.getElementById("avisosList");
  if (!list) return;

  let avisosData = [];

  try {
    const res = await fetch("/api/avisos", { cache: "no-store" });
    if (!res.ok) throw new Error("Falha ao buscar avisos");
    avisosData = await res.json();
  } catch (err) {
    console.error("Não foi possível carregar os avisos:", err);
    list.appendChild(el("div", "avisos-empty",
      `<i data-lucide="wifi-off"></i><p>Não foi possível carregar os avisos agora. Tente novamente em instantes.</p>`
    ));
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  if (avisosData.length === 0){
    list.appendChild(el("div", "avisos-empty",
      `<i data-lucide="bell-off"></i><p>Nenhum aviso publicado no momento. Novos comunicados aparecerão aqui.</p>`
    ));
    if (window.lucide) window.lucide.createIcons();
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

  if (window.lucide) window.lucide.createIcons();
}

/* ---------------------------------------------------------
   CALENDÁRIO LITÚRGICO
--------------------------------------------------------- */

const MONTH_ABBR = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const EVENT_TYPE_LABEL = {
  formacao: "Formação",
  festa: "Festa",
  santo: "Santo(a)",
  memoria: "Memória",
  solenidade: "Solenidade",
  beato: "Beato(a)",
  liturgia: "Celebração"
};

const calendarState = {
  current: new Date(),   // mês/ano exibido
  selectedDate: null      // "AAAA-MM-DD" ou null (mês inteiro)
};

// Retorna a cor litúrgica ("roxo"|"branco"|"verde"|"vermelho") para uma data,
// ou null se a data cair fora de todos os intervalos definidos.
function getSeasonColor(isoDate){
  const time = new Date(isoDate + "T00:00:00").getTime();
  for (const season of liturgicalSeasons){
    const start = new Date(season.start + "T00:00:00").getTime();
    const end = new Date(season.end + "T23:59:59").getTime();
    if (time >= start && time <= end) return season.color;
  }
  return null;
}

function getEventsForDate(isoDate){
  return calendarEvents.filter(e => e.date === isoDate);
}

function getEventsForMonth(year, monthIndex){
  return calendarEvents
    .filter(e => {
      const d = new Date(e.date + "T00:00:00");
      return d.getFullYear() === year && d.getMonth() === monthIndex;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

function buildEventListHTML(events){
  if (events.length === 0){
    return `<p class="calendar-events-empty">Nenhum evento marcado neste período.</p>`;
  }
  return events.map(ev => {
    const d = new Date(ev.date + "T00:00:00");
    return `
      <div class="calendar-event-item">
        <div class="calendar-event-date">
          <span class="calendar-event-day">${String(d.getDate()).padStart(2, "0")}</span>
          <span class="calendar-event-monthabbr">${MONTH_ABBR[d.getMonth()]}</span>
        </div>
        <div class="calendar-event-info">
          <h5>${ev.title}</h5>
          <span class="calendar-event-badge calendar-event-badge--${ev.type}">${EVENT_TYPE_LABEL[ev.type] || ev.type}</span>
        </div>
      </div>
    `;
  }).join("");
}

function renderCalendarEventsPanel(){
  const panel = document.getElementById("calendarEventsPanel");
  if (!panel) return;

  const year = calendarState.current.getFullYear();
  const monthIndex = calendarState.current.getMonth();
  const monthLabel = calendarState.current.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });

  let events, headingText, showClear;

  if (calendarState.selectedDate){
    events = getEventsForDate(calendarState.selectedDate);
    const d = new Date(calendarState.selectedDate + "T00:00:00");
    headingText = `Dia ${d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long" })}`;
    showClear = true;
  } else {
    events = getEventsForMonth(year, monthIndex);
    headingText = `Eventos de ${monthLabel}`;
    showClear = false;
  }

  panel.innerHTML = `
    <div class="calendar-events-header">
      <h4>${headingText}</h4>
      ${showClear ? `<button class="calendar-events-clear" id="calClearSelection" type="button">Ver mês inteiro</button>` : ""}
    </div>
    ${buildEventListHTML(events)}
  `;

  const clearBtn = document.getElementById("calClearSelection");
  if (clearBtn){
    clearBtn.addEventListener("click", () => {
      calendarState.selectedDate = null;
      renderCalendarEventsPanel();
      renderCalendarGrid();
    });
  }
}

function renderCalendarGrid(){
  const grid = document.getElementById("calendarGrid");
  const label = document.getElementById("calMonthLabel");
  if (!grid || !label) return;

  const year = calendarState.current.getFullYear();
  const monthIndex = calendarState.current.getMonth();

  const monthLabel = calendarState.current.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  label.textContent = monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1);

  const firstDayOfMonth = new Date(year, monthIndex, 1);
  const startOffset = firstDayOfMonth.getDay(); // 0 = domingo
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const todayISO = toISODate(new Date());

  grid.innerHTML = "";

  // Espaços vazios antes do dia 1
  for (let i = 0; i < startOffset; i++){
    grid.appendChild(el("div", "cal-day cal-day--empty"));
  }

  for (let day = 1; day <= daysInMonth; day++){
    const dateObj = new Date(year, monthIndex, day);
    const isoDate = toISODate(dateObj);
    const seasonColor = getSeasonColor(isoDate);
    const dayEvents = getEventsForDate(isoDate);

    const classes = ["cal-day"];
    if (seasonColor) classes.push(`cal-day--${seasonColor}`);
    if (isoDate === todayISO) classes.push("cal-day--today");
    if (dayEvents.length > 0) classes.push("cal-day--has-event");
    if (isoDate === calendarState.selectedDate) classes.push("cal-day--selected");

    const cell = el("div", classes.join(" "));
    cell.setAttribute("role", "gridcell");
    cell.setAttribute("aria-label", `Dia ${day}${dayEvents.length ? ", com evento marcado" : ""}`);

    const dotsHTML = dayEvents
      .slice(0, 3)
      .map(ev => `<span class="cal-dot cal-dot--${ev.type}"></span>`)
      .join("");

    cell.innerHTML = `
      <span class="cal-day-num">${day}</span>
      <span class="cal-day-dots">${dotsHTML}</span>
    `;

    if (dayEvents.length > 0){
      cell.addEventListener("click", () => {
        calendarState.selectedDate = calendarState.selectedDate === isoDate ? null : isoDate;
        renderCalendarGrid();
        renderCalendarEventsPanel();
      });
    }

    grid.appendChild(cell);
  }
}

function changeCalendarMonth(delta){
  calendarState.current = new Date(
    calendarState.current.getFullYear(),
    calendarState.current.getMonth() + delta,
    1
  );
  calendarState.selectedDate = null;
  renderCalendarGrid();
  renderCalendarEventsPanel();
}

function initCalendar(){
  const grid = document.getElementById("calendarGrid");
  if (!grid) return;

  document.getElementById("calPrev").addEventListener("click", () => changeCalendarMonth(-1));
  document.getElementById("calNext").addEventListener("click", () => changeCalendarMonth(1));

  renderCalendarGrid();
  renderCalendarEventsPanel();
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
  initCalendar();
  initSidebar();
  initActiveNav();

  if (window.lucide){
    window.lucide.createIcons();
  }
});
