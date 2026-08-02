"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DeleteButton({
  action,
  confirmMessage,
}: {
  action: () => void;
  confirmMessage: string;
}) {
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="ลบ"
      onClick={() => {
        if (confirm(confirmMessage)) action();
      }}
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
