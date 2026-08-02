"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import type { Portfolio } from "@prisma/client";

export function PortfolioForm({
  initial,
  action,
}: {
  initial?: Portfolio;
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action} className="flex max-w-xl flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="title">ชื่อผลงาน</Label>
        <Input id="title" name="title" defaultValue={initial?.title} required />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="description">คำอธิบายสั้น</Label>
        <Input id="description" name="description" defaultValue={initial?.description} required />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="longDescription">คำอธิบายแบบเต็ม</Label>
        <Textarea
          id="longDescription"
          name="longDescription"
          rows={5}
          defaultValue={initial?.longDescription}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="tags">แท็ก (คั่นด้วย comma)</Label>
          <Input id="tags" name="tags" defaultValue={initial?.tags.join(", ")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="year">ปี</Label>
          <Input
            id="year"
            name="year"
            defaultValue={initial?.year ?? String(new Date().getFullYear())}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="link">ลิงก์โปรเจกต์</Label>
        <Input id="link" name="link" defaultValue={initial?.link} placeholder="https://" />
      </div>

      <div className="flex gap-3">
        <Button type="submit">{initial ? "บันทึกการเปลี่ยนแปลง" : "เพิ่มผลงาน"}</Button>
        <Button render={<Link href="/admin/portfolio" />} nativeButton={false} type="button" variant="outline">
          ยกเลิก
        </Button>
      </div>
    </form>
  );
}
