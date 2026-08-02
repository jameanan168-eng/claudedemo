# PRD — เว็บแบรนด์ส่วนตัว (Personal Brand Website)

> หมายเหตุ: ไม่พบไฟล์ CLAUDE.md ในโปรเจกต์ (โฟลเดอร์เริ่มต้นว่างเปล่า) เอกสารนี้จึงสรุปจากบทสนทนาที่คุยกันโดยตรง

## สรุปจากที่คุยกัน
ผู้ใช้ต้องการเว็บไซต์แบรนด์ส่วนตัว ประกอบด้วยหน้า: หน้าแรก, เรื่องราว, ผลงาน, บทความ, ติดต่อ (พร้อมฟอร์มเก็บชื่อ-อีเมล) และหน้าแอดมินสำหรับจัดการเนื้อหา

**การปรับ scope**: รอบแรกวางแผนไว้จะต่อ PostgreSQL + Prisma + NextAuth จริง แต่รอบนี้ผู้ใช้ระบุให้ **build ตาม PRD นี้เท่านั้น** โดยใช้ **ข้อมูลตัวอย่าง (mock/sample data)** ทุกหน้า **ไม่ต้องต่อฐานข้อมูลจริง**

- **Stack**: Next.js (App Router) + React + TypeScript + Tailwind CSS
- **ข้อมูล**: mock data ในโค้ด (`lib/mock-data.ts`) ไม่มีฐานข้อมูล ไม่มี API เขียนจริง
- **Auth หน้าแอดมิน**: mock login แบบง่าย (เช็ค email/password ที่ hardcode ไว้ ผ่าน client-side state) เพื่อสาธิต flow เท่านั้น
- **ฟอร์มติดต่อ/สมัครอีเมล**: submit แล้วแสดงผลสำเร็จบน UI (mock) ไม่บันทึกจริง
- **การแก้ไขในหน้าแอดมิน**: แก้ state ใน browser session เท่านั้น (ไม่ persist ข้ามการ refresh)

## หน้าเว็บ (Public)
1. **หน้าแรก (`/`)** — Hero แนะนำตัว, CTA, ไฮไลต์ผลงาน/บทความล่าสุด (จาก mock data)
2. **เรื่องราว (`/story`)** — เนื้อหาเกี่ยวกับตัวตน/ประวัติแบบ static
3. **ผลงาน (`/portfolio`)** — grid การ์ดผลงาน (mock 6-8 ชิ้น) + หน้ารายละเอียด `/portfolio/[slug]`
4. **บทความ (`/articles`)** — list บทความ (mock 5-6 บทความ) + หน้ารายละเอียด `/articles/[slug]`
5. **ติดต่อ (`/contact`)** — ข้อมูลติดต่อ + ฟอร์มเก็บชื่อ-อีเมล (mock submit)

## หน้าแอดมิน (`/admin`)
- `/admin/login` — mock login form
- `/admin` — dashboard สรุปจำนวนผลงาน/บทความ/subscriber
- `/admin/story` — ฟอร์มแก้ไขเนื้อหาเรื่องราว (แก้ state ชั่วคราว)
- `/admin/portfolio` — list + add/edit/delete ผลงาน (mock, in-memory)
- `/admin/articles` — list + add/edit/delete บทความ (mock, in-memory)
- `/admin/subscribers` — ตาราง mock รายชื่อผู้สมัคร

## แผนการ Build — 3 เฟส

### เฟส 1: โครงสร้างพื้นฐาน + หน้าเว็บสาธารณะ
- Scaffold Next.js + TypeScript + Tailwind
- สร้าง mock data (profile, portfolio, articles, story content)
- Shared layout (Header/Nav, Footer)
- Build หน้า: หน้าแรก, เรื่องราว, ผลงาน (list+detail), บทความ (list+detail), ติดต่อ (ฟอร์ม mock)
- Responsive (mobile/desktop)

### เฟส 2: หน้าแอดมิน (mock data)
- Mock login flow + protected route (client-side guard)
- Dashboard สรุปตัวเลข
- CRUD UI สำหรับ story/portfolio/articles (in-memory state)
- ตาราง subscribers (mock)

### เฟส 3: ขัดเกลา + ทดสอบ
- ตรวจ responsive และ styling ให้สอดคล้องกันทั้งเว็บ
- ตรวจ navigation ครบทุกลิงก์
- ทดสอบ flow: login แอดมิน → แก้ไขเนื้อหา → เช็คว่าอัปเดตระหว่าง session
- เตรียมโครงไว้สำหรับต่อ backend จริงในอนาคต (ระบุจุดที่จะเปลี่ยนจาก mock เป็น API จริง)

## Verification
- `npm run dev` แล้วไล่เช็คทุกหน้า public และ admin ผ่านเบราว์เซอร์
- ทดสอบฟอร์ม contact และฟอร์มในแอดมินว่าทำงาน (mock) ไม่ error
- เช็ค responsive ที่ขนาดจอมือถือ/เดสก์ท็อป
