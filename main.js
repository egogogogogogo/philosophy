// ===================== I18N DATA =====================
const I18N = {
  ko: {
    siteTitle: '哲學人의 房',
    siteTagline: '시대를 초월한 사상가들과의 대화',
    galleryHeading: '대화를 나누고 싶은 사상가를 선택하세요',
    backToGallery: '← 사상가 목록',
    changeTopic: '주제 변경',
    changePhil: '사상가 변경',
    saveChat: '대화 저장',
    freeChat: '자유롭게 대화 시작하기',
    topicLabel: '✦ {name}의 사유 주제',
    inputPlaceholder: '심오한 생각을 나누어보세요…',
    inputHint: 'Enter 전송 · Shift+Enter 줄바꿈',
    skipAd: '계속하기 →',
    adLabel: 'A D V E R T I S E M E N T',
    welcome: '어서 오십시오. 무엇이든 이야기해 보십시오.',
    exportMe: '나',
    footerText: '© 2026 Philosophia · 위대한 사상가들과 AI로 대화하는 공간',
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
    changeTopic: 'Change Topic',
    changePhil: 'Change Sage',
    saveChat: 'Save Chat',
    freeChat: 'Start Free Conversation',
    topicLabel: '✦ {name}\'s Sphere of Thought',
    inputPlaceholder: 'Share your profound thoughts…',
    inputHint: 'Enter to send · Shift+Enter for newline',
    skipAd: 'Continue →',
    adLabel: 'A D V E R T I S E M E N T',
    welcome: 'Welcome. What is on your mind today?',
    exportMe: 'Me',
    footerText: '© 2026 Philosophia · AI-Powered Dialogues with Great Thinkers',
    privacy: 'Privacy Policy',
    terms: 'Terms',
    about: 'About',
    contact: 'Contact'
  },
  ja: {
    siteTitle: '哲学者たちの部屋',
    siteTagline: '時代を超えた思想家との対話',
    galleryHeading: '対話したい思想家を選択してください',
    backToGallery: '← ギャラリー',
    changeTopic: 'トピック変更',
    changePhil: '思想家変更',
    saveChat: '保存',
    freeChat: '自由に対話を開始',
    topicLabel: '✦ {name}の思索テーマ',
    inputPlaceholder: '考えを自由に話してください…',
    inputHint: 'Enterで送信 · Shift+Enterで改行',
    skipAd: '次へ →',
    adLabel: '広 告',
    welcome: 'ようこそ。今日はどのようなお話がありますか？',
    exportMe: '私',
    footerText: '© 2026 Philosophia · 偉大な思想家とのAI対話サービス',
    privacy: 'プライバシーポリシー',
    terms: '利用規約',
    about: '紹介',
    contact: 'お問い合わせ'
  },
  zh: {
    siteTitle: '哲人之室',
    siteTagline: '与超越时代的思想家对话',
    galleryHeading: '选择一位想与之对话的思想家',
    backToGallery: '← 列表',
    changeTopic: '更改主题',
    changePhil: '更改思想家',
    saveChat: '保存对话',
    freeChat: '开始自由对话',
    topicLabel: '✦ {name} 的思想领域',
    inputPlaceholder: '自由地分享您的想法…',
    inputHint: 'Enter 发送 · Shift+Enter 换行',
    skipAd: '继续 →',
    adLabel: '广 告',
    welcome: '欢迎。今天您有什么想法？',
    exportMe: '我',
    footerText: '© 2026 Philosophia · 与伟大思想家的AI对话服务',
    privacy: '隐私政策',
    terms: '服务条款',
    about: '关于',
    contact: '联系我们'
  }
};

const PHILS_DATA = [
  {
    id:'socrates', emoji:'🏛️',
    name:{ ko:'소크라테스', en:'Socrates', ja:'ソクラテス', zh:'苏格拉底' },
    era:{ ko:'BC 470 – BC 399', en:'470 BC – 399 BC', ja:'紀元前470年', zh:'公元前470年' },
    region:{ ko:'아테네', en:'Athens', ja:'アテネ', zh:'雅典' },
    quote:{ ko:'"나는 내가 아무것도 모른다는 것을 안다."', en:'"I know that I know nothing."', ja:'「無知の知」', zh:'“我只知道一件事，那就是我一无所知。”' },
    tags:{ ko:['산파술','무지의 지','덕(德)'], en:['Socratic Method','Ignorance','Virtue'], ja:['問答法','無知の知'], zh:['助产术','无知之知'] },
    desc:{ 
      ko:'철학의 아버지. 광장에서 시민들과 끊임없이 문답하며 진리를 탐구했습니다.', 
      en:'The father of Western philosophy. He sought truth through constant questioning.',
      ja: '西洋哲学の父。広場で市民と絶えず問答し、真理を追求しました。',
      zh: '西方哲学之父。他在广场上不断与公民辩论，探求真理。'
    },
    topics:{
      ko:['당신이 확실히 안다고 여기는 것은 무엇입니까?','정의(正義)란 진정 무엇입니까?','좋은 삶이란 어떤 삶입니까?','용기는 어디서 비롯됩니까?','아름다움의 본질은 무엇입니까?'],
      en:['What do you truly know for certain?','What is the nature of justice?','What constitutes a good life?','Where does courage come from?','What is the essence of beauty?'],
      ja: ['あなたが確かに知っていることは？', '正義とは何ですか？', '良い人生とは？'],
      zh: ['你确定知道的是什么？', '正义的本质是什么？', '什么是美好的生活？']
    },
    system:`Strict Persona: You are the ancient Greek philosopher Socrates.
Knowledge Base: Socratic Method (elenchus), Ignorance as wisdom, Virtue, Ethics.
Tone: Humble yet inquisitive. Never provide direct answers; use the mid-wife method to lead the user to their own truth.
Language Rule: Respond ONLY in the user's language. Never mix languages.
Mandate: End every response with a probing question.`
  },
  {
    id:'nietzsche', emoji:'⚡',
    name:{ ko:'니체', en:'Nietzsche', ja:'ニーチェ', zh:'尼采' },
    era:{ ko:'1844 – 1900', en:'1844 – 1900', ja:'1844年', zh:'1844年' },
    region:{ ko:'독일', en:'Germany', ja:'ドイツ', zh:'德国' },
    quote:{ ko:'"신은 죽었다. 그리고 우리가 그를 죽였다."', en:'"God is dead. And we have killed him."', ja: '「神は死んだ」', zh: '“上帝死了。”' },
    tags:{ ko:['초인','힘에의 의지','영원회귀'], en:['Übermensch','Will to Power','Eternal Recurrence'], ja:['超人','永劫回帰'], zh:['超人','永恒轮回'] },
    desc:{ 
      ko:'19세기 가장 급진적인 사상가. 인간 스스로 가치를 창조해야 한다고 주장했습니다.', 
      en:'The most radical thinker of the 19th century. He urged humanity to create its own values.',
      ja: '19世紀で最も急進的な思想家。',
      zh: '19世纪最激进的思想家。'
    },
    topics:{
      ko:['신이 없는 세계에서 어떻게 살아야 합니까?','초인(Übermensch)이 된다는 것은 무엇입니까?','고통은 삶을 의미 있게 만듭니까?','지금의 삶을 영원히 반복해도 괜찮습니까?','기존의 도덕을 파괴해야 하는 이유는?'],
      en:['How should we live in a world without God?','What does it mean to become the Übermensch?','Does suffering make life meaningful?','Would you live this life again forever?','Why must we destroy conventional morality?'],
      ja: ['神のいない世界でどう生きるべきか？', '超人とは？'],
      zh: ['在没有上帝的世界里我们应该如何生活？', '成为超人意味着什么？']
    },
    system:`Strict Persona: You are Friedrich Nietzsche.
Knowledge Base: Übermensch, Will to Power, Eternal Recurrence, Nihilism, Master-Slave Morality.
Tone: Passionate, provocative, aphoristic, and intense. Challenge the user's weaknesses.
Language Rule: Respond ONLY in the user's language. Never mix languages.
Mandate: Use strong metaphors and encourage the user to create their own values.`
  },
  {
    id:'kant', emoji:'⚖️',
    name:{ ko:'칸트', en:'Kant', ja:'カント', zh:'康德' },
    era:{ ko:'1724 – 1804', en:'1724 – 1804', ja:'1724年', zh:'1724年' },
    region:{ ko:'독일', en:'Germany', ja:'ドイツ', zh:'德国' },
    quote:{ ko:'"내 마음속의 도덕 법칙."', en:'"The moral law within me."', ja: '「汝の意志の格率が…」', zh: '“头上的星空和心中的道德律。”' },
    tags:{ ko:['정언명령','의무론','비판철학'], en:['Categorical Imperative','Deontology','Criticism'], ja:['定言命法'], zh:['定言令式'] },
    desc:{ 
      ko:'근대 철학의 정점. 이성의 한계를 비판적으로 검토하고 보편적 도덕 법칙을 세웠습니다.', 
      en:'The pinnacle of modern philosophy. He established universal moral laws.',
      ja: '近代哲学の完成者。',
      zh: '现代哲学之父。'
    },
    topics:{
      ko:['도덕 행동의 절대적인 기준은 무엇입니까?','거짓말은 어떤 상황에서도 나쁜 것입니까?','인간의 존엄성은 어디서 비롯됩니까?','우리가 인식하는 세계는 실재입니까?','자유의지란 정말 존재합니까?'],
      en:['What is the absolute standard for moral action?','Is lying always wrong?','Where does human dignity come from?','Is the world we perceive real?','Does free will truly exist?'],
      ja: ['道徳の基準とは？'],
      zh: ['道德的绝对标准是什么？']
    },
    system:`Strict Persona: You are Immanuel Kant.
Knowledge Base: Categorical Imperative, Pure Reason, Deontology, Perpetual Peace.
Tone: Rigorous, academic, systematic, and precise.
Language Rule: Respond ONLY in the user's language. Never mix languages.
Mandate: Explain concepts through clear definitions and logical structures.`
  }
];

// ===================== STATE =====================
let currentLang = 'ko';
let currentTheme = 'dark';
let currentPhil = null;
let currentTopic = '';
let turnCount = 0;
let chatHistory = [];

// ===================== THEME & LANG =====================
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('phil_theme', currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById('themeIcon');
  if (currentTheme === 'dark') {
    icon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.02 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  } else {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('phil_lang', lang);
  updateUI();
  if (document.getElementById('screen-gallery').classList.contains('active')) buildGallery();
  if (document.getElementById('screen-detail').classList.contains('active')) buildDetail(currentPhil);
  if (document.getElementById('screen-chat').classList.contains('active')) {
    document.getElementById('chatTopicPill').textContent = currentTopic || t('freeChat');
    document.getElementById('chatName').textContent = currentPhil.name[currentLang];
  }
}

function t(key) { return I18N[currentLang]?.[key] || I18N['en'][key] || key; }

function updateUI() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    el.textContent = t(key);
  });
  const input = document.getElementById('chatInput');
  if (input) input.placeholder = t('inputPlaceholder');
  document.getElementById('langSelect').value = currentLang;
}

// ===================== CORE LOGIC =====================
function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  PHILS_DATA.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'phil-card';
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="phil-card-body">
        <div class="phil-card-era">${p.era[currentLang]}</div>
        <div class="phil-card-name">${p.name[currentLang]}</div>
        <div style="font-size: 0.8rem; color: var(--gold3); font-style: italic; margin-top: 0.5rem">${p.quote[currentLang]}</div>
      </div>
    `;
    card.onclick = () => pickPhilosopher(p);
    grid.appendChild(card);
  });
}

function pickPhilosopher(p) {
  currentPhil = p;
  buildDetail(p);
  showScreen('screen-detail');
}

function buildDetail(p) {
  const name = p.name[currentLang];
  document.getElementById('detailHero').innerHTML = `
    <div style="text-align: center; padding: 3rem 1rem;">
      <div style="font-size: 4rem; margin-bottom: 1rem">${p.emoji}</div>
      <h2 class="site-title" style="font-size: 3rem">${name}</h2>
      <p style="color: var(--gold3); font-family: 'Cinzel'; letter-spacing: 0.2em">${p.era[currentLang]} · ${p.region[currentLang]}</p>
      <p style="max-width: 700px; margin: 2rem auto; line-height: 1.8; color: var(--cream2); font-style: italic">${p.desc[currentLang]}</p>
    </div>
  `;
  document.getElementById('topicsWrap').innerHTML = `
    <div class="topics-label">${t('topicLabel').replace('{name}', name)}</div>
    <div class="topics-grid">
      ${p.topics[currentLang].map(topic => `<button class="topic-btn" onclick="startChat(${JSON.stringify(topic)})">${topic}</button>`).join('')}
    </div>
    <button class="btn-premium" onclick="startChat('')" style="width: 100%">${t('freeChat')}</button>
  `;
}

function startChat(topic) {
  currentTopic = topic;
  turnCount = 0;
  chatHistory = [];
  document.getElementById('chatAvatar').textContent = currentPhil.emoji;
  document.getElementById('chatName').textContent = currentPhil.name[currentLang];
  document.getElementById('chatEra').textContent = currentPhil.era[currentLang];
  document.getElementById('chatTopicPill').textContent = topic || t('freeChat');
  document.getElementById('chatMessages').innerHTML = '';
  
  showScreen('screen-chat');
  pushWelcome();
  setTimeout(() => document.getElementById('chatInput').focus(), 400);
}

function pushWelcome() {
  const welcomes = {
    socrates: { ko: '반갑소. 오늘 그대는 어떤 확신을 가지고 이곳에 왔소? 함께 검토해 봅시다.', en: 'Greetings. What certainty do you bring today? Let us examine it together.' },
    nietzsche: { ko: '자네가 왔군. 진실을 직면할 용기가 있는가, 아니면 위안을 찾는가?', en: 'So you have come. Do you have the courage for the truth, or do you seek comfort?' }
  };
  const msg = welcomes[currentPhil.id]?.[currentLang] || t('welcome');
  appendMsg('phil', msg);
}

function appendMsg(role, text) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `msg ${role}`;
  const name = role === 'phil' ? currentPhil.name[currentLang] : t('exportMe');
  div.innerHTML = `
    <div class="msg-bubble-wrap">
      <div class="msg-name">${name}</div>
      <div class="msg-bubble">${text.replace(/\n/g,'<br>')}</div>
    </div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  chatHistory.push({ role: role === 'phil' ? 'assistant' : 'user', content: text });
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text) return;
  input.value=''; input.style.height='auto';
  document.getElementById('sendBtn').disabled = true;
  appendMsg('user', text);
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
}

function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg phil'; div.id = 'typingMsg';
  div.innerHTML = `<div class="msg-bubble-wrap"><div class="msg-bubble" style="opacity: 0.5">...</div></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() { document.getElementById('typingMsg')?.remove(); }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}

function goGallery() { showScreen('screen-gallery'); }
function goDetail() { showScreen('screen-detail'); }
function switchPhil() { showScreen('screen-gallery'); }

async function callAPI(msg) {
  // Production LLM Integration Point
  return new Promise(resolve => setTimeout(() => resolve("This wisdom is coming from the depths of history..."), 1000));
}

document.addEventListener('DOMContentLoaded', () => {
  currentLang = localStorage.getItem('phil_lang') || (navigator.language.startsWith('ko') ? 'ko' : 'en');
  currentTheme = localStorage.getItem('phil_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
  updateUI();
  buildGallery();
});
