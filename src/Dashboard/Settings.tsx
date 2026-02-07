import { useState } from "react";
//  import {Box, Typography, Button,} from "@mui/material";
      import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'; // Ensure @mui/icons-material is installed
      import {useNavigate} from "react-router-dom"; // If you're using React Router

      
 

     
import {
  Box,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  Divider,
  Button,
  Stack
} from "@mui/material";

// Define the shape of our settings
interface AppSettings {
  notifications: boolean;
  darkMode: boolean;
  emailUpdates: boolean;
}

export default function Settings() {
   const navigate = useNavigate();
  // 1. Initialize State with TypeScript Interface
  const [settings, setSettings] = useState<AppSettings>({
    notifications: true,
    darkMode: false,
    emailUpdates: true,
  });

  // 2. Generic Toggle Handler
  const handleToggle = (key: keyof AppSettings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Box sx={{ p: 4, maxWidth: 1000, mx: "auto" }}>
      
      
        {/* Back Button */}
        <Button
          startIcon={<ArrowBackIosNewIcon sx={{ fontSize: '12px !important' }} />}
          onClick={() => navigate(-1)}
          sx={{
            color: "text.secondary",
            textTransform: "none",
            fontSize: "13px",
            mb: 2,
            pl: 0,
            "&:hover": { bgcolor: "transparent", color: "black" }
          }}
        >
          Back to Dashboard
        </Button>

        {/* Settings Title - Reduced Size */}
        <Typography variant="h5" fontWeight={400} mb={0.5} sx={{ color: "" }}>
          Settings
        </Typography>

        <Typography variant="caption" color="text.secondary" display="block" mb={4}>
          Configure your Archywave dashboard preferences and account security.
        </Typography>

        <Paper variant="outlined" sx={{ p: 0, overflow: "hidden" }}>
          <Box sx={{ p: 3 }}>
            <Typography variant="subtitle1" fontWeight={700} mb={2}>
              App Preferences
            </Typography>

            <Stack spacing={2}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.notifications}
                    onChange={() => handleToggle('notifications')}
                  />
                }
                label={<Typography variant="body2">Push Notifications</Typography>}
              />

              <Divider />

              <FormControlLabel
                control={
                  <Switch
                    checked={settings.darkMode}
                    onChange={() => handleToggle('darkMode')}
                  />
                }
                label={<Typography variant="body2">Dark Mode Interface</Typography>}
              />

              <Divider />

              <FormControlLabel
                control={
                  <Switch
                    checked={settings.emailUpdates}
                    onChange={() => handleToggle('emailUpdates')}
                  />
                }
                label={<Typography variant="body2">Weekly Analytics Email</Typography>}
              />
            </Stack>
          </Box>

          {/* Footer Save Area */}
          <Box sx={{ p: 2, bgcolor: "grey.50", display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              disableElevation
              sx={{ bgcolor: "black", "&:hover": { bgcolor: "#333" } }}
              onClick={() => console.log("Settings Saved:", settings)}
            >
              Save Changes
            </Button>
          </Box>
        </Paper>
      </Box>
      );
}