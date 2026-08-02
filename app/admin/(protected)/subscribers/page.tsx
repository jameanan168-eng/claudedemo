import { prisma } from "@/lib/prisma";
import { deleteSubscriberAction } from "@/lib/actions/subscriber";
import { DeleteButton } from "@/components/admin/delete-button";
import { ExportCsvButton } from "@/components/admin/export-csv-button";
import { formatDate } from "@/lib/format";

export default async function AdminSubscribersPage() {
  const subscriberList = await prisma.subscriber.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">ผู้ติดตามอีเมล</h1>
        <ExportCsvButton
          rows={subscriberList.map((s) => ({
            name: s.name,
            email: s.email,
            createdAt: formatDate(s.createdAt),
          }))}
        />
      </div>

      <div className="mt-8 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-muted/40">
            <tr>
              <th className="px-4 py-3 font-medium">ชื่อ</th>
              <th className="px-4 py-3 font-medium">อีเมล</th>
              <th className="px-4 py-3 font-medium">วันที่สมัคร</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {subscriberList.map((s) => (
              <tr key={s.id}>
                <td className="px-4 py-3">{s.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{s.email}</td>
                <td className="px-4 py-3 text-muted-foreground">{formatDate(s.createdAt)}</td>
                <td className="px-4 py-3 text-right">
                  <DeleteButton
                    action={deleteSubscriberAction.bind(null, s.id)}
                    confirmMessage={`ลบ ${s.email} ?`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {subscriberList.length === 0 && (
          <p className="py-12 text-center text-sm text-muted-foreground">ยังไม่มีผู้ติดตาม</p>
        )}
      </div>
    </div>
  );
}
