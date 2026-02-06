import { useState } from "react";

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay(); //その月の最初の曜日
  const lastDate = new Date(year, month+1, 0).getDate(); //次の月の０日 = その月の最後の日になるからその月の日数になる

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const days :(null | number)[] =[]; // = const days: Array<number | null> = [];(nullかnumberしか入れられないという指定)

  for (let i = 0; i < firstDay; i++) { //getDay()は曜日を数字として取り出す 日曜＝０、月曜＝１、...
    days.push(null);
  }

  for (let i = 1; i < lastDate; i++) {
    days.push(i);
  }

  const weekDays = ["日", "月", "火", "水", "木", "金", "土"];

  return {
    year,
    month,
    prevMonth,
    nextMonth,
    firstDay,
    lastDate,
    days,
    weekDays
  };
};
