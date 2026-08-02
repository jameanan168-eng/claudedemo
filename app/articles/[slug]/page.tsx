import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/format";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({ where: { slug } });
  return { title: article?.title ?? "บทความ" };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({ where: { slug } });
  if (!article) notFound();

  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/articles"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> กลับไปหน้าบทความ
      </Link>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {article.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{article.title}</h1>
      <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
        <span>{formatDate(article.publishedAt)}</span>
        <span>·</span>
        <span>{article.readMinutes} นาทีอ่าน</span>
      </div>

      <div className="mt-10 flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
        {article.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
