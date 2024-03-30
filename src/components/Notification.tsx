import { Box, Alert, AlertColor } from "@mui/material";

interface NotificationTypes {
  type?: AlertColor;
  text?: string;
}

const Notification = ({
  type = "success",
  text = "Success",
}: NotificationTypes) => {
  return (
    <Box display="flex" justifyContent="center">
      <Alert severity={type} variant="outlined">
        {text}
      </Alert>
    </Box>
  );
};

export default Notification;
