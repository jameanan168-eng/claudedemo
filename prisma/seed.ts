import { PrismaClient } from "@prisma/client";
import {
  storyContent,
  portfolioItems,
  articles,
  subscribers,
} from "../lib/mock-data";

const prisma = new PrismaClient();

async function main() {
  await prisma.storyContent.upsert({
    where: { id: 1 },
    update: {
      title: storyContent.title,
      paragraphs: storyContent.paragraphs,
      timeline: storyContent.timeline,
    },
    create: {
      id: 1,
      title: storyContent.title,
      paragraphs: storyContent.paragraphs,
      timeline: storyContent.timeline,
    },
  });

  for (const [index, item] of portfolioItems.entries()) {
    await prisma.portfolio.upsert({
      where: { slug: item.slug },
      update: { ...item, order: index },
      create: { ...item, order: index },
    });
  }

  for (const article of articles) {
    await prisma.article.upsert({
      where: { slug: article.slug },
      update: {
        ...article,
        publishedAt: new Date(article.publishedAt),
      },
      create: {
        ...article,
        publishedAt: new Date(article.publishedAt),
      },
    });
  }

  for (const sub of subscribers) {
    await prisma.subscriber.upsert({
      where: { email: sub.email },
      update: { name: sub.name, createdAt: new Date(sub.createdAt) },
      create: {
        name: sub.name,
        email: sub.email,
        createdAt: new Date(sub.createdAt),
      },
    });
  }

  console.log("Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
