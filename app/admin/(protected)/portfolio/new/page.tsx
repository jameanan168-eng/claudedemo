import { PortfolioForm } from "@/components/admin/portfolio-form";
import { createPortfolioAction } from "@/lib/actions/portfolio";

export default function NewPortfolioPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">เพิ่มผลงานใหม่</h1>
      <div className="mt-8">
        <PortfolioForm action={createPortfolioAction} />
      </div>
    </div>
  );
}
