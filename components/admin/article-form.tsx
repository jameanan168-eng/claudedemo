"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import type { Article } from "@prisma/client";

export function ArticleForm({
  initial,
  action,
}: {
  initial?: Article;
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action} className="flex max-w-xl flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="title">หัวข้อบทความ</Label>
        <Input id="title" name="title" defaultValue={initial?.title} required />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="excerpt">สรุปย่อ</Label>
        <Textarea id="excerpt" name="excerpt" rows={2} defaultValue={initial?.excerpt} required />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="content">เนื้อหา (แต่ละย่อหน้าคั่นด้วยบรรทัดว่าง)</Label>
        <Textarea
          id="content"
          name="content"
          rows={10}
          defaultValue={initial?.content.join("\n\n")}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="tags">แท็ก (คั่นด้วย comma)</Label>
          <Input id="tags" name="tags" defaultValue={initial?.tags.join(", ")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="readMinutes">เวลาอ่าน (นาที)</Label>
          <Input
            id="readMinutes"
            name="readMinutes"
            type="number"
            min={1}
            defaultValue={initial?.readMinutes ?? 5}
          />
        </div>
      </div>

      <div className="flex gap-3">
        <Button type="submit">{initial ? "บันทึกการเปลี่ยนแปลง" : "เผยแพร่บทความ"}</Button>
        <Button render={<Link href="/admin/articles" />} nativeButton={false} type="button" variant="outline">
          ยกเลิก
        </Button>
      </div>
    </form>
  );
}
