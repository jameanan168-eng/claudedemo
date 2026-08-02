import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/format";

export const metadata = {
  title: "บทความ",
};

export default async function ArticlesPage() {
  const articles = await prisma.article.findMany({ orderBy: { publishedAt: "desc" } });

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">บทความ</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        บันทึกความคิดและบทเรียนเกี่ยวกับงานออกแบบ การพัฒนาเว็บ และการทำงานเป็นทีม
      </p>

      <div className="mt-12 flex flex-col divide-y divide-border/60">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group flex flex-col gap-2 py-6 first:pt-0"
          >
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{formatDate(article.publishedAt)}</span>
              <span>·</span>
              <span>{article.readMinutes} นาทีอ่าน</span>
            </div>
            <h2 className="text-xl font-medium transition-colors group-hover:text-foreground/70">
              {article.title}
            </h2>
            <p className="text-muted-foreground">{article.excerpt}</p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
