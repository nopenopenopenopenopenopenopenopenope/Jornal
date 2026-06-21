
const NEWS = [
  {
    id: 1,
    title: "O Trocadilho Humano",
    excerpt: "Membro do grupo passa 90% do tempo rimando o nome dos colegas e apenas 10% tentando lembrar qual era o tema real do projeto.",
    author: "Jeremy",
    location: "Recife - PE",
    date: "19/06/2026",
    dateShort: "Jun 19, 2026",
    imageUrl: null,
    caption: "Flagrante do integrante concentrado na criação de sua próxima rima infame durante a reunião.",
    recente: true,
    relatedToSports: false,
    relatedToEconomia: true,
    body: [
      "A tensão aumentava na sala de reuniões enquanto o prazo de entrega se aproximava, mas um dos integrantes parecia completamente alheio ao pânico geral. Testemunhas afirmam que ele passou a maior parte da sessão focado em encontrar rimas complexas para os nomes de cada um dos presentes.",
      "O comportamento, que começou como uma tentativa de quebrar o gelo, logo se tornou a principal atividade do indivíduo. Enquanto os outros discutiam a divisão de tarefas, ele desviava o foco com trocadilhos infames, gastando cerca de 90% do tempo total do encontro apenas aperfeiçoando suas piadas filológicas.",
      "No final da dinâmica, ao ser questionado sobre a sua parte no desenvolvimento, o integrante encarou o grupo em silêncio. Fontes confirmam que ele utilizou os 10% restantes do tempo tentando puxar pela memória qual era, afinal, o tema do projeto que deveriam entregar."
    ],
    references: [
      "SILVA, J. Rimas em ambiente corporativo. Jornal Agreste, 2026. Disponível em: <link>. Acesso em: 19 jun. 2026.",
      "SANTOS, M. A arte do trocadilho inoportuno. Recife Press, 2025. Disponível em: <link>. Acesso em: 19 jun. 2026."
    ],
    relatedIds: [2, 3, 4, 5],
    comments: [
      { user: "User_123", time: "Há 2 horas", likes: 12, text: "Esse cara é um gênio. O projeto entregou, a rima também." },
      { user: "User_321", time: "Há 3 horas", likes: 87, text: "Fui à reunião, confirmo. Ele rimou meu nome com 'abacate'." }
    ]
  },
  {
    id: 2,
    title: "O Fantasma do Software",
    excerpt: "Estudante acusado de 'não fazer nada' é flagrado programando todo o protótipo na madrugada; o atraso era só suspense.",
    author: "Ana Banana",
    location: "Recife - PE",
    date: "19/06/2026",
    dateShort: "Jun 19, 2026",
    imageUrl: null,
    caption: "Terminal aberto às 3h da manhã: o fantasma estava vivo o tempo todo.",
    recente: true,
    relatedToSports: false,
    relatedToEconomia: false,
    body: [
      "Durante semanas, o resto do grupo jurava que um dos membros havia abandonado o projeto. Mensagens sem resposta, ausência nas reuniões e um silêncio ensurdecedor no grupo do WhatsApp alimentaram a teoria do abandono.",
      "A verdade, no entanto, emergiu de forma dramática na madrugada anterior à entrega. Em um único commit monumental, o estudante subiu ao repositório um protótipo funcional completo, com comentários no código, README detalhado e até testes unitários — algo que o grupo inteiro havia esquecido de fazer.",
      "Questionado sobre o sumiço, o programador respondeu apenas: 'Eu trabalho melhor sem plateia.' O projeto foi aprovado com louvor, e o silêncio do grupo foi, desta vez, de admiração."
    ],
    references: [
      "COSTA, P. Desenvolvimento solo em projetos de grupo. Tech Nordeste, 2026. Disponível em: <link>. Acesso em: 19 jun. 2026."
    ],
    relatedIds: [1, 3, 5],
    comments: [
      { user: "DevFan99", time: "Há 1 hora", likes: 44, text: "Esse é o programador que todo grupo precisa e nenhum merece." },
      { user: "User_456", time: "Há 4 horas", likes: 23, text: "Commit às 3h da manhã é a arte mais pura que existe." }
    ]
  },
  {
    id: 3,
    title: "Fiscal de Produtividade Alheia",
    excerpt: "Integrante que passa o dia criticando o colega técnico é visto invocando o nome de amigo misterioso de fora do grupo pela 50ª vez.",
    author: "Carlos Pereira",
    location: "Caruaru - PE",
    date: "18/06/2026",
    dateShort: "Jun 18, 2026",
    imageUrl: null,
    caption: "O fiscal em ação: olho no colega, telefone no ouvido, tarefa intocada.",
    recente: false,
    relatedToSports: true,
    relatedToEconomia: false,
    body: [
      "Há uma figura conhecida em todo trabalho em grupo: aquela pessoa que não sabe exatamente o que está fazendo, mas sabe com precisão cirúrgica o que todos os outros deveriam estar fazendo. Neste projeto, esse papel foi ocupado com maestria.",
      "O integrante em questão desenvolveu um sistema sofisticado de avaliação de colegas, distribuindo críticas técnicas detalhadas sobre áreas nas quais ele próprio nunca havia atuado. 'Esse código tá errado' e 'esse design tá feio' tornaram-se seus bordões — sempre seguidos da promessa de que um amigo de fora resolveria tudo.",
      "O amigo misterioso foi mencionado 50 vezes ao longo do projeto. Nunca apareceu. O grupo entregou assim mesmo."
    ],
    references: [
      "LIMA, F. Gestão de expectativas em grupos universitários. Agreste Acadêmico, 2026. Disponível em: <link>. Acesso em: 18 jun. 2026."
    ],
    relatedIds: [1, 2, 4],
    comments: [
      { user: "CollegeSurvivor", time: "Há 5 horas", likes: 102, text: "O amigo misterioso é uma lenda urbana acadêmica." },
      { user: "User_789", time: "Há 6 horas", likes: 9, text: "Eu era o amigo misterioso em outro grupo. Nunca fui chamado." }
    ]
  },
  {
    id: 4,
    title: "Design Baseado na Fé",
    excerpt: "Designer do grupo cria layout inovador, mas confessa que metade dos botões só funciona na imaginação e na base do tutorial de última hora.",
    author: "Marina Costa",
    location: "Recife - PE",
    date: "17/06/2026",
    dateShort: "Jun 17, 2026",
    imageUrl: null,
    caption: "O Figma estava lindo. O que foi implementado é outra história.",
    recente: false,
    relatedToSports: true,
    relatedToEconomia: false,
    body: [
      "O protótipo no Figma era impecável. Gradientes suaves, tipografia cuidadosa, ícones alinhados ao pixel. A designer apresentou o mockup com a confiança de quem passou semanas refinando cada detalhe — e de fato havia passado.",
      "O problema surgiu na hora de transformar o design em realidade. Metade dos botões existia apenas como elemento visual sem função atribuída. As animações, elogiadas na apresentação, eram GIFs colados por cima do HTML. O menu hamburguer abria, mas não fechava.",
      "Questionada na véspera da entrega, a designer abriu quatro tutoriais simultaneamente e declarou: 'Eu resolvo isso em dez minutos.' Resolveu em dois horas. O grupo a considera uma heroína."
    ],
    references: [
      "OLIVEIRA, R. UI/UX na base da fé: um estudo de caso. Design PE, 2026. Disponível em: <link>. Acesso em: 17 jun. 2026."
    ],
    relatedIds: [2, 3, 5],
    comments: [
      { user: "PixelPerfect", time: "Há 1 dia", likes: 67, text: "O Figma sempre é lindo. O CSS é que não coopera." },
      { user: "FrontendPain", time: "Há 1 dia", likes: 55, text: "Menu que não fecha é uma tradição sagrada do semestre." }
    ]
  },
  {
    id: 5,
    title: "A Grande Revelação Final",
    excerpt: "Protótipo finalmente aparece na véspera da entrega, calando os críticos e provando que o programador estava vivo.",
    author: "Jeremy",
    location: "Recife - PE",
    date: "16/06/2026",
    dateShort: "Jun 16, 2026",
    imageUrl: null,
    caption: "O commit final às 23h58: dois minutos de sobra, uma vida de estresse.",
    recente: true,
    relatedToSports: true,
    relatedToEconomia: true,
    body: [
      "Durante todo o semestre, o programador principal do grupo foi o alvo preferido das críticas. Reuniões passavam, tarefas eram redistribuídas, e a pergunta 'mas cadê o sistema?' ecoava em cada mensagem do grupo.",
      "A resposta chegou às 23h58 do dia da entrega: um repositório atualizado, um sistema rodando localmente e um link de deploy funcionando. O grupo, que havia ensaiado um discurso de reprovação coletiva, ficou em silêncio por quase um minuto.",
      "A apresentação no dia seguinte foi um sucesso. O professor elogiou a coesão do projeto. Ninguém mencionou as semanas de caos. O programador simplesmente disse 'eu sabia que ia dar tempo' e foi buscar café."
    ],
    references: [
      "FERREIRA, T. Entrega de última hora: resiliência ou irresponsabilidade? Jornal Agreste, 2026. Disponível em: <link>. Acesso em: 16 jun. 2026.",
      "ROCHA, L. O deploy às 23h58 como experiência espiritual. Recife Dev, 2025. Disponível em: <link>. Acesso em: 16 jun. 2026."
    ],
    relatedIds: [1, 2, 3],
    comments: [
      { user: "NightOwlDev", time: "Há 2 dias", likes: 134, text: "23h58 é a hora em que os verdadeiros programadores nascem." },
      { user: "User_000", time: "Há 2 dias", likes: 31, text: "O café depois do deploy é o melhor café da vida." }
    ]
  }
];




const API_CONFIG = {
  JORNAL_BASE_URL: "https://raw.githubusercontent.com/nopenopenopenopenopenopenopenopenope/Jornal/refs/heads/main/Api.json",

  HG_CLIMA_KEY: "7923bca7",

  HG_FINANCE_KEY: "7923bca7",
};


function getNewsById(id) {
  return NEWS.find(n => n.id === id) || null;
}

function newsToCard(n) {
  return { id: n.id, title: n.title, excerpt: n.excerpt, date: n.dateShort };
}

function conditionToIcon(slug, extraClass = "") {
  const map = {
    clear_day: "fa-solid fa-sun",
    clear_night: "fa-solid fa-moon",
    cloud: "fa-solid fa-cloud",
    cloudly_day: "fa-solid fa-cloud-sun",
    cloudly_night: "fa-solid fa-cloud-moon",
    rain: "fa-solid fa-cloud-rain",
    storm: "fa-solid fa-cloud-bolt",
    snow: "fa-solid fa-snowflake",
    fog: "fa-solid fa-smog",
    hail: "fa-solid fa-cloud-meatball",
    sleet: "fa-solid fa-cloud-sleet",
    wind: "fa-solid fa-wind",
  };
  const cls = map[slug] || "fa-solid fa-cloud";
  return `<i class="${cls} clima-fa-icon ${extraClass}"></i>`;
}


async function fetchRecentNews() {
  if (API_CONFIG.JORNAL_BASE_URL) {
    try {
      const res = await fetch(`${API_CONFIG.JORNAL_BASE_URL}`);
      const json = await res.json()
      const newjson = json.news.filter(news => news.recente == true)
      return newjson.map(n => ({ id: n.id, title: n.title, excerpt: n.excerpt, date: n.dateShort }));
    } catch (e) { console.warn("fetchRecentNews falhou, usando dados locais:", e); }
  }
  return NEWS.filter(n => n.recente).map(newsToCard);
}

async function fetchFeaturedArticle() {
  if (API_CONFIG.JORNAL_BASE_URL) {
    try {
      const res = await fetch(`${API_CONFIG.JORNAL_BASE_URL}`);
      const json = await res.json();
      const featuredNews = json.news.filter(news => news.featured === true);

      if (featuredNews.length > 0) {

        const article = featuredNews[0];
        return {
          id: article.id,
          title: article.title,
          body: article.excerpt,
          date: article.dateShort,
          imageUrl: article.imageUrl
        };
      } else {
        const n = NEWS.find(n => n.recente) || NEWS[0];
        return {
          id: n.id,
          title: n.title,
          body: n.excerpt,
          date: n.dateShort,
          imageUrl: n.imageUrl
        };
      }
    } catch (e) {
      console.warn("fetchFeaturedArticle falhou, usando dados locais:", e);
      const n = NEWS.find(n => n.recente) || NEWS[0];
      return {
        id: n.id,
        title: n.title,
        body: n.excerpt,
        date: n.dateShort,
        imageUrl: n.imageUrl
      };
    }
  } else {
    const n = NEWS.find(n => n.recente) || NEWS[0];
    return {
      id: n.id,
      title: n.title,
      body: n.body[0],
      date: n.dateShort,
      imageUrl: n.imageUrl
    };
  }
}


const WEATHER_FALLBACK = {
  temp: 20,
  date: "16/06/2026",
  time: "10:01",
  description: "Tempo nublado",
  city: "Recife, PE",
  humidity: 72,
  rain: 12,
  wind_speedy: "19 km/h",
  condition_slug: "cloudly_day",
  forecast: [
    { weekday: "Dom.", condition: "rain", min: 19, max: 21 },
    { weekday: "Seg.", condition: "storm", min: 18, max: 20 },
    { weekday: "Ter.", condition: "clear_day", min: 28, max: 30 },
    { weekday: "Qua.", condition: "cloudly_day", min: 15, max: 17 },
    { weekday: "Qui.", condition: "rain", min: 14, max: 18 },
    { weekday: "Sex.", condition: "cloud", min: 18, max: 22 },
    { weekday: "Sáb.", condition: "storm", min: 17, max: 19 },
  ],
  hourly: [
    { hour: "11h", condition: "cloud", min: 19, max: 21 },
    { hour: "13h", condition: "storm", min: 18, max: 20 },
    { hour: "15h", condition: "clear_day", min: 28, max: 30 },
    { hour: "17h", condition: "cloudly_day", min: 22, max: 25 },
    { hour: "19h", condition: "rain", min: 20, max: 22 },
  ]
};

function _parseHgClima(json) {
  const r = json.results;
  return {
    temp: r.temp,
    date: r.date,
    time: r.time,
    description: r.description,
    city: r.city_name,
    humidity: r.humidity,
    rain: r.rain,
    wind_speedy: r.wind_speedy,
    condition_slug: r.condition_slug,
    forecast: r.forecast.slice(0, 7).map(f => ({
      weekday: f.weekday,
      condition: f.condition,
      min: f.min,
      max: f.max,
    })),
    hourly: WEATHER_FALLBACK.hourly,
  };
}

async function fetchWeather(cityName = "Recife") {
  if (API_CONFIG.HG_CLIMA_KEY) {
    try {
      const url = `https://api.hgbrasil.com/weather?key=${API_CONFIG.HG_CLIMA_KEY}&city_name=${encodeURIComponent(cityName)}&format=json-cors`;
      const res = await fetch(url);
      const json = await res.json();
      if (json.valid_key && json.results) {
        const d = _parseHgClima(json);
        const hour = d.time.split(":")[0] + "h";
        return {
          location: d.city,
          time: hour,
          icon: conditionToIcon(d.condition_slug, "clima-widget-icon"),
          temp: d.temp + "° C",
          full: d,
        };
      }
    } catch (e) { console.warn("fetchWeather falhou, usando fallback:", e); }
  }
  const d = WEATHER_FALLBACK;
  const hour = d.time.split(":")[0] + "h";
  return {
    location: d.city,
    time: hour,
    icon: conditionToIcon(d.condition_slug, "clima-widget-icon"),
    temp: d.temp + "° C",
    full: d,
  };
}


async function fetchArticle(id) {
  if (API_CONFIG.JORNAL_BASE_URL) {
    try {
      const res = await fetch(`${API_CONFIG.JORNAL_BASE_URL}`);
      const json = await res.json();
      const newjson = json.news.filter(news => news.id == id)
      return {
        id: newjson[0].id,
        title: newjson[0].title,
        excerpt: newjson[0].excerpt,
        author: newjson[0].author,
        location: newjson[0].location,
        date: newjson[0].date,
        imageUrl: newjson[0].imageUrl,
        caption: newjson[0].caption,
        body: newjson[0].body,
        references: newjson[0].references,
        relatedIds: newjson[0].relatedIds,
        comments: newjson[0].comments,
      };
    } catch (e) { console.warn("fetchArticle falhou, usando dados locais:", e); }
  }
  const n = getNewsById(id);
  if (!n) return null;
  return {
    id: n.id,
    title: n.title,
    excerpt: n.excerpt,
    author: n.author,
    location: n.location,
    date: n.date,
    imageUrl: n.imageUrl,
    caption: n.caption,
    body: n.body,
    references: n.references,
    relatedIds: n.relatedIds,
    comments: [...n.comments],
  };
}


async function fetchEsportesData() {
  if (API_CONFIG.JORNAL_BASE_URL) {
    try {
      const res = await fetch(`${API_CONFIG.JORNAL_BASE_URL}`);
      const json = await res.json();
      const newjson = json.news.filter(news => news.relatedToSports == true)
      const datajson = json.sports
      return {
        hero: datajson.hero,
        atletas: datajson.atletas,
        relacionadas: newjson,
      }
    } catch (e) { console.warn("fetchEsportesData falhou, usando dados locais:", e); }
  }
  const sportsNews = NEWS.filter(n => n.relatedToSports).map(newsToCard);
  return {
    hero: {
      title: "Esportes no Nordeste e no Mundo",
      desc: "Fique por dentro das últimas notícias esportivas, dos grandes eventos internacionais aos talentos locais que representam o orgulho do Agreste.",
    },
    atletas: [
      { nome: "Lorem ipsum", fotoUrl: null },
      { nome: "Lorem ipsum", fotoUrl: null },
      { nome: "Lorem ipsum", fotoUrl: null },
      { nome: "Lorem ipsum", fotoUrl: null },
      { nome: "Lorem ipsum", fotoUrl: null },
    ],
    relacionadas: sportsNews,
  };
}


async function fetchTurismoEstado(sigla) {
  if (API_CONFIG.JORNAL_BASE_URL) {
    try {
      const res = await fetch(`${API_CONFIG.JORNAL_BASE_URL}`);

      const json = await res.json();
      return json.data[sigla];
    } catch (e) { console.warn("fetchTurismoEstado falhou, usando dados locais:", e); }
  }
  const dados = {
    PE: {
      descricao: "Pernambuco combina litoral deslumbrante, sertão histórico e uma das culturas mais vibrantes do Brasil.",
      pontos: ["Marco Zero", "Porto de Galinhas", "Fernando de Noronha", "Caruaru", "Olinda"],
      eventos: ["Carnaval do Recife", "Festa Junina de Caruaru", "Rock in Rio Recife", "Encontro de Culturas"],
      custos: [
        { titulo: "Passagens aéreas", descricao: "Voos saindo de São Paulo para Recife custam em média R$ 600 a R$ 1.200 na alta temporada." },
        { titulo: "Hospedagem", descricao: "Hotéis em Recife variam de R$ 150 (pousadas) a R$ 600 por noite (hotéis 4 estrelas)." },
      ]
    },
    BA: {
      descricao: "A Bahia encanta com praias paradisíacas, o misticismo do Pelourinho e a Chapada Diamantina.",
      pontos: ["Pelourinho", "Chapada Diamantina", "Praia do Forte", "Morro de São Paulo", "Lençóis"],
      eventos: ["Carnaval de Salvador", "Festa de Iemanjá", "Festival da Primavera", "São João de Feira"],
      custos: [
        { titulo: "Passagens aéreas", descricao: "Voos para Salvador saindo do Rio custam de R$ 400 a R$ 900." },
        { titulo: "Hospedagem", descricao: "No Pelourinho, pousadas históricas custam R$ 180 a R$ 400." },
      ]
    },
    CE: {
      descricao: "O Ceará é famoso por suas dunas, lagoas de água doce e o sol quase o ano inteiro.",
      pontos: ["Jericoacoara", "Canoa Quebrada", "Morro Branco", "Guaramiranga", "Centro de Fortaleza"],
      eventos: ["Fortal", "Ceará Music", "Festival de Velas", "Regata de Jangadas"],
      custos: [
        { titulo: "Passagens aéreas", descricao: "Voos para Fortaleza saindo de Brasília custam em média R$ 500 a R$ 950." },
        { titulo: "Hospedagem", descricao: "Pousadas em Jericoacoara variam de R$ 200 a R$ 700." },
      ]
    },
  };
  return dados[sigla] || {
    descricao: `${sigla} — dados turísticos em desenvolvimento.`,
    pontos: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    eventos: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    custos: [
      { titulo: "Passagens aéreas", descricao: "Informações em desenvolvimento." },
      { titulo: "Hospedagem", descricao: "Informações em desenvolvimento." },
    ],
  };
}


async function fetchCulturaEstado(sigla) {
  if (API_CONFIG.JORNAL_BASE_URL) {
    try {
      const res = await fetch(`${API_CONFIG.JORNAL_BASE_URL}`);

      const json = await res.json();
      return json.culture[sigla];
    } catch (e) { console.warn("fetchCulturaEstado falhou, usando dados locais:", e); }
  }
  const dados = {
    PE: {
      descricao: "Pernambuco é um dos estados mais ricos culturalmente do Brasil, com manifestações únicas que vão do frevo ao maracatu.",
      festas: ["Frevo no carnaval", "Maracatu Rural", "Caboclinho", "Cavalo-Marinho"],
      culinaria: ["Bolo de rolo", "Carne de sol", "Sarapatel", "Baião de dois", "Mungunzá"],
      lendas: ["Caipora", "Mula sem cabeça", "Lobisomem do sertão", "Boto cor-de-rosa"],
      arte: ["Literatura de cordel", "Bonecos de Olinda", "Cerâmica de Alto do Moura"],
      pontos: ["Sítio Histórico de Olinda", "Caruaru — Capital do Forró", "Museu do Homem do Nordeste"],
    },
    BA: {
      descricao: "A Bahia é o maior símbolo da cultura afro-brasileira, com tradições religiosas, musicais e artísticas.",
      festas: ["Candomblé", "Bumba meu boi baiano", "Samba de roda", "Chegança"],
      culinaria: ["Acarajé", "Vatapá", "Moqueca baiana", "Abará", "Cocada"],
      lendas: ["Iemanjá", "Ogum", "Curupira", "Iara"],
      arte: ["Capoeira Angola", "Samba de roda do Recôncavo", "Artesanato de palha"],
      pontos: ["Pelourinho", "Museu Afro-Brasileiro", "Casa de Jorge Amado"],
    },
    CE: {
      descricao: "O Ceará tem identidade cultural forte, marcada pelo forró, cordel e resistência do povo sertanejo.",
      festas: ["Forró universitário", "Reisado", "Bumba meu boi cearense", "Quadrilhas juninas"],
      culinaria: ["Baião de dois", "Carne de sol com pirão", "Paçoca de pilão", "Tapioca", "Canjica"],
      lendas: ["Lampião e Maria Bonita", "Padre Cícero", "Cobra encantada do Cariri", "Caipora"],
      arte: ["Cordel cearense", "Renda de bilro", "Xilogravura"],
      pontos: ["Casa de José de Alencar", "Museu do Ceará", "Memorial da Cultura Cearense"],
    },
  };
  return dados[sigla] || {
    descricao: `${sigla} — dados culturais em desenvolvimento.`,
    festas: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    culinaria: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    lendas: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    arte: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    pontos: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  };
}


async function fetchTirinhas() {
  if (API_CONFIG.JORNAL_BASE_URL) {
    try {
      const res = await fetch(`${API_CONFIG.JORNAL_BASE_URL}`);
      const json = await res.json();

      return json.tirinhas;
    } catch (e) { console.warn("fetchTirinhas falhou, usando dados locais:", e); }
  }
  return [
    { id: 1, titulo: "Títolo Tirinha", paineis: [null, null, null] },
    { id: 2, titulo: "Título Tirinha", paineis: [null, null, null] },
    { id: 3, titulo: "Título Tirinha", paineis: [null, null, null] },
    { id: 4, titulo: "Título Tirinha", paineis: [null, null, null] },
  ];
}


async function fetchVideosData() {
  if (API_CONFIG.JORNAL_BASE_URL) {
    try {
      const res = await fetch(`${API_CONFIG.JORNAL_BASE_URL}`);
      const json = await res.json();
      console.log(json.videos)
      return json.videos;
    } catch (e) { console.warn("fetchVideosData falhou, usando dados locais:", e); }
  }
  const vid = (titulo, youtubeUrl = null) => ({ titulo, youtubeUrl });
  return {
    hero: {
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    secoes: [
      { titulo: "Entrevista", videos: [{ titulo: 1, youtubeUrl: null }, { titulo: 2, youtubeUrl: null }] },
      { titulo: "Podcast", videos: [vid("Lorem ipsum"), vid("Lorem ipsum"), vid("Lorem ipsum")] },
      { titulo: "Jornal", videos: [vid("Lorem ipsum"), vid("Lorem ipsum"), vid("Lorem ipsum")] },
    ],
  };
}


function _parseHgFinance(json) {
  const r = json.results;
  return [
    {
      nome: "Dólar",
      valor: "R$ " + r.currencies.USD.buy.toFixed(2).replace(".", ","),
      variacao: (r.currencies.USD.variation >= 0 ? "+" : "") + r.currencies.USD.variation.toFixed(1) + "% hoje",
      positivo: r.currencies.USD.variation >= 0,
    },
    {
      nome: "Euro",
      valor: "R$ " + r.currencies.EUR.buy.toFixed(2).replace(".", ","),
      variacao: (r.currencies.EUR.variation >= 0 ? "+" : "") + r.currencies.EUR.variation.toFixed(1) + "% hoje",
      positivo: r.currencies.EUR.variation >= 0,
    },
    {
      nome: "Bitcoin",
      valor: "R$ " + Number(r.currencies.BTC.buy).toLocaleString("pt-BR"),
      variacao: (r.currencies.BTC.variation >= 0 ? "+" : "") + r.currencies.BTC.variation.toFixed(1) + "% hoje",
      positivo: r.currencies.BTC.variation >= 0,
    },
    {
      nome: "Ibovespa",
      valor: Number(r.stocks.IBOVESPA.points).toLocaleString("pt-BR") + " pts",
      variacao: (r.stocks.IBOVESPA.variation >= 0 ? "+" : "") + r.stocks.IBOVESPA.variation.toFixed(1) + "% hoje",
      positivo: r.stocks.IBOVESPA.variation >= 0,
    },
  ];
}

async function fetchEconomiaData() {
  const ecoNews = NEWS.filter(n => n.relatedToEconomia).map(newsToCard);
  const heroNews = ecoNews[0] || newsToCard(NEWS[0]);

  let cotacoes;
  if (API_CONFIG.HG_FINANCE_KEY) {
    try {
      const url = `https://api.hgbrasil.com/finance?key=${API_CONFIG.HG_FINANCE_KEY}&format=json-cors`;
      const res = await fetch(url);
      const json = await res.json();
      if (json.valid_key && json.results) {
        cotacoes = _parseHgFinance(json);
      }
    } catch (e) { console.warn("fetchEconomiaData cotações falhou, usando fallback:", e); }
  }

  if (!cotacoes) {
    cotacoes = [
      { nome: "Dólar", valor: "R$ 5,45", variacao: "+0,8% hoje", positivo: true },
      { nome: "Euro", valor: "R$ 6,10", variacao: "-0,2% hoje", positivo: false },
      { nome: "Bitcoin", valor: "R$ 520.000", variacao: "+2,1% hoje", positivo: true },
      { nome: "Ibovespa", valor: "132.450 pts", variacao: "+0,4% hoje", positivo: true },
    ];
  }

  if (API_CONFIG.JORNAL_BASE_URL) {
    try {
      const res = await fetch(`${API_CONFIG.JORNAL_BASE_URL}`);
      const json = await res.json();
      const newjson = json.news.filter(news => news.relatedToEconomia == true)
      const apiNews = newjson.map(n => ({ id: n.id, title: n.title, excerpt: n.excerpt, date: n.dateShort }));
      return { cotacoes, hero: { id: apiNews[0]?.id, title: apiNews[0]?.title, desc: apiNews[0]?.excerpt }, relacionadas: apiNews };
    } catch (e) { console.warn("fetchEconomiaData notícias falhou, usando dados locais:", e); }
  }


  return {
    cotacoes,
    hero: { id: heroNews.id, title: heroNews.title, desc: heroNews.excerpt },
    relacionadas: ecoNews,
  };
}