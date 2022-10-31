import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { useNavigate } from "react-router-dom";

export default function UserSearchPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");

  return (
    <Stack spacing={2}>
      <Stack direction="row" width="100%" justifyContent="center">
        <QrCodeIcon />
      </Stack>
      <TextField
        id="userId"
        label="user id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <Button onClick={(e) => navigate("categories/" + userId)}>Go</Button>
    </Stack>
  );
}
