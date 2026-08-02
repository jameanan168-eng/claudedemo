"use client";

import { useActionState, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { subscribeAction, type SubscribeState } from "@/lib/actions/subscriber";

const initialState: SubscribeState = {};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(subscribeAction, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (state.success) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-lg border border-border bg-muted/40 p-6">
        <CheckCircle2 className="h-6 w-6 text-foreground" />
        <p className="font-medium">ขอบคุณ, {name || "คุณผู้อ่าน"}!</p>
        <p className="text-sm text-muted-foreground">บันทึกอีเมล {email} เรียบร้อยแล้ว</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">ชื่อ</Label>
        <Input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ชื่อของคุณ"
          required
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">อีเมล</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">ข้อความ (ไม่บังคับ)</Label>
        <Textarea id="message" name="message" placeholder="อยากบอกอะไรฉันไหม?" rows={4} />
      </div>
      {state.error && <p className="text-sm text-destructive">{state.error}</p>}
      <Button type="submit" className="mt-2 w-fit" disabled={isPending}>
        {isPending ? "กำลังส่ง..." : "ส่งข้อความ"}
      </Button>
    </form>
  );
}
