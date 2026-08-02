import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "เรื่องราว",
};

type TimelineItem = { year: string; label: string };

export default async function StoryPage() {
  const story = await prisma.storyContent.findUnique({ where: { id: 1 } });
  const timeline = (story?.timeline as unknown as TimelineItem[]) ?? [];

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {story?.title ?? "เรื่องราว"}
      </h1>

      <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-muted-foreground">
        {story?.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {timeline.length > 0 && (
        <>
          <h2 className="mt-16 mb-6 text-xl font-semibold tracking-tight">เส้นทางการทำงาน</h2>
          <ol className="flex flex-col gap-6 border-l border-border pl-6">
            {timeline.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground" />
                <span className="text-sm font-medium text-muted-foreground">{item.year}</span>
                <p className="mt-0.5">{item.label}</p>
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}
