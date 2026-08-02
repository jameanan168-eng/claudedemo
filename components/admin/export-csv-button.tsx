"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExportCsvButton({
  rows,
}: {
  rows: { name: string; email: string; createdAt: string }[];
}) {
  function exportCsv() {
    const header = "name,email,createdAt\n";
    const body = rows.map((r) => `${r.name},${r.email},${r.createdAt}`).join("\n");
    const blob = new Blob([header + body], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "subscribers.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <Button variant="outline" onClick={exportCsv}>
      <Download className="h-4 w-4" /> ส่งออก CSV
    </Button>
  );
}
