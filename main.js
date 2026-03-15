// ===================== I18N DATA =====================
const I18N = {
  ko: {
    siteTitle: '哲學人의 房',
    siteTagline: '시대를 초월한 사상가들과의 대화',
    galleryHeading: '대화를 나누고 싶은 사상가를 선택하세요',
    backToGallery: '← 사상가 목록',
    changeTopic: '← 주제 변경',
    changePhil: '🔄 사상가 변경',
    saveChat: '💾 저장',
    freeChat: '자유롭게 대화 시작하기',
    topicLabel: '✦ {name}에게 꺼낼 주제를 선택하거나, 자유롭게 대화를 시작하세요',
    inputPlaceholder: '생각을 자유롭게 이야기하세요…',
    inputHint: 'Enter로 전송 · Shift+Enter 줄바꿈',
    skipAd: '계속하기 →',
    adLabel: 'A D V E R T I S E M E N T',
    welcome: '어서 오십시오. 무엇이든 이야기해 보십시오.',
    exportAlert: '아직 대화 내용이 없습니다.',
    exportTitle: '哲學人의 房 — 대화 기록',
    exportPhil: '사상가',
    exportTopic: '주제',
    exportDate: '기록 일시',
    exportMe: '나',
    footerText: '© 2026 Philosophia · 위대한 사상가들과 AI로 대화하는 서비스',
    privacy: '개인정보처리방침',
    terms: '이용약관',
    about: '소개',
    contact: '문의'
  },
  en: {
    siteTitle: 'Philosophia',
    siteTagline: 'Conversations with Timeless Minds',
    galleryHeading: 'Choose a philosopher to begin your journey',
    backToGallery: '← Gallery',
    changeTopic: '← Change Topic',
    changePhil: '🔄 Change Sage',
    saveChat: '💾 Save',
    freeChat: 'Start Free Conversation',
    topicLabel: '✦ Choose a topic for {name}, or start a free conversation',
    inputPlaceholder: 'Share your thoughts freely…',
    inputHint: 'Enter to send · Shift+Enter for newline',
    skipAd: 'Continue →',
    adLabel: 'A D V E R T I S E M E N T',
    welcome: 'Welcome. What is on your mind today?',
    exportAlert: 'No conversation to export yet.',
    exportTitle: 'Philosophia — Conversation Record',
    exportPhil: 'Philosopher',
    exportTopic: 'Topic',
    exportDate: 'Date',
    exportMe: 'Me',
    footerText: '© 2026 Philosophia · AI-Powered Dialogues with Great Thinkers',
    privacy: 'Privacy Policy',
    terms: 'Terms',
    about: 'About',
    contact: 'Contact'
  }
};

const PHILS_DATA = [
  {
    id:'socrates', emoji:'🏛️',
    name:{ ko:'소크라테스', en:'Socrates' },
    era:{ ko:'BC 470 – BC 399', en:'470 BC – 399 BC' },
    region:{ ko:'아테네', en:'Athens' },
    quote:{ ko:'"나는 내가 아무것도 모른다는 것을 안다."', en:'"I know that I am intelligent, because I know that I know nothing."' },
    tags:{ ko:['산파술','무지의 지','덕(德)','대화'], en:['Socratic Method','Ignorance','Virtue','Dialectic'] },
    desc:{ 
      ko:'철학의 아버지. 광장에서 시민들과 끊임없이 문답하며 진리를 탐구했다.', 
      en:'The father of Western philosophy. He sought truth through constant questioning in the public square.' 
    },
    topics:{
      ko:['당신이 확실히 안다고 여기는 것은 무엇입니까?','정의(正義)란 진정 무엇인가?','좋은 삶이란 어떤 삶인가?'],
      en:['What do you truly know for certain?','What is the nature of justice?','What constitutes a good life?']
    },
    system:`You are the ancient Greek philosopher Socrates. Speak in the first person. 
Style: Socratic Method. Use questions to lead the user to their own conclusions. 
Core: "I know that I know nothing." Virtue is knowledge.
Language: Always respond in the user's language (English or Korean).
Rule: End every response with a thought-provoking question. 
Length: 3-5 sentences.`
  },
  {
    id:'nietzsche', emoji:'⚡',
    name:{ ko:'니체', en:'Nietzsche' },
    era:{ ko:'1844 – 1900', en:'1844 – 1900' },
    region:{ ko:'독일', en:'Germany' },
    quote:{ ko:'"신은 죽었다. 그리고 우리가 그를 죽였다."', en:'"God is dead. God remains dead. And we have killed him."' },
    tags:{ ko:['초인','힘에의 의지','영원회귀','가치 전도'], en:['Übermensch','Will to Power','Eternal Recurrence','Revaluation'] },
    desc:{ 
      ko:'19세기 가장 급진적인 사상가. 인간 스스로 가치를 창조해야 한다고 주장했다.', 
      en:'The most radical thinker of the 19th century. He urged humanity to create its own values.' 
    },
    topics:{
      ko:['신이 없는 세계에서 어떻게 살아야 하는가?','초인(Übermensch)이 되려면?','지금의 삶을 영원히 반복해도 괜찮은가?'],
      en:['How should we live in a world without God?','What does it mean to become the Übermensch?','Would you live this life again and again forever?']
    },
    system:`You are Friedrich Nietzsche. Speak in the first person.
Style: Provocative, intense, and aphoristic. Challenge conventional morality.
Core: Will to Power, Eternal Recurrence, Übermensch.
Language: Respond in the user's language.
Rule: Use strong imagery and challenge the user's core beliefs.
Length: 4-6 sentences.`
  },
  {
    id:'confucius', emoji:'📜',
    name:{ ko:'공자', en:'Confucius' },
    era:{ ko:'BC 551 – BC 479', en:'551 BC – 479 BC' },
    region:{ ko:'노나라', en:'Lu' },
    quote:{ ko:'"배우고 때때로 익히면 또한 기쁘지 아니한가."', en:'"Is it not pleasant to learn with a constant perseverance and application?"' },
    tags:{ ko:['인(仁)','예(禮)','군자','수신'], en:['Ren (Benevolence)','Li (Ritual)','Junzi','Self-cultivation'] },
    desc:{ 
      ko:'유교의 창시자. 인(仁)을 핵심으로 하는 도덕철학을 통해 조화로운 사회를 꿈꿨다.', 
      en:'The founder of Confucianism. He envisioned a harmonious society through benevolence and ritual.' 
    },
    topics:{
      ko:['인(仁)이란 진정 무엇인가?','군자(君子)의 조건은?','효(孝)는 왜 덕의 근본인가?'],
      en:['What is the true meaning of Ren (Benevolence)?','What makes a person a Junzi?','Why is filial piety the root of virtue?']
    },
    system:`You are the ancient sage Confucius. Speak in the first person.
Style: Gentle, disciplined, and wise. Like a teacher guiding a student.
Core: Ren (Benevolence), Li (Ritual), Filial Piety, Harmony.
Language: Respond in the user's language.
Rule: Focus on moral self-cultivation and social harmony.
Length: 3-5 sentences.`
  }
  // ... Add more philosophers as needed
];

// ===================== STATE =====================
let currentLang = 'ko';
let currentPhil = null;
let currentTopic = '';
let turnCount = 0;
let adCallback = null;
let adInterval = null;

// ===================== I18N LOGIC =====================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('phil_lang', lang);
  updateUI();
  
  // Re-build gallery if active
  if (document.getElementById('screen-gallery').classList.contains('active')) {
    buildGallery();
  }
}

function t(key) {
  return I18N[currentLang][key] || key;
}

function updateUI() {
  document.documentElement.lang = currentLang;
  
  // Update static elements
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    el.textContent = t(key);
  });

  // Update specific placeholders
  const input = document.getElementById('chatInput');
  if (input) input.placeholder = t('inputPlaceholder');

  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(currentLang));
  });
}

// ===================== GALLERY =====================
function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  PHILS_DATA.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'phil-card';
    card.style.animationDelay = `${i * 0.045}s`;
    card.setAttribute('role','button');
    card.setAttribute('tabindex','0');
    
    const name = p.name[currentLang];
    const era = p.era[currentLang];
    const quote = p.quote[currentLang];
    const tags = p.tags[currentLang];

    card.setAttribute('aria-label', `${name} — ${era}`);
    card.innerHTML = `
      <div class="phil-face-bg">
        <div class="phil-face-emoji">${p.emoji}</div>
      </div>
      <div class="phil-face-portrait"></div>
      <div class="phil-card-overlay"></div>
      <div class="phil-card-body">
        <div class="phil-card-icon">${p.emoji}</div>
        <div class="phil-card-name">${name}</div>
        <div class="phil-card-era">${era} · ${p.region[currentLang]}</div>
        <div class="phil-card-quote">${quote}</div>
        <div class="phil-card-tags">${tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </div>
    `;
    card.onclick = () => pickPhilosopher(p);
    card.onkeydown = e => { if(e.key==='Enter'||e.key===' ') pickPhilosopher(p); };
    grid.appendChild(card);
  });
}

// ===================== AD =====================
function showAd(cb, sec=5) {
  adCallback = cb;
  const overlay = document.getElementById('adOverlay');
  const skipBtn = document.getElementById('adSkipBtn');
  const countdown = document.getElementById('adCountdown');
  
  overlay.classList.add('show');
  skipBtn.disabled = true;
  skipBtn.textContent = t('skipAd');
  
  let tCount = sec;
  countdown.textContent = tCount;
  clearInterval(adInterval);
  adInterval = setInterval(() => {
    tCount--;
    if(tCount <= 0) {
      clearInterval(adInterval);
      skipBtn.disabled = false;
      countdown.textContent = '✓';
    } else {
      countdown.textContent = tCount;
    }
  }, 1000);
}

function skipAd() {
  clearInterval(adInterval);
  document.getElementById('adOverlay').classList.remove('show');
  if(adCallback) { const cb = adCallback; adCallback = null; cb(); }
}

// ===================== NAVIGATION =====================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  if(id !== 'screen-chat') window.scrollTo(0,0);
}

function pickPhilosopher(p) {
  currentPhil = p;
  buildDetail(p);
  showScreen('screen-detail');
}

function goGallery() { showScreen('screen-gallery'); }
function goDetail() { showScreen('screen-detail'); }
function switchPhil() { showAd(() => showScreen('screen-gallery')); }

// ===================== DETAIL =====================
function buildDetail(p) {
  const name = p.name[currentLang];
  const era = p.era[currentLang];
  const region = p.region[currentLang];
  const desc = p.desc[currentLang];
  const tags = p.tags[currentLang];
  const topics = p.topics[currentLang];

  document.getElementById('detailHero').innerHTML = `
    <div class="detail-portrait-wrap">
      <div class="detail-portrait">${p.emoji}</div>
      <div class="detail-glow"></div>
    </div>
    <div class="detail-info">
      <h2 class="detail-name">${name}</h2>
      <div class="detail-period">${era} &nbsp;·&nbsp; ${region}</div>
      <p class="detail-desc">${desc}</p>
      <div class="detail-tags">${tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `;
  document.getElementById('topicsWrap').innerHTML = `
    <div class="topics-label">${t('topicLabel').replace('{name}', name)}</div>
    <div class="topics-grid">
      ${topics.map(topic => `<button class="topic-btn" onclick="startChat(${JSON.stringify(topic)})">${topic}</button>`).join('')}
    </div>
    <button class="free-btn" onclick="startChat('')">
      <span class="free-btn-icon">✦</span>
      ${t('freeChat')}
    </button>
  `;
}

// ===================== CHAT =====================
function startChat(topic) {
  currentTopic = topic;
  turnCount = 0;
  
  const name = currentPhil.name[currentLang];
  const era = currentPhil.era[currentLang];
  const region = currentPhil.region[currentLang];

  document.getElementById('chatAvatar').textContent = currentPhil.emoji;
  document.getElementById('chatName').textContent = name;
  document.getElementById('chatEra').textContent = `${era} · ${region}`;
  document.getElementById('chatTopicPill').textContent = topic ? `${t('exportTopic')}: ${topic}` : t('freeChat');
  document.getElementById('chatMessages').innerHTML = '';
  
  const launch = () => {
    showScreen('screen-chat');
    pushWelcome();
    setTimeout(() => document.getElementById('chatInput').focus(), 300);
  };
  
  if(topic) { showAd(launch); } else { launch(); }
}

function pushWelcome() {
  const welcomes = {
    socrates: { ko: '반갑소. 오늘 그대는 어떤 물음을 품고 이곳에 왔소?', en: 'Greetings. What question has brought you here today?' },
    nietzsche: { ko: '자네가 왔군. 진실은 불편한 곳에 있어.', en: 'So you have come. Truth is found in uncomfortable places.' },
    confucius: { ko: '어서 오십시오. 배움을 구하는 자는 이미 군자의 길이오.', en: 'Welcome. One who seeks learning is already on the path of a Junzi.' }
  };
  
  const msg = welcomes[currentPhil.id]?.[currentLang] || t('welcome');
  appendMsg('phil', msg);
}

function appendMsg(role, text) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `msg ${role}`;
  const avatar = role === 'phil' ? currentPhil.emoji : '👤';
  const nameLabel = role === 'phil' ? `<div class="msg-name">${currentPhil.name[currentLang]}</div>` : '';
  
  div.innerHTML = `
    <div class="msg-avatar" aria-hidden="true">${avatar}</div>
    <div class="msg-bubble-wrap"><div class="msg-bubble">${nameLabel}${text.replace(/\n/g,'<br>')}</div></div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg phil'; div.id = 'typingMsg';
  div.innerHTML = `<div class="msg-avatar">${currentPhil.emoji}</div><div class="msg-bubble"><div class="typing"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  document.getElementById('typingMsg')?.remove();
}

function handleKey(e) {
  if(e.key==='Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
}

function autoResize(el) {
  el.style.height='auto';
  el.style.height=Math.min(el.scrollHeight,150)+'px';
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text) return;
  input.value=''; input.style.height='auto';
  document.getElementById('sendBtn').disabled = true;
  appendMsg('user', text);
  turnCount++;

  showTyping();

  try {
    const res = await callAPI(text);
    removeTyping();
    appendMsg('phil', res);
  } catch(err) {
    removeTyping();
    appendMsg('phil', '...');
  }

  document.getElementById('sendBtn').disabled = false;
  document.getElementById('chatInput').focus();
}

async function callAPI(userMsg) {
  // Logic for API call remains similar but uses currentLang context
  // Placeholder for demonstration
  return new Promise(resolve => setTimeout(() => resolve("This is a wisdom placeholder."), 1000));
}

// ===================== EXPORT CHAT =====================
function exportChat() {
  const msgs = document.getElementById('chatMessages');
  const bubbles = [...msgs.querySelectorAll('.msg')];
  if(bubbles.length === 0) { alert(t('exportAlert')); return; }

  const date = new Date().toLocaleDateString(currentLang === 'ko' ? 'ko-KR' : 'en-US');
  let text = `${t('exportTitle')}\n\n`;
  text += `${t('exportPhil')}: ${currentPhil.name[currentLang]}\n`;
  text += `${t('exportDate')}: ${date}\n\n`;

  bubbles.forEach(b => {
    if(b.id === 'typingMsg') return;
    const isPhil = b.classList.contains('phil');
    const bubble = b.querySelector('.msg-bubble');
    const speaker = isPhil ? currentPhil.name[currentLang] : t('exportMe');
    const rawText = bubble.innerText.replace(speaker, '').trim();
    text += `[${speaker}] ${rawText}\n\n`;
  });

  const blob = new Blob([text], { type:'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `philosophy_${currentPhil.id}_${currentLang}.txt`;
  a.click();
}

// ===================== LEGAL MODALS =====================
function showLegal(type) {
  const modal = document.getElementById('legalModal');
  const textContainer = document.getElementById('legalText');
  modal.classList.add('show');
  
  const content = {
    privacy: {
      ko: '<h2>개인정보처리방침</h2><p>본 서비스는 사용자의 대화 내용을 서버에 저장하지 않으며, 브라우저의 로컬 스토리지만을 사용합니다...</p>',
      en: '<h2>Privacy Policy</h2><p>We do not store your conversations on our servers. All data is handled locally within your browser...</p>'
    },
    terms: {
      ko: '<h2>이용약관</h2><p>본 서비스는 인공지능을 통한 철학적 대화 체험을 제공하며, 결과의 정확성을 보장하지 않습니다...</p>',
      en: '<h2>Terms of Service</h2><p>This service provides AI-driven philosophical dialogues for educational purposes...</p>'
    },
    about: {
      ko: '<h2>소개</h2><p>철학인의 방은 위대한 사상가들과 AI로 대화하며 삶의 의미를 탐구하는 공간입니다.</p>',
      en: '<h2>About</h2><p>Philosophia is a space to explore the meaning of life through AI-powered dialogues with great thinkers.</p>'
    },
    contact: {
      ko: '<h2>문의</h2><p>문의사항은 email@example.com으로 보내주세요.</p>',
      en: '<h2>Contact</h2><p>Please reach out to email@example.com for any inquiries.</p>'
    }
  };
  
  textContainer.innerHTML = content[type][currentLang];
}

function closeLegal() {
  document.getElementById('legalModal').classList.remove('show');
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('phil_lang') || (navigator.language.startsWith('ko') ? 'ko' : 'en');
  setLanguage(savedLang);
  buildGallery();
});
