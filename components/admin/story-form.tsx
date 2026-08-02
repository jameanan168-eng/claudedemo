"use client";

import { useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateStoryAction } from "@/lib/actions/story";

async function action(_prevState: { saved: boolean }, formData: FormData) {
  await updateStoryAction(formData);
  return { saved: true };
}

export function StoryForm({
  initialTitle,
  initialParagraphs,
}: {
  initialTitle: string;
  initialParagraphs: string;
}) {
  const [state, formAction, isPending] = useActionState(action, { saved: false });

  return (
    <form action={formAction} className="mt-8 flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="title">หัวข้อ</Label>
        <Input id="title" name="title" defaultValue={initialTitle} />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="paragraphs">เนื้อหา (แต่ละย่อหน้าคั่นด้วยบรรทัดว่าง)</Label>
        <Textarea id="paragraphs" name="paragraphs" rows={14} defaultValue={initialParagraphs} />
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={isPending}>
          {isPending ? "กำลังบันทึก..." : "บันทึกการเปลี่ยนแปลง"}
        </Button>
        {state.saved && !isPending && (
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4" /> บันทึกแล้ว
          </span>
        )}
      </div>
    </form>
  );
}
