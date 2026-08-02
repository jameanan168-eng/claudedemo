import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { deleteArticleAction } from "@/lib/actions/article";
import { DeleteButton } from "@/components/admin/delete-button";
import { formatDate } from "@/lib/format";

export default async function AdminArticlesListPage() {
  const articleList = await prisma.article.findMany({ orderBy: { publishedAt: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">บทความ</h1>
        <Button render={<Link href="/admin/articles/new" />} nativeButton={false}>
          <Plus className="h-4 w-4" /> เขียนบทความใหม่
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {articleList.map((article) => (
          <Card key={article.slug}>
            <CardContent className="flex items-center justify-between gap-4 py-4">
              <div>
                <p className="font-medium">{article.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {formatDate(article.publishedAt)} · {article.readMinutes} นาทีอ่าน
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button
                  render={<Link href={`/admin/articles/${article.slug}`} />}
                  nativeButton={false}
                  variant="outline"
                  size="icon"
                  aria-label="แก้ไข"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <DeleteButton
                  action={deleteArticleAction.bind(null, article.slug)}
                  confirmMessage={`ลบบทความ "${article.title}" ?`}
                />
              </div>
            </CardContent>
          </Card>
        ))}

        {articleList.length === 0 && (
          <p className="py-12 text-center text-sm text-muted-foreground">ยังไม่มีบทความ</p>
        )}
      </div>
    </div>
  );
}
