import { Box, Button, Typography } from "@mui/material";
import { useCalendar } from "../hooks/useCalendar";

export const Calendar = () => {
  const { year, month, prevMonth, nextMonth, days, weekDays} = useCalendar();

  return (
    <Box>
      <Typography variant="h5">
        {year}年 {month + 1}月
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={prevMonth}>
          ← 前の月
        </Button>

        <Button
          variant="contained"
          onClick={nextMonth}
          sx={{ ml: 1 }}
        >
          次の月 →
        </Button>
        <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          mt: 2,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        {weekDays.map((day) => (
          <Box key={day}>{day}</Box>
        ))}
      </Box>

      {/* カレンダー本体 */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 1,
          mt: 1,
        }}
      >
        {days.map((d, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #ccc",
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {d}
          </Box>
        ))}
      </Box>

      </Box>
    </Box>
  );
};
