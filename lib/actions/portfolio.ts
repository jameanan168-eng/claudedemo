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

const gradientOptions = [
  "from-emerald-400 to-teal-500",
  "from-lime-400 to-green-500",
  "from-sky-400 to-blue-500",
  "from-fuchsia-400 to-purple-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-pink-500",
];

function fieldsFromForm(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const longDescription = String(formData.get("longDescription") ?? "").trim();
  const tags = String(formData.get("tags") ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const link = String(formData.get("link") ?? "").trim() || "#";
  const year = String(formData.get("year") ?? "").trim();

  return { title, description, longDescription: longDescription || description, tags, link, year };
}

export async function createPortfolioAction(formData: FormData) {
  const fields = fieldsFromForm(formData);
  const slug = slugify(fields.title) || `portfolio-${Date.now()}`;
  const imageColor = gradientOptions[Math.floor(Math.random() * gradientOptions.length)];
  const count = await prisma.portfolio.count();

  await prisma.portfolio.create({
    data: { ...fields, slug, imageColor, order: count },
  });

  revalidatePath("/portfolio");
  revalidatePath("/admin/portfolio");
  redirect("/admin/portfolio");
}

export async function updatePortfolioAction(slug: string, formData: FormData) {
  const fields = fieldsFromForm(formData);

  await prisma.portfolio.update({
    where: { slug },
    data: fields,
  });

  revalidatePath("/portfolio");
  revalidatePath(`/portfolio/${slug}`);
  revalidatePath("/admin/portfolio");
  redirect("/admin/portfolio");
}

export async function deletePortfolioAction(slug: string) {
  await prisma.portfolio.delete({ where: { slug } });
  revalidatePath("/portfolio");
  revalidatePath("/admin/portfolio");
}
