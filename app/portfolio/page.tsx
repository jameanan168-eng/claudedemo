import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "ผลงาน",
};

export default async function PortfolioPage() {
  const portfolioItems = await prisma.portfolio.findMany({ orderBy: { order: "asc" } });

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">ผลงาน</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        ผลงานคัดสรรบางส่วนที่ได้ทำร่วมกับทีมและลูกค้าตลอดหลายปีที่ผ่านมา
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <Link key={item.slug} href={`/portfolio/${item.slug}`}>
            <Card className="h-full overflow-hidden py-0 transition-shadow hover:shadow-md">
              <div className={`h-36 bg-gradient-to-br ${item.imageColor}`} />
              <CardContent className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-medium leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <span className="mt-auto pt-1 text-xs text-muted-foreground">{item.year}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
