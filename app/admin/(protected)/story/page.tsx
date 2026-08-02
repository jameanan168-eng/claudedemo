import { prisma } from "@/lib/prisma";
import { StoryForm } from "@/components/admin/story-form";

export default async function AdminStoryPage() {
  const story = await prisma.storyContent.findUnique({ where: { id: 1 } });

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight">แก้ไขเรื่องราว</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        แก้ไขเนื้อหาหน้า &quot;เรื่องราว&quot; — บันทึกแล้วอัปเดตทันทีที่หน้าเว็บสาธารณะ
      </p>

      <StoryForm
        initialTitle={story?.title ?? ""}
        initialParagraphs={story?.paragraphs.join("\n\n") ?? ""}
      />
    </div>
  );
}
