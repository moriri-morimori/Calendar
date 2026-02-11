import { Calendar } from "./ui/calendar";
import React from "react";

export const Calendars = () => {
const [date, setDate] = React.useState<Date | undefined>(new Date())

return (
<div className="p-4">
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
  <p className="mt-4 text-lg font-bold">
        選択日: {date?.toLocaleDateString()}
      </p>
  </div>
);
};
