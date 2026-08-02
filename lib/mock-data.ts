export const profile = {
  name: "Mew Anan",
  title: "Product Designer & Frontend Developer",
  tagline: "ออกแบบและสร้างประสบการณ์ดิจิทัลที่เรียบง่ายแต่ทรงพลัง",
  location: "กรุงเทพฯ, ประเทศไทย",
  email: "hello@mewanan.dev",
  socials: {
    twitter: "https://twitter.com/mewanan",
    github: "https://github.com/mewanan",
    linkedin: "https://linkedin.com/in/mewanan",
  },
};

export const storyContent = {
  title: "เรื่องราวของฉัน",
  paragraphs: [
    "เริ่มต้นเส้นทางสายออกแบบและพัฒนาเว็บไซต์มากว่า 8 ปี ผ่านงานทั้งฝั่ง startup และองค์กรขนาดใหญ่ สิ่งที่หลงใหลที่สุดคือการแปลงความคิดที่ซับซ้อนให้กลายเป็นสิ่งที่ใช้งานง่ายและสวยงาม",
    "เชื่อว่างานออกแบบที่ดีต้องเริ่มจากความเข้าใจปัญหาของผู้ใช้อย่างแท้จริง ไม่ใช่แค่ทำให้สวยงาม แต่ต้องแก้ปัญหาได้จริงและวัดผลได้",
    "นอกจากงานประจำ ยังใช้เวลาว่างเขียนบทความแบ่งปันความรู้ด้าน design system, frontend engineering และ product thinking ให้กับชุมชนนักออกแบบและนักพัฒนาในไทย",
    "ปัจจุบันสนใจเรื่อง AI-assisted design tools และการนำ design system มาช่วยให้ทีมขนาดเล็กสร้างผลิตภัณฑ์คุณภาพสูงได้เร็วขึ้น",
  ],
  timeline: [
    { year: "2024–ปัจจุบัน", label: "Lead Product Designer, Freelance & Consulting" },
    { year: "2021–2024", label: "Senior Frontend Developer, TechStart Co." },
    { year: "2019–2021", label: "UI/UX Designer, Creative Studio" },
    { year: "2017–2019", label: "Junior Developer, เริ่มต้นเส้นทางสายเทคโนโลยี" },
  ],
};

export type PortfolioItem = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageColor: string;
  link: string;
  year: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "finwise-app",
    title: "FinWise — แอปจัดการการเงินส่วนบุคคล",
    description: "ออกแบบและพัฒนา UI/UX สำหรับแอปวางแผนการเงินที่ใช้งานง่าย",
    longDescription:
      "FinWise เป็นแอปพลิเคชันจัดการการเงินส่วนบุคคลที่มุ่งเน้นความเรียบง่าย ช่วยให้ผู้ใช้ทั่วไปเข้าใจภาพรวมการเงินของตัวเองได้ภายในไม่กี่วินาที ทำงานร่วมกับทีม product 5 คน ใช้เวลาพัฒนา 4 เดือน ตั้งแต่ research ไปจนถึง launch จริง",
    tags: ["UI/UX", "Fintech", "Mobile App"],
    imageColor: "from-emerald-400 to-teal-500",
    link: "https://example.com/finwise",
    year: "2024",
  },
  {
    slug: "greenmarket",
    title: "GreenMarket — แพลตฟอร์มตลาดสินค้าออร์แกนิก",
    description: "เว็บอีคอมเมิร์ซสำหรับเกษตรกรท้องถิ่นขายสินค้าออร์แกนิกโดยตรง",
    longDescription:
      "โปรเจกต์ที่ช่วยเชื่อมเกษตรกรรายย่อยกับผู้บริโภคโดยตรง ลดพ่อค้าคนกลาง ออกแบบระบบตั้งแต่หน้าร้านค้า ระบบตะกร้าสินค้า ไปจนถึงระบบหลังบ้านสำหรับเกษตรกรจัดการสินค้าเอง",
    tags: ["E-commerce", "Web App", "Next.js"],
    imageColor: "from-lime-400 to-green-500",
    link: "https://example.com/greenmarket",
    year: "2023",
  },
  {
    slug: "studyflow",
    title: "StudyFlow — เครื่องมือวางแผนการเรียนสำหรับนักศึกษา",
    description: "แอปช่วยจัดตารางเรียนและติดตามความคืบหน้าการอ่านหนังสือ",
    longDescription:
      "StudyFlow ถูกออกแบบมาสำหรับนักศึกษาที่ต้องจัดการหลายวิชาพร้อมกัน มี feature หลักคือ smart scheduling ที่ช่วยจัดลำดับความสำคัญของงานอัตโนมัติตาม deadline",
    tags: ["Education", "Mobile App", "UI/UX"],
    imageColor: "from-sky-400 to-blue-500",
    link: "https://example.com/studyflow",
    year: "2023",
  },
  {
    slug: "brandkit-generator",
    title: "BrandKit Generator",
    description: "เครื่องมือสร้าง brand guideline อัตโนมัติสำหรับธุรกิจขนาดเล็ก",
    longDescription:
      "เว็บแอปที่ช่วยเจ้าของธุรกิจขนาดเล็กสร้างชุดแนวทางแบรนด์ (สี, ฟอนต์, โลโก้การใช้งาน) ได้ภายในไม่กี่นาที โดยไม่ต้องจ้างนักออกแบบ",
    tags: ["SaaS", "Web App", "Branding"],
    imageColor: "from-fuchsia-400 to-purple-500",
    link: "https://example.com/brandkit",
    year: "2022",
  },
  {
    slug: "portfolio-cms",
    title: "Portfolio CMS สำหรับครีเอเตอร์",
    description: "ระบบจัดการเนื้อหาน้ำหนักเบาสำหรับสร้างเว็บผลงานส่วนตัว",
    longDescription:
      "CMS ขนาดเล็กที่ออกแบบมาให้ครีเอเตอร์และฟรีแลนซ์สร้างเว็บผลงานของตัวเองได้โดยไม่ต้องเขียนโค้ด รองรับการจัดหมวดหมู่ผลงานและระบบบทความในตัว",
    tags: ["CMS", "Web App", "Design System"],
    imageColor: "from-amber-400 to-orange-500",
    link: "https://example.com/portfolio-cms",
    year: "2022",
  },
  {
    slug: "wellness-tracker",
    title: "Wellness Tracker",
    description: "แอปติดตามสุขภาพกายและใจสำหรับพนักงานออฟฟิศ",
    longDescription:
      "โปรเจกต์ร่วมกับทีม HR Tech เพื่อสร้างเครื่องมือให้พนักงานติดตามสุขภาพองค์รวมของตัวเอง ทั้งการนอน การออกกำลังกาย และความเครียด พร้อม dashboard สำหรับ HR ดูภาพรวมแบบไม่ระบุตัวตน",
    tags: ["Health Tech", "Dashboard", "UI/UX"],
    imageColor: "from-rose-400 to-pink-500",
    link: "https://example.com/wellness",
    year: "2021",
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  publishedAt: string;
  readMinutes: number;
  tags: string[];
};

export const articles: Article[] = [
  {
    slug: "design-system-getting-started",
    title: "Design System เริ่มต้นยังไงดีสำหรับทีมเล็ก",
    excerpt: "ทีมเล็กก็สร้าง design system ที่ใช้งานได้จริงได้ ไม่จำเป็นต้องมีทรัพยากรเยอะเหมือนบริษัทใหญ่",
    content: [
      "หลายทีมคิดว่า design system เป็นเรื่องของบริษัทใหญ่เท่านั้น แต่จริง ๆ แล้วทีมเล็กก็ได้ประโยชน์มากกว่าที่คิด เพราะช่วยลดเวลาตัดสินใจซ้ำ ๆ ในเรื่องเล็กน้อย",
      "ขั้นแรกที่แนะนำคือเริ่มจาก design token พื้นฐาน เช่น สี, spacing, typography ก่อนที่จะไปสร้าง component ที่ซับซ้อน",
      "สิ่งสำคัญคือต้องมีเจ้าของ (owner) ที่ชัดเจน ไม่ว่าจะเป็นคนคนเดียวหรือทีมเล็ก ๆ เพื่อให้ระบบไม่กระจัดกระจายไปตามเวลา",
    ],
    publishedAt: "2026-06-15",
    readMinutes: 6,
    tags: ["Design System", "Frontend"],
  },
  {
    slug: "from-designer-to-developer",
    title: "จาก Designer สู่ Developer: บทเรียนที่ได้เรียนรู้",
    excerpt: "การข้ามสายจากดีไซน์ไปเขียนโค้ดเปลี่ยนมุมมองการทำงานของฉันไปตลอดกาล",
    content: [
      "ตอนเริ่มต้นเขียนโค้ดครั้งแรก สิ่งที่ยากที่สุดไม่ใช่ syntax แต่เป็นการเปลี่ยนวิธีคิดจาก 'มันดูดีไหม' เป็น 'มันทำงานถูกต้องไหม'",
      "การเข้าใจทั้งสองฝั่งทำให้สื่อสารกับทีมง่ายขึ้นมาก โดยเฉพาะตอนที่ต้อง trade-off ระหว่างความสวยงามกับความเป็นไปได้ทางเทคนิค",
      "คำแนะนำสำหรับ designer ที่อยากเรียนเขียนโค้ด: เริ่มจาก HTML/CSS ที่ตัวเองคุ้นเคยอยู่แล้ว แล้วค่อย ๆ ขยับไป JavaScript",
    ],
    publishedAt: "2026-05-02",
    readMinutes: 8,
    tags: ["Career", "Frontend"],
  },
  {
    slug: "ai-as-design-assistant",
    title: "AI เป็นเครื่องมือช่วยออกแบบ ไม่ใช่ตัวแทนนักออกแบบ",
    excerpt: "มุมมองต่อการนำ AI มาใช้ในกระบวนการออกแบบ โดยไม่สูญเสียความเป็นมนุษย์ในงาน",
    content: [
      "AI ช่วยร่นเวลาในขั้นตอนที่ซ้ำซาก เช่น การสร้าง variation ของ layout หรือการเขียน copy เบื้องต้น",
      "แต่การตัดสินใจเชิงกลยุทธ์ เช่น ผู้ใช้ต้องการอะไรจริง ๆ ยังคงต้องอาศัยความเข้าใจมนุษย์ที่ AI ยังทำแทนไม่ได้ทั้งหมด",
      "แนะนำให้ใช้ AI เป็นผู้ช่วยในขั้นตอน exploration ไม่ใช่ขั้นตอนตัดสินใจสุดท้าย",
    ],
    publishedAt: "2026-03-20",
    readMinutes: 5,
    tags: ["AI", "Design"],
  },
  {
    slug: "writing-a-portfolio-that-stands-out",
    title: "เขียนพอร์ตโฟลิโอยังไงให้โดนใจผู้ว่าจ้าง",
    excerpt: "เทคนิคการนำเสนอผลงานที่ทำให้ผู้ว่าจ้างเข้าใจคุณค่าของงานได้เร็วที่สุด",
    content: [
      "อย่าเล่าแค่ 'ทำอะไร' แต่ต้องเล่า 'ทำไมถึงทำแบบนั้น' และ 'ผลลัพธ์ที่ได้คืออะไร'",
      "ใช้ตัวเลขให้เป็นประโยชน์ เช่น เพิ่ม conversion กี่เปอร์เซ็นต์ ลดเวลาทำงานกี่ชั่วโมง",
      "เลือกโชว์ 3-5 ผลงานที่ดีที่สุด ดีกว่าโชว์ทุกอย่างที่เคยทำมา",
    ],
    publishedAt: "2026-01-10",
    readMinutes: 4,
    tags: ["Career", "Portfolio"],
  },
];

export type Subscriber = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export const subscribers: Subscriber[] = [
  { id: "1", name: "Nattapong S.", email: "nattapong@example.com", createdAt: "2026-07-28" },
  { id: "2", name: "Kanya P.", email: "kanya.p@example.com", createdAt: "2026-07-20" },
  { id: "3", name: "Anonymous", email: "reader.thai01@example.com", createdAt: "2026-07-15" },
  { id: "4", name: "Preecha K.", email: "preecha.k@example.com", createdAt: "2026-06-30" },
];
