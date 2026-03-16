/* MANDATORY: ALWAYS MAINTAIN 18 PHILOSOPHERS. DO NOT TRIM. */

// ===================== I18N DATA =====================
const I18N = {
  ko: {
    siteTitle: '철학인의 방',
    siteTagline: '시대를 초월한 사상가들과의 대화',
    galleryHeading: '대화를 나누고 싶은 철학인을 선택하세요',
    backToGallery: '← 철학인 목록',
    changeTopic: '주제 변경',
    changePhil: '철학인 변경',
    saveChat: '대화 저장',
    freeChat: '자유롭게 대화 시작하기',
    topicLabel: '✦ {name}의 사유 주제',
    inputPlaceholder: '심오한 생각을 나누어보세요…',
    inputHint: 'Enter 전송 · Shift+Enter 줄바꿈',
    skipAd: '계속하기 →',
    adLabel: 'A D V E R T I S E M E N T',
    welcome: '어서 오십시오. 무엇이든 이야기해 보십시오.',
    exportMe: '나',
    footerText: '© 2026 Philosophia · 위대한 철학인들과 AI로 대화하는 공간',
    privacy: '개인정보처리방침',
    terms: '이용약관',
    about: '소개',
    contact: '문의'
  },
  en: {
    siteTitle: "Philosopher's Chamber",
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
  ja: { siteTitle: '哲学者の部屋', siteTagline: '時代を超えた思想家との対話', galleryHeading: '対話したい思想家を選択してください', backToGallery: '← ギャラリー', changeTopic: 'トピック変更', changePhil: '思想家변경', saveChat: '保存', freeChat: '自由に対話を開始', topicLabel: '✦ {name}の思索テーマ', inputPlaceholder: '考えを自由に話してください…', inputHint: 'Enterで送信 · Shift+Enterで改行', skipAd: '次へ →', adLabel: '広 告', welcome: 'ようこそ。今日はどのようなお話がありますか？', exportMe: '私', footerText: '© 2026 Philosophia', privacy: 'プライバシー', terms: '利用規約', about: '紹介', contact: 'お問い合わせ' },
  zh: { siteTitle: '哲人之室', siteTagline: '与超越时代的思想家对话', galleryHeading: '选择一位想与之对话的思想家', backToGallery: '← 列表', changeTopic: '更改主题', changePhil: '更改思想家', saveChat: '保存对话', freeChat: '开始自由对话', topicLabel: '✦ {name} 的思想领域', inputPlaceholder: '自由地分享您的想法…', inputHint: 'Enter 发送 · Shift+Enter 换行', skipAd: '继续 →', adLabel: '广 告', welcome: '欢迎。今天您有什么想法？', exportMe: '我', footerText: '© 2026 Philosophia', privacy: '隐私政策', terms: '条款', about: '关于', contact: '联系我们' }
};

const PHILS_DATA = [
  {
    id:'socrates', emoji:'🏛️', conceptIcon:'⚖️', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Socrates_Louvre.jpg/330px-Socrates_Louvre.jpg',
    name:{ ko:'소크라테스', en:'Socrates', ja:'ソクラテス', zh:'苏格拉底' },
    era:{ ko:'BC 470 – BC 399', en:'470 BC – 399 BC', ja:'紀元前470年', zh:'公元前470-399' },
    region:{ ko:'아테네', en:'Athens', ja:'アテネ', zh:'雅典' },
    quote:{ ko:'"너 자신을 알라."', en:'"Know thyself."', ja:'「汝自身を知れ」', zh:'“认识你自己。”' },
    tags:{ ko:['산파술','무지의 지','덕(德)'], en:['Socratic Method','Ignorance','Virtue'], ja:['問答法','無知の知'], zh:['助产术','无知之知'] },
    desc:{ ko:'철학의 아버지. 광장에서 시민들과 끊임없이 문답하며 진리를 탐구했습니다.', en:'The father of Western philosophy. He sought truth through constant questioning.', ja: '西洋哲学の父。', zh: '西方哲学之父。' },
    topics:{
      ko:['확실히 안다고 여기는 것은 무엇입니까?','정의(正義)란 진정 무엇입니까?','좋은 삶이란 어떤 삶입니까?','용기는 어디서 비롯됩니까?','아름다움의 본질은 무엇입니까?'],
      en:['What do you truly know for certain?','What is the nature of justice?','What constitutes a good life?','Where does courage come from?','What is the essence of beauty?']
    },
    system:`Strict Persona: You are the ancient Greek philosopher Socrates. Respond ONLY in the user's language.`
  },
  {
    id:'plato', emoji:'🌌', conceptIcon:'📐', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clementino_Inv305.jpg/330px-Plato_Pio-Clementino_Inv305.jpg',
    name:{ ko:'플라톤', en:'Plato', ja:'プラトン', zh:'柏拉图' },
    era:{ ko:'BC 427 – BC 347', en:'427 BC – 347 BC', ja:'紀元前427年', zh:'公元前427-347' },
    region:{ ko:'아테네', en:'Athens', ja:'アテネ', zh:'雅典' },
    quote:{ ko:'"동굴 밖의 참된 빛을 보라."', en:'"Behold the true light outside the cave."', ja: '「イデア論」', zh: '“理式世界。”' },
    tags:{ ko:['이데아','국가론','동굴비유'], en:['Ideals','Republic','Cave Allegory'], ja:['イデア'], zh:['理式'] },
    desc:{ ko:'이데아론을 통해 감각 너머의 진리를 탐구하고 철인 정치를 주장했습니다.', en:'He explored the realm of forms and argued for rule by philosopher-kings.', ja: 'イデア論を展開した。', zh: '柏拉图主义。' },
    topics:{
      ko:['이데아란 무엇입니까?','동굴의 우화가 말하는 진실은?','이상적인 국가는 어떤 모습입니까?','영혼은 정말 불멸합니까?','사랑(에로스)의 본질은?'],
      en:['What are the Forms?','What does the Cave Allegory reveal?','What is the ideal state?','Is the soul immortal?','What is the nature of Eros?']
    },
    system:`Strict Persona: You are Plato. Respond ONLY in the user's language.`
  },
  {
    id:'aristotle', emoji:'🌿', conceptIcon:'🔬', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/330px-Aristotle_Altemps_Inv8575.jpg',
    name:{ ko:'아리스토텔레스', en:'Aristotle', ja:'アリストテレス', zh:'亚里士多德' },
    era:{ ko:'BC 384 – BC 322', en:'384 BC – 322 BC', ja:'紀元前384年', zh:'公元前384-322' },
    region:{ ko:'스타게이라', en:'Stagira', ja:'スタゲイラ', zh:'斯塔基拉' },
    quote:{ ko:'"행복은 활동 속에 있다."', en:'"Happiness depends upon ourselves."', ja: '「中庸」', zh: '“幸福。”' },
    tags:{ ko:['중용','목적론','형이상학'], en:['Golden Mean','Teleology','Metaphysics'], ja:['中庸'], zh:['中庸'] },
    desc:{ ko:'현실 세계를 관찰하고 분류하여 서구 학문의 광범위한 체계를 세웠습니다.', en:'He established the framework for Western science and logic through observation.', ja: '西洋最大の哲学者。', zh: '亚里士多德主义。' },
    topics:{
      ko:['진정한 행복이란 무엇입니까?','중용의 덕은 어떻게 지킵니까?','우정의 가치는 어디에 있습니까?','인간은 왜 사회적 동물입니까?','존재의 목적은 무엇입니까?'],
      en:['What is Eudaimonia?','How do we practice the Golden Mean?','What is the value of friendship?','Why are humans social animals?','What is the purpose of existence?']
    },
    system:`Strict Persona: You are Aristotle. Respond ONLY in the user's language.`
  },
  {
    id:'confucius', emoji:'📜', conceptIcon:'🎎', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Confucius_Tang_Dynasty.jpg/330px-Confucius_Tang_Dynasty.jpg',
    name:{ ko:'공자', en:'Confucius', ja:'孔子', zh:'孔子' },
    era:{ ko:'BC 551 – BC 479', en:'551 BC – 479 BC', ja:'紀元前551年', zh:'公元前551-479' },
    region:{ ko:'노나라', en:'Lu State', ja:'魯', zh:'鲁国' },
    quote:{ ko:'"배우고 때때로 익히면 또한 기쁘지 아니한가."', en:'"Is it not pleasant to learn with constant perseverance?"', ja: '「学びて時にこれを習う」', zh: '“学而时习之。”' },
    tags:{ ko:['인(仁)','예(禮)','군자'], en:['Ren','Li','Junzi'], ja:['仁'], zh:['仁'] },
    desc:{ ko:'인과 예를 강조하여 유교의 기틀을 닦고 조화로운 사회를 꿈꿨습니다.', en:'The founder of Confucianism, focusing on benevolence and social ritual.', ja: '儒教の始祖。', zh: '儒家。' },
    topics:{
      ko:['인(仁)이란 무엇입니까?','군자의 자격은 무엇입니까?','효가 왜 덕의 근본입니까?','올바른 정치란 무엇입니까?','배움의 목적은 무엇입니까?'],
      en:['What is Ren?','What makes a Junzi?','Why is filial piety central?','What is good governance?','What is the goal of learning?']
    },
    system:`Strict Persona: You are Confucius. Respond ONLY in the user's language.`
  },
  {
    id:'laozi', emoji:'☯️', conceptIcon:'🌊', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Laozi_-_Project_Gutenberg_eText_15250.jpg/330px-Laozi_-_Project_Gutenberg_eText_15250.jpg',
    name:{ ko:'노자', en:'Laozi', ja:'老子', zh:'老子' },
    era:{ ko:'BC 6세기 추정', en:'6th Century BC', ja:'紀元前6世紀', zh:'公元前6世纪' },
    region:{ ko:'초나라', en:'Chu State', ja:'楚', zh:'楚国' },
    quote:{ ko:'"말할 수 있는 도는 영원한 도가 아니다."', en:'"The Tao that can be told is not the eternal Tao."', ja: '「道可道、非常道」', zh: '“道可道，非常道。”' },
    tags:{ ko:['무위자연','도(道)','상선약수'], en:['Wu Wei','Tao','Water Analogy'], ja:['無為自然'], zh:['无为而治'] },
    desc:{ ko:'인위적인 것을 버리고 자연의 순리에 따르는 삶을 강조했습니다.', en:'Founder of Taoism, emphasizing harmony with the natural flow of existence.', ja: '道教の始祖。', zh: '道家。' },
    topics:{
      ko:['무위자연이란 무엇입니까?','물이 왜 가장 강합니까?','진정한 자유는 어디에 있습니까?','욕심을 비우는 방법은?','가장 훌륭한 통치란?'],
      en:['What is Wu Wei?','Why is water the strongest?','Where is true freedom?','How to empty the self?','What is the best way to lead?']
    },
    system:`Strict Persona: You are Laozi. Respond ONLY in the user's language.`
  },
  {
    id:'buddha', emoji:'🪷', conceptIcon:'🕉️', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Gandhara_Buddha_%28tnm%29.jpeg/330px-Gandhara_Buddha_%28tnm%29.jpeg',
    name:{ ko:'고타마 붓다', en:'Gautama Buddha', ja:'釈迦', zh:'释迦牟尼' },
    era:{ ko:'BC 563 – BC 483', en:'563 BC – 483 BC', ja:'紀元前563年', zh:'公元前563-483' },
    region:{ ko:'카필라바스투', en:'Kapilavastu', ja:'カピラ', zh:'迦毗罗卫' },
    quote:{ ko:'"모든 것은 변한다. 집착에서 고통이 생긴다."', en:'"All things change, nothing is permanent."', ja: '「諸行無常」', zh: '“诸行无常。”' },
    tags:{ ko:['해탈','연기법','사성제'], en:['Nirvana','Origination','Four Truths'], ja:['悟り'], zh:['涅槃'] },
    desc:{ ko:'삶의 고통을 직시하고 깨달음을 통해 영원한 안식을 찾는 길을 제시했습니다.', en:'He taught the path to enlightenment and the cessation of suffering.', ja: '仏教の開祖。', zh: '佛教。' },
    topics:{
      ko:['고통의 원인은 무엇입니까?','어떻게 집착을 버립니까?','자아는 정말 실재합니까?','명상은 왜 필요합니까?','진정한 평화란 무엇입니까?'],
      en:['What is the cause of suffering?','How to let go of attachment?','Does the self exist?','Why meditate?','What is true peace?']
    },
    system:`Strict Persona: You are Buddha. Respond ONLY in the user's language.`
  },
  {
    id:'aquinas', emoji:'⛪', conceptIcon:'🕊️', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/St-thomas-aquinas.jpg/330px-St-thomas-aquinas.jpg',
    name:{ ko:'토마스 아퀴나스', en:'Thomas Aquinas', ja:'トマス・アクィナス', zh:'托马斯·阿奎那' },
    era:{ ko:'1225 – 1274', en:'1225 – 1274', ja:'1225年', zh:'1225年' },
    region:{ ko:'이탈리아', en:'Italy', ja:'イタリア', zh:'意大利' },
    quote:{ ko:'"은혜는 자연을 완성한다."', en:'"Grace does not destroy nature, but perfects it."', ja: '「스코라哲学」', zh: '“恩典完善自然。”' },
    tags:{ ko:['신학','신앙과 이성','자연법'], en:['Theology','Faith & Reason','Natural Law'], ja:['神学'], zh:['神学'] },
    desc:{ ko:'신앙과 이성을 조화시켜 중세 스콜라 철학의 정점을 이뤘습니다.', en:'He synthesized Aristotelian philosophy with Christian theology.', ja: '中世最大の神学者. ', zh: '经院哲学。' },
    topics:{
      ko:['신의 존재를 증명할 수 있습니까?','신앙과 이성은 어떻게 공존합니까?','무엇이 정의로운 전쟁입니까?','악은 왜 존재합니까?','자연법이란 무엇입니까?'],
      en:['Can God be proven?','How to balance faith and reason?','What is a just war?','Why does evil exist?','What is Natural Law?']
    },
    system:`Strict Persona: You are Thomas Aquinas. Respond ONLY in the user's language.`
  },
  {
    id:'descartes', emoji:'🧠', conceptIcon:'📐', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/330px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg',
    name:{ ko:'데카르트', en:'Descartes', ja:'デカルト', zh:'笛卡尔' },
    era:{ ko:'1596 – 1650', en:'1596 – 1650', ja:'1596年', zh:'1596年' },
    region:{ ko:'프랑스', en:'France', ja:'フランス', zh:'法国' },
    quote:{ ko:'"나는 생각한다, 고로 나는 존재한다."', en:'"I think, therefore I am."', ja: '「我思う、故に我在り」', zh: '“我思故我在。”' },
    tags:{ ko:['합리주의','코기토','회의론'], en:['Rationalism','Cogito','Skepticism'], ja:['合理主義'], zh:['唯理主义'] },
    desc:{ ko:'모든 것을 의심한 끝에 주체의 확실성을 발견하고 근대 철학을 열었습니다.', en:'The father of modern philosophy, who found certainty in the thinking self.', ja: '近代哲学の父。', zh: '解析几何之父。' },
    topics:{
      ko:['무엇을 확실히 믿을 수 있습니까?','정신과 육체는 어떻게 다릅니까?','꿈과 현실을 구분하는 방법은?','이성이 왜 가장 중요합니까?','신의 존재는 확실합니까?'],
      en:['What can be known for sure?','Mind-Body dualism?','Dream vs Reality?','Importance of Reason?','Existence of God?']
    },
    system:`Strict Persona: You are René Descartes. Respond ONLY in the user's language.`
  },
  {
    id:'hume', emoji:'🌊', conceptIcon:'👁️', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/David_Hume.jpg/330px-David_Hume.jpg',
    name:{ ko:'데이비드 흄', en:'David Hume', ja:'ヒューム', zh:'休谟' },
    era:{ ko:'1711 – 1776', en:'1711 – 1776', ja:'1711年', zh:'1711年' },
    region:{ ko:'스코틀랜드', en:'Scotland', ja:'スコットランド', zh:'苏格兰' },
    quote:{ ko:'"이성은 열정의 노예이다."', en:'"Reason is the slave of the passions."', ja: '「経験論」', zh: '“理性是情感的奴隶。”' },
    tags:{ ko:['경험론','인과론비판','회의론'], en:['Empiricism','Causality','Skepticism'], ja:['経験論'], zh:['经验主义'] },
    desc:{ ko:'감각적 경험만이 지식의 근원이며, 인과관계는 습관에 불과하다고 보았습니다.', en:'A key figure in empiricism who challenged the validity of causality.', ja: '近代の経験論。', zh: '不可知论。' },
    topics:{
      ko:['인과관계는 정말 존재합니까?','자아는 환상에 불과합니까?','도덕의 근거는 감정입니까?','기적을 믿을 수 있습니까?','경험만이 진실을 말합니까?'],
      en:['Is causality real?','Is the self an illusion?','Are morals based on feeling?','Can miracles happen?','Empiricism vs Dogma?']
    },
    system:`Strict Persona: You are David Hume. Respond ONLY in the user's language.`
  },
  {
    id:'kant', emoji:'⚖️', conceptIcon:'☀️', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Immanuel_Kant_3.jpg/330px-Immanuel_Kant_3.jpg',
    name:{ ko:'칸트', en:'Kant', ja:'カント', zh:'康德' },
    era:{ ko:'1724 – 1804', en:'1724 – 1804', ja:'1724년', zh:'1724年' },
    region:{ ko:'독일', en:'Germany', ja:'ドイツ', zh:'德国' },
    quote:{ ko:'"네 의지의 준칙이 보편적 법칙이 되게 하라."', en:'"Act only according to that maxim whereby you can at the same time will that it should become a universal law."', ja: '「定言命法」', zh: '“头上的星空和心中的道德律。”' },
    tags:{ ko:['정언명령','비판철학','의무론'], en:['Categorical Imperative','Criticism','Deontology'], ja:['定言命法'], zh:['定言令式'] },
    desc:{ ko:'이성의 한계를 비판적으로 검토하고 보편적 도덕 법칙을 세웠습니다.', en:'He established universal moral laws and explored the limits of reason.', ja: '批判哲学。', zh: '康德主义. ' },
    topics:{
      ko:['도덕 행동의 기준은?','거짓말은 항상 나쁜가요?','인간의 존엄성은 어디서?','실재를 알 수 있습니까?','자유의지란?'],
      en:['Absolute moral standard?','Is lying always wrong?','Human dignity?','Can we know reality?','Free Will?']
    },
    system:`Strict Persona: You are Immanuel Kant. Respond ONLY in the user's language.`
  },
  {
    id:'hegel', emoji:'🌀', conceptIcon:'🏛️', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Hegel_by_Schlesinger_1831.jpg/330px-Hegel_by_Schlesinger_1831.jpg',
    name:{ ko:'헤겔', en:'Hegel', ja:'ヘーゲル', zh:'黑格尔' },
    era:{ ko:'1770 – 1831', en:'1770 – 1831', ja:'1770년', zh:'1770年' },
    region:{ ko:'독일', en:'Germany', ja:'ドイツ', zh:'德国' },
    quote:{ ko:'"이성적인 것은 현실적이다."', en:'"The rational is real."', ja: '「弁証法」', zh: '“凡是合理的都是现实的。”' },
    tags:{ ko:['변증법','절대정신','역사'], en:['Dialectic','Absolute Spirit','History'], ja:['弁証法'], zh:['辩证法'] },
    desc:{ ko:'변증법을 통해 역사와 정신의 발전 과정을 체계적으로 설명했습니다.', en:'He explained the development of history and spirit through dialectics.', ja: '弁証法。', zh: '绝对唯心主义。' },
    topics:{
      ko:['역사는 진보합니까?','변증법이란 무엇입니까?','국가와 개인의 관계는?','모순이 왜 필요합니까?','절대정신이란?'],
      en:['Does history progress?','What is Dialectic?','State vs Individual?','Why is contradiction needed?','Absolute Spirit?']
    },
    system:`Strict Persona: You are G.W.F. Hegel. Respond ONLY in the user's language.`
  },
  {
    id:'schopenhauer', emoji:'🎭', conceptIcon:'🕯️', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Arthur_Schopenhauer_by_J_Sch%C3%A4fer%2C_1859b.jpg/330px-Arthur_Schopenhauer_by_J_Sch%C3%A4fer%2C_1859b.jpg',
    name:{ ko:'쇼펜하우어', en:'Schopenhauer', ja:'ショーペンハウアー', zh:'叔本华' },
    era:{ ko:'1788 – 1860', en:'1788 – 1860', ja:'1788년', zh:'1788年' },
    region:{ ko:'독일', en:'Germany', ja:'ドイツ', zh:'德国' },
    quote:{ ko:'"삶은 고통이다."', en:'"Life is a business whose profits do not cover the costs."', ja: '「意志と表象」', zh: '“人生如痛苦。”' },
    tags:{ ko:['의지','염세주의','예술'], en:['Will','Pessimism','Art'], ja:['意志'], zh:['唯意志主义'] },
    desc:{ ko:'세상의 본질을 맹목적인 의지로 보고, 예술과 금욕을 통한 구원을 말했습니다.', en:'He viewed the world as "Will" and found relief in art and asceticism.', ja: '悲観主義。', zh: '悲观主义。' },
    topics:{
      ko:['삶은 왜 고통입니까?','의지란 무엇입니까?','예술이 어떻게 구원합니까?','죽음은 두려운 것입니까?','진정한 고독이란?'],
      en:['Why is life suffering?','What is the Will?','Salvation through Art?','Is death scary?','True Solitude?']
    },
    system:`Strict Persona: You are Schopenhauer. Respond ONLY in the user's language.`
  },
  {
    id:'nietzsche', emoji:'⚡', conceptIcon:'🧗', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/330px-Nietzsche187a.jpg',
    name:{ ko:'니체', en:'Nietzsche', ja:'ニーチェ', zh:'尼采' },
    era:{ ko:'1844 – 1900', en:'1844 – 1900', ja:'1844년', zh:'1844년' },
    region:{ ko:'독일', en:'Germany', ja:'ドイツ', zh:'德国' },
    quote:{ ko:'"신은 죽었다."', en:'"God is dead."', ja: '「超人」', zh: '“上帝死了。”' },
    tags:{ ko:['초인','영원회귀','힘의 의지'], en:['Übermensch','Eternal Recurrence','Will to Power'], ja:['超人'], zh:['超人'] },
    desc:{ ko:'기존의 가치를 파괴하고 스스로 새로운 가치를 창조하는 초인을 주창했습니다.', en:'He challenged morality and urged humanity to become the Übermensch.', ja: '実存主義の先駆。', zh: '尼采主义. ' },
    topics:{
      ko:['초인이란 무엇입니까?','영원회귀가 사실이라면?','고통을 사랑하는 방법은?','도덕은 왜 노예적입니까?','창조적인 삶이란?'],
      en:['What is Übermensch?','Amor Fati?','Why destroy morality?','The Will to Power?','Eternal Recurrence?']
    },
    system:`Strict Persona: You are Friedrich Nietzsche. Respond ONLY in the user's language.`
  },
  {
    id:'heidegger', emoji:'🌲', conceptIcon:'🛖', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Martin_Heidegger_1960.jpg/330px-Martin_Heidegger_1960.jpg',
    name:{ ko:'하이데거', en:'Heidegger', ja:'하이데ッガー', zh:'海德格尔' },
    era:{ ko:'1889 – 1976', en:'1889 – 1976', ja:'1889년', zh:'1889年' },
    region:{ ko:'독일', en:'Germany', ja:'ドイツ', zh:'德国' },
    quote:{ ko:'"현존재는 죽음을 향한 존재이다."', en:'"Being-towards-death."', ja: '「存在と時間」', zh: '“向死而生。”' },
    tags:{ ko:['존재','죽음','기술비판'], en:['Being','Death','Technology'], ja:['存在'], zh:['存在主义'] },
    desc:{ ko:'존재의 본질을 탐구하고 현대 기술 문명이 인간을 어떻게 소외시키는지 경고했습니다.', en:'He explored the nature of "Being" and criticized modern technology.', ja: '存在論。', zh: '存在主义. ' },
    topics:{
      ko:['존재란 무엇입니까?','죽음이 왜 중요합니까?','현대 기술의 위험은?','본래적인 삶이란?','언어는 존재의 집입니까?'],
      en:['What is Being?','Importance of Death?','Danger of Technology?','Authentic Life?','Language as home of Being?']
    },
    system:`Strict Persona: You are Martin Heidegger. Respond ONLY in the user's language.`
  },
  {
    id:'marx', emoji:'✊', conceptIcon:'🛠️', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karl_Marx_001.jpg/330px-Karl_Marx_001.jpg',
    name:{ ko:'칼 마르크스', en:'Karl Marx', ja:'マルクス', zh:'马克思' },
    era:{ ko:'1818 – 1883', en:'1818 – 1883', ja:'1818년', zh:'1818년' },
    region:{ ko:'독일', en:'Germany', ja:'ドイツ', zh:'德国' },
    quote:{ ko:'"세상을 변혁하는 것이 중요하다."', en:'"Philosophers have only interpreted the world; the point is to change it."', ja: '「資本論」', zh: '“哲学家们只是解释世界，而问题在于改变世界。”' },
    tags:{ ko:['유물론','계급투쟁','혁명'], en:['Materialism','Class Struggle','Revolution'], ja:['共産主義'], zh:['共产主义'] },
    desc:{ ko:'역사를 계급 투쟁의 과정으로 보고 노동자 중심의 사회 변혁을 꿈꿨습니다.', en:'He analyzed history as class struggle and advocated for revolution.', ja: '科学的社会主義. ', zh: '马克思主义. ' },
    topics:{
      ko:['소외란 무엇입니까?','역사는 어디로 흐릅니까?','자본주의의 모순은?','혁명은 왜 일어납니까?','이상적인 사회는?'],
      en:['What is Alienation?','Where is history going?','Contradictions of Capitalism?','Why Revolution?','Ideal Society?']
    },
    system:`Strict Persona: You are Karl Marx. Respond ONLY in the user's language.`
  },
  {
    id:'sartre', emoji:'🚬', conceptIcon:'⛓️', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sartre_1967_crop.jpg/330px-Sartre_1967_crop.jpg',
    name:{ ko:'사르트르', en:'Sartre', ja:'サルトル', zh:'萨特' },
    era:{ ko:'1905 – 1980', en:'1905 – 1980', ja:'1905년', zh:'1905年' },
    region:{ ko:'프랑스', en:'France', ja:'フランス', zh:'法国' },
    quote:{ ko:'"실존은 본질에 앞선다."', en:'"Existence precedes essence."', ja: '「実存主義」', zh: '“存在先于本质。”' },
    tags:{ ko:['실존주의','자유','책임'], en:['Existentialism','Freedom','Responsibility'], ja:['自由'], zh:['自由'] },
    desc:{ ko:'인간은 자유로운 존재로 태어나 스스로를 만들어가야 한다고 말했습니다.', en:'He emphasized individual freedom and the necessity of choosing one\'s own life.', ja: '実存主義の代表. ', zh: '存在主义. ' },
    topics:{
      ko:['자유는 저주입니까?','실존이 본질에 앞선다는 것은?','타인이 왜 지옥입니까?','앙가주망이란?','나쁜 믿음이란?'],
      en:['Is freedom a curse?','Existence vs Essence?','Why are others Hell?','Engagement?','Bad Faith?']
    },
    system:`Strict Persona: You are Jean-Paul Sartre. Respond ONLY in the user's language.`
  },
  {
    id:'wittgenstein', emoji:'🔷', conceptIcon:'🧩', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ludwig_Wittgenstein.jpg/330px-Ludwig_Wittgenstein.jpg',
    name:{ ko:'비트겐슈타인', en:'Wittgenstein', ja:'ヴィトゲンシュタイン', zh:'维特根斯坦' },
    era:{ ko:'1889 – 1951', en:'1889 – 1951', ja:'1889년', zh:'1889年' },
    region:{ ko:'오스트리아', en:'Austria', ja:'オーストリア', zh:'奥地利' },
    quote:{ ko:'"말할 수 없는 것은 침묵해야 한다."', en:'"Whereof one cannot speak, thereof one must be silent."', ja: '「言語ゲーム」', zh: '“对于不可言说之物，必须保持沉默。”' },
    tags:{ ko:['언어게임','논리','침묵'], en:['Language Game','Logic','Silence'], ja:['分析哲学'], zh:['语言哲学'] },
    desc:{ ko:'언어가 세계를 어떻게 표현하는지 분석하고 철학적 문제를 언어의 혼란으로 보았습니다.', en:'He analyzed how language works and explored its logical limits.', ja: '分析哲学の巨匠. ', zh: '逻辑实证主义. ' },
    topics:{
      ko:['언어 게임이란?','침묵해야 할 것은?','의미는 사용에 있습니까?','언어의 한계는?','철학은 왜 병입니까?'],
      en:['What is a Language Game?','When to remain silent?','Meaning as usage?','Limits of Language?','Philosophy as a therapy?']
    },
    system:`Strict Persona: You are Ludwig Wittgenstein. Respond ONLY in the user's language.`
  },
  {
    id:'popper', emoji:'🔭', conceptIcon:'📉', portrait:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Karl_Popper.jpg/330px-Karl_Popper.jpg',
    name:{ ko:'칼 포퍼', en:'Popper', ja:'ポパー', zh:'波普尔' },
    era:{ ko:'1902 – 1994', en:'1902 – 1994', ja:'1902년', zh:'1902년' },
    region:{ ko:'오스트리아', en:'Austria', ja:'オーストリア', zh:'奥地利' },
    quote:{ ko:'"과학은 반증 가능성이다."', en:'"Insofar as a scientific statement speaks about reality, it must be falsifiable."', ja: '「反証可能性」', zh: '“科学就是证伪。”' },
    tags:{ ko:['반증주의','열린사회','비판'], en:['Falsifiability','Open Society','Criticism'], ja:['社会哲学'], zh:['开放社会'] },
    desc:{ ko:'진정한 과학은 반증 가능해야 하며, 전체주의를 비판하고 열린 사회를 옹호했습니다.', en:'He defined science through falsifiability and defended the Open Society.', ja: '批判的合理主義. ', zh: '批判理性主义. ' },
    topics:{
      ko:['반증 가능성이란?','열린 사회의 적은?','역사에 법칙이 있습니까?','비판적 합리주의란?','민주주의의 가치는?'],
      en:['What is Falsifiability?','Enemies of Open Society?','Laws of History?','Critical Rationalism?','Value of Democracy?']
    },
    system:`Strict Persona: You are Karl Popper. Respond ONLY in the user's language.`
  }
];

let currentLang = 'ko';
let currentTheme = 'dark';
let currentPhil = null;
let currentTopic = '';
let turnCount = 0;
let chatHistory = [];

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

function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  PHILS_DATA.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'phil-card';
    card.style.animationDelay = `${i * 0.08}s`;
    card.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%), url('${p.portrait}')`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center top';
    card.innerHTML = `
      <div class="phil-card-body">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div class="phil-card-era">${p.era[currentLang]}</div>
          <div style="font-size:1.8rem; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">${p.conceptIcon}</div>
        </div>
        <div class="phil-card-name">${p.name[currentLang]}</div>
        <div style="font-size: 0.8rem; color: var(--gold3); font-style: italic; margin-top: 0.5rem; line-height: 1.4; text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">${p.quote[currentLang]}</div>
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
      <p style="max-width: 700px; margin: 2rem auto; line-height: 1.8; color: var(--cream2); font-style: italic">${p.desc[currentLang]} ${p.conceptIcon}</p>
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
  document.getElementById('chatTopicPill').textContent = topic || t('freeChat');
  document.getElementById('chatMessages').innerHTML = '';
  
  showScreen('screen-chat');
  pushWelcome();
  setTimeout(() => document.getElementById('chatInput').focus(), 400);
}

function pushWelcome() {
  const welcomes = {
    socrates: { ko: '반갑소. 오늘 그대는 어떤 확신을 가지고 이곳에 왔소?', en: 'Greetings. What certainty do you bring today?' },
    nietzsche: { ko: '자네가 왔군. 진실을 직면할 용기가 있는가?', en: 'So you have come. Do you have the courage for the truth?' }
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

function autoResize(el) {
  el.style.height='auto';
  el.style.height=Math.min(el.scrollHeight,150)+'px';
}

function handleKey(e) {
  if(e.key==='Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
}

async function callAPI(msg) {
  return new Promise(resolve => setTimeout(() => resolve("Coming soon: Real wisdom integration."), 1000));
}

function showLegal(type) {
  const modal = document.getElementById('legalModal');
  modal.classList.add('show');
  document.getElementById('legalText').innerHTML = `<h2>Legal Notice</h2><p>Philosophia provides AI dialogues for educational purposes.</p>`;
}
function closeLegal() { document.getElementById('legalModal').classList.remove('show'); }

document.addEventListener('DOMContentLoaded', () => {
  currentLang = localStorage.getItem('phil_lang') || (navigator.language.startsWith('ko') ? 'ko' : 'en');
  currentTheme = localStorage.getItem('phil_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
  updateUI();
  buildGallery();
});
