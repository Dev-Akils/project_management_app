// Settings.jsx
import { Box, Typography, Paper, Switch, FormControlLabel } from "@mui/material";

export default function Settings() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Settings
      </Typography>

      <Paper sx={{ p: 2, borderRadius: 2 }}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Enable Notifications"
        />

        <FormControlLabel
          control={<Switch />}
          label="Dark Mode"
        />
      </Paper>
    </Box>
  );
}
