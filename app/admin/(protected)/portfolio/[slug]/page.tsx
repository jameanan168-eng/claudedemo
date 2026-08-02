import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PortfolioForm } from "@/components/admin/portfolio-form";
import { updatePortfolioAction } from "@/lib/actions/portfolio";

export default async function EditPortfolioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await prisma.portfolio.findUnique({ where: { slug } });

  if (!item) notFound();

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">แก้ไขผลงาน</h1>
      <div className="mt-8">
        <PortfolioForm initial={item} action={updatePortfolioAction.bind(null, slug)} />
      </div>
    </div>
  );
}
