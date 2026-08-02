import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ArticleForm } from "@/components/admin/article-form";
import { updateArticleAction } from "@/lib/actions/article";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await prisma.article.findUnique({ where: { slug } });

  if (!article) notFound();

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">แก้ไขบทความ</h1>
      <div className="mt-8">
        <ArticleForm initial={article} action={updateArticleAction.bind(null, slug)} />
      </div>
    </div>
  );
}
