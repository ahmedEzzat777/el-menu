import { Box, Button, IconButton, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { useNavigate } from "react-router-dom";
import QrReader from "react-qr-scanner";

export default function UserSearchPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [bsOpen, setBsOpen] = useState(false);

  const userPage = (
    <Stack spacing={2}>
      <Stack direction="row" width="100%" justifyContent="center">
        <IconButton onClick={(e) => setBsOpen(true)}>
          <QrCodeIcon />
        </IconButton>
      </Stack>
      <TextField
        id="userId"
        label="User id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Button onClick={(e) => navigate("categories/" + userId)}>Go</Button>
    </Stack>
  );

  const barcodeScanner = (
    <Stack>
      <Button onClick={(e) => setBsOpen(false)}>Close</Button>
      <QrReader
        delay={0}
        onError={(e) => console.log(e)}
        onScan={(val) => {
          if (val) {
            setUserId(val.text);
            setBsOpen(false);
          }
        }}
      />
    </Stack>
  );

  return <Box>{bsOpen ? barcodeScanner : userPage}</Box>;
}
