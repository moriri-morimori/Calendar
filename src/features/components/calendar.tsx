"use clint";
import React from "react";
import { ja } from "date-fns/locale"
import { Calendar } from "../../shared/ui/calendar";

export function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex justify-center items-center min-h-screen">
        <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border scale-150"
        captionLayout="dropdown"
        locale={ja}
      />
    </div>
  );
}
