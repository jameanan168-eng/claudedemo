import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboardPage() {
  const [portfolioCount, articleCount, subscriberCount] = await Promise.all([
    prisma.portfolio.count(),
    prisma.article.count(),
    prisma.subscriber.count(),
  ]);

  const stats = [
    { label: "ผลงานทั้งหมด", value: portfolioCount, href: "/admin/portfolio" },
    { label: "บทความทั้งหมด", value: articleCount, href: "/admin/articles" },
    { label: "ผู้ติดตามอีเมล", value: subscriberCount, href: "/admin/subscribers" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">ภาพรวม</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        ข้อมูลเชื่อมต่อกับฐานข้อมูลจริง (Neon Postgres) แล้ว
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Link key={stat.href} href={stat.href}>
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-1 text-3xl font-semibold">{stat.value}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
