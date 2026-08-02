"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function fieldsFromForm(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "")
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);
  const tags = String(formData.get("tags") ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const readMinutes = Number(formData.get("readMinutes")) || 5;

  return { title, excerpt, content, tags, readMinutes };
}

export async function createArticleAction(formData: FormData) {
  const fields = fieldsFromForm(formData);
  const slug = slugify(fields.title) || `article-${Date.now()}`;

  await prisma.article.create({
    data: { ...fields, slug, publishedAt: new Date() },
  });

  revalidatePath("/articles");
  revalidatePath("/admin/articles");
  redirect("/admin/articles");
}

export async function updateArticleAction(slug: string, formData: FormData) {
  const fields = fieldsFromForm(formData);

  await prisma.article.update({
    where: { slug },
    data: fields,
  });

  revalidatePath("/articles");
  revalidatePath(`/articles/${slug}`);
  revalidatePath("/admin/articles");
  redirect("/admin/articles");
}

export async function deleteArticleAction(slug: string) {
  await prisma.article.delete({ where: { slug } });
  revalidatePath("/articles");
  revalidatePath("/admin/articles");
}
