const WA_BASE = 'https://wa.me/77474529624';

const SERVICE_INFO = {
  'Согласие супруга(и) на сделку': 'Подготовим нотариальное согласие для сделок с имуществом и проверим комплект документов.',
  'Договор отчуждения недвижимости': 'Оформим договор, проверим стороны сделки и документы на объект.',
  'Заявления для регистрации прав': 'Подготовим и нотариально удостоверим заявления для дальнейшей регистрации.',
  'Генеральная доверенность': 'Оформим доверенность с нужным объемом полномочий и сроком действия.',
  'Нотариальные заявления': 'Удостоверим подпись и подберем корректную форму заявления под вашу задачу.',
  'Открытие наследственного дела': 'Проконсультируем по списку документов и порядку оформления.',
  'Согласие на выезд ребенка': 'Подготовим нотариальное согласие для выезда за пределы РК.',
  'Заверение перевода': 'Удостоверим подпись переводчика и корректность оформления перевода.'
};

const SERVICE_CATALOG = [
  {
    id: 'contract-certification',
    title: 'Удостоверение договоров',
    summary: 'Купля-продажа, дарение и другие сделки с проверкой документов.',
    category: 'Недвижимость и сделки',
    page: 'service-real-estate.html',
    icon: 'assets/icons/contract-doc.svg'
  },
  {
    id: 'evidence-securing',
    title: 'Обеспечение доказательств',
    summary: 'Нотариальная фиксация фактов и обстоятельств для защиты прав.',
    category: 'Доверенности и заявления',
    page: 'service-powers.html',
    icon: 'assets/icons/evidence-search.svg'
  },
  {
    id: 'ifns-statements',
    title: 'Заявления в ИФНС (11001, 13001, 14001 и др.)',
    summary: 'Подготовка и нотариальное удостоверение регистрационных заявлений.',
    category: 'Юридические лица',
    page: 'service-business.html',
    icon: 'assets/icons/tax-form.svg'
  },
  {
    id: 'bank-card',
    title: 'Банковская карточка',
    summary: 'Карточка образцов подписи и сопутствующие банковские документы.',
    category: 'Юридические лица',
    page: 'service-business.html',
    icon: 'assets/icons/bank-card.svg'
  },
  {
    id: 'fedresurs-publication',
    title: 'Публикация сообщений в Федресурс',
    summary: 'Подготовка документов и сопровождение нотариального этапа.',
    category: 'Юридические лица',
    page: 'service-business.html',
    icon: 'assets/icons/publication-megaphone.svg'
  },
  {
    id: 'pledge-notice',
    title: 'Уведомления о залоге движимого имущества',
    summary: 'Оформление уведомлений по требованиям законодательства.',
    category: 'Юридические лица',
    page: 'service-business.html',
    icon: 'assets/icons/pledge-lock.svg'
  },
  {
    id: 'document-transfer',
    title: 'Передача документов (преимущественная покупка)',
    summary: 'Передача заявлений и документов собственникам в установленном порядке.',
    category: 'Недвижимость и сделки',
    page: 'service-real-estate.html',
    icon: 'assets/icons/transfer-doc.svg'
  },
  {
    id: 'corporate-decisions',
    title: 'Удостоверение решений участников ООО, АО, НАО',
    summary: 'Заверение корпоративных решений, протоколов и сопроводительных актов.',
    category: 'Юридические лица',
    page: 'service-business.html',
    icon: 'assets/icons/corporate-vote.svg'
  },
  {
    id: 'powers-of-attorney',
    title: 'Доверенности',
    summary: 'Оформление доверенностей для физических и юридических лиц.',
    category: 'Доверенности и заявления',
    page: 'service-powers.html',
    icon: 'assets/icons/power-sign.svg'
  },
  {
    id: 'consents',
    title: 'Согласия',
    summary: 'Согласия супругов и иные нотариальные согласия.',
    category: 'Семейные вопросы',
    page: 'service-family.html',
    icon: 'assets/icons/consent-rings.svg'
  },
  {
    id: 'statements',
    title: 'Заявления',
    summary: 'Нотариальные заявления для госорганов и организаций.',
    category: 'Доверенности и заявления',
    page: 'service-powers.html',
    icon: 'assets/icons/statement-pen.svg'
  },
  {
    id: 'obligations',
    title: 'Обязательства',
    summary: 'Оформление обязательств и подтверждающих нотариальных документов.',
    category: 'Доверенности и заявления',
    page: 'service-powers.html',
    icon: 'assets/icons/obligation-ribbon.svg'
  },
  {
    id: 'notary-deposit',
    title: 'Депозит нотариуса',
    summary: 'Прием и передача денежных средств и документов через депозит нотариуса.',
    category: 'Доверенности и заявления',
    page: 'service-powers.html',
    icon: 'assets/icons/deposit-safe.svg'
  },
  {
    id: 'executive-inscription',
    title: 'Исполнительная надпись',
    summary: 'Подготовка документов для совершения исполнительной надписи.',
    category: 'Доверенности и заявления',
    page: 'service-powers.html',
    icon: 'assets/icons/executive-stamp.svg'
  },
  {
    id: 'family-agreements',
    title: 'Семейные соглашения',
    summary: 'Нотариальные соглашения по имущественным и семейным вопросам.',
    category: 'Семейные вопросы',
    page: 'service-family.html',
    icon: 'assets/icons/family-nest.svg'
  },
  {
    id: 'inheritance',
    title: 'Наследство',
    summary: 'Открытие наследственного дела, заявления и свидетельства.',
    category: 'Наследство',
    page: 'service-inheritance.html',
    icon: 'assets/icons/inheritance-key.svg'
  },
  {
    id: 'document-duplicates',
    title: 'Выдача дубликатов документов',
    summary: 'Оформление выдачи дубликатов и восстановительных документов.',
    category: 'Апостиль и переводы',
    page: 'service-apostille.html',
    icon: 'assets/icons/copies-stack.svg'
  },
  {
    id: 'equivalence-certification',
    title: 'Удостоверение равнозначности',
    summary: 'Удостоверение равнозначности документов в бумажной и электронной форме.',
    category: 'Апостиль и переводы',
    page: 'service-apostille.html',
    icon: 'assets/icons/fact-check.svg'
  },
  {
    id: 'fact-certification',
    title: 'Удостоверение фактов',
    summary: 'Нотариальное удостоверение юридически значимых фактов.',
    category: 'Доверенности и заявления',
    page: 'service-powers.html',
    icon: 'assets/icons/fact-check.svg'
  },
  {
    id: 'copies-and-extracts',
    title: 'Копии, выписки, дубликаты',
    summary: 'Свидетельствование верности копий и оформление выписок.',
    category: 'Апостиль и переводы',
    page: 'service-apostille.html',
    icon: 'assets/icons/copies-stack.svg'
  },
  {
    id: 'translations',
    title: 'Переводы',
    summary: 'Заверение подписи переводчика и нотариальное сопровождение переводов.',
    category: 'Апостиль и переводы',
    page: 'service-apostille.html',
    icon: 'assets/icons/translation-language.svg'
  }
];

function getServiceById(id) {
  if (!id) return null;
  return SERVICE_CATALOG.find((service) => service.id === id) || null;
}

function openWhatsApp(message) {
  const encoded = encodeURIComponent(message.trim());
  window.open(`${WA_BASE}?text=${encoded}`, '_blank', 'noopener,noreferrer');
}

function createInfoModal() {
  if (document.querySelector('#serviceInfoModal')) return;
  const wrapper = document.createElement('div');
  wrapper.id = 'serviceInfoModal';
  wrapper.className = 'info-modal hidden';
  wrapper.innerHTML = `
    <div class="info-modal__backdrop" data-close-modal></div>
    <div class="info-modal__card" role="dialog" aria-modal="true" aria-labelledby="infoModalTitle">
      <button class="info-modal__close" type="button" aria-label="Закрыть" data-close-modal>×</button>
      <p class="badge">Нотариальные действия</p>
      <h3 id="infoModalTitle"></h3>
      <p id="infoModalText"></p>
      <ul class="simple-list">
        <li>При себе необходимо иметь оригинал удостоверения личности.</li>
        <li>Окончательная стоимость уточняется по документам и ситуации.</li>
      </ul>
      <div class="actions">
        <button class="btn btn-primary" type="button" id="infoModalWhatsApp">Уточнить в WhatsApp</button>
        <button class="btn btn-light" type="button" data-close-modal>Закрыть</button>
      </div>
    </div>
  `;
  document.body.append(wrapper);

  wrapper.addEventListener('click', (event) => {
    if (event.target.matches('[data-close-modal]')) {
      wrapper.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
}

function openInfoModal(serviceName) {
  const modal = document.querySelector('#serviceInfoModal');
  if (!modal) return;

  const title = modal.querySelector('#infoModalTitle');
  const text = modal.querySelector('#infoModalText');
  const waBtn = modal.querySelector('#infoModalWhatsApp');
  const description = SERVICE_INFO[serviceName] || 'Подготовим по этой услуге точный перечень документов, сроки и порядок оформления.';

  title.textContent = serviceName;
  text.textContent = description;
  waBtn.onclick = () => {
    openWhatsApp(`Здравствуйте, Айгуль Габитовна. Меня зовут [Заменить]. Нахожусь в Алматы. Вопрос по услуге: ${serviceName}`);
  };

  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function bindQuickButtons() {
  document.querySelectorAll('[data-wa-message]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      openWhatsApp(btn.dataset.waMessage);
    });
  });

  document.querySelectorAll('[data-service]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const service = btn.dataset.service;
      openInfoModal(service);
    });
  });
}

function bindForms() {
  const consult = document.querySelector('#consultationForm');
  if (consult) {
    consult.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = consult.querySelector('[name="name"]').value || '[Заменить]';
      const phone = consult.querySelector('[name="phone"]').value || '[Заменить]';
      const message = consult.querySelector('[name="message"]').value || '[Заменить]';
      openWhatsApp(`Здравствуйте, Айгуль Габитовна. Меня зовут ${name}. Тел: ${phone}. Вопрос: ${message}`);
    });
  }

  const contact = document.querySelector('#contactQuestionForm');
  if (contact) {
    contact.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = contact.querySelector('[name="name"]').value || '[Заменить]';
      const message = contact.querySelector('[name="message"]').value || '[Заменить]';
      openWhatsApp(`Здравствуйте, Айгуль Габитовна. Меня зовут ${name}. Нахожусь в Алматы. Вопрос: ${message}`);
    });
  }
}

function bindTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`.tab-panel[data-tab="${target}"]`)?.classList.add('active');
    });
  });
}

function bindTopbarScrollState() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  let lastScrollY = window.scrollY;
  let isHidden = false;
  let ticking = false;
  const hideAfter = 180;
  const showBefore = 90;
  const deltaThreshold = 6;

  const updateTopbar = () => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;

    if (currentScrollY > 20) {
      topbar.classList.add('topbar--scrolled');
    } else {
      topbar.classList.remove('topbar--scrolled');
    }

    if (currentScrollY <= showBefore) {
      isHidden = false;
    } else if (delta > deltaThreshold && currentScrollY > hideAfter) {
      isHidden = true;
    } else if (delta < -deltaThreshold) {
      isHidden = false;
    }

    if (isHidden) {
      topbar.classList.add('topbar--hidden');
    } else {
      topbar.classList.remove('topbar--hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  updateTopbar();
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateTopbar);
  }, { passive: true });
}

function renderServiceCatalogCards() {
  const grid = document.querySelector('#serviceCatalogGrid');
  if (!grid) return;

  const cards = SERVICE_CATALOG.map((service, index) => {
    const delay = index % 3 === 1 ? ' delay-1' : (index % 3 === 2 ? ' delay-2' : '');
    const href = `service-info.html?id=${encodeURIComponent(service.id)}`;
    return `
      <article class="service-hub-card glass-card service-hub-card--link service-hub-card--compact reveal${delay}" data-href="${href}" tabindex="0" role="link" aria-label="${service.title}">
        <img class="service-icon" src="${service.icon}" alt="" aria-hidden="true" loading="lazy" />
        <div class="service-hub-content">
          <h3>${service.title}</h3>
          <p>${service.summary}</p>
          <p class="service-hub-category">${service.category}</p>
          <a class="btn btn-primary" href="${href}">Открыть услугу</a>
        </div>
      </article>
    `;
  }).join('');

  grid.innerHTML = cards;
}

function bindServiceCardLinks() {
  document.querySelectorAll('.service-hub-card--link[data-href]').forEach((card) => {
    const href = card.dataset.href;
    if (!href) return;

    card.addEventListener('click', (event) => {
      if (event.target.closest('a, button')) return;
      window.location.href = href;
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.location.href = href;
      }
    });
  });
}

function bindServiceInfoPage() {
  const root = document.querySelector('[data-service-info-page]');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const service = getServiceById(params.get('id'));

  const titleEl = document.querySelector('#serviceInfoTitle');
  const leadEl = document.querySelector('#serviceInfoLead');
  const categoryEl = document.querySelector('#serviceInfoCategory');
  const sectionLink = document.querySelector('#serviceInfoSectionLink');
  const iconEl = document.querySelector('#serviceInfoIcon');
  const waBtn = document.querySelector('#serviceInfoWhatsApp');
  const listEl = document.querySelector('#serviceInfoChecklist');

  if (!titleEl || !leadEl || !categoryEl || !sectionLink || !waBtn || !listEl) return;

  if (!service) {
    titleEl.textContent = 'Услуга не найдена';
    leadEl.textContent = 'Откройте страницу услуг и выберите услугу из списка.';
    categoryEl.textContent = 'Раздел: Услуги и цены';
    sectionLink.setAttribute('href', 'services.html');
    sectionLink.textContent = 'Ко всем услугам';
    if (iconEl) iconEl.style.display = 'none';
    return;
  }

  document.title = `${service.title} | Услуги нотариуса`;
  titleEl.textContent = service.title;
  leadEl.textContent = service.summary;
  categoryEl.textContent = `Раздел: ${service.category}`;
  sectionLink.setAttribute('href', service.page);
  sectionLink.textContent = `Открыть раздел: ${service.category}`;

  if (iconEl) {
    iconEl.src = service.icon;
    iconEl.alt = service.title;
  }

  listEl.innerHTML = `
    <li>Подскажем точный перечень документов по вашей ситуации.</li>
    <li>Проверим данные и подготовим проект нотариального документа.</li>
    <li>Итоговую стоимость и срок согласуем до оформления.</li>
  `;

  waBtn.addEventListener('click', (event) => {
    event.preventDefault();
    openWhatsApp(`Здравствуйте, Айгуль Габитовна. Меня зовут [Заменить]. Нахожусь в Алматы. Вопрос по услуге: ${service.title}`);
  });
}

createInfoModal();
renderServiceCatalogCards();
bindQuickButtons();
bindForms();
bindTabs();
bindTopbarScrollState();
bindServiceCardLinks();
bindServiceInfoPage();
