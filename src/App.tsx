import { Box, Typography } from "@mui/material";
import { Calendar } from "./components/Calendar";

export default function App() {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h4">カレンダーアプリ</Typography>
      {/* Typography = div */}
      <Calendar />
    </Box>
  );
}
