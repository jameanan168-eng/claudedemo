import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/lib/mock-data";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/format";

export default async function Home() {
  const [featuredWork, latestArticles] = await Promise.all([
    prisma.portfolio.findMany({ orderBy: { order: "asc" }, take: 3 }),
    prisma.article.findMany({ orderBy: { publishedAt: "desc" }, take: 3 }),
  ]);

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="flex flex-col items-start gap-6 py-20 sm:py-28">
        <Badge variant="secondary">{profile.location}</Badge>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          สวัสดี ผมชื่อ {profile.name.split(" ")[0]}
          <br />
          <span className="text-muted-foreground">{profile.title}</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button render={<Link href="/portfolio" />} nativeButton={false} size="lg">
            ดูผลงาน <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button render={<Link href="/contact" />} nativeButton={false} variant="outline" size="lg">
            ติดต่อฉัน
          </Button>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">ผลงานเด่น</h2>
          <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground">
            ดูทั้งหมด →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWork.map((item) => (
            <Link key={item.slug} href={`/portfolio/${item.slug}`}>
              <Card className="h-full overflow-hidden py-0 transition-shadow hover:shadow-md">
                <div className={`h-32 bg-gradient-to-br ${item.imageColor}`} />
                <CardContent className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-medium leading-snug">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest articles */}
      <section className="py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">บทความล่าสุด</h2>
          <Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground">
            ดูทั้งหมด →
          </Link>
        </div>
        <div className="flex flex-col divide-y divide-border/60">
          {latestArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col gap-1 py-5 first:pt-0"
            >
              <span className="text-xs text-muted-foreground">{formatDate(article.publishedAt)}</span>
              <h3 className="font-medium transition-colors group-hover:text-foreground/70">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
