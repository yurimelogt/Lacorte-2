/**
 * LaCôrte Imóveis - Landing Page Application
 * Interactivity: Sliders, Lightbox, Video Modal, WhatsApp Form Generator
 */

// Property Data Sets
const PROPERTIES_DATA = {
  LBZ190826: {
    code: 'LBZ190826',
    title: 'Mansão Colonial com Mirante Particular em João Fernandes',
    location: 'João Fernandes, Armação dos Búzios - RJ',
    price: 'R$ 5.200.000',
    brokerPhone: '5522999981984', // Ludmila Lacorte / LaCôrte
    videoUrl: null,
    images: [
      { src: 'https://s01.jetimgs.com/tnkmRI8vb8l6oztxNUozssR49nXM7de9phEXocrvEuI9ozsjaRy5fehui9YbKQ41vllpmtKGjH10Ro7e_NSTdSlcO8RHV7hcftlzF1yfu3sLQ8FG9CdWDcMfe2pYbFJh7mfe-uXKkuTLLyN5t3wCEYhDGsTsP3J5EIL0e3W2MSu36V7EFJ8/casajoao-dia2jpg.webp', caption: 'Fachada e Varandão Colonial com Vista Mar' },
      { src: 'https://s01.jetimgs.com/tnkmRJMvb8l6owtxNUpz83FeSLMVLpDzSnmsIzNfTZ8z8axb6SckWGz5WE8CXkh2lZ_XWQgeDJhjNYZ_OdyqXbbYiyvao1RHoWYMg6A2T2ms6qP602ge7Y7LdJbLBj8Oe9J03jsqMHN11j8_3SU__D536Cr2KuU08OqPXrlilfrrpiYT2EassQ/djifly2025121314240301765646643252photolowqualityjpg.webp', caption: 'Vista Aérea Privilegiada da Praia de João Fernandes' },
      { src: 'https://s01.jetimgs.com/tnkmRI8vL9l6oztxvRIDvksvFCogPR_JKPx_JN8dITC9JyVRSm8d84mHEj2n0KXoPG61XWKUFtQ7r_mlMk7f4uo8dynQr4Rth9qPjM98Ddplc_Jh69R_FIYbqAU5zijiBXmTJU5ZN_N1lj_P3SU_dDjMRYe_O4w9xEkPz5rigPTrpyfpRwqesw/img20251212204640458hdr2jpg.webp', caption: 'Piscina Privativa e Deck com Vista para o Mar' },
      { src: 'https://s01.jetimgs.com/tnkmRJ8vL9l2owt5vRKr43gvuL91ur9Y1RsfddywiPL4sS_hGRy3vcmu69bT9ivnoox31ltq-ygn_uL__K4shtibNNwY5_XJvf-Dkp3oTWyT51PWjkdDBJryYypfTcmxpsaMGQWYeIQOV6tsssjPj9rQioPpmM73x-UHv9VhfZ7kGUMURzLa/img20251212204747984hdrjpg.webp', caption: 'Living Integrado em Conceito Aberto e Iluminação Natural' },
      { src: 'https://s01.jetimgs.com/tnkmRI8vb8l6oztxNUpzs-3kpOkYmwt7OLsVNF2i-Nqw_AiewfWzE__m1BVrLwCGQ2vfXBsj94fup6SkoVnzvQOJUawWC1xhjjdP_Z0mN7Y0JqgHtdkHmEUAK6FAbn42PxVnITfZUQabIMsSJChe0ioUWNCFGSVTUpgM0xvGE8m3g7p0OE4/img20251212204821363hdrjpg.webp', caption: 'Pôr do Sol Mágico no Terraço e Solarium' },
      { src: 'https://s01.jetimgs.com/tnkmRAMub8l6ozsZx2ILnWYB-NMt54TcsgKkVvtLvcKefwFvxk2AS5V-Ym8yInlDrPKBV2JTFtQ8rv2ldiqUnA2TKQeefVH3qmoMQ5g2s3VOKtWkbM5_jajsTpVu1r0EFHIsdz_uzOvIAzNNRDCMnF-9euJQ82OVHv8cxUxPifrzbCaaIq_98A/casajoao-dia4jpg.webp', caption: 'Arquitetura Colonial Buziana em Condomínio Fechado Exclusivo' },
      { src: 'https://s01.jetimgs.com/tnnAwYXphKBPiW3sr35S56TSBu41PCPMXJgG4UpLuMhmB5uKGXsEydyXaxruLCKtnCpS7try6lvqAePA6t-VAqFWBBwXFZvR8aCtEbtYsGxYan4drIP4VHS4A5K7fv6S_oZFMvPgtv2QZsHP_7l2wnGLQIP2ZY7Y9w8MLDfX_m-bXpjv9GzqNKI/casajoao-dia7jpg.webp', caption: 'Suíte Master Ampla com Sacada e Vista Mar' },
      { src: 'https://s01.jetimgs.com/tnkmRAMuL9l6ozsZ19NrBUT5ONJdvWvrmUAkEGmuMbWZ5Sjd2bu0qn8sUtPDPz_docbK3_KpCut8Fi_JYi3pIaPdq-qo1QakquXAS4WqaiBVQEZGteNyGo4ZgLRjBY8QeTl1XPOiUgM1he54D07PoI-TnPOlCGJ-vd_vygDag_Pv1SeuMlqUKw/casajoao-dia8jpg.webp', caption: 'Dormitórios Climatizados e Finamente Decorados' },
      { src: 'https://s01.jetimgs.com/tnkmRI8vb8l6oztxNUoz8nEGiAFzVNc50t-WcaljHuQnx8mkVHEFQ_xkhPa0UOOSUrQm0qkIEjn7DoOdqcbBNS5KiLFjlOf7ivqRXX9Onhav1pYLrozFFChPv3lnXIRxyneh1ub7jZJzSdHgP0p3wxZC0N12AmFdNKgMEfntjNyrVg_Fpg/casajoao-dia10jpg.webp', caption: 'Espaço Gourmet Completo com Churrasqueira' },
      { src: 'https://s01.jetimgs.com/tnkmRJ8vL9l2owt5vRID5HgvqDlU-3wwAJtrEGXOMdWVxGiewbX0q_dGk3CnJbcCwIUcfjwDywev84q0gQ8QPJG7PMrIxYbxPjdvyq1wLJ3xxhLo6y7rcvhDqAE5CanGmHnVjIEqNPN1mO4YD07PnFyE6tswK4dw2XQtV3g7hPP0xCfhPYBvgw/casajoao-dia14jpg.webp', caption: 'Sauna a Vapor Integrada ao Jardim Paisagístico' }
    ]
  },
  LA080622: {
    code: 'LA080622',
    title: 'Refúgio de Tirar o Fôlego na Ferradurinha com Borda Infinita',
    location: 'Ferradurinha, Armação dos Búzios - RJ',
    price: 'R$ 5.200.000',
    brokerPhone: '5522999982084', // Thiago Tamm
    videoUrl: 'https://www.youtube.com/embed/cUug6-msbAU?autoplay=1',
    images: [
      { src: 'https://s01.jetimgs.com/tnnAwYXphKBPiW3sr35S56TSBu41PCPMXJgG4UpLuMhmB5uKGXsEydyXaxruLCKtnCpTbjqWdD6JZIcnbb5zHkdSBhv1SaBN0qOrKaGHcHV6l6bFr3j4cHRCmZU4mJz2UVUyEs8cdmHw_ERvD6l-qsXPq2Qhuo0_B_MImyhnwfHLaifUf-HqIw/edit12jpg.webp', caption: 'Piscina de Borda Infinita com Vista Deslumbrante para o Oceano' },
      { src: 'https://s01.jetimgs.com/tnkmRI8vb8l6oztxNUpzRa1tlVK5le8ZA-BhsCeS-cDRE7m_zVJwT7dDHHGH95mEyiI731KiCsuMaCGJoWH1rcON0Auq2J2F7AzXroVdmStRwCeGtS0SF3QA30CsBDqmeH_Y0fDEeBJFWSq4EmGLtZCG-6sYxY8cB9MxxgWOCjK2gWe-v04/edit10jpg.webp', caption: 'Hidromassagem Integrada ao Deck com Enseada de Ferradurinha' },
      { src: 'https://s01.jetimgs.com/tnkmRI8vL9l6oztxvRIDvkv--AF4kgcnKkFhNCdl2nyzhsifwfWzE_9Gk3Pn11-Ltqra3rKlCqiAKymJp1XznUf5Ti4RSlxhTjcPwq2wI_1VQKR6j7yhbtDZZxhfGDiJOhJH4nHDUQUj5DdZi-mdNfgAUfCFfKu66BN--hSSEUW2I6btKyQ/20220608111553jpg.webp', caption: 'Deck Panorâmico com Espaço Lounge e Pôr do Sol de Cinema' },
      { src: 'https://s01.jetimgs.com/tnkmRA8uL9l2ozsZ19NrBSTxeLRfZE0gnECYoW6n30BhpTGniGghdnmYlxNfCWqxyf9nkstTs-e9ARvwTrluCQlgPxJcpF5zS0B4DUkUoJsm-G7SAxkS7wjKo4OOQHuWDNWCyBSTYARurugPVigOGwU0ewB_q19tY8MNPSOOFii3u3ltuBc/20220608104640jpg.webp', caption: 'Vista 180 Graus para o Horizonte e Encosta Verde Preservada' },
      { src: 'https://s01.jetimgs.com/tnkmRA8uL9l2ozsZ19NrZUz5-NNlbWobnUOUobl0vbaZHita6Sc62U5-eRqjb4CYOGTcXlms5se2V-nBYq3KJbrNK-p7wXYvzzlOd4WkWOND9247KFm3hGm7hDIpJRquCuo9MJJiYxuVwIezpXW34ImL3TsF5K8XmIc6faWmAfDpdCefRi_L2g/dji0441jpg.webp', caption: 'Vista Aérea da Propriedade e Reserva Ecológica de 2.500m²' },
      { src: 'https://s01.jetimgs.com/tnkmRI8vb8l6oztxNUpzRe3l5PhTlB4x5z__Yv6dACC6h5_v1stTOrvYCCkBpEkpjtPhRfrJzlu-j52ldiqVnA41ljP6u1JHYU_xsotVOUxtJl_9z-iQZ1MSGFw4ES6sBO8H8h_QX3_yO0B_jL6bvgoG_aIszZR99Pv02q8DUIEzGQ2qndhB/dji0435jpg.webp', caption: 'Localização Singular entre o Oceano e a Natureza Viva' },
      { src: 'https://s01.jetimgs.com/tnkmRI8rL8l6oztx5Z_WZERa9mDOEs-ez5U3XSxO0iaGq2EVvDXgm0PpIUIdorUZkaxmb_yLbirVN2PjV908Gw488RRw4jEK4L4eWYU6xHhbyXH4n0Mo_XFCJTtynYthkmU-co359MQ_s4tkmDhXRqoz2E9fV_pJyjUgWVDoPtyQa5BVoQ/20220608110135jpg.webp', caption: 'Living Sofisticado com Grandes Vãos e Mobília de Alto Luxo' },
      { src: 'https://s01.jetimgs.com/tnkmRI8rL8l6oztx5Z_WYFpa-mhIXEoB0usBUeSAjucvvSLNpFJwT7ezH3GnKbcC2AV8fjwDywet84p0gYwQPJEzhcpI6wak0uVAc532dP5RQEZCL1wXCHSAJ1CkJBqGessMh94ueBpFWjK-EmGLpJENXTXGd01RTqUD3Vk-lvrqNCfLHBPeOQ/20220608110155jpg.webp', caption: 'Cozinha e Sala de Jantar Integradas ao Terraço' },
      { src: 'https://s01.jetimgs.com/tnnAwYXphKBPiW3sr35S56TSBu41PCPMXJgG4UpLuMhmB5uKGXsEydyXaxruLCKtnCpS7try6lvqAePA6t-VAqFWBBwXFZvR8aCtEbtYsGxYan4drIP4VHS4A5K7fv6S_oZFMvPgtv2QZsHPH7YB5bozYKC2DUlA908Iu_hwkZ-bWQ_vlwzWa4E/20220608110208jpg.webp', caption: 'Suíte Master com Vista Panorâmica para o Mar' },
      { src: 'https://s01.jetimgs.com/tnkmRI8vL9l6oztxvRIDRErpiBN1Mxq1b5x_It-IztOyfz1NSm8d84mH0R2n0MVu_e21U2JXFuQ4r52ldip3nA6V3m1WMQUsF6DryudkwWiTI_kR7pmn_S5CNJKaVXtVhtmhjEfbLvPrE0WzoQOdMVgoV70Nxz1wWP4n5MMggfPwXyZEzbHO3A/20220608110228jpg.webp', caption: 'Banheiro Master com Acabamentos Nobres e Iluminação Suave' }
    ]
  },
  LA260421: {
    code: 'LA260421',
    title: 'Mansão Assinada por Guido Campanate na Ferradura',
    location: 'Ferradura, Armação dos Búzios - RJ',
    price: 'R$ 6.500.000',
    brokerPhone: '5522999982084', // Thiago Tamm / LaCôrte
    videoUrl: 'https://www.youtube.com/embed/r1rRR4ZTKjo?autoplay=1',
    images: [
      { src: 'https://s01.jetimgs.com/tnkmRJMvL9l2oztxvRIDWacCuTHc_-lYv-AmUpyzAGzUdaiwvToT-PrjJ2OdTJQbj2AjH3SH-0Sj6sgqWQGPcLjSkJUL6l5lsNxiBw7_NM5lxNnXf4A2yfrfv7gOjWM4Wldi1dK5jJgqt-GAHjjA4pHLCv3VKaeJEQNAJHNWyA/20210425171525jpg.webp', caption: 'Piscina com Borda Infinita e Vista para a Enseada da Ferradura' },
      { src: 'https://s01.jetimgs.com/tnnAwYXphKBPiW3sr35S56TSBu41PCPMXJgG4UpLuMhmB5uKGXsEydyXaxruLCKtnCpS7tryikaRG5s-72RyvTwre2GrzB_SqWZrEPpfMpRxYsNAQ7Zv5ES9/site6jpg.webp', caption: 'Arquitetura Autoral e Exclusiva de Guido Campanate' },
      { src: 'https://s01.jetimgs.com/tnkmRJ8vL9l2owt5vRIDjg_28Bv7lzHpzAVxBdFNLcco18mk9FJZJwxnloDFHA2kYwlsQbIY4SGhO5Fji-ao9rTq0RSV9s4PMN3Fu4WAU_laSf6F8JjPypNoCuwaCTz0T7YPqu0zP1K53urfqgLWjJgeLvlk7Ke1LwO7iGpoVA/20210425171456jpg.webp', caption: 'Deck Panorâmico para Contemplar o Horizonte e a Brisa do Mar' },
      { src: 'https://s01.jetimgs.com/tnkmRJ8vL9l2owt5vRIDtUfAtD5M9fy8z0u4WSOQ5qKDdumos_Xhw_XnxPa0a3xC-UY32iLw2_Q3ShsMlNguNBD6AfRA0A5JkRzcWcfqrR0lxN1XwvqI9q4wjFwbbqMYWndl1dL5jcpayIH_7kAA0BbVbQ4-gqe3YQPeuLg7yg/20210425171511jpg.webp', caption: 'Área Gourmet Externa com Churrasqueira e Solarium' },
      { src: 'https://s01.jetimgs.com/tnkmRAUvb9lyowtNQAKT-vb04RtQctWYQ-AYR40cz99_vS4iKSWjGoL-ZRoMh-7KPKfErmuHrVrgTRsOnNuuKURLKEQtzbfIT8WiWQc0ND740N1Xwo-UafRaZ2qIrA4qFy2v9GZLjm8wtxV-_skLMKzxJP5SS-iDmwVwRo9UvEc/20210425171540jpg.webp', caption: 'Cenário Crepuscular Incomparável na Enseada' },
      { src: 'https://s01.jetimgs.com/tnkmRA8vb9lyoxtJQAKT-u-7qTAv5mUSdhiX-bZu-ECZnDGrS2h3CPr2ZRqMcP4KNKPE1mNH1nrATRsMRQeYCxD6AfdA0FIe9Gijkxn1rZ1G1N5XBvuINpcwjlwbDjpdwJN-1tL5jUqw9hV-_kkKpI53Fo66yEe0lwPpv-bSxw/20210423134325jpg.webp', caption: 'Jardim Tropical e Terreno Imponente de 1.000m²' },
      { src: 'https://s01.jetimgs.com/tnkmRJ8vL9l2owt5vRIDjqp7MRpxNnP1oYQTVSOQ5qSDdumos_XhwxFjloLFUR8d2xNiGHw8STsk6KQ6dWit9pRqwRSV9s4MMFxlX6SkAMe4tGHSK6ICf8JbpbMqdKPjoCp65Jd6T60dCTfAlvyNRQF5wgGYHze0SAPopLvUsA/20210423133100jpg.webp', caption: 'Living Monumental com Pé-Direito Duplo e Madeira de Lei' },
      { src: 'https://s01.jetimgs.com/tnkmRA8vb9lyoxtJQAITjmSoqTAv5mUSdphv1Zts-ECZnDGrS2h3CPr2ZRoMd_4KNKPH1mOH1XrA4sgukNguNRD6APcB0A5JkRzcWUfqJf5psSG7dNJLjrjJf5gCjaEYSk9h0dL5jcpaqYH_7iAAPJFU9uWiHDe1tAPyu2b1lg/20210423140050jpg.webp', caption: 'Suítes Aconchegantes com Sacada e Ventilação Cruzada' },
      { src: 'https://s01.jetimgs.com/tnkmRAUvb9lyowtNQAITjPapqTEv5mUKRphn_bZu-JAtoielCBoVuDX-Zcp97u8KPKPE_irwj-MHShsMlNiuNRD6AfZA0A5JkRzc2ZkJ-VQvt82tNEsD5JMWosZPRGvAnZifH8vDo2QQFquOu-Jj_UkdvQhQMNWRmNBwqGi4X5A/20210423135921jpg.webp', caption: 'Integração Perfeita entre Ambientes Internos e Externos' },
      { src: 'https://s01.jetimgs.com/tnkmRJ8vL9l2owt5vRIDtUfAtL5N9fy8z0u7oQ5cXqODdumos_XhwyFnlPS0wy3GEbROdlpW6tVNdMbVjkD8N24APJ2_QxJuC8Y7LsjrrR0lxN0nwjqo_q4gjCADzr0g4ON21tK5ipiqNOGAHjihfYEUQsMFVeyDmx9wjYynAFA/20210423140024jpg.webp', caption: 'Suíte Master com Amplo Espaço e Acabamentos Rústico-Chic' }
    ]
  }
};

// Current active photo indexes per property slider
const currentPhotoIndex = {
  LBZ190826: 0,
  LA080622: 0,
  LA260421: 0
};

// Lightbox state
let lightboxProperty = null;
let lightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initHeroVideo();
  initNavbar();
  initSliders();
  initFilters();
  initForm();
  initModals();
});

/* -------------------------------------------------------------
   Hero Background Video Autoplay Handler
   ------------------------------------------------------------- */
function initHeroVideo() {
  const video = document.querySelector('.hero-bg-video');
  if (video) {
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback for browsers with strict battery or autoplay rules: start on first touch/click
        const startOnInteraction = () => {
          video.play().catch(() => {});
          document.removeEventListener('touchstart', startOnInteraction);
          document.removeEventListener('click', startOnInteraction);
        };
        document.addEventListener('touchstart', startOnInteraction, { passive: true });
        document.addEventListener('click', startOnInteraction, { passive: true });
      });
    }
  }
}

/* -------------------------------------------------------------
   Navbar & Mobile Menu
   ------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = toggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = toggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });

    // Fechar menu ao tocar fora dele no mobile
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !toggle.contains(e.target)) {
        navMenu.classList.remove('open');
        const icon = toggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      }
    });
  }
}

/* -------------------------------------------------------------
   Card Sliders & Thumbnails
   ------------------------------------------------------------- */
function initSliders() {
  Object.keys(PROPERTIES_DATA).forEach(code => {
    const card = document.getElementById(`property-${code}`);
    if (!card) return;

    const mainImg = card.querySelector('.media-main-img');
    const prevBtn = card.querySelector('.slider-prev');
    const nextBtn = card.querySelector('.slider-next');
    const thumbs = card.querySelectorAll('.thumb-item');
    const countBadge = card.querySelector('.badge-photo-count');

    function updateSlide(index) {
      const data = PROPERTIES_DATA[code];
      const total = data.images.length;
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;

      currentPhotoIndex[code] = index;

      if (mainImg) {
        mainImg.style.opacity = '0.3';
        setTimeout(() => {
          mainImg.src = data.images[index].src;
          mainImg.alt = `${data.title} - Foto ${index + 1}`;
          mainImg.style.opacity = '1';
        }, 120);
      }

      thumbs.forEach((thumb, i) => {
        if (i === index) {
          thumb.classList.add('active');
        } else {
          thumb.classList.remove('active');
        }
      });

      if (countBadge) {
        countBadge.innerHTML = `<i class="fa-solid fa-camera"></i> ${index + 1} / ${total}`;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateSlide(currentPhotoIndex[code] - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateSlide(currentPhotoIndex[code] + 1);
      });
    }

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.getAttribute('data-index'), 10);
        updateSlide(idx);
      });
    });

    // Clicking main image opens Lightbox
    if (mainImg) {
      mainImg.addEventListener('click', () => {
        openLightbox(code, currentPhotoIndex[code]);
      });
    }

    // "Ver Fotos" button
    const viewPhotosBtn = card.querySelector('.btn-view-photos');
    if (viewPhotosBtn) {
      viewPhotosBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(code, currentPhotoIndex[code]);
      });
    }
  });
}

/* -------------------------------------------------------------
   Property Switcher / Filter Tabs
   ------------------------------------------------------------- */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.property-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-code') === filter) {
          card.style.display = 'grid';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------
   Lightbox Modal
   ------------------------------------------------------------- */
function openLightbox(propertyCode, index = 0) {
  const modal = document.getElementById('lightbox-modal');
  if (!modal || !PROPERTIES_DATA[propertyCode]) return;

  lightboxProperty = propertyCode;
  lightboxIndex = index;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  renderLightbox();
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function renderLightbox() {
  if (!lightboxProperty) return;
  const data = PROPERTIES_DATA[lightboxProperty];
  const total = data.images.length;
  if (lightboxIndex < 0) lightboxIndex = total - 1;
  if (lightboxIndex >= total) lightboxIndex = 0;

  const currentImg = data.images[lightboxIndex];
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption-text');
  const modalCounter = document.getElementById('lightbox-counter-text');

  if (modalImg) {
    modalImg.src = currentImg.src;
    modalImg.alt = currentImg.caption || data.title;
  }
  if (modalCaption) {
    modalCaption.textContent = currentImg.caption || `${data.title} - Ref: ${data.code}`;
  }
  if (modalCounter) {
    modalCounter.textContent = `${lightboxIndex + 1} de ${total}`;
  }
}

function initModals() {
  // Lightbox Controls
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      lightboxIndex--;
      renderLightbox();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      lightboxIndex++;
      renderLightbox();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
      }
    });
  }

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
      lightboxIndex--;
      renderLightbox();
    }
    if (e.key === 'ArrowRight') {
      lightboxIndex++;
      renderLightbox();
    }
  });

  // Video Tour Modal
  const videoModal = document.getElementById('video-modal');
  const videoClose = document.querySelector('.video-modal-close');
  const videoIframe = document.getElementById('video-iframe');

  window.openVideoTour = function(propertyCode) {
    const data = PROPERTIES_DATA[propertyCode];
    if (!data || !data.videoUrl || !videoModal || !videoIframe) {
      showToast('Tour virtual em vídeo disponível sob consulta no WhatsApp.');
      return;
    }
    videoIframe.src = data.videoUrl;
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeVideoModal() {
    if (!videoModal || !videoIframe) return;
    videoIframe.src = '';
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (videoClose) videoClose.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }
}

/* -------------------------------------------------------------
   WhatsApp Direct Action & Lead Capture Form
   ------------------------------------------------------------- */
function initForm() {
  const form = document.getElementById('whatsapp-lead-form');
  const phoneInput = document.getElementById('form-phone');
  const propertySelect = document.getElementById('form-property');

  // Phone masking (XX) XXXXX-XXXX
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);
      if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 0) {
        value = `(${value}`;
      }
      e.target.value = value;
    });
  }

  // Pre-select property from card button and scroll smoothly
  window.selectPropertyForWhatsApp = function(propertyCode) {
    if (propertySelect) {
      propertySelect.value = propertyCode;
    }
    const formSection = document.getElementById('contato-whatsapp');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      // highlight input
      setTimeout(() => {
        const nameInput = document.getElementById('form-name');
        if (nameInput) nameInput.focus();
      }, 700);
    }
  };

  // Direct fast WhatsApp button on card
  window.directWhatsAppCard = function(propertyCode) {
    const data = PROPERTIES_DATA[propertyCode];
    if (!data) return;

    const message = encodeURIComponent(
      `Olá! Estou no site da LaCôrte Imóveis e gostaria de agendar uma visita e receber informações completas sobre o imóvel:\n\n` +
      `🏠 Imóvel: ${data.title}\n` +
      `📍 Referência: ${data.code} (${data.location})\n` +
      `💰 Valor: ${data.price}\n\n` +
      `Poderiam me passar mais detalhes e disponibilidade de visita? Obrigado!`
    );

    const targetUrl = `https://api.whatsapp.com/send?phone=${data.brokerPhone}&text=${message}`;
    window.open(targetUrl, '_blank');
  };

  // Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const propCode = document.getElementById('form-property').value;
      const date = document.getElementById('form-schedule').value;
      const messageText = document.getElementById('form-message').value.trim();
      
      const brokerRadio = document.querySelector('input[name="broker"]:checked');
      const selectedBroker = brokerRadio ? brokerRadio.value : 'ludmila';

      if (!name || !phone) {
        showToast('Por favor, preencha seu nome e telefone.');
        return;
      }

      // Determine broker phone number
      let brokerPhone = '5522999981984'; // Default Ludmila
      let brokerName = 'Ludmila Lacorte';

      if (selectedBroker === 'thiago') {
        brokerPhone = '5522999982084';
        brokerName = 'Thiago Tamm';
      } else if (selectedBroker === 'usa') {
        brokerPhone = '15618666889';
        brokerName = 'LaCôrte International (Flórida / EUA)';
      }

      // Format property description
      let propertyDesc = 'Interesse em conhecer as 3 propriedades exclusivas';
      if (propCode && PROPERTIES_DATA[propCode]) {
        const p = PROPERTIES_DATA[propCode];
        propertyDesc = `${p.title} (Ref: ${p.code} - ${p.price})`;
      }

      const formattedWhatsAppMessage = 
`💎 *NOVO CONTATO VIP - LACÔRTE IMÓVEIS* 💎
---------------------------------------------
👤 *Nome:* ${name}
📱 *WhatsApp:* ${phone}
${email ? `✉️ *E-mail:* ${email}\n` : ''}🏡 *Imóvel de Interesse:*
${propertyDesc}
${date ? `🗓️ *Previsão de Visita:* ${date}\n` : ''}${messageText ? `💬 *Mensagem do Cliente:*\n"${messageText}"\n` : ''}---------------------------------------------
_Enviado através da Landing Page Exclusiva LaCôrte Imóveis_`;

      const encodedText = encodeURIComponent(formattedWhatsAppMessage);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${brokerPhone}&text=${encodedText}`;

      showToast(`Redirecionando para o WhatsApp com ${brokerName}...`);

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 600);
    });
  }
}

/* -------------------------------------------------------------
   Toast Notification
   ------------------------------------------------------------- */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--gold-400);"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
