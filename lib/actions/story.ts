"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function updateStoryAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const paragraphs = String(formData.get("paragraphs") ?? "")
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  await prisma.storyContent.upsert({
    where: { id: 1 },
    update: { title, paragraphs },
    create: { id: 1, title, paragraphs, timeline: [] },
  });

  revalidatePath("/story");
  revalidatePath("/admin/story");
}
