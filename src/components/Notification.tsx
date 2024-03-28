import { Box, Alert, AlertColor } from "@mui/material";

interface NotificationTypes {
  variant: AlertColor;
  text: string;
}

const Notification = ({ variant, text }: NotificationTypes) => {
  return (
    <Box display="flex" justifyContent="center">
      <Alert severity={variant}>{text}</Alert>
    </Box>
  );
};

export default Notification;
