import Link from "next/link";
import { profile } from "@/lib/mock-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. สงวนลิขสิทธิ์
        </p>
        <div className="flex gap-5">
          <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-foreground">
            Twitter
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <Link href="/admin/login" className="hover:text-foreground">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
