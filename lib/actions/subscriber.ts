"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export type SubscribeState = { success?: boolean; error?: string };

export async function subscribeAction(
  _prevState: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!name || !email) {
    return { error: "กรุณากรอกชื่อและอีเมล" };
  }

  try {
    await prisma.subscriber.upsert({
      where: { email },
      update: { name },
      create: { name, email },
    });
  } catch {
    return { error: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" };
  }

  revalidatePath("/admin/subscribers");
  return { success: true };
}

export async function deleteSubscriberAction(id: string) {
  await prisma.subscriber.delete({ where: { id } });
  revalidatePath("/admin/subscribers");
}
