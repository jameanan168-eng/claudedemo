import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/lib/mock-data";

export const metadata = {
  title: "ติดต่อ",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">ติดต่อ</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        สนใจร่วมงาน มีโปรเจกต์ในใจ หรืออยากพูดคุยแลกเปลี่ยนความคิดเห็น ทักมาได้เลย
      </p>

      <div className="mt-10 grid gap-12 sm:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${profile.email}`} className="hover:text-foreground">
              {profile.email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{profile.location}</span>
          </div>

          <div className="mt-6">
            <h2 className="mb-3 text-sm font-medium">รับข่าวสารใหม่ทางอีเมล</h2>
            <p className="text-muted-foreground">
              ฝากชื่อและอีเมลไว้ เพื่อรับบทความและผลงานใหม่ ๆ ก่อนใคร
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
