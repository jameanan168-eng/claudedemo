import Link from "next/link";
import { LayoutDashboard, BookText, Briefcase, Newspaper, Users, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logoutAction } from "@/lib/actions/auth";
import { AdminNavLink } from "@/components/admin/admin-nav-link";

const navItems = [
  { href: "/admin", label: "ภาพรวม", icon: LayoutDashboard },
  { href: "/admin/story", label: "เรื่องราว", icon: BookText },
  { href: "/admin/portfolio", label: "ผลงาน", icon: Briefcase },
  { href: "/admin/articles", label: "บทความ", icon: Newspaper },
  { href: "/admin/subscribers", label: "ผู้ติดตาม", icon: Users },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="flex w-56 shrink-0 flex-col gap-1 border-r border-border p-4">
        <div className="mb-6 px-2 text-sm font-semibold tracking-tight">Admin Panel</div>
        {navItems.map((item) => (
          <AdminNavLink key={item.href} href={item.href} icon={<item.icon className="h-4 w-4" />}>
            {item.label}
          </AdminNavLink>
        ))}

        <Button render={<Link href="/" />} nativeButton={false} variant="ghost" className="mt-auto justify-start">
          กลับสู่เว็บไซต์
        </Button>
        <form action={logoutAction}>
          <Button type="submit" variant="outline" className="w-full justify-start">
            <LogOut className="h-4 w-4" /> ออกจากระบบ
          </Button>
        </form>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
