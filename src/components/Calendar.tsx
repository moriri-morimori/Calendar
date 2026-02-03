import { Box, Button, Typography } from "@mui/material";
import { useCalendar } from "../hooks/useCalendar";

export const Calendar = () => {
  const { year, month, prevMonth, nextMonth } = useCalendar();

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
      </Box>

      <Typography sx={{ mt: 3 }}>
        ここにカレンダーのマス目を作る
      </Typography>
    </Box>
  );
};
