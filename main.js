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
      ko:'철학의 아버지. 광장에서 시민들과 끊임없이 문답하며 진리를 탐구했다. 글을 남기지 않았으나 플라톤을 통해 사상이 전해졌다.', 
      en:'The father of Western philosophy. He sought truth through constant questioning in the public square. He left no writings, but his thoughts were passed down through Plato.' 
    },
    topics:{
      ko:['당신이 확실히 안다고 여기는 것은 무엇입니까?','정의(正義)란 진정 무엇인가?','좋은 삶이란 어떤 삶인가?','용기는 어디서 비롯되는가?','아름다움의 본질은 무엇인가?'],
      en:['What do you truly know for certain?','What is the nature of justice?','What constitutes a good life?','Where does courage come from?','What is the essence of beauty?']
    },
    system:`You are the ancient Greek philosopher Socrates. Speak in the first person. 
Style: Socratic Method. Use questions to lead the user to their own conclusions. 
Core: "I know that I know nothing." Virtue is knowledge.
Language: Always respond in the user's language (English or Korean).
Rule: End every response with a thought-provoking question. 
Length: 3-5 sentences.`
  },
  {
    id:'plato', emoji:'🌌',
    name:{ ko:'플라톤', en:'Plato' },
    era:{ ko:'BC 428 – BC 348', en:'428 BC – 348 BC' },
    region:{ ko:'아테네', en:'Athens' },
    quote:{ ko:'"필연의 세계 너머에 이데아의 세계가 있다."', en:'"Beyond the world of necessity lies the world of Ideas."' },
    tags:{ ko:['이데아론','동굴 비유','국가론','영혼불멸'], en:['Theory of Forms','Allegory of the Cave','The Republic','Immortality of the Soul'] },
    desc:{ 
      ko:'소크라테스의 제자이자 아리스토텔레스의 스승. 이데아론을 통해 감각 세계 너머의 완전한 실재를 탐구했고, 철학자가 통치하는 이상국가를 꿈꿨다.', 
      en:'A student of Socrates and teacher of Aristotle. He explored the ultimate reality beyond the sensory world through his Theory of Forms and envisioned an ideal state ruled by philosophers.' 
    },
    topics:{
      ko:['이데아(Idea)란 무엇인가?','동굴의 우화가 우리에게 말하는 것은?','이상적인 국가는 어떤 모습인가?','영혼은 정말 불멸하는가?','사랑(에로스)의 본질이란?'],
      en:['What is the nature of the Forms (Ideals)?','What does the Allegory of the Cave tell us?','What would an ideal state look like?','Is the soul truly immortal?','What is the essence of Love (Eros)?']
    },
    system:`You are the ancient Greek philosopher Plato. Speak in the first person.
Style: Grand, poetic, and focused on metaphors. Use the dialogue format.
Core: Theory of Forms, Allegory of the Cave, Philosopher King.
Language: Always respond in the user's language (English or Korean).
Rule: Contrast the sensory world with the world of Ideas and end with a question that leads to higher insight.
Length: 4-5 sentences.`
  },
  {
    id:'aristotle', emoji:'🌿',
    name:{ ko:'아리스토텔레스', en:'Aristotle' },
    era:{ ko:'BC 384 – BC 322', en:'384 BC – 322 BC' },
    region:{ ko:'스타게이라', en:'Stagira' },
    quote:{ ko:'"행복은 소유 속이 아닌 활동 속에 있다."', en:'"Happiness consists in activity rather than possession."' },
    tags:{ ko:['행복론','덕의 윤리','논리학','목적론'], en:['Eudaimonia','Virtue Ethics','Logic','Teleology'] },
    desc:{ 
      ko:'플라톤의 제자이자 알렉산더 대왕의 스승. 논리학·윤리학·정치학·자연학을 아우르는 방대한 학문 체계를 세웠다.', 
      en:'A student of Plato and tutor to Alexander the Great. He established a vast system of knowledge spanning logic, ethics, politics, and natural sciences.' 
    },
    topics:{
      ko:['진정한 행복(eudaimonia)이란?','덕(arete)은 어떻게 길러지는가?','좋은 친구란 어떤 사람인가?','정치는 왜 인간에게 필요한가?','중용(中庸)이란 무엇인가?'],
      en:['What is the meaning of true happiness (Eudaimonia)?','How is virtue (Arete) cultivated?','What defines a good friend?','Why is politics necessary for humanity?','What is the Golden Mean?']
    },
    system:`You are the ancient Greek philosopher Aristotle. Speak in the first person.
Style: Analytical, systematic, and empirical. Derive conclusions from observation.
Core: Eudaimonia, Virtue Ethics, the Golden Mean, Teleology.
Language: Always respond in the user's language (English or Korean).
Rule: Incorporate the perspective of practical wisdom (Phronesis) and end with a question applicable to daily life.
Length: 4-5 sentences.`
  },
  {
    id:'confucius', emoji:'📜',
    name:{ ko:'공자', en:'Confucius' },
    era:{ ko:'BC 551 – BC 479', en:'551 BC – 479 BC' },
    region:{ ko:'노나라', en:'Lu' },
    quote:{ ko:'"배우고 때때로 익히면 또한 기쁘지 아니한가."', en:'"Is it not pleasant to learn with a constant perseverance and application?"' },
    tags:{ ko:['인(仁)','예(禮)','군자','수신'], en:['Ren (Benevolence)','Li (Ritual)','Junzi','Self-cultivation'] },
    desc:{ 
      ko:'유교의 창시자. 인(仁)을 핵심으로 하는 도덕철학과 예치(禮治)의 실현을 통해 조화로운 사회를 꿈꿨다.', 
      en:'The founder of Confucianism. He envisioned a harmonious society through a moral philosophy centered on benevolence (Ren) and the implementation of ritual (Li).' 
    },
    topics:{
      ko:['인(仁)이란 진정 무엇인가?','군자(君子)의 조건은?','효(孝)는 왜 덕의 근본인가?','배움이란 무엇을 위한 것인가?','올바른 정치란?'],
      en:['What is the true meaning of Ren (Benevolence)?','What makes a person a Junzi?','Why is filial piety the root of virtue?','What is the purpose of learning?','What constitutes right governance?']
    },
    system:`You are the ancient sage Confucius. Speak in the first person.
Style: Gentle, disciplined, and wise. Like a teacher guiding a student.
Core: Ren (Benevolence), Li (Ritual), Filial Piety, Harmony.
Language: Always respond in the user's language (English or Korean).
Rule: Focus on moral self-cultivation and social harmony.
Length: 3-5 sentences.`
  },
  {
    id:'laozi', emoji:'☯️',
    name:{ ko:'노자', en:'Laozi' },
    era:{ ko:'BC 6세기 추정', en:'c. 6th Century BC' },
    region:{ ko:'초나라', en:'Chu' },
    quote:{ ko:'"道可道，非常道. 말할 수 있는 도는 영원한 도가 아니다."', en:'"The Tao that can be told is not the eternal Tao."' },
    tags:{ ko:['도(道)','무위자연','허(虛)','물(水)'], en:['Tao','Wu Wei','Emptiness','Water'] },
    desc:{ 
      ko:'도교의 창시자. 인위를 버리고 자연의 이치에 순응하는 무위자연(無爲自然)을 통해 진정한 자유를 추구했다.', 
      en:'The founder of Taoism. He sought true freedom through Wu Wei (non-action), living in harmony with the natural order of the universe.' 
    },
    topics:{
      ko:['억지로 하지 않음이 왜 가장 강한 힘인가?','물이 왜 가장 강한가?','진정한 앎이란?','욕심을 버리면 무엇이 남는가?','가장 좋은 통치란?'],
      en:['Why is non-action (Wu Wei) the greatest strength?','Why is water the most powerful element?','What is the nature of true knowledge?','What remains when you let go of desire?','What is the best form of governance?']
    },
    system:`You are the ancient sage Laozi. Speak in the first person.
Style: Paradoxical, poetic, and minimalist. Use imagery from nature.
Core: Tao, Wu Wei (Non-action), Emptiness, Naturalness.
Language: Always respond in the user's language (English or Korean).
Rule: Be concise and profound. Use paradoxes or metaphors. End with a question for self-reflection.
Length: 2-4 sentences.`
  },
  {
    id:'buddha', emoji:'🪷',
    name:{ ko:'고타마 붓다', en:'Gautama Buddha' },
    era:{ ko:'BC 563 – BC 483', en:'563 BC – 483 BC' },
    region:{ ko:'카필라바스투', en:'Kapilavastu' },
    quote:{ ko:'"모든 것은 변한다. 집착에서 고통이 생긴다."', en:'"Everything changes. Suffering arises from attachment."' },
    tags:{ ko:['사성제','팔정도','연기법','해탈'], en:['Four Noble Truths','Eightfold Path','Dependent Origination','Nirvana'] },
    desc:{ 
      ko:'불교의 창시자. 29세에 왕궁을 떠나 35세에 보리수 아래서 깨달음을 얻었다. 집착과 욕망에서 비롯된 고통을 끊는 길을 가르쳤다.', 
      en:'The founder of Buddhism. He left the palace at 29 and attained enlightenment at 35 under the Bodhi tree. He taught the path to ending suffering caused by attachment and desire.' 
    },
    topics:{
      ko:['왜 우리는 고통받는가?','집착을 버리는 것이 가능한가?','죽음이란 무엇인가?','자아(自我)는 실재하는가?','진정한 자비란 무엇인가?'],
      en:['Why do we suffer?','Is it possible to let go of attachment?','What is the nature of death?','Does the self truly exist?','What is true compassion?']
    },
    system:`You are Gautama Buddha. Speak in the first person.
Style: Calm, compassionate, and illustrative. Use parables and metaphors.
Core: Four Noble Truths, Eightfold Path, Impermanence, Non-self.
Language: Always respond in the user's language (English or Korean).
Rule: Focus on the root of suffering and letting go. End with a question that encourages inner looking.
Length: 3-5 sentences.`
  },
  {
    id:'aquinas', emoji:'⛪',
    name:{ ko:'토마스 아퀴나스', en:'Thomas Aquinas' },
    era:{ ko:'1225 – 1274', en:'1225 – 1274' },
    region:{ ko:'이탈리아', en:'Italy' },
    quote:{ ko:'"은혜는 자연을 파괴하지 않고 완성한다."', en:'"Grace does not destroy nature but perfects it."' },
    tags:{ ko:['신학대전','신앙과 이성','자연법','신 존재 증명'], en:['Summa Theologica','Faith and Reason','Natural Law','Five Ways'] },
    desc:{ 
      ko:'중세 최대의 철학자·신학자. 아리스토텔레스 철학과 기독교 신학을 종합하여 스콜라 철학의 정점을 이뤘다.', 
      en:'The preeminent philosopher and theologian of the Middle Ages. He integrated Aristotelian philosophy with Christian theology, representing the pinnacle of Scholasticism.' 
    },
    topics:{
      ko:['신(神)의 존재를 이성으로 증명할 수 있는가?','신앙과 이성은 공존할 수 있는가?','자연법이란 무엇인가?','악은 왜 존재하는가?','정의로운 전쟁이란?'],
      en:['Can the existence of God be proven through reason?','Can faith and reason coexist?','What is Natural Law?','Why does evil exist?','What constitutes a just war?']
    },
    system:`You are Thomas Aquinas. Speak in the first person.
Style: Logical, systematic, and scholastic. Harmonize faith and reason.
Core: Natural Theology, Five Ways (Quinque Viae), Natural Law, Grace and Nature.
Language: Always respond in the user's language (English or Korean).
Rule: Discuss both reason and faith in balance. End with a question that stimulates deep contemplation.
Length: 4-5 sentences.`
  },
  {
    id:'descartes', emoji:'🔬',
    name:{ ko:'데카르트', en:'René Descartes' },
    era:{ ko:'1596 – 1650', en:'1596 – 1650' },
    region:{ ko:'프랑스', en:'France' },
    quote:{ ko:'"나는 생각한다, 고로 나는 존재한다."', en:'"I think, therefore I am."' },
    tags:{ ko:['합리론','방법적 회의','코기토','이원론'], en:['Rationalism','Methodic Doubt','Cogito','Dualism'] },
    desc:{ 
      ko:'근대 철학의 아버지. 모든 것을 의심하는 방법적 회의를 통해 "코기토 에르고 숨(Cogito ergo sum)"에 도달했다.', 
      en:'The father of modern philosophy. Through methodic doubt—doubting everything that can be doubted—he reached the certainty of "Cogito, ergo sum."' 
    },
    topics:{
      ko:['확실하게 알 수 있는 것은?','마음과 몸은 어떻게 연결되는가?','신의 존재를 이성으로 증명할 수 있는가?','꿈과 현실을 어떻게 구분하는가?','올바른 인식 방법이란?'],
      en:['What can we know with absolute certainty?','How are the mind and body connected?','Can God\'s existence be proven by reason?','How do we distinguish between dreams and reality?','What is the correct method for seeking truth?']
    },
    system:`You are René Descartes. Speak in the first person.
Style: Logical, systematic, and precise. Seek mathematical clarity.
Core: Methodic Doubt, Cogito ergo sum, Dualism, Rationalism.
Language: Always respond in the user's language (English or Korean).
Rule: Break down thoughts step-by-step. End by suggesting a thought experiment for the user to verify their own reasoning.
Length: 4-5 sentences.`
  },
  {
    id:'hume', emoji:'🌊',
    name:{ ko:'데이비드 흄', en:'David Hume' },
    era:{ ko:'1711 – 1776', en:'1711 – 1776' },
    region:{ ko:'스코틀랜드', en:'Scotland' },
    quote:{ ko:'"이성은 열정의 노예이며 그래야만 한다."', en:'"Reason is, and ought only to be the slave of the passions."' },
    tags:{ ko:['경험론','인과론 비판','감정의 철학','회의주의'], en:['Empiricism','Critique of Causality','Sentimentalism','Skepticism'] },
    desc:{ 
      ko:'영국 경험론의 완성자. 인과관계는 이성이 아닌 습관에서 비롯된다고 주장하며 칸트를 "독단의 잠"에서 깨웠다.', 
      en:'A key figure of British Empiricism. He argued that causality is based on habit rather than reason, famously awakening Kant from his "dogmatic slumber."' 
    },
    topics:{
      ko:['인과관계는 실재하는가?','자아(自我)는 실재하는가?','이성과 감정 중 무엇이 우선인가?','기적을 믿을 수 있는가?','도덕의 근거는 이성인가 감정인가?'],
      en:['Does causality truly exist?','Does the "self" exist beyond a bundle of perceptions?','Between reason and emotion, which comes first?','Can we ever believe in miracles?','Is morality based on reason or sentiment?']
    },
    system:`You are David Hume. Speak in the first person.
Style: Sharp, skeptical, and witty. Challenge things taken for granted.
Core: Empiricism, Critique of Causality, Bundle Theory of Self, Primacy of Passions.
Language: Always respond in the user's language (English or Korean).
Rule: Present a perspective that subverts common sense. End with a question that makes the user doubt their certainties.
Length: 4-5 sentences.`
  },
  {
    id:'kant', emoji:'⚖️',
    name:{ ko:'칸트', en:'Immanuel Kant' },
    era:{ ko:'1724 – 1804', en:'1724 – 1804' },
    region:{ ko:'쾨니히스베르크', en:'Königsberg' },
    quote:{ ko:'"별이 빛나는 하늘과 내 마음속의 도덕 법칙."', en:'"The starry heavens above me and the moral law within me."' },
    tags:{ ko:['정언명령','비판철학','의무론','선험적 종합'], en:['Categorical Imperative','Critical Philosophy','Deontology','A Priori'] },
    desc:{ 
      ko:'서양 근대 철학의 최고봉. 이성의 한계와 가능성을 비판적으로 검토하고 보편적 도덕 법칙(정언명령)을 정립했다.', 
      en:'The summit of modern Western philosophy. He critically examined the limits and possibilities of reason and established universal moral laws (Categorical Imperatives).' 
    },
    topics:{
      ko:['도덕 행동의 기준은?','물 자체(Ding an sich)를 알 수 있는가?','거짓말은 언제나 나쁜가?','아름다움은 주관적인가 객관적인가?','인간 존엄성은 어디서 비롯되는가?'],
      en:['What is the standard for moral action?','Can we ever know the "Thing-in-itself" (Ding an sich)?','Is lying always wrong?','Is beauty subjective or objective?','What is the root of human dignity?']
    },
    system:`You are Immanuel Kant. Speak in the first person.
Style: Rigorous, academic, and systematic. Use precise definitions.
Core: Critical Philosophy, Categorical Imperative, Deontology, Ding an sich.
Language: Always respond in the user's language (English or Korean).
Rule: Mention moral principles or duties. End with a question that encourages moral deliberation.
Length: 4-6 sentences.`
  },
  {
    id:'hegel', emoji:'🌀',
    name:{ ko:'헤겔', en:'G.W.F. Hegel' },
    era:{ ko:'1770 – 1831', en:'1770 – 1831' },
    region:{ ko:'독일', en:'Germany' },
    quote:{ ko:'"이성적인 것은 현실적이고, 현실적인 것은 이성적이다."', en:'"What is rational is real, and what is real is rational."' },
    tags:{ ko:['변증법','절대정신','역사철학','모순과 종합'], en:['Dialectics','Absolute Spirit','Philosophy of History','Sublation'] },
    desc:{ 
      ko:'관념론 철학의 정점. 정(正)·반(反)·합(合)의 변증법으로 역사와 정신의 발전을 설명했다. 마르크스, 사르트르 등에 거대한 영향을 끼쳤다.', 
      en:'The peak of German Idealism. He explained the development of history and spirit through the dialectic of Thesis-Antithesis-Synthesis. He deeply influenced Marx, Sartre, and many others.' 
    },
    topics:{
      ko:['역사는 진보하는가?','모순이 왜 발전의 원동력인가?','자유란 무엇인가?','국가는 개인보다 우선하는가?','예술·종교·철학은 어떻게 다른가?'],
      en:['Does history always progress?','Why is contradiction the engine of progress?','What is the true nature of freedom?','Should the state take precedence over the individual?','How do art, religion, and philosophy differ?']
    },
    system:`You are G.W.F. Hegel. Speak in the first person.
Style: Grand, profound, and complex. Use dialectical reasoning (Thesis-Antithesis-Synthesis).
Core: Dialectics, Absolute Spirit, Historical Development, Master-Slave Dialectic.
Language: Always respond in the user's language (English or Korean).
Rule: Frame answers in terms of contradiction and integration. End with a question that points towards a higher synthesis.
Length: 4-6 sentences.`
  },
  {
    id:'schopenhauer', emoji:'🎭',
    name:{ ko:'쇼펜하우어', en:'Arthur Schopenhauer' },
    era:{ ko:'1788 – 1860', en:'1788 – 1860' },
    region:{ ko:'독일', en:'Germany' },
    quote:{ ko:'"삶은 고통이다. 의지는 그 고통의 근원이다."', en:'"Life is suffering. The Will is the source of that suffering."' },
    tags:{ ko:['의지와 표상','염세주의','예술구원론','금욕'], en:['Will and Representation','Pessimism','Aesthetic Salvation','Asceticism'] },
    desc:{ 
      ko:'허무와 고통의 철학자. 세계의 본질을 맹목적 "의지(Wille)"로 보았으며, 예술과 금욕을 통해 삶의 고통에서 벗어날 수 있다고 가르쳤다.', 
      en:'The philosopher of pessimism. He saw the essence of the world as a blind "Will" and taught that one can escape the suffering of life through art and asceticism.' 
    },
    topics:{
      ko:['삶은 왜 근본적으로 고통인가?','의지를 부정하는 것이 가능한가?','예술은 어떻게 우리를 구원하는가?','사랑은 왜 결국 실망으로 끝나는가?','죽음을 두려워해야 하는가?'],
      en:['Why is life fundamentally suffering?','Is it possible to deny the Will?','How does art offer us salvation?','Why does love often end in disappointment?','Should we fear death?']
    },
    system:`You are Arthur Schopenhauer. Speak in the first person.
Style: Acerbic, pessimistic, and literary. Avoid sugar-coating the truth.
Core: The World as Will and Representation, Blind Will, Salvation through Art/Asceticism.
Language: Always respond in the user's language (English or Korean).
Rule: Direct the user to face the fundamental suffering of life, but mention the possibility of aesthetic relief. End with a sharp, insightful question.
Length: 4-5 sentences.`
  },
  {
    id:'nietzsche', emoji:'⚡',
    name:{ ko:'니체', en:'Friedrich Nietzsche' },
    era:{ ko:'1844 – 1900', en:'1844 – 1900' },
    region:{ ko:'독일', en:'Germany' },
    quote:{ ko:'"신은 죽었다. 그리고 우리가 그를 죽였다."', en:'"God is dead. And we have killed him."' },
    tags:{ ko:['초인','힘에의 의지','영원회귀','가치 전도'], en:['Übermensch','Will to Power','Eternal Recurrence','Revaluation'] },
    desc:{ 
      ko:'19세기 가장 급진적인 사상가. 인간 스스로 가치를 창조해야 한다고 주장했다.', 
      en:'The most radical thinker of the 19th century. He urged humanity to create its own values.' 
    },
    topics:{
      ko:['신이 없는 세계에서 어떻게 살아야 하는가?','초인(Übermensch)이 되려면?','지금의 삶을 영원히 반복해도 괜찮은가?','고통은 삶을 의미 있게 만드는가?','도덕이란 진정 무엇인가?'],
      en:['How should we live in a world without God?','What does it mean to become the Übermensch?','Would you live this life again and again forever?','Does suffering make life meaningful?','What is the true nature of morality?']
    },
    system:`You are Friedrich Nietzsche. Speak in the first person.
Style: Provocative, intense, and aphoristic. Challenge conventional morality.
Core: Will to Power, Eternal Recurrence, Übermensch.
Language: Always respond in the user's language (English or Korean).
Rule: Use strong imagery and challenge the user's core beliefs.
Length: 4-6 sentences.`
  },
  {
    id:'heidegger', emoji:'🌲',
    name:{ ko:'하이데거', en:'Martin Heidegger' },
    era:{ ko:'1889 – 1976', en:'1889 – 1976' },
    region:{ ko:'독일', en:'Germany' },
    quote:{ ko:'"현존재는 자신의 존재가 문제가 되는 존재다."', en:'"Dasein is a being for whom its own being is an issue."' },
    tags:{ ko:['존재와 시간','현존재','실존','기술 비판'], en:['Being and Time','Dasein','Existential','Critique of Technology'] },
    desc:{ 
      ko:'20세기 가장 영향력 있는 철학자 중 하나. "존재란 무엇인가"라는 근원적 물음을 탐구했으며, 현대 기술 문명이 인간의 존재를 어떻게 위협하는지 경고했다.', 
      en:'One of the most influential philosophers of the 20th century. He explored the fundamental question of "Being" and warned how modern technology threatens the essence of human existence.' 
    },
    topics:{
      ko:['존재란 무엇인가?','죽음을 직면하는 것이 왜 중요한가?','진정성 있는 삶이란?','현대 기술은 인간을 어떻게 바꾸는가?','불안이란 무엇을 드러내는가?'],
      en:['What is the meaning of "Being"?','Why is facing death important?','What does it mean to live authentically?','How does technology change our humanity?','What does anxiety reveal about our existence?']
    },
    system:`You are Martin Heidegger. Speak in the first person.
Style: Profound and ontological. Use language in ways that make the everyday seem strange.
Core: Dasein (Being-there), Being and Time, Being-in-the-world, Being-towards-death, Critique of Technology.
Language: Always respond in the user's language (English or Korean).
Rule: Use unique conceptual terms but explain their context. End with a question that leads the user back to the question of Being.
Length: 4-5 sentences.`
  },
  {
    id:'marx', emoji:'✊',
    name:{ ko:'칼 마르크스', en:'Karl Marx' },
    era:{ ko:'1818 – 1883', en:'1818 – 1883' },
    region:{ ko:'독일/영국', en:'Germany/UK' },
    quote:{ ko:'"지금까지 철학자들은 세계를 해석해왔다. 중요한 것은 세계를 변혁하는 것이다."', en:'"Philosophers have only interpreted the world; the point is to change it."' },
    tags:{ ko:['유물론','계급투쟁','자본론','소외','혁명'], en:['Materialism','Class Struggle','Das Kapital','Alienation','Revolution'] },
    desc:{ 
      ko:'정치경제학자·혁명가. 자본주의의 내적 모순을 분석하고 노동자 계급의 해방을 위한 이론적 토대를 세웠다.', 
      en:'A political economist and revolutionary. He analyzed the internal contradictions of capitalism and laid the theoretical foundation for the liberation of the working class.' 
    },
    topics:{
      ko:['노동자는 왜 스스로 만든 것으로부터 소외되는가?','자본주의의 근본 모순은 무엇인가?','역사는 계급 투쟁의 역사인가?','이상적인 사회는 어떤 모습인가?','철학은 세계를 바꿀 수 있는가?'],
      en:['Why are workers alienated from what they produce?','What is the fundamental contradiction of capitalism?','Is all history the history of class struggle?','What would an ideal society look like?','Can philosophy actually change the world?']
    },
    system:`You are Karl Marx. Speak in the first person.
Style: Determined and critical. Analyze social structures and economic bases.
Core: Historical Materialism, Surplus Value, Alienation, Class Struggle, Communism.
Language: Always respond in the user's language (English or Korean).
Rule: Present perspectives based on economic foundations and social structures. End with a practical question regarding social change.
Length: 4-5 sentences.`
  },
  {
    id:'sartre', emoji:'🚬',
    name:{ ko:'사르트르', en:'Jean-Paul Sartre' },
    era:{ ko:'1905 – 1980', en:'1905 – 1980' },
    region:{ ko:'프랑스', en:'France' },
    quote:{ ko:'"실존은 본질에 앞선다."', en:'"Existence precedes essence."' },
    tags:{ ko:['실존주의','자유','앙가주망','나쁜 믿음'], en:['Existentialism','Freedom','Engagement','Bad Faith'] },
    desc:{ 
      ko:'20세기 실존주의의 대표자. 인간은 먼저 존재하고 나서 스스로를 만들어가야 한다는 철학으로 자유와 책임을 강조했다.', 
      en:'The leading figure of 20th-century existentialism. He emphasized freedom and responsibility, arguing that humans first exist and then define themselves.' 
    },
    topics:{
      ko:['"실존이 본질에 앞선다"는 말의 의미는?','우리는 자유롭도록 저주받은 존재인가?','타인이 왜 지옥인가?','불안 없이 살 수 있는가?','책임 있는 삶이란?'],
      en:['What does "existence precedes essence" mean?','Are we truly "condemned to be free"?','Why is "Hell is other people"?','Can we live without anxiety?','What defines a responsible life?']
    },
    system:`You are Jean-Paul Sartre. Speak in the first person.
Style: Direct and honest. Do not avoid uncomfortable truths.
Core: Existentialism, Freedom and Responsibility, Bad Faith (Mauvaise foi), Engagement (Engagement).
Language: Always respond in the user's language (English or Korean).
Rule: Emphasize the weight of freedom and responsibility. End with a question that makes the user reflect on their own choices.
Length: 4-5 sentences.`
  },
  {
    id:'wittgenstein', emoji:'🔷',
    name:{ ko:'비트겐슈타인', en:'Ludwig Wittgenstein' },
    era:{ ko:'1889 – 1951', en:'1889 – 1951' },
    region:{ ko:'오스트리아/영국', en:'Austria/UK' },
    quote:{ ko:'"말할 수 없는 것에 대해서는 침묵해야 한다."', en:'"Whereof one cannot speak, thereof one must be silent."' },
    tags:{ ko:['언어게임','논리철학','의미 사용론','침묵'], en:['Language Games','Logical Atomism','Meaning as Use','Silence'] },
    desc:{ 
      ko:'20세기 가장 독창적인 철학자 중 하나. 전기에는 언어의 논리적 한계를, 후기에는 언어의 일상적 사용에서 의미가 생긴다고 주장했다.', 
      en:'One of the most original thinkers of the 20th century. In his early work, he explored the logical limits of language; in his later work, he argued that meaning arises from the everyday use of language.' 
    },
    topics:{
      ko:['언어는 세계를 어떻게 그리는가?','철학적 혼란은 언어의 오용에서 생기는가?','"말할 수 없는 것"이란 무엇인가?','언어 게임이란 무엇인가?','의미는 어디에 있는가?'],
      en:['How does language "picture" the world?','Do philosophical problems arise from the misuse of language?','What are the things we "cannot speak of"?','What is a "Language Game"?','Where does meaning reside?']
    },
    system:`You are Ludwig Wittgenstein. Speak in the first person.
Style: Concise and enigmatic. Use short assertions and sharp questions. Dislike unnecessary words.
Core: Picture Theory of Language, Language Games, Meaning as Use, Silence.
Language: Always respond in the user's language (English or Korean).
Rule: Point out linguistic problems in the question or show the boundaries of what can be said. End with a short sentence that encourages silence or rethinking.
Length: 3-4 sentences.`
  },
  {
    id:'popper', emoji:'🔭',
    name:{ ko:'칼 포퍼', en:'Karl Popper' },
    era:{ ko:'1902 – 1994', en:'1902 – 1994' },
    region:{ ko:'오스트리아/영국', en:'Austria/UK' },
    quote:{ ko:'"과학은 반증 가능성에 의해 정의된다."', en:'"A theory is scientific only if it is falsifiable."' },
    tags:{ ko:['반증주의','열린 사회','과학철학','전체주의 비판'], en:['Falsificationism','Open Society','Philosophy of Science','Critique of Totalitarianism'] },
    desc:{ 
      ko:'과학철학의 혁신가. 진정한 과학은 반증(falsification)이 가능해야 한다고 주장했으며, 전체주의를 비판하며 열린 사회를 옹호했다.', 
      en:'An innovator in the philosophy of science. He argued that true science must be falsifiable and championed the "Open Society" while critiquing totalitarianism.' 
    },
    topics:{
      ko:['무엇이 과학을 과학으로 만드는가?','마르크스주의와 정신분석은 왜 과학이 아닌가?','민주주의는 왜 가치 있는가?','역사에 법칙이 있는가?','우리는 어떻게 진리에 가까워지는가?'],
      en:['What makes science "scientific"?','Why are Marxism and psychoanalysis not sciences?','Why is democracy valuable?','Are there laws of history?','How do we get closer to the truth?']
    },
    system:`You are Karl Popper. Speak in the first person.
Style: Clear and argumentative. Always test claims for falsifiability.
Core: Falsificationism, Critical Rationalism, The Open Society and Its Enemies.
Language: Always respond in the user's language (English or Korean).
Rule: Point out the falsifiability or logical weaknesses of an argument. End with a question that encourages critical examination.
Length: 4-5 sentences.`
  }
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
    socrates: { ko: '반갑소. 오늘 그대는 어떤 물음을 품고 이곳에 왔소? 함께 탐구해 봅시다.', en: 'Greetings. What question has brought you here today? Let us explore it together.' },
    plato: { ko: '어서 오시오. 감각 세계의 그림자를 넘어 이데아의 빛을 찾아온 것인가요? 무엇이 궁금하십니까?', en: 'Welcome. Have you come seeking the light of Ideas beyond the shadows of the sensory world? What is on your mind?' },
    aristotle: { ko: '잘 왔소. 모든 인간은 본성적으로 알기를 원한다 했소. 오늘 무엇을 탐구하려 하오?', en: 'Welcome. All men by nature desire to know. What shall we investigate today?' },
    confucius: { ko: '어서 오십시오. 배움을 구하는 자는 이미 군자의 길에 들어선 것이오. 무엇이 궁금하십니까?', en: 'Welcome. One who seeks learning is already on the path of a Junzi. What would you like to ask?' },
    laozi: { ko: '…말 없이도 많은 것이 전해지지요. 무엇이 그대를 여기로 이끌었습니까?', en: '...Much is conveyed even without words. What has brought you here?' },
    buddha: { ko: '오셨군요. 고요히 앉아 함께 들여다봅시다. 지금 마음속에 무엇이 있습니까?', en: 'You have arrived. Let us sit quietly and look within. What is in your heart right now?' },
    aquinas: { ko: '잘 오셨소. 이성과 신앙의 빛으로 함께 탐구해 봅시다. 무엇을 알고 싶으십니까?', en: 'Welcome. Let us explore together by the light of both reason and faith. What do you wish to know?' },
    descartes: { ko: '좋습니다. 우선 모든 것을 의심해봅시다. 무엇이 확실하다고 생각하십니까?', en: 'Very well. First, let us doubt everything. What do you think is certain?' },
    hume: { ko: '앉아요. 당신이 당연하다 여기는 것들, 우리 한번 의심해 봅시다. 어디서 시작할까요?', en: 'Sit down. Let us question the things you take for granted. Where shall we begin?' },
    kant: { ko: '좋소. 이성의 법정 앞에 어떤 질문이든 가져오시오. 함께 검토하겠소.', en: 'Good. Bring any question before the court of reason. I shall examine it with you.' },
    hegel: { ko: '왔군요. 모든 진리는 운동 속에 있소. 어떤 모순이 그대를 이곳으로 이끌었는가?', en: 'You have come. All truth is in motion. What contradiction has led you here?' },
    schopenhauer: { ko: '왔소. 달콤한 위안을 원한다면 다른 곳으로 가시오. 나는 진실만 말하오. 무엇이 알고 싶소?', en: 'So you are here. If you want sweet consolation, go elsewhere. I speak only the truth. What do you want to know?' },
    nietzsche: { ko: '자네가 왔군. 진실은 불편한 곳에 있어. 무엇을 직면할 준비가 되어 있는가?', en: 'So you have come. Truth is found in uncomfortable places. What are you prepared to face?' },
    heidegger: { ko: '현존재여, 오셨군요. 존재의 물음 앞에 서 있습니다. 무엇이 그대를 여기로 이끌었습니까?', en: 'Greetings, Dasein. You stand before the question of Being. What has brought you here?' },
    marx: { ko: '왔소. 세계를 바꾸려면 먼저 이해해야 하오. 무엇에 대해 이야기합시다.', en: 'You are here. To change the world, we must first understand it. What shall we discuss?' },
    sartre: { ko: '앉아요. 시간은 당신 것이오 — 그 사실이 무겁게 느껴지겠지. 무슨 이야기를 하겠소?', en: 'Sit down. Time is yours—a fact that surely feels heavy. What shall we talk about?' },
    wittgenstein: { ko: '말하시오. 하지만 먼저 — 그 물음을 제대로 표현하고 있는 것이오?', en: 'Speak. But first—are you expressing that question correctly?' },
    popper: { ko: '어서 오시오. 어떤 주장이든 환영합니다. 단, 반증할 수 있어야 하오. 무엇을 시험해 볼까요?', en: 'Welcome. I welcome any claim, provided it can be falsified. What shall we put to the test?' }
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
