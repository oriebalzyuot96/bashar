/* All content for Bashar Abied's portfolio, in English and Arabic.
   Facts come from his LinkedIn profile; company context was checked with public sources (Oct 2026). */
import type { Lang } from '../i18n';
type T = Record<Lang, string>;
const t = (en: string, ar: string): T => ({ en, ar });

export const PERSON = {
  name: t('Bashar Abied', 'بشار عبيد'),
  short: t('Bashar', 'بشار'),
  role: t('Consulting Director · Solutions & Software Architect', 'Consulting Director · Solutions & Software Architect'),
  email: 'baaq@hotmail.com',
  phone: '+962 7 7739 0052',
  tel: '+962777390052',
  linkedin: 'https://www.linkedin.com/in/bashar-abied-321a1a9/',
  github: '',
  location: t('Amman, Jordan', 'عمّان، الأردن'),
};

export const META = {
  title: t('Bashar Abied · Consulting Director, Solutions & Software Architect', 'بشار عبيد · مدير استشارات ومعماري حلول وبرمجيات'),
  desc: t('Bashar Abied, Consulting Director at PwC Middle East and former CTO. 25+ years architecting and delivering mission-critical systems for governments, telcos and enterprises across the Middle East: Oman eVisa, Microsoft TV White Spaces, SADAD, Zain KSA, STC and UNRWA.',
          'بشار عبيد، مدير استشارات في PwC الشرق الأوسط ورئيس تقني سابق. أكثر من 25 عامًا في تصميم وتسليم أنظمة حرجة للحكومات وشركات الاتصالات والمؤسسات في الشرق الأوسط: التأشيرة الإلكترونية في عُمان، وقاعدة بيانات Microsoft للمساحات البيضاء، وسداد، وزين السعودية، وSTC، والأونروا.'),
};

export const NAV = {
  about: t('About', 'نبذة'), skills: t('Expertise', 'الخبرات'), projects: t('Work', 'الأعمال'),
  career: t('Career', 'المسيرة'), contact: t('Contact', 'تواصل'), video: t('Video', 'فيديو'),
};

export const HERO = {
  hello: t("Hi, I'm Bashar", 'مرحبًا، أنا بشار'), open: t('Consulting Director at PwC Middle East', 'مدير استشارات في PwC الشرق الأوسط'),
  l1: t('I architect and deliver', 'أصمّم وأسلّم أنظمة'), l2a: t('', ''), words: t('mission-critical|national-scale|secure', 'حرجة|بحجم وطني|آمنة'), l2b: t(' systems,', ''),
  l2pre: t('', ''), l3: t('for governments, telcos and enterprises.', 'للحكومات وشركات الاتصالات والمؤسسات.'),
  lede: t('Consulting Director, former CTO and Solutions Architect with <b>25+ years</b> building and leading software teams across the <b>Middle East and globally</b>. From <b>Oman’s eVisa</b> and <b>Microsoft’s TV White Spaces database</b> to <b>SADAD, Zain KSA, STC and UNRWA</b>, I turn large, complex programmes into systems that run every day.',
          'مدير استشارات ورئيس تقني سابق ومعماري حلول بخبرة <b>تتجاوز 25 عامًا</b> في بناء فرق البرمجيات وقيادتها في <b>الشرق الأوسط وعالميًا</b>. من <b>التأشيرة الإلكترونية في عُمان</b> و<b>قاعدة بيانات Microsoft للمساحات البيضاء</b> إلى <b>سداد وزين السعودية وSTC والأونروا</b>، أحوّل البرامج الكبيرة والمعقّدة إلى أنظمة تعمل كل يوم.'),
  cta1: t('See my work', 'شاهد أعمالي'), cta2: t('Download CV', 'تحميل السيرة الذاتية'), cta3: t('Email me', 'راسلني'),
};

export const BENTO = {
  hand: t('let’s build ✦', 'لنبنِ معًا ✦'), avail: t('Director', 'مدير'),
  exp: t('Experience', 'الخبرة'), years: t('years delivering software, from Boston to Riyadh, Muscat and Abu Dhabi', 'عامًا في تسليم البرمجيات، من بوسطن إلى الرياض ومسقط وأبوظبي'),
  nowk: t('Now · PwC Middle East', 'حاليًا · PwC الشرق الأوسط'),
  now: t('Consulting Director, leading technology and transformation engagements', 'مدير استشارات يقود مشاريع التقنية والتحول'),
  chips: [t('Solution architecture', 'معمارية الحلول'), t('Delivery leadership', 'قيادة التسليم'), t('e-Government', 'الحكومة الإلكترونية'), t('Telecom & fintech', 'الاتصالات والتقنية المالية')],
  clock: t('Local time · Amman', 'الوقت المحلي · عمّان'), tz: t('GMT+3 · Middle East & global', 'GMT+3 · الشرق الأوسط وعالميًا'),
  stack: t('Platforms I have shipped on', 'تقنيات سلّمت عليها'),
  certk: t('Education', 'التعليم'), cert: t('BSc Computer Engineering', 'بكالوريوس هندسة الحاسوب'), certs: t('Jordan University of Science & Technology · 1999', 'جامعة العلوم والتكنولوجيا الأردنية · 1999'),
  a11yk: t('Accessibility', 'إمكانية الوصول'), a11y: t('Try this site your way', 'جرّب الموقع على طريقتك'), a11ySub: t('Contrast, text size, motion, Arabic RTL.', 'التباين وحجم النص والحركة والعربية.'), a11yGo: t('Open settings →', 'فتح الإعدادات ←'),
};

export const VIDEO = {
  k: t('in 40 seconds', 'في 40 ثانية'), t: t('My story, from Boston to PwC', 'قصتي، من بوسطن إلى PwC'),
  p: t('A short reel of the companies and national programmes behind 25+ years of delivery.', 'لقطات قصيرة عن الشركات والبرامج الوطنية خلف أكثر من 25 عامًا من التسليم.'),
};

export const ABOUT = {
  k: t('who am I?', 'من أنا؟'), t: t('About Me', 'نبذة عنّي'),
  badge: t('📍 Amman · Middle East', '📍 عمّان · الشرق الأوسط'),
  h: t('Architect by training, leader by practice 🧭', 'معماري بالتكوين، وقائد بالممارسة 🧭'),
  p1: t('I am a senior Solutions Manager and Software Architect with a track record of building and leading software teams across the Middle East and globally. I deliver business solutions end to end: onsite and offshore collaboration, large technical programmes, and the architecture that holds them together.',
        'أنا مدير حلول ومعماري برمجيات بمستوى قيادي، بسجلّ في بناء فرق البرمجيات وقيادتها في الشرق الأوسط وعالميًا. أسلّم الحلول من البداية للنهاية: تعاون بين الفرق المحلية والخارجية، وبرامج تقنية كبيرة، والمعمارية التي تجمعها.'),
  p2: t('My work spans public and private sectors: Oman’s eVisa with SITA, Microsoft’s global TV White Spaces database, SADAD in Saudi Arabia, provisioning for Zain KSA, STC, UNRWA’s refugee registration and Abu Dhabi’s ADFCA. I care about cohesive, productive teams where new ideas turn into business growth.',
        'يمتد عملي في القطاعين العام والخاص: التأشيرة الإلكترونية في عُمان مع SITA، وقاعدة بيانات Microsoft العالمية للمساحات البيضاء، وسداد في السعودية، وأنظمة التفعيل لزين السعودية، وSTC، وتسجيل اللاجئين في الأونروا، وجهاز أبوظبي للرقابة الغذائية. أهتم بفرق متماسكة ومنتجة تتحول فيها الأفكار الجديدة إلى نمو للأعمال.'),
  name: t('Name', 'الاسم'), loc: t('Location', 'الموقع'), locs: t('Middle East & global engagements', 'مشاريع في الشرق الأوسط وعالميًا'),
  email: t('Email', 'البريد الإلكتروني'), phone: t('Mobile', 'الجوال'), li: t('LinkedIn', 'LinkedIn'),
  edu: t('Education', 'التعليم'), eduv: t('BSc Computer Engineering', 'بكالوريوس هندسة الحاسوب'), edus: t('Jordan University of Science & Technology · 1994–1999', 'جامعة العلوم والتكنولوجيا الأردنية · 1994–1999'),
  lang: t('Languages', 'اللغات'), langv: t('Arabic · English', 'العربية · الإنجليزية'), langs: t('Fluent in both', 'إتقان تام للغتين'),
  principles: [
    { t: t('Architecture that lasts', 'معمارية تدوم'), p: t('Integration-first designs that survive scale, new vendors and years in production.', 'تصاميم قائمة على التكامل تصمد أمام التوسع والموردين الجدد وسنوات التشغيل.') },
    { t: t('Delivery you can plan on', 'تسليم يمكن التخطيط له'), p: t('Clear scope, honest status and UAT the customer signs with confidence.', 'نطاق واضح وحالة صادقة واختبار قبول يوقّعه العميل بثقة.') },
    { t: t('Teams that grow', 'فرق تنمو'), p: t('Onsite and offshore teams that share one standard and one goal.', 'فرق محلية وخارجية بمعيار واحد وهدف واحد.') },
  ],
};

export const SKILLS = {
  k: t('what I bring', 'ما أقدّمه'), t: t('Expertise', 'الخبرات'), p: t('Leadership, architecture and the platforms behind national-scale systems.', 'القيادة والمعمارية والتقنيات خلف الأنظمة الوطنية.'),
  groups: [
    { icon: '🧭', t: t('Leadership', 'القيادة'), items: [['', 'Technology strategy · CTO'], ['', 'Programme & delivery management'], ['', 'Onsite / offshore teams'], ['', 'Presales · RFPs · UAT']] },
    { icon: '🏛️', t: t('Architecture', 'المعمارية'), items: [['', 'Enterprise & solution architecture'], ['', 'SOA · ESB · integration'], ['', 'Enterprise reporting & logging'], ['', 'ALM · SDLC consulting']] },
    { icon: '⚙️', t: t('Platforms', 'المنصات'), items: [['dotnet', 'Microsoft .NET · C#'], ['openjdk', 'J2EE · Java'], ['oracle', 'Oracle DB · OSB · SOA'], ['apache', 'Apache ServiceMix · Camel'], ['redhat', 'Red Hat · IBM WAS']] },
    { icon: '📡', t: t('Telecom', 'الاتصالات'), items: [['', 'Provisioning & fulfilment'], ['', 'VAS · HLR · PCRF'], ['', 'BSS / OSS'], ['', 'Enterprise IMS']] },
    { icon: '🤖', t: t('AI & innovation', 'الذكاء الاصطناعي والابتكار'), items: [['python', 'Python'], ['tensorflow', 'TensorFlow'], ['', 'Chatbots · RASA · Watson'], ['', 'Facial & emotion recognition'], ['', 'NAO & Pepper robots']] },
    { icon: '🏦', t: t('Domains', 'المجالات'), items: [['', 'e-Government · eVisa'], ['', 'Payments · SADAD'], ['', 'HR, payroll & talent'], ['', 'GRP · BPM']] },
  ],
};

export type Mock = { flow?: string[]; stats?: [string, string, number][]; list?: [string, string][] };
export const PROJECTS = {
  k: t("what I've delivered", 'ما سلّمته'), t: t('Selected Work', 'أعمال مختارة'),
  p: t('National programmes and enterprise platforms I architected, led or delivered. Client systems are private, so they are shown as labelled illustrations.', 'برامج وطنية ومنصات مؤسسية صمّمتها أو قدتها أو سلّمتها. أنظمة العملاء خاصة، لذلك تظهر كرسوم توضيحية مُعلَّمة.'),
  illus: t('Illustration', 'رسم توضيحي'), more: t('About the programme ↗', 'عن البرنامج ↗'),
  items: [
    { id: 'p-evisa', org: t('SITA · Royal Oman Police', 'SITA · شرطة عُمان السلطانية'), status: t('Sr. Solutions Architect', 'Sr. Solutions Architect'),
      title: t('Oman eVisa System', 'نظام التأشيرة الإلكترونية في عُمان'),
      p: t('SITA, the Geneva-based air-transport IT provider founded in 1949, delivered Oman’s border and eVisa platform. Since March 2018 Oman issues visas only electronically. I architected and led development across five-plus integrated enterprise systems.',
           'نفّذت SITA، مزوّد تقنية النقل الجوي ومقرها جنيف منذ 1949، منظومة الحدود والتأشيرة الإلكترونية في عُمان، التي تصدر التأشيرات إلكترونيًا فقط منذ مارس 2018. صمّمت وقدت تطوير أكثر من خمسة أنظمة مؤسسية متكاملة.'),
      hl: [t('Architecture across J2EE, Apache ServiceMix/Camel, Oracle OSB & SOA and .NET', 'معمارية تجمع J2EE و Apache ServiceMix/Camel و Oracle OSB & SOA و .NET'), t('Enterprise reporting, centralised logging and document processing', 'تقارير مؤسسية وسجلات مركزية ومعالجة مستندات'), t('Led a team of 25 developers', 'قيادة فريق من 25 مطوّرًا')],
      tags: ['J2EE', 'Oracle SOA', 'Apache Camel', '.NET'], link: 'https://evisa.rop.gov.om',
      mock: { flow: ['Apply', 'Pay', 'Screen', 'Issue'], stats: [['Integrated systems', '5+', 80], ['Developers', '25', 62]], list: [['eVisa', 'Live'], ['Border control', 'Integrated']] } as Mock },
    { id: 'p-tvws', org: t('BlackStone eIT × Microsoft', 'BlackStone eIT × Microsoft'), status: t('Ofcom certified', 'معتمد من Ofcom'),
      title: t('Microsoft Global TV White Spaces Database', 'قاعدة بيانات Microsoft العالمية للمساحات البيضاء'),
      p: t('TV white spaces are unused broadcast frequencies that can carry rural broadband, the idea behind Microsoft’s Airband initiative. I delivered the global database and calculation engine with Microsoft R&D in Seattle and took it through UK Ofcom certification.',
           'المساحات البيضاء هي ترددات بث تلفزيوني غير مستخدمة يمكنها نقل الإنترنت للمناطق الريفية، وهي الفكرة وراء مبادرة Microsoft Airband. سلّمت قاعدة البيانات العالمية ومحرّك الحسابات مع فريق Microsoft للبحث والتطوير في سياتل، وأوصلتها إلى اعتماد Ofcom البريطاني.'),
      hl: [t('Spectrum database and calculation engine', 'قاعدة بيانات الطيف ومحرّك الحسابات'), t('UK Ofcom certification', 'اعتماد Ofcom البريطاني'), t('Authentication back end for Microsoft Skype WiFi', 'محرّك المصادقة لخدمة Skype WiFi من Microsoft')],
      tags: ['Microsoft', 'Azure', 'Spectrum', 'Ofcom'], link: 'https://www.microsoft.com/en-us/corporate-responsibility/airband-initiative',
      mock: { flow: ['Device', 'Locate', 'Calculate', 'Channels'], stats: [['Free channels', '14', 70], ['Coverage', 'UK', 90]], list: [['Ofcom', 'Certified'], ['Skype WiFi auth', 'Live']] } as Mock },
    { id: 'p-uae', org: t('BlackStone eIT · UAE', 'BlackStone eIT · الإمارات'), status: t('AI & robotics', 'ذكاء اصطناعي وروبوتات'),
      title: t('ADNOC e-Services & GASCO robotics', 'خدمات ADNOC الإلكترونية وروبوتات GASCO'),
      p: t('Enterprise projects for large UAE customers: the ADNOC e-Services platform and a robotics assistant for GASCO on SoftBank NAO and Pepper robots, alongside chatbots and facial and emotion recognition.',
           'مشاريع مؤسسية لعملاء كبار في الإمارات: منصة خدمات ADNOC الإلكترونية، ومساعد روبوتي لشركة GASCO على روبوتات NAO و Pepper من SoftBank، إلى جانب روبوتات المحادثة والتعرف على الوجوه والمشاعر.'),
      hl: [t('Chatbots with Microsoft Bot Framework, RASA and IBM Watson', 'روبوتات محادثة بـ Microsoft Bot Framework و RASA و IBM Watson'), t('Facial and emotion recognition in Python and TensorFlow', 'التعرف على الوجوه والمشاعر بـ Python و TensorFlow'), t('Delivery, UAT and presales with the customer', 'التسليم واختبار القبول والدعم قبل البيع مع العميل')],
      tags: ['AI', 'Python', 'TensorFlow', 'Robotics'],
      mock: { flow: ['Hear', 'Understand', 'Answer', 'Act'], stats: [['Intent accuracy', '94%', 94], ['Faces', '1:N', 70]], list: [['Pepper', 'Online'], ['e-Services', 'Live']] } as Mock },
    { id: 'p-shepherd', org: t('Shepherd Technologies', 'Shepherd Technologies'), status: t('CTO', 'رئيس تقني'),
      title: t('Shepherd HR talent platform', 'منصة Shepherd لإدارة المواهب'),
      p: t('As CTO I led strategy, architecture and delivery of scalable talent-management solutions covering HR, payroll, workforce planning and succession management, on cloud and on-premise.',
           'بصفتي رئيسًا تقنيًا، قدت الاستراتيجية والمعمارية والتسليم لحلول إدارة المواهب القابلة للتوسع، وتشمل الموارد البشرية والرواتب وتخطيط القوى العاملة وإدارة التعاقب، سحابيًا وداخليًا.'),
      hl: [t('Technology strategy and product architecture', 'الاستراتيجية التقنية ومعمارية المنتج'), t('HR, payroll, workforce planning and succession', 'الموارد البشرية والرواتب وتخطيط القوى العاملة والتعاقب'), t('Engineering organisation and delivery', 'تنظيم الهندسة والتسليم')],
      tags: ['HR tech', 'SaaS', 'Architecture'], link: 'https://www.shepherd365.com',
      mock: { flow: ['Hire', 'Pay', 'Plan', 'Succeed'], stats: [['Employees', '48k', 76], ['Payroll runs', '99.9%', 99]], list: [['Succession', 'Ready'], ['Workforce plan', 'Q4']] } as Mock },
    { id: 'p-telco', org: t('Nokia Siemens Networks · Huawei', 'Nokia Siemens Networks · Huawei'), status: t('Solutions Architect', 'Solutions Architect'),
      title: t('Zain KSA provisioning & STC', 'التفعيل لزين السعودية و STC'),
      p: t('At Nokia Siemens Networks I architected the provisioning and service-fulfilment platform for Zain KSA and contributed to STC’s enterprise IMS. At Huawei I owned core VAS elements for a Saudi operator.',
           'في Nokia Siemens Networks صمّمت منصة التفعيل وتنفيذ الخدمات لزين السعودية وساهمت في منصة IMS المؤسسية لـ STC. وفي Huawei توليت عناصر الخدمات المضافة الأساسية لمشغّل سعودي.'),
      hl: [t('Provisioning adapters for HLR, IN and every network element', 'محوّلات التفعيل لـ HLR و IN وكل عناصر الشبكة'), t('VAS: SAAM, HLR, OneNDS, SIM OTA, NPS, PCRF', 'الخدمات المضافة: SAAM و HLR و OneNDS و SIM OTA و NPS و PCRF'), t('Remote teams in India and Poland', 'فرق عن بُعد في الهند وبولندا')],
      tags: ['Telecom', 'OSS/BSS', 'Oracle', 'IBM WAS'],
      mock: { flow: ['Order', 'Provision', 'HLR', 'Active'], stats: [['Network elements', '30+', 75], ['Orders / day', '200k', 82]], list: [['Zain KSA', 'Live'], ['STC IMS', 'Live']] } as Mock },
    { id: 'p-gov', org: t('Estarta · SSS', 'Estarta · SSS'), status: t('Architect', 'معماري'),
      title: t('UNRWA registration, GRP & SADAD', 'تسجيل الأونروا ونظام GRP وسداد'),
      p: t('At Estarta I designed UNRWA’s Refugee Registration System, launched in 2009 to serve Palestine refugees across the region, and a 12-module Government Resource Planning suite. At SSS in Riyadh I ran products around SADAD, Saudi Arabia’s national bill-payment system.',
           'في Estarta صمّمت نظام تسجيل اللاجئين للأونروا، الذي أُطلق عام 2009 لخدمة اللاجئين الفلسطينيين في المنطقة، ومنظومة تخطيط الموارد الحكومية من 12 وحدة. وفي SSS بالرياض أدرت منتجات حول سداد، نظام المدفوعات الوطني في السعودية.'),
      hl: [t('GRP: HR, payroll, finance, budgeting, inventory, purchasing', 'GRP: الموارد البشرية والرواتب والمالية والموازنة والمخزون والمشتريات'), t('eMorasalat correspondence and Appian BPM', 'نظام المراسلات الإلكترونية و Appian BPM'), t('C#, ASP.NET, SQL Server, SharePoint, OmniDocs', 'C# و ASP.NET و SQL Server و SharePoint و OmniDocs')],
      tags: ['.NET', 'SharePoint', 'BPM', 'e-Gov'], link: 'https://www.unrwa.org',
      mock: { flow: ['Register', 'Verify', 'Serve', 'Report'], stats: [['GRP modules', '12', 70], ['Region', '5 fields', 88]], list: [['UNRWA RRIS', 'Live'], ['SADAD', 'Integrated']] } as Mock },
  ],
};

export const CAREER = {
  k: t("where I've been", 'أين عملت'), t: t('Career', 'المسيرة المهنية'), now: t('Current', 'الحالي'),
  jobs: [
    { dot: 'PwC', when: t('Dec 2023 – Present · Amman', 'ديسمبر 2023 – حتى الآن · عمّان'), co: 'PwC Middle East', role: t('Consulting Director', 'مدير استشارات'), current: true,
      about: t('PwC’s Middle East firm, with around 30 offices in 12 countries, advising governments and enterprises on technology and transformation.', 'شركة PwC في الشرق الأوسط، بنحو 30 مكتبًا في 12 دولة، تقدّم الاستشارات للحكومات والمؤسسات في التقنية والتحول.'),
      b: [t('Lead technology and transformation consulting engagements for public and private clients.', 'قيادة مشاريع استشارات التقنية والتحول لعملاء من القطاعين العام والخاص.'),
          t('Shape solution architecture, delivery approach and teams from proposal to go-live.', 'تشكيل معمارية الحلول ونهج التسليم والفرق من العرض حتى الإطلاق.')],
      tags: ['Consulting', 'Transformation', 'Architecture'] },
    { dot: 'CTO', when: t('Sep 2021 – Nov 2023 · Jordan', 'سبتمبر 2021 – نوفمبر 2023 · الأردن'), co: 'Shepherd Technologies', role: t('Chief Technology Officer', 'الرئيس التقني'),
      about: t('HR technology company behind Shepherd HR: talent management, payroll, attendance and performance, on cloud and on-premise.', 'شركة تقنية موارد بشرية وراء Shepherd HR: إدارة المواهب والرواتب والحضور والأداء، سحابيًا وداخليًا.'),
      b: [t('Led strategy, architecture and delivery of scalable talent-management solutions: HR, payroll, workforce planning and succession.', 'قيادة الاستراتيجية والمعمارية والتسليم لحلول إدارة المواهب: الموارد البشرية والرواتب وتخطيط القوى العاملة والتعاقب.')],
      tags: ['CTO', 'HR tech', 'SaaS'] },
    { dot: 'SITA', when: t('Jan 2018 – Aug 2021 · Muscat, Oman', 'يناير 2018 – أغسطس 2021 · مسقط، عُمان'), co: 'SITA', role: t('Sr. Solutions Architect', 'Sr. Solutions Architect'),
      about: t('The air-transport industry’s IT provider, founded in 1949 in Geneva, also delivering border management and eVisa for governments.', 'مزوّد تقنية قطاع النقل الجوي، تأسس عام 1949 في جنيف، ويقدّم أيضًا إدارة الحدود والتأشيرات الإلكترونية للحكومات.'),
      b: [t('Architecture, design and development of the Oman eVisa System: five-plus integrated systems on J2EE, Apache ServiceMix/Camel, Oracle DB, OSB & SOA and .NET.', 'معمارية وتصميم وتطوير نظام التأشيرة الإلكترونية في عُمان: أكثر من خمسة أنظمة متكاملة على J2EE و Apache ServiceMix/Camel و Oracle DB و OSB & SOA و .NET.'),
          t('Coordinated enterprise reporting, centralised logging and document processing with client teams, SITA product and O&M teams.', 'تنسيق التقارير المؤسسية والسجلات المركزية ومعالجة المستندات مع فرق العميل وفرق منتجات SITA والتشغيل.'),
          t('Managed a team of 25 developers.', 'إدارة فريق من 25 مطوّرًا.')],
      tags: ['J2EE', 'Oracle SOA', '.NET', '25 devs'] },
    { dot: 'BSE', when: t('2016 – 2018 · Amman', '2016 – 2018 · عمّان'), co: 'BlackStone eIT', role: t('Software Development Manager · Sr. Software Architect', 'Software Development Manager · Sr. Software Architect'),
      about: t('Systems integrator and software vendor for digital transformation and process automation.', 'مُكامل أنظمة ومزوّد برمجيات للتحول الرقمي وأتمتة العمليات.'),
      b: [t('Delivered Microsoft’s Global TV White Spaces database and calculation engine with Microsoft R&D in Seattle, through UK Ofcom certification.', 'تسليم قاعدة بيانات Microsoft العالمية للمساحات البيضاء ومحرّك الحسابات مع فريق Microsoft في سياتل، حتى اعتماد Ofcom البريطاني.'),
          t('Delivered the authentication back end for Microsoft Skype WiFi.', 'تسليم محرّك المصادقة لخدمة Skype WiFi من Microsoft.'),
          t('UAE enterprise projects: ADNOC e-Services and GASCO robotics assistant on NAO and Pepper; chatbots and facial and emotion recognition.', 'مشاريع مؤسسية في الإمارات: خدمات ADNOC الإلكترونية ومساعد GASCO الروبوتي على NAO و Pepper، وروبوتات محادثة والتعرف على الوجوه والمشاعر.')],
      tags: ['Microsoft', 'AI', 'Robotics'] },
    { dot: 'CAT', when: t('2014 – 2016 · Amman', '2014 – 2016 · عمّان'), co: 'CATEC', role: t('Software Development Manager · Sr. Software Architect', 'Software Development Manager · Sr. Software Architect'),
      about: t('Enterprise software delivery.', 'تسليم البرمجيات المؤسسية.'),
      b: [t('Technical architecture for enterprise solutions; led multiple development teams across technologies.', 'المعمارية التقنية للحلول المؤسسية وقيادة عدة فرق تطوير بتقنيات مختلفة.'),
          t('Proofs of concept for new technologies; delivery, UAT and presales.', 'إثباتات مفهوم لتقنيات جديدة، والتسليم واختبار القبول والدعم قبل البيع.')],
      tags: ['Architecture', 'Delivery'] },
    { dot: 'HW', when: t('2013 – 2014 · Saudi Arabia', '2013 – 2014 · السعودية'), co: 'Huawei Technologies', role: t('VAS B.O. Sr. Consultant', 'VAS B.O. Sr. Consultant'),
      about: t('Global telecom and ICT company founded in 1987 in Shenzhen.', 'شركة اتصالات وتقنية عالمية تأسست عام 1987 في شنجن.'),
      b: [t('Owned core VAS elements: provisioning (SAAM), HLR, OneNDS, SIM OTA, NPS and PCRF; built integration and operations tools.', 'تولي عناصر الخدمات المضافة الأساسية: SAAM و HLR و OneNDS و SIM OTA و NPS و PCRF، وبناء أدوات التكامل والتشغيل.')],
      tags: ['Telecom', 'VAS'] },
    { dot: 'SSS', when: t('2012 – 2013 · Riyadh & Amman', '2012 – 2013 · الرياض وعمّان'), co: 'Secure Services Systems (SSS)', role: t('Products Architect · Professional Services Manager', 'Products Architect · Professional Services Manager'),
      about: t('Saudi systems integrator for government and enterprise.', 'مُكامل أنظمة سعودي للحكومة والمؤسسات.'),
      b: [t('Product architecture and roadmap: Appian BPM, GRP, SADAD and eMorasalat correspondence management.', 'معمارية المنتجات وخارطة الطريق: Appian BPM و GRP وسداد ونظام المراسلات الإلكترونية.'),
          t('Built a new ALM and SDLC consulting offering; responded to RFPs with sales.', 'بناء خدمة جديدة لاستشارات ALM و SDLC، والرد على طلبات العروض مع المبيعات.')],
      tags: ['SADAD', 'BPM', 'GRP'] },
    { dot: 'NSN', when: t('2009 – 2012 · Riyadh & global', '2009 – 2012 · الرياض وعالميًا'), co: 'Nokia Siemens Networks', role: t('Solutions Architect', 'Solutions Architect'),
      about: t('Nokia and Siemens telecom-infrastructure joint venture, now part of Nokia.', 'مشروع مشترك بين Nokia و Siemens للبنية التحتية للاتصالات، أصبح جزءًا من Nokia.'),
      b: [t('Architected the provisioning and service-fulfilment platform at Zain KSA, integrating every network element.', 'تصميم منصة التفعيل وتنفيذ الخدمات في زين السعودية وربطها بكل عناصر الشبكة.'),
          t('Contributed to STC’s enterprise IMS (IPCx); managed remote teams in India and Poland.', 'المساهمة في منصة IMS المؤسسية لـ STC، وإدارة فرق عن بُعد في الهند وبولندا.')],
      tags: ['Zain KSA', 'STC', 'OSS/BSS'] },
    { dot: 'EST', when: t('2006 – 2009 · Amman & Riyadh', '2006 – 2009 · عمّان والرياض'), co: 'Estarta Solutions', role: t('Solutions Architect', 'Solutions Architect'),
      about: t('Jordanian software and outsourcing company with 1,000+ people in about eight countries.', 'شركة أردنية للبرمجيات والتعهيد بأكثر من 1,000 موظف في نحو ثماني دول.'),
      b: [t('Architected a 12-module Government Resource Planning suite on the Microsoft stack.', 'تصميم منظومة تخطيط الموارد الحكومية من 12 وحدة على تقنيات Microsoft.'),
          t('UNRWA Refugee Registration System, serving Palestine refugees across the Middle East.', 'نظام تسجيل اللاجئين للأونروا، لخدمة اللاجئين الفلسطينيين في الشرق الأوسط.')],
      tags: ['.NET', 'UNRWA', 'GRP'] },
    { dot: 'INK', when: t('2005 – 2006 · Amman & Gulf', '2005 – 2006 · عمّان والخليج'), co: 'InnoKAT', role: t('Sr. Technical Consultant', 'Sr. Technical Consultant'),
      about: t('Business solutions and R&D.', 'حلول الأعمال والبحث والتطوير.'),
      b: [t('Led RFID R&D on Oracle Sensor Edge Server; Hummingbird DMS; SMS travel and notification system.', 'قيادة البحث والتطوير في RFID على Oracle Sensor Edge Server، ونظام Hummingbird لإدارة المستندات، ونظام رسائل للسفر والتنبيهات.')],
      tags: ['RFID', 'Oracle'] },
    { dot: 'JAV', when: t('2002 – 2005 · Amman', '2002 – 2005 · عمّان'), co: 'Javna Wireless', role: t('Solutions Architect', 'Solutions Architect'),
      about: t('Jordanian mobile and wireless software house, founded in 2001.', 'شركة أردنية لبرمجيات الجوال واللاسلكي، تأسست عام 2001.'),
      b: [t('Epicenter enterprise messaging across voice, SMS, fax and MSN, Yahoo!, ICQ and AOL; an enterprise bulk-SMS platform.', 'منصة Epicenter للمراسلة المؤسسية عبر الصوت والرسائل والفاكس و MSN و Yahoo! و ICQ و AOL، ومنصة رسائل جماعية مؤسسية.')],
      tags: ['Messaging', 'SMS'] },
    { dot: 'OW', when: t('1999 – 2002 · Amman & Boston', '1999 – 2002 · عمّان وبوسطن'), co: 'One World Software Solutions', role: t('Sr. Software Engineer', 'Sr. Software Engineer'),
      about: t('Built IMlogic, the instant-messaging logging product later acquired by Symantec (2006).', 'بناء IMlogic، منتج تسجيل المحادثات الفورية الذي استحوذت عليه Symantec لاحقًا (2006).'),
      b: [t('IMlogic chat logging for AOL, Yahoo! and ICQ; a web collaboration system with file exchange and discussion rooms.', 'تسجيل محادثات IMlogic لـ AOL و Yahoo! و ICQ، ونظام تعاون عبر الويب لتبادل الملفات وغرف النقاش.')],
      tags: ['IM', 'Web'] },
  ],
  edu: [
    { t: t('🎓 BSc Computer Engineering', '🎓 بكالوريوس هندسة الحاسوب'), s: t('Jordan University of Science & Technology · 1994–1999', 'جامعة العلوم والتكنولوجيا الأردنية · 1994–1999') },
  ],
};

export const CONTACT = {
  t: t("Let's deliver something that matters", 'لنسلّم معًا ما يصنع الفرق'),
  p: t('Open to conversations about technology leadership, architecture and large-scale delivery across the Middle East and globally.', 'أرحّب بالحديث عن القيادة التقنية والمعمارية وتسليم البرامج الكبيرة في الشرق الأوسط وعالميًا.'),
  copy: t('Copy', 'نسخ'),
  avail: [t('🧭 Leadership', '🧭 القيادة'), t('🏛️ Architecture', '🏛️ المعمارية'), t('🌍 Middle East & global', '🌍 الشرق الأوسط وعالميًا'), t('🤝 Advisory', '🤝 الاستشارات')],
};

export const FOOTER = {
  tag: t('Consulting Director · Solutions & Software Architect', 'مدير استشارات · معماري حلول وبرمجيات'),
  avail: t('Open to the right conversation', 'مرحّب بالحوار المناسب'), email: t('Email me', 'راسلني'), cv: t('Download CV', 'تحميل السيرة الذاتية'),
  explore: t('Explore', 'استكشف'), connect: t('Connect', 'تواصل'), rights: t('All rights reserved.', 'جميع الحقوق محفوظة.'),
  local: t('Amman', 'عمّان'), other: t('العربية', 'English'),
};

/** Runtime config for public/app.js (palette commands, links, code tile, storage keys). */
export const siteCfg = (base: string) => ({
  key: 'ba',
  cv: base + 'Bashar-Abied-CV.pdf',
  email: PERSON.email,
  linkedin: PERSON.linkedin,
  sections: [
    { id: 'home', e: '🏠', en: 'Home', ar: 'الرئيسية' },
    { id: 'about', e: '👋', en: 'About me', ar: 'نبذة' },
    { id: 'intro', e: '🎬', en: 'Video', ar: 'فيديو' },
    { id: 'skills', e: '🧰', en: 'Expertise', ar: 'الخبرات' },
    { id: 'projects', e: '🚀', en: 'Work', ar: 'الأعمال' },
    { id: 'career', e: '🧭', en: 'Career', ar: 'المسيرة المهنية' },
    { id: 'contact', e: '✉️', en: 'Contact', ar: 'تواصل' },
  ],
  projects: [
    { id: 'p-evisa', e: '🛂', en: 'Oman eVisa (SITA)', ar: 'التأشيرة الإلكترونية في عُمان' },
    { id: 'p-tvws', e: '📡', en: 'Microsoft TV White Spaces', ar: 'المساحات البيضاء من Microsoft' },
    { id: 'p-shepherd', e: '👥', en: 'Shepherd HR (CTO)', ar: 'Shepherd HR' },
    { id: 'p-telco', e: '📶', en: 'Zain KSA & STC', ar: 'زين السعودية و STC' },
    { id: 'p-gov', e: '🏛️', en: 'UNRWA, GRP & SADAD', ar: 'الأونروا و GRP وسداد' },
  ],
  code: [
    ['c', '// integrate everything, break nothing'],
    ['', `<span class="c-k">const</span> <span class="c-f">programme</span> = {`],
    ['', `  systems: [<span class="c-s">"eVisa"</span>, <span class="c-s">"Border"</span>, <span class="c-s">"Reporting"</span>],`],
    ['', `  team: <span class="c-n">25</span>, years: <span class="c-n">25</span>,`],
    ['', `  <span class="c-f">deliver</span>: () =&gt; <span class="c-s">"on time, in production"</span>`],
    ['', '};'],
  ],
});
