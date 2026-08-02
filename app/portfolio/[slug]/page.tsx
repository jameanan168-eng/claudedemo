import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await prisma.portfolio.findUnique({ where: { slug } });
  return { title: item?.title ?? "ผลงาน" };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await prisma.portfolio.findUnique({ where: { slug } });
  if (!item) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/portfolio"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> กลับไปหน้าผลงาน
      </Link>

      <div className={`h-56 rounded-xl bg-gradient-to-br ${item.imageColor}`} />

      <div className="mt-8 flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
        <Badge variant="outline">{item.year}</Badge>
      </div>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{item.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{item.longDescription}</p>

      <Button
        render={<a href={item.link} target="_blank" rel="noreferrer" />}
        nativeButton={false}
        className="mt-8"
      >
        ดูโปรเจกต์จริง <ArrowUpRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}
