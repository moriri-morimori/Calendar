import { Calendar } from "@/shared/ui/calendar"
import { ja } from "date-fns/locale"

export function CalendarPage({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date | undefined
  setSelectedDate: (date: Date | undefined) => void
}) {
  return (
    <div className="w-full h-full p-4">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        locale={ja}
        className="w-full"
      />
    </div>
  )
}