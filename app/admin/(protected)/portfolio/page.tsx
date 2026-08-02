import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { prisma } from "@/lib/prisma";
import { deletePortfolioAction } from "@/lib/actions/portfolio";
import { DeleteButton } from "@/components/admin/delete-button";

export default async function AdminPortfolioListPage() {
  const portfolio = await prisma.portfolio.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">ผลงาน</h1>
        <Button render={<Link href="/admin/portfolio/new" />} nativeButton={false}>
          <Plus className="h-4 w-4" /> เพิ่มผลงาน
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {portfolio.map((item) => (
          <Card key={item.slug}>
            <CardContent className="flex items-center justify-between gap-4 py-4">
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 shrink-0 rounded-md bg-gradient-to-br ${item.imageColor}`} />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button
                  render={<Link href={`/admin/portfolio/${item.slug}`} />}
                  nativeButton={false}
                  variant="outline"
                  size="icon"
                  aria-label="แก้ไข"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <DeleteButton
                  action={deletePortfolioAction.bind(null, item.slug)}
                  confirmMessage={`ลบผลงาน "${item.title}" ?`}
                />
              </div>
            </CardContent>
          </Card>
        ))}

        {portfolio.length === 0 && (
          <p className="py-12 text-center text-sm text-muted-foreground">ยังไม่มีผลงาน</p>
        )}
      </div>
    </div>
  );
}
