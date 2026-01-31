// Users.jsx
import { Box, Typography, Paper } from "@mui/material";

export default function Users() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Users
      </Typography>

      <Paper sx={{ p: 2, borderRadius: 2 }}>
        <Typography fontSize={14}>
          Here you can manage all users, view their details, and control access.
        </Typography>
      </Paper>
    </Box>
  );
}
