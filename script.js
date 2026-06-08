/*
  DOGFPS777 CS2 Hub
  Projeto fan-made, educativo e independente.
  Não usa logos oficiais, skins oficiais, screenshots oficiais ou assets extraídos do jogo.
  Para trocar o LivePix, altere LIVEPIX_URL e os QR Codes no HTML.
*/

const LIVEPIX_URL = "https://livepix.gg/dogfps777";

const maps = [
  {
    name: "Mirage",
    type: "Bombsite",
    filters: ["premier", "competitivo"],
    theme: "desert",
    description: "Mapa clássico de meio forte, execuções rápidas e retakes intensos.",
    callouts: ["Meio", "Conector", "Janela", "Palácio", "Tapete", "Caverna", "CT", "Cozinha"],
    positioning: ["Controle o meio antes de decidir o bomb.", "Evite repetir pixel na janela sem flash.", "Use trade no palácio e no tapete."],
    rotations: ["Conector acelera rotação entre A e B.", "Short encurta chegada no B.", "Fake no A força rotação do CT."],
    grenades: ["Smoke janela", "Smoke CT", "Smoke escada", "Flash pop no tapete", "Molotov sanduíche", "HE no rush B"]
  },
  {
    name: "Inferno",
    type: "Bombsite",
    filters: ["premier", "competitivo"],
    theme: "urban",
    description: "Mapa de banana, controle de espaço e utilitário pesado.",
    callouts: ["Banana", "Carro", "Areia", "Cofres", "Igreja", "Biblioteca", "Arco", "Varanda"],
    positioning: ["Domine banana com dupla e flash coordenada.", "No A, jogue com recuo para não ser isolado.", "Evite gastar todo utilitário cedo."],
    rotations: ["Perder banana abre pressão no B.", "Biblioteca segura rotação longa.", "Arco permite retake ou avanço."],
    grenades: ["Smoke CT B", "Smoke caixão", "Molotov areia", "Flash banana", "HE carro", "Molotov varanda"]
  },
  {
    name: "Dust 2",
    type: "Bombsite",
    filters: ["premier", "competitivo", "casual"],
    theme: "desert",
    description: "Duelo de longa distância, controle de fundo e meio decisivo.",
    callouts: ["Long", "Fundo", "Meio", "Xbox", "Varanda", "Carro A", "CT", "B túnel"],
    positioning: ["Jogue Long com flash e trade.", "Segure fundo sem abrir demais para AWP.", "Use smoke Xbox para subir short."],
    rotations: ["Meio para CT acelera split B.", "Short pune A sem reforço.", "Long domina pós-plant A."],
    grenades: ["Smoke Xbox", "Smoke CT", "Flash Long", "HE fundo", "Molotov carro", "Smoke porta B"]
  },
  {
    name: "Nuke",
    type: "Bombsite",
    filters: ["premier", "competitivo"],
    theme: "industrial",
    description: "Mapa vertical com rotações rápidas, fora perigoso e bombsites empilhados.",
    callouts: ["Fora", "Silo", "Main", "Rampa", "Secreto", "Céu", "Vent", "B baixo"],
    positioning: ["Comunique sons porque os bombs ficam próximos.", "Fora exige smoke em cadeia.", "Rampa precisa de apoio e recuo."],
    rotations: ["Vent muda o round em segundos.", "Secreto cria pressão no B.", "Céu ajuda retake no A."],
    grenades: ["Smokes fora", "Molotov hut", "Flash main", "HE rampa", "Smoke céu", "Molotov vent"]
  },
  {
    name: "Ancient",
    type: "Bombsite",
    filters: ["premier", "competitivo"],
    theme: "temple",
    description: "Templo, meio apertado e domínio de espaço com utilitário.",
    callouts: ["Meio", "Donut", "Caverna", "Rampa A", "Main B", "CT", "Templo", "Água"],
    positioning: ["Meio abre os dois bombs.", "Caverna precisa de flash para limpar close.", "Donut é ponto crítico de rotação."],
    rotations: ["Donut conecta A e meio.", "CT para B exige tempo e smoke.", "Pressão no meio prende defesa."],
    grenades: ["Smoke donut", "Smoke CT", "Molotov caverna", "Flash main B", "HE rampa", "Smoke templo"]
  },
  {
    name: "Anubis",
    type: "Bombsite",
    filters: ["premier", "competitivo"],
    theme: "desert",
    description: "Mapa com água, conectores e execuções criativas nos bombs.",
    callouts: ["Água", "Canal", "Meio", "Conector", "Heaven", "B main", "A main", "Barco"],
    positioning: ["Água é zona de contato rápido.", "Heaven precisa de smoke em execução B.", "Meio pune rotações atrasadas."],
    rotations: ["Conector acelera split.", "Canal permite surpresa.", "Controle de água divide a defesa."],
    grenades: ["Smoke heaven", "Smoke conector", "Molotov default", "Flash água", "HE canal", "Incendiária B main"]
  },
  {
    name: "Overpass",
    type: "Bombsite",
    filters: ["competitivo", "casual"],
    theme: "urban",
    description: "Mapa de controle longo, banheiro, água e rotações profundas.",
    callouts: ["Banheiro", "Long A", "Fonte", "Banco", "Água", "Monster", "Conector", "Heaven"],
    positioning: ["Banheiro decide muita informação do A.", "Monster precisa de utilitário anti-rush.", "Conector é área de risco constante."],
    rotations: ["Água para B cria split perigoso.", "Conector corta tempo de rotação.", "Heaven dá retake forte no B."],
    grenades: ["Smoke heaven", "Smoke banco", "Flash monster", "Molotov barril", "HE água", "Smoke banheiro"]
  },
  {
    name: "Train",
    type: "Bombsite",
    filters: ["premier", "competitivo"],
    theme: "industrial",
    description: "Linhas longas, trens como cobertura e execuções precisas.",
    callouts: ["Ivy", "Popdog", "Main", "Conector", "B baixo", "Heaven", "E-box", "Old bomb"],
    positioning: ["Use trens como cover sem ficar previsível.", "Ivy exige paciência contra AWP.", "Popdog pode quebrar defesa rapidamente."],
    rotations: ["Conector muda A para B.", "Popdog acelera pressão no A.", "Heaven controla retake B."],
    grenades: ["Smoke conector", "Smoke ivy", "Flash main", "Molotov popdog", "HE e-box", "Smoke heaven"]
  },
  {
    name: "Vertigo",
    type: "Bombsite",
    filters: ["competitivo", "wingman"],
    theme: "industrial",
    description: "Verticalidade, rampas, som importante e duelos de curta distância.",
    callouts: ["Rampa A", "Andaime", "Elevador", "Meio", "B main", "Céu", "Sandbags", "Default"],
    positioning: ["Rampa A exige presença e granadas.", "Cuidado com som falso de rotação.", "Sandbags precisa ser limpo com utilitário."],
    rotations: ["Elevador acelera defesa do A.", "Meio muda pressão para B.", "Fake de som pode puxar rotação."],
    grenades: ["Smoke rampa", "Molotov sandbags", "Flash A", "HE B main", "Smoke céu", "Incendiária rampa"]
  },
  {
    name: "Cache",
    type: "Bombsite",
    filters: ["competitivo", "casual"],
    theme: "industrial",
    description: "Mapa limpo de mira, meio decisivo e entradas explosivas.",
    callouts: ["Meio", "Boost", "Garage", "Forklift", "Quad", "Vent", "Checkers", "Heaven B"],
    positioning: ["Controle de meio abre split nos dois bombs.", "Checkers precisa de limpeza calma.", "A sem smoke vira duelo difícil."],
    rotations: ["Vent acelera entrada B.", "Meio pressiona CT.", "Heaven B segura retake."],
    grenades: ["Smoke meio", "Smoke CT A", "Flash main", "Molotov quad", "HE checkers", "Smoke heaven B"]
  },
  {
    name: "Office",
    type: "Casual",
    filters: ["casual"],
    theme: "office",
    description: "Ambiente fechado, ângulos curtos e muita troca em corredores.",
    callouts: ["Escritório", "Vidro", "Long hall", "Garage", "Projetor", "T spawn", "CT spawn", "Janelas"],
    positioning: ["Avance com flash em corredor estreito.", "Evite peek seco em vidro.", "Segure crossfire em portas."],
    rotations: ["Corredores fazem rotação lenta.", "Garage cria flanco.", "Som entrega avanço."],
    grenades: ["Flash corredor", "Smoke vidro", "HE porta", "Molotov escritório", "Decoy garage", "Incendiária janelas"]
  },
  {
    name: "Italy",
    type: "Casual",
    filters: ["casual"],
    theme: "coast",
    description: "Vila estreita, becos e jogo de informação em rotas pequenas.",
    callouts: ["Mercado", "Apartamentos", "Rua", "Casa", "T spawn", "CT spawn", "Escadas", "Beco"],
    positioning: ["Limpe canto por canto em becos.", "Use flash antes de entrar em mercado.", "Não corra sem informação."],
    rotations: ["Apartamentos criam flanco.", "Rua central dá informação rápida.", "Rotação segura depende do som."],
    grenades: ["Smoke rua", "Flash mercado", "HE apartamentos", "Molotov beco", "Decoy casa", "Incendiária escadas"]
  },
  {
    name: "Baggage",
    type: "Arms Race",
    filters: ["arms-race", "casual"],
    theme: "industrial",
    description: "Mapa rápido de treino de reflexo, verticalidade e respawn constante.",
    callouts: ["Esteira", "Ponte", "Baixo", "Spawn A", "Spawn B", "Caixas", "Mezanino", "Centro"],
    positioning: ["Mantenha mira no nível da cabeça.", "Use altura para controlar respawn.", "Não fique parado após abate."],
    rotations: ["Centro conecta todos os combates.", "Ponte dá visão, mas expõe muito.", "Baixo permite flanco rápido."],
    grenades: ["HE centro", "Flash ponte", "Smoke esteira", "Molotov caixas", "Decoy spawn", "Incendiária baixo"]
  },
  {
    name: "Shoots",
    type: "Arms Race",
    filters: ["arms-race", "casual"],
    theme: "temple",
    description: "Arena compacta para reação, movimentação e duelo constante.",
    callouts: ["Centro", "Ponte", "Túnel", "Spawn alto", "Spawn baixo", "Caixas", "Escada", "Parede"],
    positioning: ["Use strafe curto e mira alta.", "Evite recarregar no centro.", "Troque de posição a cada duelo."],
    rotations: ["Túnel cria surpresa.", "Ponte domina centro.", "Escadas encurtam combate."],
    grenades: ["Flash centro", "HE túnel", "Smoke ponte", "Molotov caixa", "Decoy spawn", "Incendiária escada"]
  },
  {
    name: "Pool Day",
    type: "Arms Race",
    filters: ["arms-race", "casual"],
    theme: "coast",
    description: "Arena pequena inspirada em treino casual, movimentação rápida e mira no reflexo.",
    callouts: ["Piscina", "Vestiário", "Ducha", "Caixa", "Corredor", "Spawn azul", "Spawn vermelho", "Centro"],
    positioning: ["Não cruze o centro sem checar laterais.", "Vestiário favorece close range.", "Controle altura da mira em corredor."],
    rotations: ["Ducha liga os lados rapidamente.", "Centro dá contato imediato.", "Corredor permite flanco."],
    grenades: ["Flash piscina", "HE centro", "Smoke corredor", "Molotov vestiário", "Decoy ducha", "Incendiária caixa"]
  },
  {
    name: "Warden",
    type: "Wingman",
    filters: ["wingman", "casual"],
    theme: "urban",
    description: "Mapa fan-style para treino 2v2 com foco em controle curto e retake.",
    callouts: ["Pátio", "Cela", "Torre", "Portão", "Beco", "Escada", "Spawn T", "Spawn CT"],
    positioning: ["Jogue em dupla e troque contato.", "Torre pune avanço sem smoke.", "Pátio precisa de flash pop."],
    rotations: ["Escada encurta retake.", "Beco cria flanco.", "Portão vira zona de contenção."],
    grenades: ["Smoke torre", "Flash pátio", "HE cela", "Molotov portão", "Decoy beco", "Incendiária escada"]
  },
  {
    name: "Stronghold",
    type: "Wingman",
    filters: ["wingman", "competitivo"],
    theme: "temple",
    description: "Fortaleza de ângulos fortes, retake difícil e controle de entrada.",
    callouts: ["Portão", "Muralha", "Torre", "Ponte", "Pátio", "Sala", "Arco", "Default"],
    positioning: ["Segure cruzado entre arco e sala.", "Não avance ponte sem flash.", "Torre dá informação, mas é previsível."],
    rotations: ["Muralha muda ritmo do retake.", "Ponte encurta entrada.", "Sala permite fake curto."],
    grenades: ["Smoke arco", "Flash ponte", "HE pátio", "Molotov default", "Decoy sala", "Incendiária portão"]
  },
  {
    name: "Alpine",
    type: "Casual",
    filters: ["casual", "wingman"],
    theme: "snow",
    description: "Ambiente frio, linhas médias e boa leitura de rotação.",
    callouts: ["Cabana", "Neve", "Ponte", "Túnel", "Rampa", "Janela", "Spawn T", "Spawn CT"],
    positioning: ["Use cover natural e não abra céu sem flash.", "Janela é ponto comum de pick.", "Rampa precisa de trade."],
    rotations: ["Túnel conecta rota segura.", "Ponte dá informação rápida.", "Cabana pode virar pós-plant."],
    grenades: ["Smoke janela", "Flash ponte", "HE neve", "Molotov cabana", "Decoy túnel", "Incendiária rampa"]
  },
  {
    name: "Sanctum",
    type: "Wingman",
    filters: ["wingman", "casual"],
    theme: "temple",
    description: "Mapa de templo com rotas fechadas, timing e utilitário curto.",
    callouts: ["Santuário", "Escadas", "Altar", "Colunas", "Jardim", "Porta", "Spawn T", "Spawn CT"],
    positioning: ["Colunas permitem jiggle e bait de tiro.", "Altar precisa ser limpo com molotov.", "Escadas favorecem flash curta."],
    rotations: ["Jardim cria flanco silencioso.", "Porta acelera retake.", "Santuário é zona de decisão."],
    grenades: ["Smoke porta", "Flash escadas", "HE altar", "Molotov colunas", "Decoy jardim", "Incendiária santuário"]
  },
  {
    name: "Poseidon",
    type: "Bombsite",
    filters: ["competitivo", "casual"],
    theme: "coast",
    description: "Mapa costeiro fan-style com água, passarelas e rotação por meio.",
    callouts: ["Doca", "Água", "Templo", "Passarela", "Meio", "Arco", "Barco", "Default"],
    positioning: ["Água esconde timing de avanço.", "Passarela dá controle, mas expõe lateral.", "Templo precisa de smoke em execução."],
    rotations: ["Meio decide troca de bomb.", "Arco encurta retake.", "Doca permite split no fim do round."],
    grenades: ["Smoke templo", "Flash doca", "HE água", "Molotov arco", "Decoy barco", "Incendiária passarela"]
  }
];

const trainingCards = [
  ["Aquecimento de mira", "Entre no treino sem pressa: flick curto, tracking e tiros controlados antes da primeira partida."],
  ["Controle de spray", "Treine padrões com rajadas curtas, compensação vertical e reset de mira após cada duelo."],
  ["Pré-aim", "Mira posicionada antes do contato. Abra ângulos esperando a cabeça do inimigo, não o corpo."],
  ["Crosshair placement", "Caminhe com a mira pronta para o próximo pixel provável. Menos correção, mais velocidade."],
  ["Lineups de smoke", "Separe 2 smokes por bomb em cada mapa e repita até sair sem pensar."],
  ["Flash para companheiro", "Flash boa é a que seu parceiro consegue aproveitar. Comunique antes de jogar."],
  ["Retake", "Não entre sozinho. Espere granada, conte inimigos vivos e limpe posições em dupla."],
  ["Clutch", "Isole duelos, use som, finja rotação e não entregue pressa quando tiver vantagem."],
  ["Comunicação", "Fale curto: posição, quantidade, dano e intenção. Informação limpa vence round."],
  ["Mentalidade competitiva", "Perdeu round? Reseta. O foco é a próxima decisão, não o erro passado."]
];

const mapGrid = document.getElementById("mapGrid");
const mapSearch = document.getElementById("mapSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("mapModal");
const modalPanel = modal?.querySelector(".modal-panel");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalDescription = document.getElementById("modalDescription");
const modalContent = document.getElementById("modalContent");
const modalPixel = document.getElementById("modalPixel");
const trainingGrid = document.getElementById("trainingGrid");
let activeFilter = "todos";
let lastFocusedElement = null;

function normalizeText(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function formatFilterName(filter) {
  const names = {
    premier: "Premier",
    competitivo: "Competitivo",
    casual: "Casual",
    wingman: "Wingman",
    "arms-race": "Arms Race"
  };
  return names[filter] || filter;
}

function createMapCard(map, index) {
  const article = document.createElement("article");
  article.className = "map-card reveal";
  article.dataset.name = map.name;
  article.dataset.filters = map.filters.join(" ");

  article.innerHTML = `
    <div class="map-card-header">
      <div class="map-pixel ${map.theme}" aria-hidden="true"></div>
      <div class="map-title-wrap">
        <h3>${map.name}</h3>
        <span class="map-type">${map.type}</span>
      </div>
    </div>
    <p>${map.description}</p>
    <div class="tag-row" aria-label="Categorias do mapa">
      ${map.filters.map(filter => `<span class="tag">${formatFilterName(filter)}</span>`).join("")}
    </div>
    <button class="btn btn-secondary" type="button" data-map-index="${index}" aria-label="Ver dicas do mapa ${map.name}">Ver dicas</button>
  `;

  article.addEventListener("mousemove", (event) => {
    const rect = article.getBoundingClientRect();
    article.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    article.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });

  return article;
}

function renderMaps() {
  const query = normalizeText(mapSearch?.value || "");
  const filteredMaps = maps.filter((map) => {
    const matchesFilter = activeFilter === "todos" || map.filters.includes(activeFilter);
    const matchesSearch = normalizeText(map.name).includes(query);
    return matchesFilter && matchesSearch;
  });

  mapGrid.innerHTML = "";

  if (!filteredMaps.length) {
    mapGrid.innerHTML = `<p class="empty-state">Nenhum mapa encontrado. Tente outro filtro ou busca.</p>`;
    return;
  }

  filteredMaps.forEach((map) => {
    const originalIndex = maps.findIndex((item) => item.name === map.name);
    mapGrid.appendChild(createMapCard(map, originalIndex));
  });

  observeReveals();
}

function listItems(items) {
  return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function openMapModal(index) {
  const map = maps[index];
  if (!map) return;

  lastFocusedElement = document.activeElement;
  modalTitle.textContent = map.name;
  modalType.textContent = `${map.type} • ${map.filters.map(formatFilterName).join(" / ")}`;
  modalDescription.textContent = map.description;
  modalPixel.className = `map-pixel modal-pixel ${map.theme}`;
  modalContent.innerHTML = `
    <section class="modal-block">
      <h3>Callouts importantes</h3>
      ${listItems(map.callouts)}
    </section>
    <section class="modal-block">
      <h3>Dicas de posicionamento</h3>
      ${listItems(map.positioning)}
    </section>
    <section class="modal-block">
      <h3>Dicas de rotação</h3>
      ${listItems(map.rotations)}
    </section>
    <section class="modal-block">
      <h3>Locais comuns para utilitários</h3>
      ${listItems(map.grenades)}
    </section>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => modalPanel?.focus(), 0);
}

function closeMapModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

function renderTrainingCards() {
  trainingGrid.innerHTML = trainingCards.map(([title, text], index) => `
    <article class="training-card reveal" data-number="${String(index + 1).padStart(2, "0")}">
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
}

function setupNavigation() {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  navToggle?.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });
}

function setupFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      activeFilter = button.dataset.filter || "todos";
      renderMaps();
    });
  });

  mapSearch?.addEventListener("input", renderMaps);

  mapGrid?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-map-index]");
    if (!button) return;
    openMapModal(Number(button.dataset.mapIndex));
  });
}

function setupModal() {
  modal?.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) closeMapModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeMapModal();
    }
  });
}

function setupCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copy || LIVEPIX_URL;
      const status = button.closest("section, aside")?.querySelector(".copy-status");

      try {
        await navigator.clipboard.writeText(text);
        if (status) status.textContent = "Link copiado com sucesso!";
      } catch {
        const tempInput = document.createElement("input");
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        tempInput.remove();
        if (status) status.textContent = "Link copiado.";
      }

      setTimeout(() => {
        if (status) status.textContent = "";
      }, 2600);
    });
  });
}

function setupRoutine() {
  const form = document.getElementById("routineForm");
  const finishButton = document.getElementById("finishTraining");
  const resetButton = document.getElementById("resetRoutine");
  const counterElement = document.getElementById("trainingCounter");
  const checks = [...form.querySelectorAll("input[type='checkbox']")];

  const savedRoutine = JSON.parse(localStorage.getItem("dogfps777-routine") || "{}");
  const savedCounter = Number(localStorage.getItem("dogfps777-training-counter") || "0");

  counterElement.textContent = savedCounter;
  checks.forEach((input) => {
    input.checked = Boolean(savedRoutine[input.value]);
  });

  function saveRoutine() {
    const routineState = {};
    checks.forEach((input) => {
      routineState[input.value] = input.checked;
    });
    localStorage.setItem("dogfps777-routine", JSON.stringify(routineState));
  }

  checks.forEach((input) => input.addEventListener("change", saveRoutine));

  finishButton?.addEventListener("click", () => {
    const total = checks.length;
    const done = checks.filter((input) => input.checked).length;

    if (done < total) {
      finishButton.textContent = `Faltam ${total - done} itens`;
      setTimeout(() => (finishButton.textContent = "Concluir treino"), 1800);
      return;
    }

    const nextValue = Number(localStorage.getItem("dogfps777-training-counter") || "0") + 1;
    localStorage.setItem("dogfps777-training-counter", String(nextValue));
    counterElement.textContent = nextValue;
    finishButton.textContent = "Treino contabilizado!";
    setTimeout(() => (finishButton.textContent = "Concluir treino"), 1800);
  });

  resetButton?.addEventListener("click", () => {
    checks.forEach((input) => {
      input.checked = false;
    });
    saveRoutine();
  });
}

function setupSmokeParticles() {
  const canvas = document.getElementById("smokeCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let particles = [];

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createParticles();
  }

  function createParticles() {
    const amount = Math.min(64, Math.max(24, Math.floor(width / 26)));
    particles = Array.from({ length: amount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 18 + Math.random() * 72,
      vx: -0.18 + Math.random() * 0.36,
      vy: -0.08 - Math.random() * 0.28,
      alpha: 0.025 + Math.random() * 0.065
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.r);
      gradient.addColorStop(0, `rgba(210, 215, 220, ${particle.alpha})`);
      gradient.addColorStop(1, "rgba(210, 215, 220, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fill();

      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.y + particle.r < 0) {
        particle.y = height + particle.r;
        particle.x = Math.random() * width;
      }
      if (particle.x + particle.r < 0) particle.x = width + particle.r;
      if (particle.x - particle.r > width) particle.x = -particle.r;
    });

    if (!prefersReducedMotion) requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

function setupFlyingGrenade() {
  const grenade = document.querySelector(".animated-grenade");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!grenade || prefersReducedMotion) return;

  function fly() {
    grenade.style.top = `${18 + Math.random() * 50}%`;
    grenade.classList.remove("fly");
    void grenade.offsetWidth;
    grenade.classList.add("fly");
  }

  setTimeout(fly, 1800);
  setInterval(fly, 12500);
}

function setupScrollEffects() {
  const topbar = document.getElementById("topbar");
  const backToTop = document.getElementById("backToTop");

  function onScroll() {
    const isScrolled = window.scrollY > 24;
    topbar?.classList.toggle("scrolled", isScrolled);
    backToTop?.classList.toggle("show", window.scrollY > 600);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  onScroll();
}

let revealObserver;
function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.visible)");

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }

  elements.forEach((element) => revealObserver.observe(element));
}

document.addEventListener("DOMContentLoaded", () => {
  renderTrainingCards();
  renderMaps();
  setupNavigation();
  setupFilters();
  setupModal();
  setupCopyButtons();
  setupRoutine();
  setupSmokeParticles();
  setupFlyingGrenade();
  setupScrollEffects();
  observeReveals();
});
