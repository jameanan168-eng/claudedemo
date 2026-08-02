import { ArticleForm } from "@/components/admin/article-form";
import { createArticleAction } from "@/lib/actions/article";

export default function NewArticlePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">เขียนบทความใหม่</h1>
      <div className="mt-8">
        <ArticleForm action={createArticleAction} />
      </div>
    </div>
  );
}
