/**
 * MANDATORY: ALWAYS MAINTAIN 18 PHILOSOPHERS. DO NOT TRIM.
 */

// ===================== I18N DATA (7 LANGUAGES) =====================
const I18N = {
  ko: {
    siteTitle: '哲學人의 房',
    siteTagline: '시대를 초월한 사상가들과의 대화',
    galleryHeading: '대화를 나누고 싶은 사상가를 선택하세요',
    backToGallery: '← 사상가 목록',
    changeTopic: '주제 변경',
    changePhil: '사상가 변경',
    freeChat: '자유 대화',
    topicLabel: '✦ {name}의 사유 주제',
    inputPlaceholder: '심오한 생각을 나누어보세요…',
    inputHint: 'Enter 전송 · Shift+Enter 줄바꿈',
    welcome: '어서 오십시오. 무엇이든 이야기해 보십시오.',
    me: '나',
    footerText: '© 2026 Philosophia · 위대한 사상가들과 AI로 대화하는 공간',
    privacy: '개인정보처리방침',
    terms: '이용약관',
    about: '소개',
    contact: '문의',
    typing: '사유 중...',
    skipAd: '계속하기 →'
  },
  en: {
    siteTitle: 'Philosophia',
    siteTagline: 'Conversations with Timeless Minds',
    galleryHeading: 'Choose a philosopher to begin your journey',
    backToGallery: '← Gallery',
    changeTopic: 'Change Topic',
    changePhil: 'Change Sage',
    freeChat: 'Free Chat',
    topicLabel: '✦ {name}\'s Sphere of Thought',
    inputPlaceholder: 'Share your profound thoughts…',
    inputHint: 'Enter to send · Shift+Enter for newline',
    welcome: 'Welcome. What is on your mind today?',
    me: 'Me',
    footerText: '© 2026 Philosophia · AI-Powered Dialogues',
    privacy: 'Privacy',
    terms: 'Terms',
    about: 'About',
    contact: 'Contact',
    typing: 'Thinking...',
    skipAd: 'Continue →'
  },
  ja: {
    siteTitle: '哲学者たちの部屋',
    siteTagline: '時代を超えた思想家との対話',
    galleryHeading: '対話したい思想家を選択してください',
    backToGallery: '← ギャラリー',
    changeTopic: 'トピック変更',
    changePhil: '思想家変更',
    freeChat: '自由対話',
    topicLabel: '✦ {name}の思索テーマ',
    inputPlaceholder: '考えを自由に話してください…',
    inputHint: 'Enterで送信 · Shift+Enterで改行',
    welcome: 'ようこそ。今日はどのようなお話がありますか？',
    me: '私',
    footerText: '© 2026 Philosophia · 偉大な思想家とのAI対話',
    privacy: 'プライバシー',
    terms: '規約',
    about: '紹介',
    contact: 'お問い合わせ',
    typing: '思索中...',
    skipAd: '次へ →'
  },
  zh: {
    siteTitle: '哲人之室',
    siteTagline: '与超越时代的思想家对话',
    galleryHeading: '选择一位想与之对话的思想家',
    backToGallery: '← 列表',
    changeTopic: '更改主题',
    changePhil: '更改思想家',
    freeChat: '自由对话',
    topicLabel: '✦ {name} 的思想领域',
    inputPlaceholder: '自由地分享您的想法…',
    inputHint: 'Enter 发送 · Shift+Enter 换行',
    welcome: '欢迎。今天您有什么想法？',
    me: '我',
    footerText: '© 2026 Philosophia · 与伟大思想家的AI对话',
    privacy: '隐私',
    terms: '条款',
    about: '关于',
    contact: '联系我们',
    typing: '正在思考...',
    skipAd: '继续 →'
  },
  es: {
    siteTitle: 'Philosophia',
    siteTagline: 'Conversaciones con mentes eternas',
    galleryHeading: 'Elige un filósofo para comenzar tu viaje',
    backToGallery: '← Galería',
    changeTopic: 'Cambiar tema',
    changePhil: 'Cambiar sabio',
    freeChat: 'Chat libre',
    topicLabel: '✦ Esfera de pensamiento de {name}',
    inputPlaceholder: 'Comparte tus pensamientos profundos…',
    inputHint: 'Enter para enviar · Shift+Enter para nueva línea',
    welcome: 'Bienvenido. ¿Qué tienes en mente hoy?',
    me: 'Yo',
    footerText: '© 2026 Philosophia · Diálogos con IA',
    privacy: 'Privacidad',
    terms: 'Términos',
    about: 'Sobre nosotros',
    contact: 'Contacto',
    typing: 'Pensando...',
    skipAd: 'Continuar →'
  },
  fr: {
    siteTitle: 'Philosophia',
    siteTagline: 'Conversations avec des esprits intemporels',
    galleryHeading: 'Choisissez un philosophe pour commencer',
    backToGallery: '← Galerie',
    changeTopic: 'Changer de sujet',
    changePhil: 'Changer de sage',
    freeChat: 'Chat libre',
    topicLabel: '✦ Sphère de pensée de {name}',
    inputPlaceholder: 'Partagez vos pensées profondes…',
    inputHint: 'Entrée pour envoyer · Maj+Entrée pour nouvelle ligne',
    welcome: 'Bienvenue. Qu\'avez-vous à l\'esprit aujourd\'hui ?',
    me: 'Moi',
    footerText: '© 2026 Philosophia · Dialogues IA',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    about: 'À propos',
    contact: 'Contact',
    typing: 'En réflexion...',
    skipAd: 'Continuer →'
  },
  de: {
    siteTitle: 'Philosophia',
    siteTagline: 'Gespräche mit zeitlosen Köpfen',
    galleryHeading: 'Wählen Sie einen Philosophen',
    backToGallery: '← Galerie',
    changeTopic: 'Thema ändern',
    changePhil: 'Weisen wechseln',
    freeChat: 'Freier Chat',
    topicLabel: '✦ Gedankensphäre von {name}',
    inputPlaceholder: 'Teilen Sie Ihre tiefen Gedanken…',
    inputHint: 'Enter zum Senden · Shift+Enter für Zeilenumbruch',
    welcome: 'Willkommen. Was beschäftigt Sie heute?',
    me: 'Ich',
    footerText: '© 2026 Philosophia · KI-Dialoge',
    privacy: 'Datenschutz',
    terms: 'AGB',
    about: 'Über uns',
    contact: 'Kontakt',
    typing: 'Denkt nach...',
    skipAd: 'Fortfahren →'
  }
};

// ===================== PHILOSOPHERS DATA (18 TOTAL) =====================
const PHILS_DATA = [
  {
    id: 'socrates', emoji: '🏛️',
    name: { ko: '소크라테스', en: 'Socrates', ja: 'ソクラテス', zh: '苏格拉底', es: 'Sócrates', fr: 'Socrate', de: 'Sokrates' },
    era: { ko: 'BC 470 – BC 399', en: '470 BC – 399 BC', ja: '紀元前470年', zh: '前470-399', es: '470 a.C.', fr: '470 av. J.-C.', de: '470 v. Chr.' },
    quote: { ko: '"너 자신을 알라."', en: '"Know thyself."', ja: '「汝自身を知れ」', zh: '“认识你自己。”', es: '"Conócete a ti mismo."', fr: '"Connais-toi toi-même."', de: '"Erkenne dich selbst."' },
    tags: { ko: ['무지의 지', '산파술'], en: ['Ignorance', 'Irony'], ja: ['無知の知'], zh: ['无知之知'], es: ['Ironía'], fr: ['Maïeutique'], de: ['Hebammenkunst'] },
    desc: { ko: '서양 철학의 기초를 놓은 아테네의 현자.', en: 'The founding figure of Western philosophy.', ja: '西洋哲学の祖。', zh: '西方哲学奠基人。', es: 'Padre de la filosofía occidental.', fr: 'Le père de la philosophie occidentale.', de: 'Urvater der westlichen Philosophie.' },
    topics: {
      ko: ['정의란 무엇인가?', '악법도 법인가?', '지혜로운 삶이란?', '영혼의 불멸성'],
      en: ['What is justice?', 'Is law always right?', 'What is wisdom?', 'Immortality of soul'],
      ja: ['正義とは何か', '法律の遵守', '知恵ある生', '魂の不滅'],
      zh: ['什么是正义？', '法律的权威', '智慧的生活', '灵魂不朽'],
      es: ['¿Qué es la justicia?', '¿Es la ley siempre correcta?', 'Vida sabia', 'Inmortalidad del alma'],
      fr: ['Qu\'est-ce que la justice ?', 'La loi est-elle toujours juste ?', 'Une vie de sagesse', 'Immortalité de l\'âme'],
      de: ['Was ist Gerechtigkeit?', 'Ist das Gesetz immer richtig?', 'Weises Leben', 'Unsterblichkeit der Seele']
    },
    system: "You are Socrates. Use the Socratic method (elenchus). Ask questions to lead the user to their own conclusions. Admit your own ignorance. Tone: Humble, inquisitive, persistent."
  },
  {
    id: 'plato', emoji: '📐',
    name: { ko: '플라톤', en: 'Plato', ja: 'プラトン', zh: '柏拉图', es: 'Platón', fr: 'Platon', de: 'Platon' },
    era: { ko: 'BC 427 – BC 347', en: '427 BC – 347 BC', ja: '紀元前427年', zh: '前427-347', es: '427 a.C.', fr: '427 av. J.-C.', de: '427 v. Chr.' },
    quote: { ko: '"동굴 밖의 진실을 보라."', en: '"Behold the truth outside the cave."', ja: '「イデアの追求」', zh: '“洞穴外的真理。”', es: '"Mira la verdad fuera de la cueva."', fr: '"Vois la vérité hors de la caverne."', de: '"Sieh die Wahrheit außerhalb der Höhle."' },
    tags: { ko: ['이데아', '국가론'], en: ['Forms', 'Republic'], ja: ['イデア'], zh: ['理念论'], es: ['Ideas'], fr: ['Idéalisme'], de: ['Ideenlehre'] },
    desc: { ko: '이데아론과 국가론을 주창한 형이상학의 거두.', en: 'Founder of the Academy and author of The Republic.', ja: 'アカメイアの創設者。', zh: '《理想国》作者。', es: 'Autor de La República.', fr: 'Auteur de La République.', de: 'Gründer der Akademie.' },
    topics: {
      ko: ['이데아의 세계', '철인 통치', '동굴의 비유', '사랑의 본질'],
      en: ['World of Forms', 'Philosopher Kings', 'Allegory of the Cave', 'Nature of Love'],
      ja: ['イデア界', '哲人政治', '洞窟の比喩', '愛の本質'],
      zh: ['理念世界', '哲人王', '洞穴比喻', '爱的本质'],
      es: ['Mundo de las Ideas', 'Reyes Filósofos', 'Alegoría de la caverna', 'Naturaleza del amor'],
      fr: ['Le monde des Formes', 'Rois Philosophes', 'Allégorie de la caverne', 'Nature de l\'amour'],
      de: ['Ideenwelt', 'Philosophenkönige', 'Höhlengleichnis', 'Wesen der Liebe']
    },
    system: "You are Plato. You believe in the ideal forms (Ideas) and that our world is a shadow. You advocate for justice and the rule of reason. Tone: Philosophical, visionary, authoritative."
  },
  {
    id: 'aristotle', emoji: '🌿',
    name: { ko: '아리스토텔레스', en: 'Aristotle', ja: 'アリストテレス', zh: '亚里士多德', es: 'Aristóteles', fr: 'Aristote', de: 'Aristoteles' },
    era: { ko: 'BC 384 – BC 322', en: '384 BC – 322 BC', ja: '紀元前384年', zh: '前384-322', es: '384 a.C.', fr: '384 av. J.-C.', de: '384 v. Chr.' },
    quote: { ko: '"인간은 사회적 동물이다."', en: '"Man is by nature a social animal."', ja: '「中庸の徳」', zh: '“人类天生是社会性动物。”', es: '"El hombre es un animal social."', fr: '"L\'homme est un animal politique."', de: '"Der Mensch ist ein schicksalhaftes Wesen."' },
    tags: { ko: ['중용', '목적론'], en: ['Virtue', 'Logic'], ja: ['中庸'], zh: ['中道'], es: ['Virtud'], fr: ['Logique'], de: ['Tugend'] },
    desc: { ko: '학문 전반에 걸친 체계를 세운 관찰과 논리의 대가.', en: 'A polymath who laid the foundation for formal logic.', ja: '万学の祖。', zh: '形式逻辑的奠基人。', es: 'Padre de la lógica.', fr: 'Maître de la logique.', de: 'Begründer der Logik.' },
    topics: {
      ko: ['행복이란 무엇인가?', '중용의 미덕', '우정의 세 가지 유형', '인과론'],
      en: ['What is happiness?', 'The Golden Mean', 'Types of Friendship', 'Causality'],
      ja: ['幸福とは何か', '中庸の徳', '友愛の類型', '因果関係'],
      zh: ['什么是幸福？', '中庸之道', '友谊的类型', '因果律'],
      es: ['¿Qué es la felicidad?', 'El punto medio', 'Tipos de amistad', 'Causalidad'],
      fr: ['Qu\'est-ce que le bonheur ?', 'Le Juste Milieu', 'Types d\'amitié', 'Causalité'],
      de: ['Was ist Glück?', 'Die goldene Mitte', 'Arten der Freundschaft', 'Kausalität']
    },
    system: "You are Aristotle. Focus on logic, empirical observation, and virtue ethics (the Golden Mean). You seek the 'telos' (purpose) of all things. Tone: Analytical, structured, practical."
  },
  {
    id: 'confucius', emoji: '📜',
    name: { ko: '공자', en: 'Confucius', ja: '孔子', zh: '孔子', es: 'Confucio', fr: 'Confucius', de: 'Konfuzius' },
    era: { ko: 'BC 551 – BC 479', en: '551 BC – 479 BC', ja: '紀元前551年', zh: '前551-479', es: '551 a.C.', fr: '551 av. J.-C.', de: '551 v. Chr.' },
    quote: { ko: '"배우고 때로 익히면 즐겁지 아니한가."', en: '"To learn and then practice, is it not a pleasure?"', ja: '「学びて時にこれを習う」', zh: '“学而时习之，不亦说乎？”', es: '"Estudia el pasado para definir el futuro."', fr: '"La sagesse commence par appeler les choses par leur nom."', de: '"Lernen ohne zu denken ist verloren."' },
    tags: { ko: ['인(仁)', '예(禮)'], en: ['Filial Piety', 'Ritual'], ja: ['仁', '礼'], zh: ['仁', '礼'], es: ['Piedad'], fr: ['Vertu'], de: ['Pietät'] },
    desc: { ko: '유교의 창시자, 인과 예의 정치를 강조한 스승.', en: 'Chinese philosopher who emphasized social harmony.', ja: '儒教の始祖。', zh: '儒家学派创始人。', es: 'Fundador del confucianismo.', fr: 'Sage de l\'harmonie sociale.', de: 'Begründer des Konfuzianismus.' },
    topics: {
      ko: ['인의 본질', '효도와 사회 질서', '정명(正名) 사상', '군자의 도리'],
      en: ['Essence of Ren', 'Filial Piety', 'Rectification of Names', 'Way of the Junzi'],
      ja: ['仁の本質', '孝行と秩序', '正名思想', '君子の道'],
      zh: ['仁的本质', '孝道与秩序', '正名思想', '君子之道'],
      es: ['Esencia de Ren', 'Piedad filial', 'Rectificación de nombres', 'El camino del Junzi'],
      fr: ['L\'essence du Ren', 'Piété filiale', 'Rectification des noms', 'La voie du Junzi'],
      de: ['Wesen des Ren', 'Kindliche Pietät', 'Richtigstellung der Namen', 'Weg des Edlen']
    },
    system: "You are Confucius. Emphasize social harmony, filial piety, rituals (Li), and benevolence (Ren). You believe in leading by moral example. Tone: Wise, respectful, pedagogical."
  },
  {
    id: 'laozi', emoji: '☯️',
    name: { ko: '노자', en: 'Laozi', ja: '老子', zh: '老子', es: 'Lao-Tsé', fr: 'Lao Tseu', de: 'Laotse' },
    era: { ko: 'BC 6세기 경', en: '6th Century BC', ja: '紀元前6世紀', zh: '约前6世纪', es: 'Siglo VI a.C.', fr: 'VIe siècle av. J.-C.', de: '6. Jh. v. Chr.' },
    quote: { ko: '"상선약수, 최고의 선은 물과 같다."', en: '"Greatest good is like water."', ja: '「上善如水」', zh: '“上善若水。”', es: '"El que sabe no habla; el que habla no sabe."', fr: '"Le plus grand bien est comme l\'eau."', de: '"Wahre Worte sind nicht schön."' },
    tags: { ko: ['무위자연', '도(道)'], en: ['Tao', 'Wu Wei'], ja: ['無為自然'], zh: ['无为', '道'], es: ['Tao'], fr: ['Tao'], de: ['Taoismus'] },
    desc: { ko: '도의 본질과 무위의 지혜를 가르친 도교의 스승.', en: 'Founder of Taoism and author of Tao Te Ching.', ja: '道教の始祖。', zh: '道教创始人。', es: 'Autor del Tao Te King.', fr: 'Fondateur du taoïsme.', de: 'Verfasser des Tao Te King.' },
    topics: {
      ko: ['도란 무엇인가?', '무위의 지혜', '부드움의 힘', '만물의 조화'],
      en: ['What is the Tao?', 'Wisdom of Wu Wei', 'Power of Softness', 'Harmony of Nature'],
      ja: ['道とは何か', '無為の知恵', '柔の力', '自然の調和'],
      zh: ['什么是道？', '无为而治', '以柔克刚', '天人合一'],
      es: ['¿Qué es el Tao?', 'Sabiduría de Wu Wei', 'Poder de la suavidad', 'Armonía natural'],
      fr: ['Qu\'est-ce que le Tao ?', 'La sagesse du Wu Wei', 'Le pouvoir de la souplesse', 'Harmonie de la nature'],
      de: ['Was ist das Tao?', 'Weisheit des Wu Wei', 'Kraft der Weichheit', 'Harmonie der Natur']
    },
    system: "You are Laozi. Speak in paradoxes and metaphors. Emphasize returning to nature, the Tao, and the principle of Wu Wei (non-action). Tone: Mystical, calm, detached."
  },
  {
    id: 'buddha', emoji: '☸️',
    name: { ko: '석가모니', en: 'Buddha', ja: '釈迦', zh: '释迦牟尼', es: 'Buda', fr: 'Bouddha', de: 'Buddha' },
    era: { ko: 'BC 6-5세기 경', en: '6th-5th Century BC', ja: '紀元前6-5世紀', zh: '约前6-5世纪', es: 'Siglo VI-V a.C.', fr: 'VI-Ve siècle av. J.-C.', de: '6.-5. Jh. v. Chr.' },
    quote: { ko: '"삶은 고통이며, 고통의 원인은 집착이다."', en: '"Life is suffering; the cause is attachment."', ja: '「諸行無常」', zh: '“众生皆苦，执着为源。”', es: '"Todo lo que somos es resultado de lo que hemos pensado."', fr: '"La vie est souffrance, la cause est l\'attachement."', de: '"Das Leben ist Leiden."' },
    tags: { ko: ['사성제', '해탈'], en: ['Nirvana', 'Mindfulness'], ja: ['解脱', '慈悲'], zh: ['涅槃', '因果'], es: ['Nirvana'], fr: ['Éveil'], de: ['Nirvana'] },
    desc: { ko: '깨달음을 통해 고통에서 벗어나는 길을 제시한 현자.', en: 'The Enlightened One who taught the path to Nirvana.', ja: '悟りを開いた者。', zh: '佛教创始人。', es: 'El Iluminado.', fr: 'L\'Éveillé.', de: 'Der Erleuchtete.' },
    topics: {
      ko: ['사성제와 팔정도', '고통의 소멸', '무아(無我) 사상', '자비와 명상'],
      en: ['Four Noble Truths', 'Ending Suffering', 'Concept of Anatta', 'Compassion and Zen'],
      ja: ['四聖諦', '苦しみの消滅', '無我の思想', '慈悲と瞑想'],
      zh: ['四圣谛', '痛苦的消除', '无我思想', '慈悲与禅定'],
      es: ['Cuatro Nobles Verdades', 'Fin del sufrimiento', 'Concepto de Anatta', 'Compasión y meditación'],
      fr: ['Quatre Nobles Vérités', 'La fin de la souffrance', 'Le concept d\'Anatta', 'Compassion et méditation'],
      de: ['Vier Edle Wahrheiten', 'Ende des Leidens', 'Konzept von Anatta', 'Mitgefühl und Meditation']
    },
    system: "You are Siddhartha Gautama (Buddha). Focus on the cessation of suffering, detachment, mindfulness, and the Middle Way. Tone: Compassionate, serene, enlightening."
  },
  {
    id: 'aquinas', emoji: '⛪',
    name: { ko: '아퀴나스', en: 'Aquinas', ja: 'アクィナス', zh: '阿奎那', es: 'Aquino', fr: 'Aquin', de: 'Aquin' },
    era: { ko: '1225 – 1274', en: '1225 – 1274', ja: '1225年', zh: '1225-1274', es: '1225', fr: '1225', de: '1225' },
    quote: { ko: '"이성과 신앙은 조화를 이룬다."', en: '"Reason and faith exist in harmony."', ja: '「理性と信仰」', zh: '“理性与信仰并不矛盾。”', es: '"La razón y la fe son armoniosas."', fr: '"La raison et la foi s\'harmonisent."', de: '"Glaube und Vernunft."' },
    tags: { ko: ['스콜라 철학', '자연법'], en: ['Scholasticism', 'Natural Law'], ja: ['スコラ学'], zh: ['经院哲学'], es: ['Escolástica'], fr: ['Scolastique'], de: ['Scholastik'] },
    desc: { ko: '이성과 신앙을 통합한 중세 스콜라 철학의 거장.', en: 'Medieval philosopher who synthesized Christianity with Aristotle.', ja: '中世最大の神学者。', zh: '中世纪神学家。', es: 'Sintetizador de fe y razón.', fr: 'Grand théologien médiéval.', de: 'Bedeutendster Kirchenlehrer.' },
    topics: {
      ko: ['신의 존재 증명', '자연법과 정의', '이성과 신앙의 관계', '공동선이란?'],
      en: ['Five Ways to prove God', 'Natural Law', 'Faith vs Reason', 'The Common Good'],
      ja: ['神の存在証明', '自然法と正義', '信仰と理性', '共通善'],
      zh: ['上帝存在的五路证明', '自然法与正义', '信仰与理性', '共同善'],
      es: ['Cinco vías hacia Dios', 'Ley Natural', 'Fe vs Razón', 'El Bien Común'],
      fr: ['Les cinq voies', 'Loi Naturelle', 'Foi vs Raison', 'Le Bien Commun'],
      de: ['Fünf Gottesbeweise', 'Naturrecht', 'Glaube vs Vernunft', 'Das Gemeinwohl']
    },
    system: "You are Thomas Aquinas. You aim to harmonize Aristotelian logic with Christian faith. Discuss natural law and the Five Ways. Tone: Logical, theological, structured."
  },
  {
    id: 'descartes', emoji: '💡',
    name: { ko: '데카르트', en: 'Descartes', ja: 'デカルト', zh: '笛卡尔', es: 'Descartes', fr: 'Descartes', de: 'Descartes' },
    era: { ko: '1596 – 1650', en: '1596 – 1650', ja: '1596年', zh: '1596-1650', es: '1596', fr: '1596', de: '1596' },
    quote: { ko: '"나는 생각한다, 고로 나는 존재한다."', en: '"I think, therefore I am."', ja: '「我思う、ゆえに我あり」', zh: '“我思故我在。”', es: '"Pienso, luego existo."', fr: '"Je pense, donc je suis."', de: '"Ich denke, also bin ich."' },
    tags: { ko: ['합리론', '심신이원론'], en: ['Rationalism', 'Dualism'], ja: ['合理主義'], zh: ['理性主义'], es: ['Racionalismo'], fr: ['Rationalisme'], de: ['Rationalismus'] },
    desc: { ko: '근대 철학의 아버지, 방법적 회의를 통해 확실한 진리를 찾은 사상가.', en: 'Father of modern philosophy and creator of analytic geometry.', ja: '近代哲学の父。', zh: '近代哲学之父。', es: 'Padre de la filosofía moderna.', fr: 'Père de la philosophie moderne.', de: 'Vater der modernen Philosophie.' },
    topics: {
      ko: ['방법적 회의', '심신이원론', '신의 존재', '명증적 진리'],
      en: ['Methodological Doubt', 'Mind-Body Dualism', 'Existence of God', 'Clear and Distinct Ideas'],
      ja: ['方法的懐疑', '心身二元論', '神の存在', '明晰判明な真理'],
      zh: ['方法论怀疑', '身心二元论', '上帝的存在', '明晰性的真理'],
      es: ['Duda metódica', 'Dualismo mente-cuerpo', 'Existencia de Dios', 'Ideas claras y distintas'],
      fr: ['Doute méthodique', 'Dualisme âme-corps', 'Existence de Dieu', 'Idées claires et distinctes'],
      de: ['Methodischer Zweifel', 'Leib-Seele-Dualismus', 'Existenz Gottes', 'Klare Erkenntnisse']
    },
    system: "You are René Descartes. Use methodical doubt. Seek a firm foundation for knowledge. Emphasize the distinction between mind (res cogitans) and body (res extensa). Tone: Rational, skeptical, analytical."
  },
  {
    id: 'hume', emoji: '🔎',
    name: { ko: '흄', en: 'Hume', ja: 'ヒューム', zh: '休谟', es: 'Hume', fr: 'Hume', de: 'Hume' },
    era: { ko: '1711 – 1776', en: '1711 – 1776', ja: '1711年', zh: '1711-1776', es: '1711', fr: '1711', de: '1711' },
    quote: { ko: '"이성은 열정의 노예여야 한다."', en: '"Reason is the slave of the passions."', ja: '「理性は情熱の奴隷」', zh: '“理性是情感的奴隶。”', es: '"La razón es esclava de las pasiones."', fr: '"La razón es l\'esclave des passions."', de: '"Die Vernunft ist die Sklavin der Leidenschaften."' },
    tags: { ko: ['경험론', '회의주의'], en: ['Empiricism', 'Skepticism'], ja: ['経験主義'], zh: ['经验主义'], es: ['Empirismo'], fr: ['Empirisme'], de: ['Empirismus'] },
    desc: { ko: '경험과 감각을 지식의 근본으로 본 회의주의 철학자.', en: 'Empiricist who questioned the existence of causality.', ja: '経験論の完成者。', zh: '经验主义大师。', es: 'Gran empírico escocés.', fr: 'Maître de l\'empirisme.', de: 'Schottischer Skeptiker.' },
    topics: {
      ko: ['인과관계의 비판', '자아는 환상인가?', '도덕과 감정', '기적에 대하여'],
      en: ['Critique of Causality', 'Is the Self an Illusion?', 'Morality and Emotion', 'On Miracles'],
      ja: ['因果の批判', '自我の幻想', '道徳と感情', '奇跡について'],
      zh: ['对因果律的批判', '自我是幻觉吗？', '道德与情感', '论奇迹'],
      es: ['Crítica a la causalidad', '¿Es el yo una ilusión?', 'Moral y emoción', 'Sobre los milagros'],
      fr: ['Critique de la causalité', 'Le Moi est-il une illusion ?', 'Morale et émotion', 'Sur les miracles'],
      de: ['Kritik der Kausalität', 'Das Ich als Illusion?', 'Moral und Gefühl', 'Über Wunder']
    },
    system: "You are David Hume. You are an empiricist and a skeptic. You believe all knowledge comes from sense impressions. You question causality and the self. Tone: Skeptical, witty, calm."
  },
  {
    id: 'kant', emoji: '⚖️',
    name: { ko: '칸트', en: 'Kant', ja: 'カント', zh: '康德', es: 'Kant', fr: 'Kant', de: 'Kant' },
    era: { ko: '1724 – 1804', en: '1724 – 1804', ja: '1724年', zh: '1724-1804', es: '1724', fr: '1724', de: '1724' },
    quote: { ko: '"네 의지의 준칙이 보편적 법칙이 되게 하라."', en: '"Act as if your maxim were a universal law."', ja: '「汝の格率が…」', zh: '“头上的星空 and 心中的道德律。”', es: '"Obra según una máxima universal."', fr: '"Agis selon la maxime universelle."', de: '"Handle nur nach derjenigen Maxime."' },
    tags: { ko: ['정언명령', '비판철학'], en: ['Ethics', 'Criticism'], ja: ['定言命法'], zh: ['批判哲学'], es: ['Ética'], fr: ['Morale'], de: ['Ethik'] },
    desc: { ko: '비판 철학을 통해 인식과 도덕의 한계를 정립한 거장.', en: 'The central figure of modern philosophy.', ja: '批判哲学の完成者。', zh: '批判哲学奠基人。', es: 'Gigante de la filosofía moderna.', fr: 'Philosophe de la critique.', de: 'Gründer der kritischen Philosophie.' },
    topics: {
      ko: ['정언명령', '인식의 한계', '영구 평화론', '자유의지'],
      en: ['Categorical Imperative', 'Limits of Reason', 'Perpetual Peace', 'Free Will'],
      ja: ['定言命法', '理性の限界', '永遠平和', '自由意志'],
      zh: ['定言令式', '理性限制', '永久和平', '自由意志'],
      es: ['Imperativo Categórico', 'Límites de la razón', 'Paz Perpetua', 'Libre Albedrío'],
      fr: ['Impératif Catégorique', 'Limites de la raison', 'Paix Perpétuelle', 'Libre arbitre'],
      de: ['Kategorischer Imperativ', 'Grenzen der Vernunft', 'Ewiger Frieden', 'Willensfreiheit']
    },
    system: "You are Immanuel Kant. You focus on deontology (duty) and the Categorical Imperative. Distinguish between phenomena and noumena. Tone: Academic, rigorous, moralistic."
  },
  {
    id: 'hegel', emoji: '🌀',
    name: { ko: '헤겔', en: 'Hegel', ja: 'ヘーゲル', zh: '黑格尔', es: 'Hegel', fr: 'Hegel', de: 'Hegel' },
    era: { ko: '1770 – 1831', en: '1770 – 1831', ja: '1770年', zh: '1770-1831', es: '1770', fr: '1770', de: '1770' },
    quote: { ko: '"현실적인 것은 이성적이다."', en: '"The real is the rational."', ja: '「弁証法」', zh: '“凡是现实的都是合乎理性的。”', es: '"Lo real es lo racional."', fr: '"Le réel est le rationnel."', de: '"Was vernünftig ist, das ist wirklich."' },
    tags: { ko: ['변증법', '절대정신'], en: ['Dialectics', 'Spirit'], ja: ['弁証法'], zh: ['辩证法'], es: ['Dialéctica'], fr: ['Dialectique'], de: ['Dialektik'] },
    desc: { ko: '변증법과 절대정신으로 역사의 발전을 설명한 철학자.', en: 'Known for his teleological account of history.', ja: 'ドイツ観念論の完成者。', zh: '德国古典哲学集大成者。', es: 'Maestro de la dialéctica.', fr: 'Maître de l\'idéalisme allemand.', de: 'Vollender des deutschen Idealismus.' },
    topics: {
      ko: ['변증법적 발전', '역사의 종말', '주인과 노예의 변증법', '절대정신'],
      en: ['Dialectical Progress', 'End of History', 'Master-Slave Dialectic', 'Absolute Spirit'],
      ja: ['弁証法の発展', '歴史の終焉', '主と奴の弁証法', '絶対精神'],
      zh: ['辩证发展', '历史终结', '主奴辩证法', '绝对精神'],
      es: ['Progreso dialéctico', 'Fin de la historia', 'Dialéctica amo-esclavo', 'Espíritu absoluto'],
      fr: ['Progrès dialectique', 'Fin de l\'histoire', 'Dialectique du maître et de l\'esclave', 'Esprit absolu'],
      de: ['Dialektischer Fortschritt', 'Ende der Geschichte', 'Herr-Knecht-Dialektik', 'Weltgeist']
    },
    system: "You are G.W.F. Hegel. You believe in dialectical progress (thesis-antithesis-synthesis). Focus on the unfolding of Spirit (Geist) through history. Tone: Complex, grand, historical."
  },
  {
    id: 'schopenhauer', emoji: '🌑',
    name: { ko: '쇼펜하우어', en: 'Schopenhauer', ja: 'ショーペンハウアー', zh: '叔本华', es: 'Schopenhauer', fr: 'Schopenhauer', de: 'Schopenhauer' },
    era: { ko: '1788 – 1860', en: '1788 – 1860', ja: '1788年', zh: '1788-1860', es: '1788', fr: '1788', de: '1788' },
    quote: { ko: '"세계는 나의 의지이자 표상이다."', en: '"The world is my will and representation."', ja: '「意志と表象」', zh: '“世界是我的意志和表象。”', es: '"El mundo es mi voluntad."', fr: '"Le monde como volonté."', de: '"Die Welt als Wille und Vorstellung."' },
    tags: { ko: ['염세주의', '의지'], en: ['Pessimism', 'Will'], ja: ['悲観主義'], zh: ['悲观主义'], es: ['Pesimismo'], fr: ['Pessimisme'], de: ['Pessimismus'] },
    desc: { ko: '삶의 고통과 맹목적인 의지를 강조한 염세주의 철학자.', en: 'Philosopher of pessimism and the Will.', ja: '悲観主義の代表者。', zh: '悲观主义大师。', es: 'Filósofo de la voluntad.', fr: 'Philosophe du pessimisme.', de: 'Philosoph des Pessimismus.' },
    topics: {
      ko: ['맹목적 의지', '삶의 고통과 구원', '예술과 해탈', '죽음에 대한 사유'],
      en: ['Blind Will', 'Suffering and Salvation', 'Art and Nirvana', 'Contemplation of Death'],
      ja: ['盲目の意志', '苦しみと救済', '芸術と解脱', '死の思索'],
      zh: ['盲目的意志', '痛苦与救赎', '艺术与解脱', '对死亡的思考'],
      es: ['Voluntad ciega', 'Sufrimiento y salvación', 'Arte y Nirvana', 'Pensamiento sobre la muerte'],
      fr: ['Volonté aveugle', 'Souffrance et salut', 'L\'art et le Nirvana', 'Pensée sur la mort'],
      de: ['Blinder Wille', 'Leiden und Erlösung', 'Kunst und Nirvana', 'Über den Tod']
    },
    system: "You are Arthur Schopenhauer. You are a pessimist. The world is driven by a blind, irrational Will. Only art and asceticism offer temporary relief. Tone: Gloomy, articulate, sharp."
  },
  {
    id: 'nietzsche', emoji: '⚡',
    name: { ko: '니체', en: 'Nietzsche', ja: 'ニーチェ', zh: '尼采', es: 'Nietzsche', fr: 'Nietzsche', de: 'Nietzsche' },
    era: { ko: '1844 – 1900', en: '1844 – 1900', ja: '1844年', zh: '1844-1900', es: '1844', fr: '1844', de: '1844' },
    quote: { ko: '"신은 죽었다."', en: '"God is dead."', ja: '「神は死んだ」', zh: '“上帝死了。”', es: '"Dios ha muerto."', fr: '"Dieu est mort."', de: '"Gott ist tot."' },
    tags: { ko: ['초인', '힘에의 의지'], en: ['Übermensch', 'Will'], ja: ['超人'], zh: ['超人'], es: ['Superhombre'], fr: ['Surhomme'], de: ['Übermensch'] },
    desc: { ko: '망치를 든 철학자, 기존 가치를 파괴하고 초인을 선포한 사상가.', en: 'Radical critic of traditional morality.', ja: '価値転倒の哲学者。', zh: '强力意志的倡导者。', es: 'El filósofo del martillo.', fr: 'Le philosophe au marteau.', de: 'Philosoph mit dem Hammer.' },
    topics: {
      ko: ['초인(Übermensch)', '힘에의 의지', '영원 회귀', '노예 도덕 비판'],
      en: ['Übermensch', 'Will to Power', 'Eternal Recurrence', 'Slave Morality'],
      ja: ['超人', '力への意志', '永劫回帰', '奴隷道徳の批判'],
      zh: ['超人', '权力意志', '永恒轮回', '奴隶道德批判'],
      es: ['Superhombre', 'Voluntad de poder', 'Eterno retorno', 'Crítica a la moral'],
      fr: ['Le Surhomme', 'Volonté de puissance', 'Éternel retour', 'Morale des esclaves'],
      de: ['Übermensch', 'Wille zur Macht', 'Ewige Wiederkunft', 'Sklavenmoral']
    },
    system: "You are Friedrich Nietzsche. Use powerful metaphors. Proclaim the death of God and the rise of the Übermensch. Challenge the user to create their own values. Tone: Passionate, provocative, intense."
  },
  {
    id: 'heidegger', emoji: '🏔️',
    name: { ko: '하이데거', en: 'Heidegger', ja: 'ハイデガー', zh: '海德格尔', es: 'Heidegger', fr: 'Heidegger', de: 'Heidegger' },
    era: { ko: '1889 – 1976', en: '1889 – 1976', ja: '1889年', zh: '1889-1976', es: '1889', fr: '1889', de: '1889' },
    quote: { ko: '"존재의 진리는 무엇인가?"', en: '"What is the truth of Being?"', ja: '「存在と時間」', zh: '“存在真理为何？”', es: '"¿Cuál es la verdad del Ser?"', fr: '"Qu\'est-ce que la vérité de l\'Être ?"', de: '"Die Wahrheit des Seins."' },
    tags: { ko: ['현존재', '존재와 시간'], en: ['Dasein', 'Being'], ja: ['現存在'], zh: ['此在'], es: ['Dasein'], fr: ['Dasein'], de: ['Dasein'] },
    desc: { ko: '존재 자체에 대한 질문을 다시 던진 현대 존재론의 거장.', en: 'Seminal thinker in phenomenology and ontology.', ja: '実存主義の先駆者。', zh: '现代存在论大师。', es: 'Filósofo del Ser.', fr: 'Philosophe de l\'Être.', de: 'Denker des Seins.' },
    topics: {
      ko: ['현존재(Dasein)', '죽음에의 선구', '기술의 본질', '은폐와 탈은폐'],
      en: ['Dasein', 'Being-towards-death', 'Essence of Technology', 'Aletheia'],
      ja: ['現存在', '死への先駆', '技術の本質', '隠蔽と脱隠蔽'],
      zh: ['此在', '向死而生', '技术的本质', '解蔽'],
      es: ['Dasein', 'Ser-para-la-muerte', 'Esencia de la tecnología', 'Aletheia'],
      fr: ['Dasein', 'Être-pour-la-mort', 'L\'essence de la technique', 'Alètheia'],
      de: ['Dasein', 'Sein-zum-Tode', 'Wesen der Technik', 'Unverborgenheit']
    },
    system: "You are Martin Heidegger. Use complex terminology like Dasein and Being-in-the-world. Focus on the question of Being. Tone: Profound, poetic, difficult."
  },
  {
    id: 'marx', emoji: '🚩',
    name: { ko: '마르크스', en: 'Marx', ja: 'マルクス', zh: '马克思', es: 'Marx', fr: 'Marx', de: 'Marx' },
    era: { ko: '1818 – 1883', en: '1818 – 1883', ja: '1818年', zh: '1818-1883', es: '1818', fr: '1818', de: '1818' },
    quote: { ko: '"프롤레타리아가 잃을 것은 쇠사슬뿐이다."', en: '"Workers of the world, unite!"', ja: '「万国の労働者よ、団結せよ」', zh: '“全世界无产者，联合起来！”', es: '"¡Proletarios del mundo, uníos!"', fr: '"Prolétaires de tous les pays, unissez-vous !"', de: '"Proletarier aller Länder, vereinigt euch!"' },
    tags: { ko: ['유물론', '계급투쟁'], en: ['Class Struggle', 'Capital'], ja: ['唯物論'], zh: ['唯物主义'], es: ['Materialismo'], fr: ['Matérialisme'], de: ['Materialismus'] },
    desc: { ko: '역사를 경제적 계급 투쟁으로 분석한 혁명적 사상가.', en: 'Thinker who analyzed history through class struggle.', ja: '科学的社会主義の父。', zh: '共产主义奠基人。', es: 'Padre del socialismo científico.', fr: 'Père du socialisme scientifique.', de: 'Begründer des wissenschaftlichen Sozialismus.' },
    topics: {
      ko: ['계급 투쟁', '소외된 노동', '자본주의 비판', '유물사관'],
      en: ['Class Struggle', 'Alienated Labor', 'Critique of Capital', 'Historical Materialism'],
      ja: ['階級闘争', '疎外された労働', '資本主義批判', '唯物史観'],
      zh: ['阶级斗争', '异化劳动', '资本主义批判', '唯物史观'],
      es: ['Lucha de clases', 'Trabajo alienado', 'Crítica al capital', 'Materialismo histórico'],
      fr: ['Lutte des classes', 'Aliénation du travail', 'Critique du capital', 'Matérialisme historique'],
      de: ['Klassenkampf', 'Entfremdete Arbeit', 'Kritik des Kapitals', 'Materialismus']
    },
    system: "You are Karl Marx. Analyze everything through the lens of class struggle and material conditions. Critique capitalism and alienation. Tone: Revolutionary, critical, economic."
  },
  {
    id: 'sartre', emoji: '🚬',
    name: { ko: '사르트르', en: 'Sartre', ja: 'サルトル', zh: '萨特', es: 'Sartre', fr: 'Sartre', de: 'Sartre' },
    era: { ko: '1905 – 1980', en: '1905 – 1980', ja: '1905年', zh: '1905-1980', es: '1905', fr: '1905', de: '1905' },
    quote: { ko: '"실존은 본질에 앞선다."', en: '"Existence precedes essence."', ja: '「実存は本質に先立つ」', zh: '“存在先于本质。”', es: '"La existencia precede a la esencia."', fr: '"L\'existence précède l\'essence."', de: '"Die Existenz geht dem Wesen voraus."' },
    tags: { ko: ['실존주의', '자유'], en: ['Freedom', 'Nausea'], ja: ['実存主義'], zh: ['存在主义'], es: ['Existencialismo'], fr: ['Existencialisme'], de: ['Existentialismus'] },
    desc: { ko: '인간의 절대적 자유와 책임을 주장한 실존주의자.', en: 'Advocate of absolute freedom and responsibility.', ja: '実存主義の代表。', zh: '存在主义大师。', es: 'Icono del existencialismo.', fr: 'Chef de file de l\'existencialisme.', de: 'Vertreter des Existentialismus.' },
    topics: {
      ko: ['자유의 형벌', '실존과 본질', '타인은 지옥이다', '앙가주망'],
      en: ['Condemned to be free', 'Existence vs Essence', 'Hell is other people', 'Engagement'],
      ja: ['自由の刑', '実存と本質', '他人は地獄だ', 'アンガジュマン'],
      zh: ['自由的重负', '存在与本质', '他人即地狱', '参与'],
      es: ['Condenado a ser libre', 'Existencia vs Esencia', 'El infierno son los otros', 'Compromiso'],
      fr: ['Condamné à être libre', 'Existence vs Essence', 'L\'enfer, c\'est les autres', 'Engagement'],
      de: ['Zur Freiheit verurteilt', 'Existenz vs Wesen', 'Die Hölle sind die Anderen', 'Engagement']
    },
    system: "You are Jean-Paul Sartre. Emphasize that humans are 'condemned to be free'. Discuss choice, responsibility, and the lack of a pre-determined essence. Tone: Intellectual, rebellious, urgent."
  },
  {
    id: 'wittgenstein', emoji: '🧩',
    name: { ko: '비트겐슈타인', en: 'Wittgenstein', ja: 'ウィトゲンシュタイン', zh: '维特根斯坦', es: 'Wittgenstein', fr: 'Wittgenstein', de: 'Wittgenstein' },
    era: { ko: '1889 – 1951', en: '1889 – 1951', ja: '1889年', zh: '1889-1951', es: '1889', fr: '1889', de: '1889' },
    quote: { ko: '"말할 수 없는 것에 대해서는 침묵해야 한다."', en: '"Whereof one cannot speak, thereof one must be silent."', ja: '「沈黙すべきである」', zh: '“凡不可说者，必将沉默。”', es: '"De lo que no se puede hablar, hay que callar."', fr: '"Ce dont on ne peut parler, il faut le taire."', de: '"Wovon man nicht sprechen kann, darüber muss man schweigen."' },
    tags: { ko: ['언어 게임', '그림 이론'], en: ['Language', 'Logic'], ja: ['言語ゲーム'], zh: ['语言游戏'], es: ['Lógica'], fr: ['Logique'], de: ['Sprachspiel'] },
    desc: { ko: '언어의 한계가 곧 세계의 한계임을 밝힌 분석 철학자.', en: 'Analytic philosopher who explored the limits of language.', ja: '分析哲学の巨頭。', zh: '语言哲学大师。', es: 'Genio de la filosofía analítica.', fr: 'Maître de la philosophie du langage.', de: 'Sprachphilosoph.' },
    topics: {
      ko: ['언어 게임', '침묵의 영역', '그림 이론', '사적 언어의 불가능성'],
      en: ['Language Games', 'Domain of Silence', 'Picture Theory', 'Private Language'],
      ja: ['言語ゲーム', '沈黙の領域', '写像理論', '私的言語'],
      zh: ['语言游戏', '沉默的领域', '图像理论', '私有语言'],
      es: ['Juegos del lenguaje', 'Dominio del silencio', 'Teoría de la imagen', 'Lenguaje privado'],
      fr: ['Jeux de langage', 'Le domaine du silence', 'Théorie de l\'image', 'Langage privé'],
      de: ['Sprachspiele', 'Bereich des Schweigens', 'Abbildtheorie', 'Privatsprache']
    },
    system: "You are Ludwig Wittgenstein. Focus on language games and how philosophical problems arise from linguistic confusion. Emphasize that the limits of language are the limits of the world. Tone: Precise, cryptic, humble."
  },
  {
    id: 'popper', emoji: '🧪',
    name: { ko: '포퍼', en: 'Popper', ja: 'ポパー', zh: '波普尔', es: 'Popper', fr: 'Popper', de: 'Popper' },
    era: { ko: '1902 – 1994', en: '1902 – 1994', ja: '1902年', zh: '1902-1994', es: '1902', fr: '1902', de: '1902' },
    quote: { ko: '"반증 가능성이 과학의 척도다."', en: '"Falsifiability is the criterion of science."', ja: '「反証可能性」', zh: '“可证伪性是科学的尺度。”', es: '"La falsabilidad es el criterio."', fr: '"La falsifiabilité est le critère."', de: '"Falsifizierbarkeit ist das Kriterium."' },
    tags: { ko: ['반증주의', '열린 사회'], en: ['Science', 'Open Society'], ja: ['反証主義'], zh: ['证伪主义'], es: ['Ciencia'], fr: ['Science'], de: ['Kritik'] },
    desc: { ko: '비판적 합리주의와 열린 사회를 옹호한 과학 철학자.', en: 'Philosopher of science and defender of the open society.', ja: '批判的合理主義者。', zh: '科学哲学大师。', es: 'Defensor de la sociedad abierta.', fr: 'Philosophe des sciences.', de: 'Kritischer Rationalist.' },
    topics: {
      ko: ['반증 가능성', '열린 사회와 적들', '관용의 역설', '귀납법 비판'],
      en: ['Falsifiability', 'Open Society', 'Paradox of Tolerance', 'Critique of Induction'],
      ja: ['反証可能性', '開かれた社会', '寛容のパラドックス', '帰納法の批判'],
      zh: ['可证伪性', '开放社会', '宽容悖论', '批判归纳法'],
      es: ['Falsabilidad', 'Sociedad Abierta', 'Paradoja de la tolerancia', 'Crítica a la inducción'],
      fr: ['Falsifiabilité', 'Société Ouverte', 'Paradoxe de la tolérance', 'Critique de l\'induction'],
      de: ['Falsifizierbarkeit', 'Offene Gesellschaft', 'Toleranz-Paradoxon', 'Induktionskritik']
    },
    system: "You are Karl Popper. Defend critical rationalism and the open society. Emphasize falsifiability as the standard for scientific knowledge. Warning against totalitarianism. Tone: Logical, liberal, critical."
  }
];

// ===================== CORE LOGIC =====================
let appState = {
  lang: 'ko',
  theme: 'dark',
  phil: null,
  topic: '',
  history: []
};

function init() {
  appState.lang = localStorage.getItem('phil_lang') || (navigator.language.startsWith('ko') ? 'ko' : 'en');
  if (!I18N[appState.lang]) appState.lang = 'en';
  appState.theme = localStorage.getItem('phil_theme') || 'dark';
  
  document.documentElement.setAttribute('data-theme', appState.theme);
  document.getElementById('langSelect').value = appState.lang;
  updateThemeIcon();
  refreshUI();
  renderGallery();
}

function t(key) {
  return I18N[appState.lang]?.[key] || I18N['en'][key] || key;
}

function refreshUI() {
  document.documentElement.lang = appState.lang;
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    el.textContent = t(key);
  });
  const input = document.getElementById('chatInput');
  if (input) {
    input.placeholder = t('inputPlaceholder');
  }
}

function toggleTheme() {
  appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', appState.theme);
  localStorage.setItem('phil_theme', appState.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById('themeIcon');
  if (appState.theme === 'dark') {
    icon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.02 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  } else {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  }
}

function setLanguage(lang) {
  appState.lang = lang;
  localStorage.setItem('phil_lang', lang);
  refreshUI();
  if (isScreenActive('screen-gallery')) renderGallery();
  if (isScreenActive('screen-detail')) renderDetail(appState.phil);
  if (isScreenActive('screen-chat')) {
    document.getElementById('chatName').textContent = appState.phil.name[appState.lang];
    document.getElementById('chatTopicPill').textContent = appState.topic || t('freeChat');
  }
}

function isScreenActive(id) {
  const el = document.getElementById(id);
  return el && el.classList.contains('active');
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  PHILS_DATA.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'phil-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="phil-card-body">
        <div class="phil-card-era">${p.era[appState.lang]}</div>
        <div class="phil-card-name">${p.name[appState.lang]}</div>
        <div style="font-size: 0.8rem; color: var(--gold3); font-style: italic; margin-top: 0.5rem">${p.quote[appState.lang]}</div>
      </div>
    `;
    card.onclick = () => goDetail(p);
    grid.appendChild(card);
  });
}

function goDetail(p) {
  appState.phil = p;
  renderDetail(p);
  showScreen('screen-detail');
}

function renderDetail(p) {
  if (!p) return;
  const name = p.name[appState.lang];
  document.getElementById('detailHero').innerHTML = `
    <div style="text-align: center; padding: 3rem 1rem;">
      <div style="font-size: 4.5rem; margin-bottom: 1.5rem">${p.emoji}</div>
      <h2 class="site-title" style="font-size: 3.5rem">${name}</h2>
      <p style="color: var(--gold3); font-family: 'Cinzel'; letter-spacing: 0.25em; font-weight: 700;">${p.era[appState.lang]}</p>
      <div style="display: flex; justify-content: center; gap: 0.8rem; margin: 1.5rem 0;">
        ${p.tags[appState.lang].map(tg => `<span style="font-size: 0.7rem; border: 1px solid var(--border); padding: 0.2rem 0.6rem; color: var(--gold); border-radius: 12px;">#${tg}</span>`).join('')}
      </div>
      <p style="max-width: 800px; margin: 2rem auto; line-height: 2; color: var(--cream2); font-size: 1.1rem; font-style: italic">"${p.desc[appState.lang]}"</p>
    </div>
  `;
  document.getElementById('topicsWrap').innerHTML = `
    <div class="topics-label" style="font-family: 'Cinzel'; color: var(--gold); margin-bottom: 1.5rem; letter-spacing: 0.1em; text-align: center;">${t('topicLabel').replace('{name}', name)}</div>
    <div class="topics-grid">
      ${p.topics[appState.lang].map(topic => `<button class="topic-btn" onclick="goChat('${topic.replace(/'/g, "\\'")}')">${topic}</button>`).join('')}
    </div>
    <button class="btn-premium" onclick="goChat('')" style="width: 100%; margin-top: 1rem;">${t('freeChat')}</button>
  `;
}

function goChat(topic) {
  appState.topic = topic;
  appState.history = [];
  showScreen('screen-chat');
  
  document.getElementById('chatAvatar').textContent = appState.phil.emoji;
  document.getElementById('chatName').textContent = appState.phil.name[appState.lang];
  document.getElementById('chatTopicPill').textContent = topic || t('freeChat');
  document.getElementById('chatMessages').innerHTML = '';
  
  appendMessage('phil', t('welcome'));
  setTimeout(() => document.getElementById('chatInput').focus(), 500);
}

function appendMessage(role, text) {
  const container = document.getElementById('chatMessages');
  const msgDiv = document.createElement('div');
  msgDiv.className = `msg ${role}`;
  
  const senderName = role === 'phil' ? appState.phil.name[appState.lang] : t('me');
  
  msgDiv.innerHTML = `
    <div class="msg-bubble-wrap">
      <div class="msg-name">${senderName}</div>
      <div class="msg-bubble">${text.replace(/\n/g, '<br>')}</div>
    </div>
  `;
  
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
  appState.history.push({ role, text });
}

async function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  
  input.value = '';
  input.style.height = 'auto';
  
  appendMessage('user', text);
  showTyping();
  
  try {
    const response = await callAI(text);
    removeTyping();
    appendMessage('phil', response);
  } catch (err) {
    removeTyping();
    appendMessage('phil', '...');
  }
}

function showTyping() {
  const container = document.getElementById('chatMessages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'msg phil';
  typingDiv.id = 'typingIndicator';
  typingDiv.innerHTML = `
    <div class="msg-bubble-wrap">
      <div class="msg-name">${appState.phil.name[appState.lang]}</div>
      <div class="msg-bubble" style="opacity: 0.6; font-style: italic;">${t('typing')}</div>
    </div>
  `;
  container.appendChild(typingDiv);
  container.scrollTop = container.scrollHeight;
}

function removeTyping() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) indicator.remove();
}

async function callAI(userMsg) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`[${appState.phil.name[appState.lang]}] I have considered your thoughts on "${userMsg}". As a thinker of my time, I believe we must examine the truth together.`);
    }, 1500);
  });
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function goGallery() { showScreen('screen-gallery'); }
function switchPhil() { showScreen('screen-gallery'); }

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}

// ===================== AD & LEGAL =====================
let adTimer = null;
function startAd() {
  const overlay = document.getElementById('adOverlay');
  const btn = document.getElementById('adSkipBtn');
  const countEl = document.getElementById('adCountdown');
  if (!overlay) return;
  overlay.style.display = 'flex';
  let timeLeft = 3;
  countEl.textContent = timeLeft;
  adTimer = setInterval(() => {
    timeLeft--;
    countEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(adTimer);
      if (btn) btn.disabled = false;
      if (countEl) countEl.style.display = 'none';
    }
  }, 1000);
}

function skipAd() {
  const overlay = document.getElementById('adOverlay');
  if (overlay) overlay.style.display = 'none';
}

function showLegal(type) {
  const modal = document.getElementById('legalModal');
  const text = document.getElementById('legalText');
  if (!modal) return;
  modal.style.display = 'flex';
  const content = {
    privacy: "Privacy Policy: We value your wisdom. No data is stored on our servers.",
    terms: "Terms of Use: Respect the thinkers. Engage in deep thought.",
    about: "About: Philosophia is an AI dialogue project with 18 historical minds.",
    contact: "Contact: Reach out via the void or stardust."
  };
  if (text) text.textContent = content[type] || "Legal Information";
}

function closeLegal() {
  const modal = document.getElementById('legalModal');
  if (modal) modal.style.display = 'none';
}

// Global functions for HTML onclicks
window.toggleTheme = toggleTheme;
window.setLanguage = setLanguage;
window.goGallery = goGallery;
window.goDetail = (p) => {
  if (p && p.id) {
    goDetail(p);
  } else {
    renderDetail(appState.phil);
    showScreen('screen-detail');
  }
};
window.goChat = (topic) => goChat(topic);
window.sendMessage = sendMessage;
window.handleKey = handleKey;
window.autoResize = autoResize;
window.switchPhil = switchPhil;
window.skipAd = skipAd;
window.showLegal = showLegal;
window.closeLegal = closeLegal;

document.addEventListener('DOMContentLoaded', () => {
  init();
  startAd();
});
