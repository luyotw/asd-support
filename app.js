const iconPaths = {
  brand: `<path fill="currentColor" stroke="none" d="M14.98 3.5
    c.14-.49.83-.49.97 0 .94 3.39 1.45 3.91 4.84 4.85
    .49.13.49.83 0 .96-3.39.94-3.9 1.46-4.84 4.85
    -.14.49-.83.49-.97 0-.94-3.39-1.45-3.91-4.84-4.85
    -.49-.13-.49-.83 0-.96 3.39-.94 3.9-1.46 4.84-4.85Z"/>
    <path d="M1.65 16.05C5.9 15.72 9.48 18.9 14.6 19.02c3.16.07 5.75-1.18 7.8-2.08"/>`,
  leaf: '<path d="M20.7 3.3C11.6 3 5 6.2 5 13a6 6 0 0 0 6 6c6.8 0 10-6.6 9.7-15.7Z"/><path d="M3.5 20.5 14 10"/>',
  home: '<path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 21v-7h6v7"/>',
  book: '<path d="M12 6a6 6 0 0 0-5-2H3v15h4a6 6 0 0 1 5 2 6 6 0 0 1 5-2h4V4h-4a6 6 0 0 0-5 2v15"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  bookmark: '<path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16l-6-4-6 4z"/>',
  user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  up: '<path d="M12 20V5m-6 6 6-6 6 6"/>',
  back: '<path d="M20 12H5m6-6-6 6 6 6"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>',
  external: '<path d="M13 5h6v6m0-6-8 8m7 0v6H5V6h6"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
  repeat: '<path d="M4 8h15m-4-4 4 4-4 4M20 16H5m4-4-4 4 4 4"/>',
  message: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l1.4-3.5A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8 11h8m-8 4h5"/>',
  sparkles: '<path d="M12 2c0 6-2 8-8 8 6 0 8 2 8 8 0-6 2-8 8-8-6 0-8-2-8-8Zm7 13v6m-3-3h6M4 3v4M2 5h4"/>',
  heart: '<path d="M20.8 8a4.8 4.8 0 0 0-8.8-2.5A4.8 4.8 0 0 0 3.2 8c0 5 8.8 10.5 8.8 10.5S20.8 13 20.8 8Z"/>',
  moon: '<path d="M20.8 13.5A9 9 0 0 1 10.5 3.2 9 9 0 1 0 20.8 13.5Z"/>',
  meal: '<path d="M4 3v6a3 3 0 0 0 6 0V3M7 3v18m12-18c-3 2-4 6-4 10h4m0-10v18"/>',
  hands: '<path d="M4 10v6l4 4h7l5-5a2 2 0 0 0-3-2l-3 2h-4m-6-5a2 2 0 0 1 4 0v2l2 2h4a2 2 0 0 1 0 4"/>',
  check: '<path d="m5 12 4 4 10-10"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  sliders: '<path d="M4 7h4m4 0h8M4 17h8m4 0h4"/><circle cx="10" cy="7" r="2"/><circle cx="14" cy="17" r="2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
};

function icon(name, className = "") {
  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]}</svg>`;
}

const app = document.querySelector("#app");
const notice = document.querySelector("#notice");
const resetDialog = document.querySelector("#reset-dialog");
const key = "asd-guide-mockup-v1";
const notesPrefix = `${key}-notes/`;
const noteDate = new Intl.DateTimeFormat("zh-TW", { dateStyle: "medium", timeStyle: "short" });
const articleDate = new Intl.DateTimeFormat("zh-TW", { dateStyle: "long", timeZone: "UTC" });
const storageVersion = 2;
const ages = ["0–1 歲", "2–5 歲", "6–8 歲", "9–12 歲", "13–17 歲"];
const genders = ["女孩", "男孩", "其他", "不透露"];
const navItems = [
  ["home", "home", "首頁"], ["library", "book", "育兒指南", "育兒"],
  ["resources", "folder", "資源專區", "資源"], ["saved", "bookmark", "收藏"],
  ["settings", "user", "我的設定", "設定"],
];
const categoryById = Object.fromEntries(categories.map(category => [category.id, category]));
const resourceGroupById = Object.fromEntries(resourceGroups.map(group => [group.id, group]));
const situationById = Object.fromEntries(situations.map(situation => [situation.id, situation]));
const articleById = Object.fromEntries(articles.map(article => [article.id, article]));
const withdrawnById = Object.fromEntries(withdrawnArticles.map(article => [article.id, article]));
const guideArticles = articles.filter(article => !article.resource);
const resourceArticles = articles.filter(article => article.resource);
const visibleCategories = categories.filter(category => guideArticles.some(article => article.category === category.id));
const emptyProfile = () => ({ age: "", gender: "", situations: [] });
const emptyState = () => ({ version: storageVersion, profile: null, saved: [], dismissed: [] });

let state = loadState();
let draft = emptyProfile();
let libraryFilter = "all";
let libraryQuery = "";
let searchQuery = "";
let recommendationRound = null;
let noticeTimer;
let storageAvailable = true;
try {
  localStorage.setItem(`${key}-test`, "true");
  localStorage.removeItem(`${key}-test`);
} catch {
  storageAvailable = false;
}

function loadState() {
  try {
    const savedState = JSON.parse(localStorage.getItem(key));
    if (!savedState) return emptyState();
    const savedSituations = savedState.profile?.situations;
    const knownSituations = Array.isArray(savedSituations)
      ? savedSituations.filter(id => Object.hasOwn(situationById, id)) : [];
    // The original school choice also covered finding local services.
    if (!savedState.version && knownSituations.includes("school") && !knownSituations.includes("local-support")) {
      knownSituations.push("local-support");
    }
    return {
      version: storageVersion,
      profile: savedState.profile ? {
        age: ages.includes(savedState.profile.age) ? savedState.profile.age : "",
        gender: genders.includes(savedState.profile.gender) ? savedState.profile.gender : "",
        situations: knownSituations,
      } : null,
      saved: Array.isArray(savedState.saved) ? savedState.saved.filter(id => Object.hasOwn(articleById, id) || Object.hasOwn(withdrawnById, id)) : [],
      dismissed: Array.isArray(savedState.dismissed) ? savedState.dismissed.filter(id => Object.hasOwn(articleById, id) || Object.hasOwn(withdrawnById, id)) : [],
    };
  } catch {
    return emptyState();
  }
}

function saveState() {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch {
    storageAvailable = false;
  }
}

function notify(message) {
  clearTimeout(noticeTimer);
  notice.textContent = message;
  notice.classList.add("is-visible");
  noticeTimer = setTimeout(() => notice.classList.remove("is-visible"), 2800);
}

function readNotes(articleId) {
  try {
    const notes = JSON.parse(localStorage.getItem(notesPrefix + articleId));
    return Array.isArray(notes) ? notes.filter(note => note && typeof note.text === "string" &&
      typeof note.id === "string" && /^[a-z0-9-]+$/.test(note.id) && Number.isFinite(Date.parse(note.createdAt))) : [];
  } catch {
    return [];
  }
}

function writeNotes(articleId, notes) {
  try {
    if (notes.length) localStorage.setItem(notesPrefix + articleId, JSON.stringify(notes));
    else localStorage.removeItem(notesPrefix + articleId);
    return true;
  } catch {
    notify("筆記未儲存，請檢查瀏覽器的儲存空間或權限");
    return false;
  }
}

function notesSection(articleId) {
  const notes = readNotes(articleId);
  return `<section class="article-section notes-section" aria-labelledby="notes-title">
    <h2 id="notes-title" tabindex="-1">我的筆記</h2>
    <p>筆記只存在這個瀏覽器。</p>
    <form class="note-form" data-article="${articleId}">
      <label for="note-text" class="sr-only">筆記內容</label>
      <textarea id="note-text" name="note" rows="4" maxlength="2000" required placeholder="當時發生什麼？你試了什麼？孩子怎麼回應？"></textarea>
      <div class="note-actions"><button type="submit" class="button primary">儲存筆記</button><button type="button" class="button secondary" data-action="cancel-note" hidden>取消編輯</button></div>
    </form>
    ${notes.length ? `<ol class="note-list">${notes.map(note => `<li data-note-id="${note.id}">
      <time datetime="${new Date(note.createdAt).toISOString()}">${noteDate.format(new Date(note.createdAt))}</time>
      <p>${note.text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</p>
      <div class="note-actions"><button class="text-button" data-action="edit-note">編輯</button><button class="text-button" data-action="delete-note">刪除</button></div>
    </li>`).join("")}</ol>` : "<p class=\"notes-empty\">這篇還沒有筆記。</p>"}
  </section>`;
}

function refreshNotes(articleId) {
  app.querySelector(".notes-section").outerHTML = notesSection(articleId);
  app.querySelector("#notes-title").focus({ preventScroll: true });
}

function route() {
  const page = location.hash.slice(1);
  if (page.startsWith("article/") && (Object.hasOwn(articleById, page.slice(8)) || Object.hasOwn(withdrawnById, page.slice(8)))) return page;
  if (page.startsWith("resources/") && Object.hasOwn(resourceGroupById, page.slice(10))) return page;
  if (["library", "resources", "search", "saved", "settings", "edit", "sources", "setup/1", "setup/2", "setup/3"].includes(page)) return page;
  if (page === "home") return "home";
  return state.profile ? "home" : "welcome";
}

function go(page) {
  const hash = page === "welcome" ? "" : `#${page}`;
  if (location.hash === hash) {
    render(true);
  } else {
    location.hash = hash;
  }
}

function brand() {
  return `<a class="brand" href="${state.profile ? "#home" : "#"}" aria-label="星泊首頁">
    <span class="brand-mark">${icon("brand")}</span>
    <span><strong>星泊</strong><small>ASD 育兒支持手冊</small></span>
  </a>`;
}

function photo(className = "") {
  return `<img class="${className}" src="assets/together.webp" alt="家長與孩子一起坐在地毯上看圖卡" width="960" height="640">`;
}

function navLink([id, symbol, title, compactTitle = title], active, compact = false) {
  return `<a class="nav-link ${id === active ? "active" : ""}" href="#${id}" aria-label="${title}" ${id === "library" ? 'data-action="open-library"' : ""} ${id === active ? 'aria-current="page"' : ""}>${icon(symbol)}<span>${compact ? compactTitle : title}</span></a>`;
}

function shell(active, content) {
  return `<div class="shell">
    <aside class="sidebar">
      ${brand()}
      <nav class="desktop-nav" aria-label="主要導覽">${navItems.map(item => navLink(item, active)).join("")}</nav>
      <div class="side-note"><span class="side-icon">${icon("lock")}</span><div><strong>資料留在你的裝置</strong><a href="#settings">管理本機資料 ${icon("chevron")}</a></div></div>
    </aside>
    <div class="body">
      <header class="topbar">
        <div class="mobile-brand">${brand()}</div>
        <span class="breadcrumb">${active === "search" ? "搜尋星泊" : active === "home" ? "我的育兒手冊" : navItems.find(item => item[0] === active)?.[2] || "我的育兒手冊"}</span>
        <div class="top-actions">
          <a class="icon-button top-search" href="#search" aria-label="搜尋星泊" data-action="start-search">${icon("search")}</a>
          <a class="avatar" href="#settings" aria-label="我的設定">${icon("user")}</a>
        </div>
      </header>
      <main id="main" tabindex="-1" class="container">${content}</main>
    </div>
    <nav class="mobile-nav" aria-label="主要導覽">${navItems.map(item => navLink(item, active, true)).join("")}</nav>
  </div>`;
}

function welcome() {
  return `<div class="onboarding">
    <header class="onboarding-top">${brand()}<a class="button plain" href="#library" data-action="open-library">育兒指南 ${icon("arrow")}</a></header>
    <main id="main" tabindex="-1" class="welcome">
      <div class="welcome-copy">
        <p class="kicker"><span></span> 給自閉症（ASD）孩子的照顧者</p>
        <h1>從今天的日常，<br>找到一點支持。</h1>
        <p class="intro">從出門準備、溝通到睡前，挑出你想先處理的生活情境，找到適合一起試試的小步驟。</p>
        <div class="welcome-actions">
          <button class="button primary" data-action="start">開始設定 ${icon("arrow")}</button>
          <a class="button secondary" href="#resources">查資源</a>
        </div>
        <p class="privacy-line">${icon("lock")} ${storageAvailable ? "免登入，資料儲存在這個瀏覽器。" : "免登入，目前瀏覽器只會暫時保留資料。"} </p>
      </div>
      <div class="welcome-visual">${photo("welcome-photo")}</div>
    </main>
  </div>`;
}

function selectOptions(options, selected) {
  return `<option value="">暫不提供</option>` + options.map(option =>
    `<option ${option === selected ? "selected" : ""}>${option}</option>`
  ).join("");
}

function basics() {
  return `<div class="form-fields">
    <label>年齡區間 <span>選填</span>
      <select data-profile="age">${selectOptions(ages, draft.age)}</select>
    </label>
    <label>性別 <span>選填</span>
      <select data-profile="gender">${selectOptions(genders, draft.gender)}</select>
      <small>性別與推薦排序無關。</small>
    </label>
  </div>`;
}

function situationOptions() {
  const choice = situation => `<label class="situation">
      <input type="checkbox" value="${situation.id}" ${draft.situations.includes(situation.id) ? "checked" : ""}>
      <span class="category-icon ${situation.color}">${icon(situation.icon)}</span>
      <span><strong>${situation.prompt}</strong></span>
      <i aria-hidden="true">${icon("check")}</i>
    </label>`;
  return `<fieldset class="situation-grid"><legend class="sr-only">可複選的照顧情境</legend>
    ${situations.filter(situation => !situation.resourceInterest).map(choice).join("")}
  </fieldset>
  <fieldset class="situation-grid"><legend>想查哪些資源？</legend>
    ${situations.filter(situation => situation.resourceInterest).map(choice).join("")}
  </fieldset>`;
}

function profileSummary(profile) {
  return `<dl class="profile-summary">
    <div><dt>年齡區間</dt><dd>${profile.age || "暫不提供"}</dd></div>
    <div><dt>性別</dt><dd>${profile.gender || "暫不提供"}</dd></div>
    <div><dt>想優先看的情境與資源</dt><dd>${profile.situations.length ? profile.situations.map(id => situationById[id].label).join("、") : "先看入門主題"}</dd></div>
  </dl>`;
}

function onboarding(step) {
  const titles = ["先認識你照顧的孩子", '哪些時刻，<wbr><span class="nowrap">你想多一點支持？</span>', "看看你的設定"];
  const descriptions = [
    "年齡區間能幫你找到較接近孩子生活階段的主題。每個欄位都可以略過。",
    "選幾個你想先了解的日常情境，之後隨時可以調整。",
    "首頁會依你選的情境與資源需求推薦內容。",
  ];
  const steps = ["孩子資料", "照顧情境", "確認設定"];
  return `<div class="onboarding">
    <header class="onboarding-top">${brand()}<a class="button plain" href="#library" data-action="open-library">育兒指南 ${icon("arrow")}</a></header>
    <main id="main" tabindex="-1" class="setup">
      <ol class="progress" aria-label="設定進度">${steps.map((label, index) =>
        `<li ${step === index + 1 ? 'aria-current="step"' : ""} class="${step >= index + 1 ? "reached" : ""}"><span>${step > index + 1 ? icon("check") : index + 1}</span>${label}</li>`
      ).join("")}</ol>
      <section class="setup-card">
        <h1>${titles[step - 1]}</h1>
        <p class="muted">${descriptions[step - 1]}</p>
        ${[basics, situationOptions, () => profileSummary(draft)][step - 1]()}
        <div class="setup-actions">
          <a class="button secondary" href="${step > 1 ? `#setup/${step - 1}` : "#"}">${icon("back")} 上一步</a>
          ${step === 3 ? `<button class="button primary" data-action="finish">看看我的首頁 ${icon("arrow")}</button>` : `<a class="button primary" href="#setup/${step + 1}">下一步 ${icon("arrow")}</a>`}
        </div>
      </section>
      <p class="privacy-line">${icon("lock")} ${storageAvailable ? "偏好只儲存在這個瀏覽器。" : "目前瀏覽器無法儲存偏好，關閉頁面後會清空。"} </p>
    </main>
  </div>`;
}

function bookmarkButton(article, expanded = false) {
  const saved = state.saved.includes(article.id);
  return `<button class="${expanded ? "button secondary" : "icon-button"} save-button ${saved ? "is-saved" : ""}" data-save="${article.id}" ${expanded ? "data-expanded" : ""} aria-pressed="${saved}" aria-label="${saved ? "取消收藏" : "收藏"}〈${article.title}〉">
    ${icon("bookmark")}${expanded ? (saved ? " 已收藏" : " 收藏這篇") : ""}
  </button>`;
}

function categoryIcon(category) {
  return `<span class="category-icon ${category.color}">${icon(category.icon)}</span>`;
}

function articleAge(article) {
  const bands = article.ages;
  const start = ages.indexOf(bands[0]);
  const contiguous = bands.length > 1 && bands.every((band, offset) => band === ages[start + offset]);
  const range = contiguous ? `${bands[0].split("–")[0]}–${bands.at(-1).split("–")[1]}` : bands.join("、");
  return `<span class="article-age">參考年齡 ${article.ageLabel || range}</span>`;
}

function articleTags(article) {
  const tags = article.genderTags || [];
  if (!tags.length) return "";
  return `<span class="article-tags" role="group" aria-label="文章標籤">${tags.map(label => `<span class="article-tag">${label}</span>`).join("")}</span>`;
}

function articleCard(article, origin) {
  const category = article.resource ? resourceGroupById[article.resource.group] : categoryById[article.category];
  const section = article.resource ? "資源專區" : "育兒指南";
  return `<article class="resource-card">
    ${origin.startsWith("resources") ? "" : `<div class="card-top">${categoryIcon(category)}<span>${origin === "search" ? `${section} · ` : ""}${category.label}</span>${origin === "saved" ? bookmarkButton(article) : ""}</div>`}
    <h3><a href="#article/${article.id}" data-origin="${origin}">${article.title}</a></h3>
    <p>${article.summary}</p>
    <div class="card-meta"><div class="card-details">${articleAge(article)}${articleTags(article)}</div><a href="#article/${article.id}" data-origin="${origin}" aria-label="閱讀〈${article.title}〉">${icon("arrow")}</a></div>
  </article>`;
}

function matchingSituations(article, profile) {
  const situations = article.resource?.interests || article.situations;
  return profile.situations.filter(id => situations.includes(id));
}

function shuffled(items) {
  const order = [...items];
  for (let end = order.length - 1; end > 0; end -= 1) {
    const index = Math.floor(Math.random() * (end + 1));
    [order[end], order[index]] = [order[index], order[end]];
  }
  return order;
}

function recommendationOrder(profile) {
  const { dismissed } = state;
  const guides = shuffled(guideArticles.filter(article => !dismissed.includes(article.id)));
  const priority = article => (matchingSituations(article, profile).length ? 2 : 0) + (article.ages.includes(profile.age) ? 1 : 0);
  guides.sort((left, right) => priority(right) - priority(left));
  const resources = shuffled(resourceArticles.filter(article =>
    !dismissed.includes(article.id) && (!profile.age || article.ages.includes(profile.age)) && matchingSituations(article, profile).length
  ));

  // Give relevant resources a place near the start even when there are many guides.
  const [first, second] = Math.random() < 0.5 ? [guides, resources] : [resources, guides];
  const order = [];
  for (let index = 0; index < Math.max(first.length, second.length); index += 1) {
    if (first[index]) order.push(first[index]);
    if (second[index]) order.push(second[index]);
  }
  return order;
}

function recommendationReason(article, profile) {
  const [match] = matchingSituations(article, profile);
  if (match) return `因為你選了「${situationById[match].label}」`;
  if (article.ages.includes(profile.age)) return `依據你選的年齡區間「${profile.age}」`;
  return "從日常的小步驟開始";
}

function recommendationCard(article, hasMore) {
  const group = article.resource ? resourceGroupById[article.resource.group] : categoryById[article.category];
  return `<article class="feature-card">
    <div class="feature-copy">
      <div class="feature-label"><span class="pill ${group.color}">${icon(group.icon)} ${article.resource ? "資源專區 · " : ""}${group.label}</span>${articleAge(article)}${articleTags(article)}</div>
      <h3 id="featured-article-title">${article.title}</h3>
      <p>${article.summary}</p>
      <div class="feature-actions">
        <a class="button primary" href="#article/${article.id}" data-origin="home">${article.resource ? "查看資源" : "看看做法"} ${icon("arrow")}</a>
        ${hasMore ? '<button class="button secondary" data-action="next-recommendation" aria-describedby="featured-article-title">下一則</button>' : ""}
      </div>
    </div>
    ${article.id === "next" ? photo("feature-photo") : `<div class="feature-scene ${group.color}">${icon(group.icon)}</div>`}
  </article>`;
}

function home() {
  const profile = state.profile;
  if (!profile) return shell("home", `<div class="page-heading"><h1>我的首頁</h1><p>選幾個你想先了解的照顧情境，首頁就會顯示相關主題。</p></div>
    <div class="empty">${icon("leaf")}<h2>從一個生活情境開始</h2><button class="button primary" data-action="start">開始設定 ${icon("arrow")}</button><a class="button plain" href="#library">瀏覽育兒指南</a></div>`);

  recommendationRound ??= { order: recommendationOrder(profile), index: 0 };
  const { order, index } = recommendationRound;
  const featured = order[index];
  const more = order.filter(article => !article.resource && article !== featured);
  const resources = order.filter(article => article.resource && article !== featured).slice(0, 2);
  return shell("home", `<section class="home-heading">
    <div><p class="kicker">${icon("sun")} 我的育兒手冊</p>
      <h1>今天，從一件小事開始。</h1>
      <p>挑一個你和孩子常遇到的情境，找到可以一起試的做法。</p></div>
    <a class="button secondary" href="#edit" data-action="edit">${icon("sliders")} 調整偏好</a>
  </section>
  <section class="feature-section" aria-labelledby="feature-title">
    <div class="section-heading">
      <h2 id="feature-title">為你推薦</h2>
      ${featured ? `<span>${recommendationReason(featured, profile)}</span>` : ""}
    </div>
    ${featured ? recommendationCard(featured, order.length > 1) : `<div class="empty">${icon("book")}<p>目前沒有可推薦的文章。</p><a class="button primary" href="#library" data-action="open-library">瀏覽育兒指南 ${icon("arrow")}</a></div>`}
  </section>
  ${resources.length ? `<section class="more-section" aria-labelledby="related-resources-title">
    <div class="section-heading"><h2 id="related-resources-title">相關資源</h2><a class="text-button" href="#resources">查看資源專區 ${icon("arrow")}</a></div>
    <div class="card-grid resource-picks">${resources.map(article => articleCard(article, "home")).join("")}</div>
  </section>` : ""}
  ${more.length ? `<section class="more-section" aria-labelledby="more-title">
    <div class="section-heading"><h2 id="more-title">也可以看看</h2><a class="text-button" href="#library" data-action="open-library">瀏覽育兒指南 ${icon("arrow")}</a></div>
    <div class="card-grid">${more.slice(0, 3).map(article => articleCard(article, "home")).join("")}</div>
  </section>` : ""}
  <section class="browse-section" aria-labelledby="browse-title">
    <div class="section-heading"><h2 id="browse-title">依分類找育兒指南</h2></div>
    <div class="category-grid">${visibleCategories.map(category => `<a href="#library" data-category="${category.id}">${categoryIcon(category)}<span><strong>${category.label}</strong><small>${category.description}</small></span>${icon("chevron")}</a>`).join("")}</div>
  </section>`);
}

function filterButton(id, label) {
  return `<button class="filter-chip" data-filter="${id}" aria-pressed="${libraryFilter === id}">${label}</button>`;
}

function library() {
  return shell("library", `<div class="page-heading"><h1>育兒指南</h1><p>依分類瀏覽，或搜尋你遇到的生活情境。</p></div>
    <div class="filter-area">
      ${searchBox("搜尋育兒指南", "搜尋收玩具、聲音、親師溝通⋯⋯")}
      <div class="filter-chips" role="group" aria-label="依分類篩選">${filterButton("all", "全部指南")}${visibleCategories.map(category => filterButton(category.id, category.label)).join("")}</div>
    </div>
    <p id="result-count" class="result-count" aria-live="polite"></p>
    <div id="results"></div>
    <div class="library-foot"><a class="text-button" href="#sources">${icon("book")} 查看所有資料來源 ${icon("arrow")}</a></div>`);
}

function searchBox(label, hint) {
  return `<label class="search-box">${icon("search")}<span class="sr-only">${label}</span><input type="search" id="search-box" placeholder="${hint}" autocomplete="off"></label>`;
}

function searchPage() {
  return shell("search", `<div class="page-heading"><h1>搜尋星泊</h1><p>一起搜尋育兒指南和資源專區。</p></div>
    <div class="filter-area">${searchBox("搜尋星泊", "搜尋收玩具、早療補助、愛心卡⋯⋯")}</div>
    <p id="result-count" class="result-count" aria-live="polite"></p><div id="results"></div>`);
}

function resourcesPage(page) {
  const activeGroup = page === "resources" ? "" : page.slice(10);
  const groups = activeGroup ? [resourceGroupById[activeGroup]] : resourceGroups;
  return shell("resources", `<div class="page-heading"><h1>資源專區</h1><p>查評估、申請、補助和辦理窗口。</p>
    <nav class="filter-chips" aria-label="資源分類">
      <a class="filter-chip" href="#resources" ${activeGroup ? "" : 'aria-current="page"'}>全部資源</a>
      ${resourceGroups.map(group => `<a class="filter-chip" href="#resources/${group.id}" ${group.id === activeGroup ? 'aria-current="page"' : ""}>${group.label}</a>`).join("")}
    </nav>
  </div>
  ${groups.map(group => `<section class="resource-group" aria-labelledby="resource-group-${group.id}">
    <div class="section-heading"><h2 id="resource-group-${group.id}">${group.label}</h2></div>
    <div class="card-grid">${resourceArticles.filter(article => article.resource.group === group.id).map(article => articleCard(article, page)).join("")}</div>
  </section>`).join("")}`);
}

function refreshLibrary() {
  const search = document.querySelector("#search-box");
  const global = route() === "search";
  const query = global ? searchQuery : libraryQuery;
  const normalize = value => value.toLowerCase().replaceAll("台", "臺");
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const matches = (global ? articles : guideArticles).filter(article => {
    const category = article.resource ? resourceGroupById[article.resource.group] : categoryById[article.category];
    const tags = article.situations.map(id => situationById[id]);
    const articleText = article.sections.flatMap(section => [
      section.heading, ...(section.paragraphs || []), ...(section.list?.items || []), ...(section.evidence || []),
    ]);
    const content = normalize([article.title, article.summary, category.label, article.resource?.audience, article.resource?.contact,
      ...(article.keywords || []), ...(article.genderTags || []), ...tags.flatMap(tag => [tag.label, tag.prompt]),
      ...articleText].join(" ").replace(/<[^>]*>/g, " "));
    const matchesFilter = global || libraryFilter === "all" || libraryFilter === article.category;
    return matchesFilter && terms.every(term => {
      if (term === "男" || term === "女") return article.genderTags?.includes(term);
      return content.includes(term);
    });
  });
  document.querySelector("#result-count").textContent = `共 ${matches.length} ${global ? "筆結果" : "篇指南"}`;
  for (const chip of document.querySelectorAll("[data-filter]")) {
    chip.setAttribute("aria-pressed", chip.dataset.filter === libraryFilter);
  }
  document.querySelector("#results").innerHTML = matches.length
    ? `<div class="card-grid">${matches.map(article => articleCard(article, global ? "search" : "library")).join("")}</div>`
    : `<div class="empty">${icon("search")}<h2>目前找不到符合的結果</h2><p>試試其他關鍵字。</p><button class="button secondary" data-action="clear-search">${global ? "清除搜尋" : "清除篩選"}</button></div>`;
  if (search.value !== query) search.value = query;
}

function articleSourceLinks(references) {
  return `<ul class="article-source-links">${references.map(({ id }) => {
    const source = sources[id];
    return `<li><a class="article-source-link" href="${source.url}" target="_blank" rel="noopener noreferrer">
      <span>${source.name} ${icon("external")}</span>
      <small class="source-authors">${source.authors || source.publisher}</small>
    </a></li>`;
  }).join("")}</ul>`;
}

const backToTopButton = `<button class="button secondary back-to-top" type="button" data-action="back-to-top" hidden>${icon("up")} 回到頂端</button>`;

function updateBackToTop() {
  const button = app.querySelector(".back-to-top");
  if (button) button.hidden = window.scrollY < 240;
}

function resourceOverview(article) {
  const { audience, contact, officialSources, countyJump } = article.resource;
  const checked = article.reviewChecked;
  return `<dl class="resource-facts">
    <div><dt>適用對象</dt><dd>${audience}</dd></div>
    <div><dt>去哪裡問</dt><dd>${contact}</dd></div>
    <div><dt>官方資料</dt><dd class="official-links">${officialSources.map(id => `<a href="${sources[id].url}" target="_blank" rel="noopener noreferrer">${sources[id].name} ${icon("external")}</a>`).join("")}</dd></div>
    <div><dt>${article.updatedAt === checked ? "最後更新與查核日" : "最後查核日"}</dt><dd><time datetime="${checked}">${articleDate.format(new Date(checked))}</time></dd></div>
  </dl>
  ${countyJump ? `<form class="county-picker" aria-label="依戶籍地查愛心卡">
    <label for="county-select">跳到孩子的戶籍縣市</label>
    <div><select id="county-select" required><option value="">選擇縣市</option></select><button class="button secondary">前往</button></div>
  </form>` : ""}`;
}

function articlePage(article) {
  const category = article.resource ? resourceGroupById[article.resource.group] : categoryById[article.category];
  const dismissed = state.dismissed.includes(article.id);
  const references = [{ id: article.related, section: article.sourceSection }, ...(article.additionalSources || [])];
  const otherSources = references.slice(2);
  const relatedArticles = article.relatedArticles || [];
  const origin = history.state?.articleOrigin || (article.resource ? "resources" : "library");
  const section = origin.split("/")[0];
  const originLabel = { home: "回首頁", library: "回育兒指南", resources: "回資源專區", saved: "回收藏", search: "回搜尋" }[section];
  return shell(section, `<div class="article-page">
    <a class="text-button back-link" href="#${origin}">${icon("back")} ${originLabel}</a>
    <header class="article-heading">
      <div class="feature-label"><span class="pill ${category.color}">${icon(category.icon)} ${category.label}</span>${articleAge(article)}${articleTags(article)}</div>
      <h1>${article.title}</h1>
      ${article.updatedAt && (!article.resource || article.updatedAt !== article.reviewChecked) ? `<p class="article-updated">最後更新日期 <time datetime="${article.updatedAt}">${articleDate.format(new Date(article.updatedAt))}</time></p>` : ""}
      <p>${article.summary}</p>
      ${article.resource ? resourceOverview(article) : ""}
      ${article.summaryLink ? `<a class="button secondary article-summary-link" href="#article/${article.summaryLink.articleId}">${article.summaryLink.label}</a>` : ""}
    </header>
    <section class="source-panel" aria-labelledby="article-sources-title">
      <h2 id="article-sources-title">${article.status === "demo" ? "延伸閱讀" : "資料來源"} <span class="source-count">共 ${references.length} 筆</span></h2>
      ${articleSourceLinks(references.slice(0, 2))}
      ${otherSources.length ? `<details class="source-details source-more">
        <summary>查看其餘 ${otherSources.length} 筆來源</summary>
        ${articleSourceLinks(otherSources)}
      </details>` : ""}
      <details class="source-details">
        <summary>引用說明與署名</summary>
        ${article.status === "demo" ? "<p>文中的做法是用於測試閱讀流程的原創情境示範。</p>" : ""}
        ${references.map(({ id, section }) => {
          const source = sources[id];
          return `<div class="article-source">
            ${references.length > 1 ? `<strong>${source.name}</strong>` : ""}
            ${section ? `<p>${section}</p>` : ""}
            <small>${source.rights}</small>
            ${source.attribution ? `<small>${source.attribution}</small>` : ""}
            ${source.reuseStatus === "noncommercial-adaptation-permitted" ? `<small><a href="${source.license}" target="_blank" rel="noopener noreferrer">${source.licenseName}</a></small>` : ""}
          </div>`;
        }).join("")}
        <p class="article-age-note">${article.ageNote.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</p>
      </details>
    </section>
    <div class="article-body">
      ${article.sections.map(section => {
        const listTag = section.list?.ordered ? "ol" : "ul";
        return `<section class="article-part">
          <h2>${section.heading}</h2>
          ${(section.paragraphs || []).map(paragraph => `<p>${paragraph}</p>`).join("")}
          ${section.list?.items?.length ? `<${listTag} class="article-list">
            ${section.list.items.map(item => `<li>${item}</li>`).join("")}
          </${listTag}>` : ""}
          ${section.evidence?.length ? `<div class="article-evidence">
            ${section.evidence.map(paragraph => `<p>${paragraph}</p>`).join("")}
          </div>` : ""}
        </section>`;
      }).join("")}
    </div>
    ${relatedArticles.length ? `<section class="article-section article-related" aria-labelledby="article-related-title">
      <h2 id="article-related-title">相關文章</h2>
      <ul>${relatedArticles.map(id => `<li><a class="text-button" href="#article/${id}">${articleById[id].title} ${icon("arrow")}</a></li>`).join("")}</ul>
    </section>` : ""}
    ${notesSection(article.id)}
    <footer class="article-actions">
      ${bookmarkButton(article, true)}
      <button class="button secondary" data-action="toggle-recommendation" data-article="${article.id}">${dismissed ? "恢復推薦" : "不再顯示於推薦"}</button>
    </footer>
    ${backToTopButton}
  </div>`);
}

function savedPage() {
  const items = state.saved.map(id => articleById[id]).filter(Boolean);
  const personalRecords = withdrawnArticles.filter(article => state.saved.includes(article.id) || readNotes(article.id).length);
  return shell("saved", `<div class="page-heading"><h1>我的收藏</h1><p>收藏的育兒指南和資源都在這裡。</p></div>
    ${items.length ? `<div class="card-grid">${items.map(article => articleCard(article, "saved")).join("")}</div>`
    : `<div class="empty">${icon("bookmark")}<h2>目前沒有已收錄文章的收藏</h2><p>在文章裡點「收藏這篇」，就會出現在這裡。</p><a class="button primary" href="#library">去逛育兒指南 ${icon("arrow")}</a></div>`}
    ${personalRecords.length ? `<section class="article-section"><h2>已暫停收錄的個人紀錄</h2><p>原文內容已下架，你的收藏紀錄與筆記仍保留在這個瀏覽器。</p><ul>${personalRecords.map(article => `<li><a href="#article/${article.id}">${article.title} · 查看筆記</a></li>`).join("")}</ul></section>` : ""}`);
}

function withdrawnArticlePage(article) {
  return shell("saved", `<div class="article-page">
    <a class="text-button back-link" href="#saved">${icon("back")} 回個人紀錄</a>
    <header class="article-heading"><h1>${article.title}</h1><p>這篇內容已暫停收錄，因為目前缺少針對 ASD 的資料依據。你先前的筆記仍可在下方查看和編輯。</p></header>
    ${notesSection(article.id)}
    ${backToTopButton}
  </div>`);
}

function settings() {
  const profile = state.profile;
  return shell("settings", `<div class="page-heading"><h1>我的設定</h1><p>管理孩子的基本資料、照顧情境和本機資料。</p></div>
    <div class="settings-list">
      <section class="settings-card"><div class="section-heading"><h2>孩子資料與照顧偏好</h2>
        ${profile ? '<a class="button secondary" href="#edit" data-action="edit">編輯偏好</a>' : '<button class="button primary" data-action="start">開始設定</button>'}</div>
        ${profile ? profileSummary(profile) : '<p>完成簡單設定，首頁就會依情境推薦內容。</p>'}</section>
      <section class="settings-card"><h2>${icon("lock")} 這個瀏覽器的資料</h2>
        <p>${storageAvailable ? "孩子資料、偏好、收藏和筆記儲存在這個瀏覽器。" : "這個瀏覽器目前無法儲存資料。"}</p>
        <button class="button secondary danger-text" data-action="ask-reset">清除本機資料</button></section>
      <section class="settings-card"><h2>${icon("book")} 關於手冊</h2>
        <p>星泊是 ASD 育兒支持手冊的互動原型。</p>
        <a class="text-button" href="#sources">資料來源與使用方式 ${icon("arrow")}</a></section>
    </div>`);
}

function edit() {
  return shell("settings", `<div class="page-heading"><a class="text-button back-link" href="#settings">${icon("back")} 我的設定</a>
    <h1>調整照顧偏好</h1><p>更新孩子的生活階段，或換幾個你目前想了解的情境。</p></div>
    <div class="settings-list">
      <section class="settings-card"><h2>孩子基本資料</h2>${basics()}</section>
      <section class="settings-card"><h2>想優先看的照顧情境</h2>${situationOptions()}</section>
      <div class="setup-actions"><a href="#settings" class="button secondary">取消</a><button class="button primary" data-action="save-edit">儲存設定 ${icon("check")}</button></div>
    </div>`);
}

function sourcesPage() {
  return shell("library", `<div class="page-heading"><a class="text-button back-link" href="#library">${icon("back")} 育兒指南</a>
    <h1>資料來源</h1><p>查找原文、出處與使用條件。示範情境在文章內另行標示。</p></div>
    <div class="settings-list">${Object.values(sources).map(source => `<article class="settings-card">
      <h2>${source.name}</h2>
      <small class="source-authors">${source.authors || source.publisher}</small>
      <p>${source.description}</p>
      <a class="text-button" href="${source.url}" target="_blank" rel="noopener noreferrer">閱讀原文 ${icon("external")}</a>
      <details class="source-details">
        <summary>授權資訊</summary>
        <p>${source.rights}</p>
        ${source.attribution ? `<p>${source.attribution}</p>` : ""}
        ${source.licenseName === "CC BY 4.0" ? `<small class="source-license-url">${source.license}</small>` : source.license ? `<a class="text-button" href="${source.license}" target="_blank" rel="noopener noreferrer">${source.licenseName} ${icon("external")}</a>` : ""}
      </details>
    </article>`).join("")}</div>`);
}

function render(focus = false) {
  if (location.hash === "#demo") {
    history.replaceState(null, "", state.profile ? "#home" : location.href.split("#")[0]);
  }

  const page = route();
  if (page === "welcome") app.innerHTML = welcome();
  if (page.startsWith("setup/")) app.innerHTML = onboarding(Number(page.slice(-1)));
  if (page === "home") app.innerHTML = home();
  if (page === "resources" || page.startsWith("resources/")) app.innerHTML = resourcesPage(page);
  if (page === "library" || page === "search") {
    app.innerHTML = page === "library" ? library() : searchPage();
    refreshLibrary();
  }
  if (page.startsWith("article/")) {
    const id = page.slice(8);
    app.innerHTML = articleById[id] ? articlePage(articleById[id]) : withdrawnArticlePage(withdrawnById[id]);
    const selector = app.querySelector("#county-select");
    if (selector) {
      for (const name of app.querySelectorAll(".county-name")) {
        selector.add(new Option(name.textContent.trim(), name.textContent.trim()));
      }
    }
  }
  if (page === "saved") app.innerHTML = savedPage();
  if (page === "settings") app.innerHTML = settings();
  if (page === "edit") {
    draft = structuredClone(state.profile || emptyProfile());
    app.innerHTML = edit();
  }
  if (page === "sources") app.innerHTML = sourcesPage();
  const heading = app.querySelector("h1");
  document.title = heading ? `${heading.textContent} · 星泊` : "星泊 · ASD 育兒支持手冊";
  if (focus) {
    window.scrollTo(0, 0);
    app.querySelector("main").focus({ preventScroll: true });
  }
  updateBackToTop();
}

document.addEventListener("change", event => {
  const field = event.target;
  if (field.matches("[data-profile]")) draft[field.dataset.profile] = field.value;
  if (field.matches(".situation input")) {
    draft.situations = [...app.querySelectorAll(".situation input:checked")].map(input => input.value);
  }
});

document.addEventListener("input", event => {
  if (event.target.id !== "search-box") return;
  if (route() === "search") searchQuery = event.target.value;
  else libraryQuery = event.target.value;
  refreshLibrary();
});

document.addEventListener("submit", event => {
  const form = event.target;
  if (form.matches(".county-picker")) {
    event.preventDefault();
    const selection = form.querySelector("select").value;
    const name = [...app.querySelectorAll(".county-name")].find(element => element.textContent.trim() === selection);
    if (name) {
      name.tabIndex = -1;
      name.focus({ preventScroll: true });
      name.closest(".county-entry").scrollIntoView({ block: "start" });
    }
    return;
  }
  if (!form.matches(".note-form")) return;
  event.preventDefault();
  const articleId = form.dataset.article;
  const text = form.elements.note.value.trim();
  if (!text) {
    form.elements.note.focus();
    notify("先寫一點內容再儲存");
    return;
  }
  const notes = readNotes(articleId);
  const editing = form.dataset.noteId;
  if (editing && !notes.some(note => note.id === editing)) {
    notify("這則筆記已刪除，可取消編輯後重新新增");
    return;
  }
  const updated = editing ? notes.map(note => note.id === editing ? { ...note, text } : note) :
    [{ id: crypto.randomUUID(), createdAt: new Date().toISOString(), text }, ...notes];
  if (writeNotes(articleId, updated)) {
    refreshNotes(articleId);
    notify("筆記已儲存");
  }
});

document.addEventListener("click", event => {
  const control = event.target.closest("a,button");
  if (!control) return;

  if (control.classList.contains("skip-link")) {
    event.preventDefault();
    app.querySelector("main").focus();
    return;
  }
  if (control.dataset.origin && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
    event.preventDefault();
    const href = control.getAttribute("href");
    const entry = { articleOrigin: control.dataset.origin };
    if (href === location.hash) history.replaceState(entry, "", href);
    else history.pushState(entry, "", href);
    render(true);
    return;
  }
  if (control.dataset.category) {
    libraryFilter = control.dataset.category;
    libraryQuery = "";
    if (route() === "library") refreshLibrary();
  }
  if (control.dataset.filter) {
    libraryFilter = control.dataset.filter;
    refreshLibrary();
  }

  const article = articleById[control.dataset.save];
  if (article) {
    const wasSaved = state.saved.includes(article.id);
    state.saved = wasSaved ? state.saved.filter(id => id !== article.id) : [...state.saved, article.id];
    saveState();
    if (route() === "saved" && wasSaved) {
      const buttons = [...app.querySelectorAll("[data-save]")];
      const priorIndex = buttons.indexOf(control);
      render();
      const remaining = [...app.querySelectorAll("[data-save]")];
      (remaining[Math.min(priorIndex, remaining.length - 1)] || app.querySelector(".empty a")).focus();
    } else {
      control.outerHTML = bookmarkButton(article, control.hasAttribute("data-expanded"));
      app.querySelector(`[data-save="${article.id}"]`).focus();
    }
    notify(wasSaved ? "已取消收藏" : "已加入收藏");
    return;
  }

  switch (control.dataset.action) {
    case "edit-note": {
      const form = app.querySelector(".note-form");
      const id = control.closest("[data-note-id]").dataset.noteId;
      const note = readNotes(form.dataset.article).find(entry => entry.id === id);
      if (!note) break;
      form.dataset.noteId = id;
      form.elements.note.value = note.text;
      form.querySelector('[data-action="cancel-note"]').hidden = false;
      form.elements.note.focus();
      break;
    }
    case "cancel-note": {
      const form = control.closest("form");
      delete form.dataset.noteId;
      form.reset();
      control.hidden = true;
      form.elements.note.focus();
      break;
    }
    case "delete-note": {
      if (!window.confirm("刪除這則筆記？")) break;
      const articleId = app.querySelector(".note-form").dataset.article;
      const id = control.closest("[data-note-id]").dataset.noteId;
      if (writeNotes(articleId, readNotes(articleId).filter(note => note.id !== id))) {
        refreshNotes(articleId);
        notify("已刪除筆記");
      }
      break;
    }
    case "next-recommendation": {
      const round = recommendationRound;
      round.index += 1;
      if (round.index === round.order.length) {
        const order = recommendationOrder(state.profile);
        if (order.length > 1 && order[0] === round.order.at(-1)) {
          [order[0], order[1]] = [order[1], order[0]];
        }
        recommendationRound = { order, index: 0 };
      }
      render();
      app.querySelector('[data-action="next-recommendation"]')?.focus({ preventScroll: true });
      break;
    }
    case "back-to-top": {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      app.querySelector("main").focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
      break;
    }
    case "toggle-recommendation": {
      const id = control.dataset.article;
      const restore = state.dismissed.includes(id);
      state.dismissed = restore ? state.dismissed.filter(articleId => articleId !== id) : [...state.dismissed, id];
      saveState();
      recommendationRound = null;
      control.textContent = restore ? "不再顯示於推薦" : "恢復推薦";
      notify(restore ? "已恢復推薦" : "已從首頁推薦移除");
      break;
    }
    case "start":
      draft = structuredClone(state.profile || emptyProfile());
      go("setup/1");
      break;
    case "finish":
    case "save-edit":
      recommendationRound = null;
      state.profile = structuredClone(draft);
      saveState();
      go("home");
      if (control.dataset.action === "save-edit") notify("偏好已更新");
      break;
    case "open-library":
      libraryQuery = "";
      libraryFilter = "all";
      if (route() === "library") refreshLibrary();
      break;
    case "clear-search":
      if (route() === "search") searchQuery = "";
      else {
        libraryQuery = "";
        libraryFilter = "all";
      }
      refreshLibrary();
      app.querySelector("#search-box").focus();
      break;
    case "start-search":
      if (route() === "search") {
        event.preventDefault();
        app.querySelector("#search-box").focus();
      } else {
        window.addEventListener("hashchange", () => app.querySelector("#search-box")?.focus(), { once: true });
      }
      break;
    case "ask-reset":
      resetDialog.showModal();
      break;
    case "reset":
      try {
        localStorage.removeItem(key);
        for (const storageKey of Object.keys(localStorage)) {
          if (storageKey.startsWith(notesPrefix)) localStorage.removeItem(storageKey);
        }
      } catch {
        storageAvailable = false;
      }
      state = emptyState();
      recommendationRound = null;
      draft = emptyProfile();
      libraryFilter = "all";
      libraryQuery = "";
      searchQuery = "";
      resetDialog.close();
      go("welcome");
      notify("已清除本機資料");
      break;
  }
});

window.addEventListener("scroll", updateBackToTop, { passive: true });
window.addEventListener("hashchange", () => render(true));
render();
