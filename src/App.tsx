import { Box, Typography } from "@mui/material";
import { Calendar } from "./components/Calendar";

export default function App() {
  return (
    <Box sx={{ 
      p: 3, 
      textAlign: "center",
      position: "absolute",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)"
      }}>
      <Typography variant="h4">カレンダー</Typography>
      {/* Typography = div */}
      <Calendar />
    </Box>
  );
}